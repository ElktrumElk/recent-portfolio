"use client";
import { useState } from "react";
import {
  Animation,
  Container,
  Gap,
  Icon,
  Icons,
  Text,
} from "elk-components";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "../../lib/projects";
import {
  CreditCardIcon,
  LayersIcon,
  ShareIcon,
  CloudIcon,
  TerminalIcon,
  ClockIcon,
} from "../../lib/BrandIcons";
import "./project.css";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  CreditCard: CreditCardIcon,
  Layers: LayersIcon,
  ShareLogo: ShareIcon,
  CloudUpload: CloudIcon,
  Terminal: TerminalIcon,
  Clock: ClockIcon,
};

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "library", label: "Libraries" },
  { key: "fullstack", label: "Full Stack" },
  { key: "cli", label: "CLI" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1000px",
        alignSelf: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        alignItems: "center",
      }}
      child={() => (
        <>
          <Text
            type="h2"
            text="Projects"
            color="var(--fg)"
            size="2.5rem"
            style={{
              fontWeight: 900,
              fontFamily: "var(--font-fraunces)",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          />
          <Text
            type="p"
            text="Explore my work across different domains"
            color="var(--muted)"
            size="1rem"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              marginBottom: "1.5rem",
            }}
          />

          <div className="project-filters">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`filter-btn ${activeFilter === f.key ? "filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <Gap height="1.5rem" />

          <div className="project-grid">
            {filtered.map((project, idx) => {
              const IconComp = iconMap[project.icon] || Icons.icon.Layers;
              const catInfo = projectCategories[project.category];

              return (
                <Animation
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  delay={idx * 80}
                  child={() => (
                    <article
                      className="project-card"
                      style={{ "--accent-hl": project.color } as React.CSSProperties}
                    >
                      <div className="project-card__header">
                        <div className="project-card__icon-wrap">
                          <IconComp size={22} color={project.color} />
                        </div>
                        <div className="project-card__title-area">
                          <Text
                            type="h3"
                            text={project.name}
                            color="var(--fg)"
                            style={{
                              fontWeight: 700,
                              fontFamily: "var(--font-fraunces)",
                              fontSize: "1.15rem",
                            }}
                          />
                          <span
                            className="project-card__category"
                            style={{ color: catInfo.color }}
                          >
                            {catInfo.label}
                          </span>
                        </div>
                        {project.repoLink && (
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                            aria-label={`View ${project.name} source code`}
                          >
                            <Icon
                              icon={Icons.icon.ArrowUpRight}
                              color="var(--muted)"
                              size={18}
                            />
                          </a>
                        )}
                      </div>

                      <div className="project-card__gradient-preview">
                        <div
                          className="project-card__gradient-bg"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                          }}
                        />
                        <div className="project-card__gradient-icon">
                          <IconComp size={40} color={`${project.color}44`} />
                        </div>
                      </div>

                      <Text
                        type="p"
                        text={project.description}
                        color="var(--muted)"
                        size="0.9rem"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          lineHeight: "1.6",
                          marginBottom: "1rem",
                        }}
                      />

                      <div className="project-card__features">
                        {project.features.slice(0, 3).map((feat) => (
                          <span key={feat} className="feature-chip">
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="project-card__tech">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-card__footer">
                        <span className="project-card__date">
                          {project.dateStarted}
                          {project.dateEnded
                            ? ` — ${project.dateEnded}`
                            : " — Present"}
                        </span>
                        <span
                          className={`project-card__status project-card__status--${project.status}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </article>
                  )}
                />
              );
            })}
          </div>
        </>
      )}
    />
  );
};

export default Projects;
