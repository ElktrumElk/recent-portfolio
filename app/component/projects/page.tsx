"use client";
import { Container, Text, Stack, Card, Gap, Icon, Icons, IconButton } from "elk-components";
import "./project.css";

const projects = [
  {
    name: "Merchant Core",
    color: "#205a8a",
    des: "A Mobile application that help business people in managing there business",
    repoLintk: "",
    icon: Icons.icon.CreditCard,
  },
  {
    name: "elk-components",
    color: "#2f6f9f",
    des: "A React component Library with 50+ ready made components and 205 built in svg icons",
    repoLink: "",
    icon: Icons.icon.Layers,
  },

  {
    name: "Share",
    color: "#2f6fd0",
    des: "A Share file system platform where users share files with a secure link by client a sharing link to client b and can acces client a files that have been uploaded",
    repoLink: "",
    icon: Icons.icon.ShareLogo,
  },

  {
    name: "Front Devs",
    color: "#c9992e",
    des: "A platform where developers can showcase there works and get connections with other developers or clients.",
    repoLink: "",
    icon: Icons.icon.CloudUpload,
  },
  {
    name: "Interacter",
    color: "#2f6b53",
    des: "A lightweight library for node.js that accept user input in the cli",
    repoLink: "",
    icon: Icons.icon.Terminal,
  },

  {
    name: "Reminder",

    color: "#c0512f",
    des: "A simple todo web application that reminds you of your task",
    repoLink: "",
    icon: Icons.icon.Clock,
  },
];

const Projects = () => {
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
            text="Explore my Works"
            color="var(--muted)"
            size="1rem"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              marginBottom: "2rem",
            }}
          />

          <Stack
            className="stack"
            gap="1rem"
            style={{ flexWrap: "wrap", justifyContent: "center" }}
            child={() => (
              <>
                {projects.map((data, key) => (
                  <Card
                    className="cards"
                    shadow
                    shadowColor="var(--shadow)"
                    backgroundColor="var(--card)"
                    borderColor="var(--border)"
                    key={key}
                    headerStyle={{ padding: "0" }}
                    header={() => (
                      <>
                        <div className="card-header">
                          <Icon icon={data.icon} color={data.color} />
                          <Gap width="1rem" />
                          <Text
                            type="h3"
                            text={data.name}
                            color="var(--fg)"
                            style={{
                              fontWeight: 700,
                              fontFamily: "var(--font-fraunces)",
                            }}
                          />

                          <IconButton
                            icon={Icons.icon.ArrowUpRight}
                            className="prev-icon"
                          />
                        </div>
                      </>
                    )}
                    body={() => (
                      <>
                        <div className="img"></div>
                        <Gap height="1rem" />
                        <Text
                          type="p"
                          text={data.des}
                          color="var(--muted)"
                          style={{
                            fontFamily: "var(--font-space-grotesk)",
                            lineHeight: "1.6",
                          }}
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

export default Projects;
