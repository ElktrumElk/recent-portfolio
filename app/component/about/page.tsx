"use client";
import {
  Animation,
  Card,
  Container,
  Gap,
  Icon,
  Icons,
  Stack,
  Text,
} from "elk-components";

const data = [
  {
    id: 1,
    icon: Icons.icon.UserPlus,
    description: "50+",
    type: "Happy Client",
    color: "#205a8a",
  },
  {
    id: 2,
    icon: Icons.icon.Wind,
    description: "3 years",
    type: "Experience",
    color: "#c0512f",
  },

  {
    id: 3,
    icon: Icons.icon.Layers,
    description: "9+",
    type: "Stack",
    color: "#2f6b53",
  },
];

const About = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",

          width: "100%",
          height: "100%",
          maxWidth: "1000px",
          alignSelf: "center",
          justifyContent: "center",
        }}
        child={() => (
          <>
            <Animation
              initial={{ opacity: "0", transform: "translateX(-30%)" }}
              whileInView={{ opacity: "1", transform: "translateX(0%)" }}
              exit={{ opacity: "0", transform: "translateX(-30%)" }}
              child={() => (
                <Text
                  type="h1"
                  text="Elkanah Cole"
                  color="var(--fg)"
                  size="3rem"
                  style={{
                    fontWeight: 900,
                    fontFamily: "var(--font-fraunces)",
                    letterSpacing: "-0.02em",
                  }}
                />
              )}
            />

            <Animation
              initial={{ opacity: "0", transform: "translateY(50%)" }}
              whileInView={{ opacity: "1", transform: "translateY(0%)" }}
              child={() => (
                <Text
                  type="p"
                  text={`A fullstack develpoer developing both mobile and web application with sophisticated interface,
                 easily accessible to users. ''I believe for one to go fast one need to be alone but for one to go 
                 far need team with high level of effort.''
                 \n
                 `}
                  color="var(--muted)"
                  size="1rem"
                  style={{
                    fontWeight: "normal",
                    fontFamily: "var(--font-space-grotesk)",
                    lineHeight: "1.7",
                  }}
                />
              )}
            />

            <Gap height="1rem" />

            <Animation
              initial={{ opacity: "0", transform: "translateY(-30%)" }}
              whileInView={{ opacity: "1", transform: "translateY(0%)" }}
              child={() => (
                <Text
                  type="p"
                  text={` My goal is to develop and solve human problems which can be solved by technology and help inspired yound ones. I am not only good in technology  
                but good with communication and environment interaction. 
                 `}
                  color="var(--muted)"
                  size="1rem"
                  style={{
                    fontWeight: "normal",
                    fontFamily: "var(--font-space-grotesk)",
                    lineHeight: "1.7",
                  }}
                />
              )}
            />

            <Gap height="3rem" />

            <Stack
              className="about-stack"
              direction="row"
              gap="1rem"
              child={() => (
                <>
                  {data.map((data, key) => (
                    <Card
                      shadow
                      shadowColor="var(--shadow)"
                      backgroundColor="var(--card)"
                      borderColor="var(--border)"
                      key={key}
                      bodyStyle={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      body={() => (
                        <>
                          <Icon icon={data.icon} color={data.color} />
                          <Gap height="1rem" />
                          <Text
                            type="p"
                            text={data.description}
                            size="1.4rem"
                            color="var(--fg)"
                            style={{
                              fontWeight: 700,
                              fontFamily: "var(--font-space-grotesk)",
                            }}
                          />

                          <Text
                            type="p"
                            text={data.type}
                            color="var(--muted)"
                            style={{
                              fontFamily: "var(--font-space-grotesk)",
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
    </>
  );
};

export default About;
