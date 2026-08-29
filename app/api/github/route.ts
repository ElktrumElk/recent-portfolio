import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { NextResponse } from "next/server";

const execFileAsync = promisify(execFile);

const USERNAME = "ElktrumElk";
const USER_AGENT =
  "elk-portfolio-analytics; +https://github.com/ElktrumElk";
const CACHE_MAX_AGE = 6 * 60 * 60_000;
const FETCH_TIMEOUT = 12_000;
const TOKEN = process.env.GITHUB_TOKEN;

const API = "https://api.github.com";
const SITE = "https://github.com";

export interface GhDay {
  date: string;
  level: number;
}

export type GhWeek = (GhDay | null)[];

export interface GhAchievement {
  id: string;
  name: string;
  tier: string;
  label: string;
  img: string;
  url: string;
}

export interface GhData {
  ok: boolean;
  error?: string;
  user?: {
    login: string;
    name: string;
    avatarUrl: string;
    profileUrl: string;
    bio: string;
    publicRepos: number;
    followers: number;
    following: number;
  };
  stats?: {
    totalStars: number;
    totalForks: number;
    topLanguages: { name: string; count: number }[];
  };
  contributions?: {
    total: number;
    weeks: GhWeek[];
  };
  achievements?: GhAchievement[];
}

interface MemoryEntry {
  data: GhData;
  at: number;
}

let memoryCache: MemoryEntry | null = null;
let inflight: Promise<GhData> | null = null;

let binCache: { gh: boolean; curl: boolean } | null = null;

async function hasBin(bin: string): Promise<boolean> {
  if (binCache?.[bin as keyof typeof binCache] !== undefined) {
    return binCache[bin as keyof typeof binCache];
  }
  try {
    await execFileAsync(bin, ["--version"], { timeout: 3000 });
    binCache = { ...(binCache ?? { gh: false, curl: false }), [bin]: true };
    return true;
  } catch {
    binCache = { ...(binCache ?? { gh: false, curl: false }), [bin]: false };
    return false;
  }
}

