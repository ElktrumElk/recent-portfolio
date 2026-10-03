"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./github.css";

interface GhDay { date: string; level: number }
type GhWeek = (GhDay | null)[];
interface GhData {
  ok: boolean;
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
  contributions?: { total: number; weeks: GhWeek[] };
}

const levelNames = ["No", "Low", "Moderate", "High", "Very high"];

export default function Github() {
  const [data, setData] = useState<GhData | null>(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetch("/api/github")
      .then((response) => response.json())
      .then((value: GhData) => setData(value))
      .catch(() => setData({ ok: false }))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal })
      .then((response) => response.json())
      .then((value: GhData) => setData(value))
      .catch((error: Error) => {
        if (error.name !== "AbortError") setData({ ok: false });
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const stats = [
    ["Contributions", data?.contributions?.total],
    ["Repositories", data?.user?.publicRepos],
    ["Stars earned", data?.stats?.totalStars],
    ["Followers", data?.user?.followers],
  ] as const;

  return (
    <div className="gh-wrap">
      <header className="gh-section-head" data-reveal>
        <div>
          <span className="eyebrow">Open source / GitHub</span>
          <h2>Building in public.</h2>
        </div>
        <p>Recent code, open-source work, and the quiet consistency behind shipped products.</p>
      </header>

      {loading && (
        <div className="gh-editorial gh-editorial--loading" aria-label="Loading GitHub profile">
          <div /><div /><div />
        </div>
      )}

      {!loading && !data?.ok && (
        <div className="gh-unavailable">
          <div><span>GitHub / Offline</span><h3>The activity feed is taking a break.</h3></div>
          <button type="button" onClick={load}>Try again</button>
        </div>
      )}

      {!loading && data?.ok && (
        <div className="gh-editorial" data-reveal>
          <aside className="gh-profile">
            <div className="gh-profile-top">
              {data.user?.avatarUrl && (
                <Image src={data.user.avatarUrl} alt="" width={72} height={72} unoptimized />
              )}
              <span className="gh-availability"><i /> Active on GitHub</span>
            </div>
            <div>
              <span className="gh-handle">@{data.user?.login ?? "ElktrumElk"}</span>
              <h3>{data.user?.name ?? "Elkanah Cole"}</h3>
              <p>{data.user?.bio || "Building thoughtful web, mobile, and open-source products."}</p>
            </div>
            <a href={data.user?.profileUrl ?? "https://github.com/ElktrumElk"} target="_blank" rel="noreferrer">
              View GitHub profile <span>↗</span>
            </a>
          </aside>

          <div className="gh-data">
            <div className="gh-metrics">
              {stats.map(([label, value]) => (
                <div key={label}><strong>{value?.toLocaleString() ?? "--"}</strong><span>{label}</span></div>
              ))}
            </div>

            <div className="gh-activity">
              <div className="gh-block-head">
                <div><span>Last 12 months</span><h3>Contribution activity</h3></div>
                <span>{data.contributions?.total.toLocaleString() ?? 0} total</span>
              </div>
              <div className="gh-calendar" role="img" aria-label="GitHub contribution calendar">
                <div className="gh-grid" style={{ "--weeks": data.contributions?.weeks.length || 53 } as React.CSSProperties}>
                  {data.contributions?.weeks.flatMap((week, column) =>
                    week.map((day, row) => (
                      <span
                        key={day?.date ?? `${column}-${row}`}
                        className={`gh-cell ${day ? `gh-cell--${day.level}` : "gh-cell--empty"}`}
                        title={day ? `${day.date}: ${levelNames[day.level]} activity` : undefined}
                      />
                    ))
                  )}
                </div>
              </div>
              <div className="gh-legend"><span>Less</span>{[0, 1, 2, 3, 4].map((level) => <i className={`gh-cell gh-cell--${level}`} key={level} />)}<span>More</span></div>
            </div>

            {!!data.stats?.topLanguages.length && (
              <div className="gh-languages">
                <span className="gh-label">Languages across public repositories</span>
                <div>
                  {data.stats.topLanguages.map((language, index) => (
                    <span key={language.name}><i style={{ opacity: 1 - index * 0.11 }} />{language.name}<small>{language.count}</small></span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
