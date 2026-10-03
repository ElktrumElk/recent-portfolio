import { ImageResponse } from "next/og";
import type { Project } from "./projects";
import { projectCategories } from "./projects";
import { siteConfig } from "./site";

const imageSize = { width: 1200, height: 630 } as const;

export function buildProjectSocialCard(project: Project) {
  const category = projectCategories[project.category].label;
  const initials = project.name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#151613",
          color: "#f1ece3",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div
          style={{
            width: "64%",
            height: "100%",
            padding: "58px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 19, letterSpacing: 3, textTransform: "uppercase", color: "#aaa99f" }}>
            <span style={{ width: 38, height: 3, display: "flex", background: project.color }} />
            Project case study / {category}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: project.name.length > 14 ? 74 : 94, fontWeight: 800, lineHeight: 0.95, letterSpacing: -5 }}>
              {project.name}
            </div>
            <div style={{ display: "flex", marginTop: 24, maxWidth: 640, color: "#b9b8af", fontSize: 23, lineHeight: 1.4 }}>
              {project.description.length > 150
                ? `${project.description.slice(0, 147)}...`
                : project.description}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#8e8e85", fontSize: 17 }}>
            <span>{siteConfig.name}</span>
            <span style={{ color: project.color }}>•</span>
            {project.techStack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>

        <div
          style={{
            width: "36%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderLeft: "1px solid rgba(255,255,255,.18)",
            background: `${project.color}22`,
          }}
        >
          <div
            style={{
              width: 265,
              height: 265,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              border: `2px solid ${project.color}`,
              background: project.color,
              boxShadow: `0 30px 80px ${project.color}66`,
              fontSize: 86,
              fontWeight: 800,
              letterSpacing: -6,
            }}
          >
            {initials}
          </div>
          <div style={{ position: "absolute", right: 30, top: 28, display: "flex", color: "#d2cec5", fontSize: 15, letterSpacing: 2 }}>
            {project.status.toUpperCase()} / {project.dateStarted.slice(0, 4)}
          </div>
          <div style={{ position: "absolute", right: 30, bottom: 28, display: "flex", color: "#d2cec5", fontSize: 16 }}>
            elktrumelk.xyz ↗
          </div>
        </div>
      </div>
    ),
    imageSize
  );
}