async function fetchText(url: string, json: boolean): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: json ? "application/json" : "text/html",
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
    signal: AbortSignal.timeout(FETCH_TIMEOUT),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status}`);
  return text;
}

async function curlText(url: string, json: boolean): Promise<string> {
  const { stdout } = await execFileAsync(
    "curl",
    [
      "-sS",
      "--compressed",
      "--max-time",
      "12",
      "-A",
      USER_AGENT,
      "-H",
      `Accept: ${json ? "application/json" : "text/html"}`,
      "-L",
      url,
    ],
    { timeout: 15_000, maxBuffer: 32 * 1024 * 1024 }
  );
  return stdout;
}

async function httpJson<T>(apiPath: string): Promise<T> {
  if (TOKEN) return JSON.parse(await fetchText(`${API}${apiPath}`, true));
  if (await hasBin("gh")) {
    const { stdout } = await execFileAsync("gh", ["api", apiPath, "--jq", "."], {
      timeout: 15_000,
      maxBuffer: 8 * 1024 * 1024,
    });
    return JSON.parse(stdout);
  }
  if (await hasBin("curl")) {
    return JSON.parse(await curlText(`${API}${apiPath}`, true));
  }
  return JSON.parse(await fetchText(`${API}${apiPath}`, true));
}

async function httpHtml(sitePath: string): Promise<string> {
  if (TOKEN) return fetchText(`${SITE}${sitePath}`, false);
  if (await hasBin("curl")) return curlText(`${SITE}${sitePath}`, false);
  return fetchText(`${SITE}${sitePath}`, false);
}

async function fetchUser(): Promise<GhData["user"]> {
  const u = await httpJson<Record<string, unknown>>(`/users/${USERNAME}`);
  return {
    login: String(u.login ?? USERNAME),
    name: String(u.name ?? u.login ?? USERNAME),
    avatarUrl: String(u.avatar_url ?? ""),
    profileUrl: String(u.html_url ?? `${SITE}/${USERNAME}`),
    bio: String(u.bio ?? ""),
    publicRepos: Number(u.public_repos ?? 0),
    followers: Number(u.followers ?? 0),
    following: Number(u.following ?? 0),
  };
}

async function fetchStats(): Promise<GhData["stats"]> {
  const repos = await httpJson<Record<string, unknown>[]>(
    `/users/${USERNAME}/repos?per_page=100&sort=updated`
  );
  let totalStars = 0;
  let totalForks = 0;
  const langCount = new Map<string, number>();
  for (const repo of repos ?? []) {
    if (repo.archived) continue;
    totalStars += Number(repo.stargazers_count ?? 0);
    totalForks += Number(repo.forks_count ?? 0);
    const lang = repo.language;
    if (typeof lang === "string" && lang.trim()) {
      langCount.set(lang, (langCount.get(lang) ?? 0) + 1);
    }
  }
  const topLanguages = [...langCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));
  return { totalStars, totalForks, topLanguages };
}

async function fetchContributions(): Promise<GhData["contributions"]> {
  const html = await httpHtml(`/users/${USERNAME}/contributions`);

  const totalMatch = html.match(/>\s*([\d,]+)\s+contributions?\s*</i);
  const total = totalMatch
    ? Number(totalMatch[1].replace(/[^\d]/g, "")) || 0
    : 0;

  const byDate = new Map<string, number>();
  const tdRe = /<td\b[^>]*>/g;
  let match: RegExpExecArray | null;
  while ((match = tdRe.exec(html)) !== null) {
    const tag = match[0];
    const date = tag.match(/data-date="(\d{4}-\d{2}-\d{2})"/);
    const level = tag.match(/data-level="(\d+)"/);
    if (date && level && !byDate.has(date[1])) {
      const lvl = Number(level[1]);
      byDate.set(date[1], lvl >= 0 && lvl <= 4 ? lvl : 0);
    }
  }

  const dates = [...byDate.keys()].sort();
  const days: GhDay[] = dates
    .map((date) => ({ date, level: byDate.get(date)! }))
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d.date));

  if (days.length === 0) throw new Error("contributions empty");

  const weeks: GhWeek[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  const remainder = weeks[weeks.length - 1].length;
  if (remainder < 7) {
    weeks[weeks.length - 1].push(...Array<null>(7 - remainder).fill(null));
  }

  return { total, weeks: weeks.slice(-53) };
}

async function fetchAchievements(): Promise<GhAchievement[]> {
  const html = await httpHtml(`/${USERNAME}?tab=achievements`);

  const found = new Map<string, GhAchievement>();
  const badgeRe =
    /<img\b[^>]*src="(https:\/\/github\.githubassets\.com\/assets\/([a-z0-9-]+)-(default|bronze|silver|gold)-[a-z0-9]+\.png)"[^>]*alt="Achievement: ([^"]+)"[^>]*>/g;

  let match: RegExpExecArray | null;
  while ((match = badgeRe.exec(html)) !== null) {
    const id = match[2];
    if (found.has(id)) continue;
    const img = match[1];
    const name = match[4].trim();
    const tail = html.slice(
      match.index + match[0].length,
      match.index + match[0].length + 260
    );
    const tier = tail.match(/achievement-tier-label--([a-z]+)/);
    const label = tail.match(/achievement-tier-label[^>]*>\s*([^<]+?)\s*</);
    found.set(id, {
      id,
      name: name || id,
      tier: tier?.[1] ?? "default",
      label: label?.[1].trim() ?? "",
      img,
      url: `${SITE}/${USERNAME}?achievement=${encodeURIComponent(id)}&tab=achievements`,
    });
  }

  return [...found.values()].slice(0, 24);
}

async function build(): Promise<GhData> {
  const [user, stats, contributions, achievements] = await Promise.allSettled([
    fetchUser(),
    fetchStats(),
    fetchContributions(),
    fetchAchievements(),
  ]);

  const data: GhData = { ok: true };

  if (user.status === "fulfilled") data.user = user.value;
  if (stats.status === "fulfilled") data.stats = stats.value;
  if (contributions.status === "fulfilled") {
    data.contributions = contributions.value;
  }
  if (achievements.status === "fulfilled") {
    data.achievements = achievements.value;
  }

  const hasData =
    data.user || data.stats || data.contributions || data.achievements;
  if (!hasData) {
    const reasons = [user, stats, contributions, achievements]
      .map((r) => (r.status === "rejected" ? String(r.reason) : null))
      .filter(Boolean)
      .join(" | ");
    return { ok: false, error: `All GitHub sources are unreachable (${reasons})` };
  }
  return data;
}

function respond(data: GhData, cacheSeconds: number) {
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": `public, s-maxage=${cacheSeconds}, stale-while-revalidate=${Math.max(
        cacheSeconds * 4,
        300
      )}`,
    },
  });
}

export async function GET() {
  const now = Date.now();
  if (memoryCache && now - memoryCache.at < CACHE_MAX_AGE) {
    return respond(memoryCache.data, 21600);
  }
  if (!inflight) {
    inflight = build().finally(() => {
      inflight = null;
    });
  }
  const data = await inflight;
  if (data.ok) {
    memoryCache = { data, at: now };
    return respond(data, 21600);
  }
  if (memoryCache) {
    return respond(memoryCache.data, 3600);
  }
  return respond(data, 300);
}