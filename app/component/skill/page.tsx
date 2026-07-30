"use client";
import { Container, Text, Stack, Card, Gap } from "elk-components";
import './skill.css'
const skills = [
  { name: "React", level: 92, color: "#6dfbd7" },
  { name: "Next.js", level: 88, color: "#2fb6ff" },
  { name: "TypeScript", level: 85, color: "#3178c6" },
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "Node.js", level: 82, color: "#68a063" },
  { name: "Flutter", level: 78, color: "#61dafb" },
  { name: "Tailwind CSS", level: 90, color: "#38bdf8" },
  { name: "MySQL", level: 75, color: "#336791" },
  { name: "Git & GitHub", level: 85, color: "#f05032" },
  { name: "UI/UX Design", level: 80, color: "#ff4081" },
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
        alignItems: 'center'
      
        
      }}
      child={() => (
        <>
          <Text
            type="h2"
            text="Skills & Expertise"
            color="#fff"
            size="2.5rem"
            style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          />
          <Text
            type="p"
            text="Technologies and tools I work with on a daily basis"
            color="#a0a7a7"
            size="1rem"
            style={{ marginBottom: "2rem" }}
          />

          <Stack
            direction="row"
            gap="1rem"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
            child={() => (
              <>
                {skills.map((skill, key) => (
                  <Card
                    className="card"
                    key={key}
                    shadow
                    shadowColor="#252525"
                    bodyStyle={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "auto",
                      padding: "1.5rem 1rem",
                    }}
                    body={() => (
                      <>
                        <Text
                          type="p"
                          text={skill.name}
                          color="#fff"
                          size="1rem"
                          style={{ fontWeight: 600, textAlign: "center" }}
                        />
                        <Gap height="0.75rem" />
                        <div
                          style={{
                            width: "100%",
                            height: "8px",
                            background: "#1f2937",
                            borderRadius: "4px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: "100%",
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                              borderRadius: "4px",
                              transition: "width 1s ease",
                            }}
                          />
                        </div>
                        <Gap height="0.5rem" />
                        <Text
                          type="p"
                          text={`${skill.level}%`}
                          color={skill.color}
                          size="0.875rem"
                          style={{ fontWeight: 600 }}
                        />
                      </>
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
