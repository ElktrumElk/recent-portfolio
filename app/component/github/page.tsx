"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, Text } from "elk-components";
import "./github.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LEVEL_NAMES = [
  "No activity",
  "Light activity",
  "Moderate activity",
  "High activity",
  "Very high activity",
];

const TIER_LABELS: Record<string, string> = {
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  default: "Earned",
};

interface GhDay {
  date: string;
  level: number;
}

type GhWeek = (GhDay | null)[];

interface GhAchievement {
  id: string;
  name: string;
  tier: string;
  label: string;
  img: string;
  url: string;
}

interface GhData {
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

async function fetchGhData(signal?: AbortSignal): Promise<GhData> {
  const res = await fetch("/api/github", { signal });
  return (await res.json()) as GhData;
}

const FALLBACK_ERROR: GhData = {
  ok: false,
  error: "Could not reach the analytics service.",
};

function getDay(dateStr: string): number {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).getDay();
}

function fmtDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface MonthMark {
  col: number;
  label: string;
}

function buildMonthMarks(weeks: GhWeek[]): MonthMark[] {
  const marks: MonthMark[] = [];
  let prevKey = "";
  let prevYear = 0;
  weeks.forEach((week, col) => {
    const first = week.find((d) => d !== null);
    if (!first) return;
    const [y, m] = first.date.split("-").map(Number);
    const key = `${y}-${m}`;
    if (key !== prevKey) {
      const label =
        m === 1 && prevYear !== 0 ? `${MONTHS[m - 1]} ${y}` : MONTHS[m - 1];
      marks.push({ col, label });
      prevKey = key;
      prevYear = y;
    }
  });
  return marks;
}

