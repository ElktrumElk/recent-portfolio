"use client";
import { Card, Container, Gap, Icon, Icons, Stack, Text } from "elk-components";

const data = [
  {
    id: 1,
    icon: Icons.icon.UserPlus,
    description: "50+",
    type: "Happy Client",
    color: "#0affe7",
  },
  {
    id: 2,
    icon: Icons.icon.Wind,
    description: "3 years",
    type: "Experience",
    color: "#ffd91d",
  },

  {
    id: 3,
    icon: Icons.icon.Layers,
    description: "9+",
    type: "Stack",
    color: "#59ff00",
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
            <Text
              type="h1"
              text="Elkanah Cole"
              color="#fff"
              size="3rem"
              style={{ fontWeight: "bold" }}
            />

            <Text
              type="p"
              text={`A fullstack develpoer developing both mobile and web application with sophisticated interface,
                 easily accessible to users. ''I believe for one to go fast one need to be alone but for one to go 
                 far need team with high level of effort.''
                 \n
                 `}
              color="#a0a7a7"
              size="1rem"
              style={{ fontWeight: "bold" }}
            />

            <Gap height="1rem" />

            <Text
              type="p"
              text={` My goal is to develop and solve human problems which can be solved by technology and help inspired yound ones. I am not only good in technology  
                but good with communication and environment interaction. 
                 `}
              color="#a0a7a7"
              size="1rem"
              style={{ fontWeight: "bold" }}
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
                      shadowColor="#252525"
                      key={key}
                      bodyStyle={{ display: "flex", flexDirection: "column" }}
                      body={() => (
                        <>
                          <Icon icon={data.icon} color={data.color} />
                          <Gap height="1rem" />
                          <Text
                            type="p"
                            text={data.description}
                            size="1.4rem"
                          />

                          <Text type="p" text={data.type} />
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
