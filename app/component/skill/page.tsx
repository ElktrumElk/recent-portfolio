"use client";
import { Container, Text, Stack, Card, Gap, Animation, Icon } from "elk-components";
import "./skill.css";
import {
  FlutterIcon,
  GitIcon,
  JavaScriptIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  UIUXIcon,
} from "../../lib/BrandIcons";

const skills = [
  { name: "React", level: 92, color: "#2f7fb8", icon: ReactIcon },
  { name: "Next.js", level: 88, color: "#1c2733", icon: NextJSIcon },
  { name: "TypeScript", level: 85, color: "#2f6fd0", icon: TypeScriptIcon },
  { name: "JavaScript", level: 90, color: "#c9992e", icon: JavaScriptIcon },
  { name: "Node.js", level: 82, color: "#2f6b53", icon: NodeJSIcon },
  { name: "Flutter", level: 78, color: "#2f9fd0", icon: FlutterIcon },
  { name: "Tailwind CSS", level: 90, color: "#38bdf8", icon: TailwindIcon },
  { name: "MySQL", level: 75, color: "#336791", icon: MySQLIcon },
  { name: "Git & GitHub", level: 85, color: "#c0512f", icon: GitIcon },
  { name: "UI/UX Design", level: 80, color: "#8a6d2f", icon: UIUXIcon },
];

const Skill = () => {
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
            text="Skills & Expertise"
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
            text="Technologies and tools I work with on a daily basis"
            color="var(--muted)"
            size="1.15rem"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              marginBottom: "2rem",
            }}
          />

          <Stack
            direction="row"
            gap="1rem"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
            child={() => (
              <>
                {skills.map((skill, key) => (
                  <Animation
                    initial={{ transform: "translateX(-20%)" }}
                    whileInView={{ transform: "translateX(0%)" }}
                    key={key}
                    child={() => (
                      <Card
                        className="card"
                        key={key}
                        shadow
                        shadowColor="var(--shadow)"
                        backgroundColor="var(--card)"
                        borderColor="var(--border)"
                        bodyStyle={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: "auto",
                          padding: "1.75rem 1.25rem",
                        }}
                        body={() => (
                          <>
                            <Icon
                              icon={skill.icon}
                              color={skill.color}
                              size={36}
                            />
                            <Gap height="0.85rem" />
                            <Text
                              type="p"
                              text={skill.name}
                              color="var(--fg)"
                              size="1.1rem"
                              style={{
                                fontWeight: 600,
                                textAlign: "center",
                                fontFamily: "var(--font-space-grotesk)",
                              }}
                            />
                            <Gap height="0.85rem" />
                            <div
                              style={{
                                width: "100%",
                                height: "10px",
                                background: "var(--bg-soft)",
                                borderRadius: "5px",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  width: `${skill.level}%`,
                                  height: "100%",
                                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                                  borderRadius: "5px",
                                  transition: "width 1s ease",
                                }}
                              />
                            </div>
                            <Gap height="0.6rem" />
                            <Text
                              type="p"
                              text={`${skill.level}%`}
                              color={skill.color}
                              size="1rem"
                              style={{
                                fontWeight: 600,
                                fontFamily: "var(--font-space-grotesk)",
                              }}
                            />
                          </>
                        )}
                      />
                    )}
                  />
                ))}
              </>
            )}
          />
        </>
      )}
    />
  );
};

export default Skill;