const Github = () => {
  const [data, setData] = useState<GhData | null>(null);
  const [loading, setLoading] = useState(true);
  const plotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchGhData(controller.signal)
      .then(setData)
      .catch((err) => {
        if ((err as Error)?.name === "AbortError") return;
        setData(FALLBACK_ERROR);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const retry = () => {
    setLoading(true);
    fetchGhData()
      .then(setData)
      .catch(() => setData(FALLBACK_ERROR))
      .finally(() => setLoading(false));
  };

  const weeks = data?.contributions?.weeks ?? [];
  const firstWeek = weeks.find((w) => w.some((d) => d !== null));
  const firstDate = firstWeek?.find((d) => d !== null)?.date;
  const firstWeekday = firstDate ? getDay(firstDate) : 0;
  const monthMarks = weeks.length ? buildMonthMarks(weeks) : [];
  const cols = Math.max(weeks.length, 1);

  useEffect(() => {
    const plot = plotRef.current;
    if (!plot) return;
    const main = plot.querySelector<HTMLElement>(".gh-calendar__main");
    const applyCellSize = () => {
      if (!main) return;
      const gap = 3;
      const width = main.getBoundingClientRect().width;
      const cell = Math.max(
        6,
        Math.min(16, Math.floor((width - (cols - 1) * gap) / cols))
      );
      plot.style.setProperty("--gh-cell", `${cell}px`);
    };
    applyCellSize();
    const observer = new ResizeObserver(applyCellSize);
    if (main) observer.observe(main);
    return () => observer.disconnect();
  }, [cols]);

  const stats: [string, string][] = [];
  if (data?.contributions?.total != null) {
    stats.push(["Contributions", data.contributions.total.toLocaleString()]);
  }
  if (data?.stats?.totalStars != null) {
    stats.push(["Stars", data.stats.totalStars.toLocaleString()]);
  }
  if (data?.user?.publicRepos != null) {
    stats.push(["Repositories", data.user.publicRepos.toLocaleString()]);
  }
  if (data?.user?.followers != null) {
    stats.push(["Followers", data.user.followers.toLocaleString()]);
  }

  const renderLoading = () => (
    <div className="gh-loading" aria-label="Loading GitHub data">
      <div className="gh-skeleton gh-skeleton--banner" />
      <div className="gh-skeleton-row">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="gh-skeleton gh-skeleton--stat" />
        ))}
      </div>
      <div className="gh-skeleton gh-skeleton--cal" />
    </div>
  );

  const renderError = () => (
    <div className="gh-error" role="alert">
      <Text
        type="p"
        text="GitHub data is temporarily unavailable."
        color="var(--muted)"
        size="1.1rem"
      />
<button type="button" className="gh-retry" onClick={retry}>
          Retry
        </button>
    </div>
  );

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1100px",
        alignSelf: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        alignItems: "center",
      }}
      child={() => (
        <>
          <Text
            type="h2"
            text="GitHub"
            color="var(--fg)"
            size="clamp(2rem, 3.5vw, 2.8rem)"
            style={{
              fontWeight: 900,
              fontFamily: "var(--font-archivo)",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          />
          <Text
            type="p"
            text={`Open source activity and contributions by @${data?.user?.login ?? "ElktrumElk"}`}
            color="var(--muted)"
            size="1.15rem"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              marginBottom: "2.5rem",
            }}
          />

          {loading && renderLoading()}
          {!loading && !data?.ok && renderError()}

          {!loading && data?.ok && (
            <>
              <div className="gh-stats">
                {stats.map(([label, value]) => (
                  <div key={label} className="gh-stat">
                    <span className="gh-stat__value">{value}</span>
                    <span className="gh-stat__label">{label}</span>
                  </div>
                ))}
              </div>

              <div className="gh-panel gh-panel--calendar">
                <div className="gh-panel__head">
                  <Text
                    type="h3"
                    text="Contribution Graph"
                    color="var(--fg)"
                    size="1.2rem"
                    style={{
                      fontWeight: 700,
                      fontFamily: "var(--font-archivo)",
                    }}
                  />
                  {data.contributions != null && (
                    <span className="gh-total">
                      {data.contributions.total.toLocaleString()} in the last year
                    </span>
                  )}
                </div>

                <div className="gh-calendar">
                  <div className="gh-calendar__plot" ref={plotRef}>
                    <div className="gh-calendar__gutter">
                      {[0, 1, 2, 3, 4, 5, 6].map((row) => {
                        const wd = (row + firstWeekday) % 7;
                        return (
                          <span
                            key={row}
                            className="gh-weekday"
                            style={{ gridRow: row + 1 }}
                          >
                            {wd === 1 ? "Mon" : wd === 3 ? "Wed" : wd === 5 ? "Fri" : ""}
                          </span>
                        );
                      })}
                    </div>
                    <div
                      className="gh-calendar__main"
                      style={{ ["--gh-cols" as string]: String(cols) }}
                    >
                      <div className="gh-calendar__months">
                        {monthMarks.map((mark) => (
                          <span
                            key={`${mark.col}-${mark.label}`}
                            className="gh-month"
                            style={{ gridColumn: mark.col + 1 }}
                          >
                            {mark.label}
                          </span>
                        ))}
                      </div>
                      <div className="gh-calendar__grid">
                        {weeks.map((week, col) =>
                          week.map((day, row) => {
                            if (!day) {
                              return (
                                <span
                                  key={`${col}-${row}`}
                                  className="gh-cell gh-cell--empty"
                                  style={{ gridRow: row + 1, gridColumn: col + 1 }}
                                />
                              );
                            }
                            return (
                              <span
                                key={day.date}
                                className={`gh-cell gh-cell--l${day.level}`}
                                style={{ gridRow: row + 1, gridColumn: col + 1 }}
                                role="img"
                                aria-label={`${LEVEL_NAMES[day.level]} on ${fmtDate(day.date)}`}
                                title={`${fmtDate(day.date)} · ${LEVEL_NAMES[day.level]}`}
                              />
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gh-legend">
                  <span className="gh-legend__label">Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <span
                      key={l}
                      className={`gh-cell gh-cell--l${l} gh-legend__cell`}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="gh-legend__label">More</span>
                </div>
              </div>

              {data.achievements != null && (
                <div className="gh-panel">
                  <div className="gh-panel__head">
                    <Text
                      type="h3"
                      text="Achievements"
                      color="var(--fg)"
                      size="1.2rem"
                      style={{
                        fontWeight: 700,
                        fontFamily: "var(--font-archivo)",
                      }}
                    />
                  </div>
                  {data.achievements.length > 0 ? (
                    <div className="gh-badges">
                      {data.achievements.map((achievement) => (
                        <a
                          key={achievement.id}
                          href={achievement.url}
                          target="_blank"
                          rel="noreferrer"
                          className="gh-badge"
                        >
                          <span className="gh-badge__img">
                            <Image
                              src={achievement.img}
                              alt={achievement.name}
                              width={80}
                              height={80}
                              unoptimized
                              loading="lazy"
                            />
                          </span>
                          <span className="gh-badge__name">
                            {achievement.name}
                          </span>
                          <span className={`gh-badge__tier gh-badge__tier--${achievement.tier}`}>
                            {TIER_LABELS[achievement.tier] ?? "Earned"}
                            {achievement.label ? ` · ${achievement.label}` : ""}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <Text
                      type="p"
                      text="No achievements unlocked yet."
                      color="var(--muted)"
                      size="1rem"
                    />
                  )}
                </div>
              )}

              {data.user?.profileUrl && (
                <a
                  className="gh-more"
                  href={data.user.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View full GitHub profile <span aria-hidden="true">↗</span>
                </a>
              )}
            </>
          )}
        </>
      )}
    />
  );
};

export default Github;