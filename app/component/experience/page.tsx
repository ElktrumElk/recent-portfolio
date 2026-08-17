"use client";
import {
  Animation,
  Container,
  Gap,
  Text,
} from "elk-components";
import { experiences, education } from "../../lib/experience";

const Experience = () => {
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
            text="Experience"
            color="var(--fg)"
            size="clamp(2rem, 3.5vw, 2.8rem)"
            style={{
              fontWeight: 900,
              fontFamily: "var(--font-fraunces)",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          />
          <Text
            type="p"
            text="My professional journey and education"
            color="var(--muted)"
            size="1.15rem"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              marginBottom: "3rem",
            }}
          />

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <Animation
                key={exp.id}
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0)" }}
                child={() => (
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    {idx < experiences.length - 1 && (
                      <div className="timeline-line" />
                    )}
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <Text
                          type="h3"
                          text={exp.role}
                          color="var(--fg)"
                          size="1.4rem"
                          style={{
                            fontWeight: 700,
                            fontFamily: "var(--font-fraunces)",
                          }}
                        />
                        <span className="timeline-date">
                          {exp.startDate} — {exp.endDate || "Present"}
                        </span>
                      </div>
                      <Text
                        type="p"
                        text={`${exp.company} · ${exp.location}`}
                        color="var(--primary)"
                        size="1.05rem"
                        style={{
                          fontWeight: 600,
                          fontFamily: "var(--font-space-grotesk)",
                          marginBottom: "0.75rem",
                        }}
                      />
                      <Text
                        type="p"
                        text={exp.description}
                        color="var(--muted)"
                        size="1.05rem"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          lineHeight: "1.8",
                          marginBottom: "1rem",
                        }}
                      />
                      <ul className="timeline-highlights">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      <div className="timeline-tech">
                        {exp.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              />
            ))}
          </div>

          <Gap height="3rem" />

          <Text
            type="h3"
            text="Education"
            color="var(--fg)"
            size="1.7rem"
            style={{
              fontWeight: 700,
              fontFamily: "var(--font-fraunces)",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          />

          {education.map((edu) => (
            <Animation
              key={edu.id}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              child={() => (
                <div className="edu-card">
                  <div className="timeline-header">
                    <Text
                      type="h4"
                      text={edu.degree}
                      color="var(--fg)"
                      size="1.2rem"
                      style={{
                        fontWeight: 700,
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                    />
                    <span className="timeline-date">
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
                  <Text
                    type="p"
                    text={edu.institution}
                    color="var(--primary)"
                    size="1.05rem"
                    style={{
                      fontWeight: 600,
                      fontFamily: "var(--font-space-grotesk)",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <Text
                    type="p"
                    text={edu.description}
                    color="var(--muted)"
                    size="1rem"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      lineHeight: "1.7",
                    }}
                  />
                </div>
              )}
            />
          ))}
        </>
      )}
    />
  );
};

export default Experience;
