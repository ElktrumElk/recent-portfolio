"use client";
import './hero.css'
import {
  Animation,
  Badge,
  Button,
  Container,
  Gap,
  Icon,
  Icons,
  Text,
} from "elk-components";

const Hero = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: "800px",
          alignSelf: "center",
          justifyContent: "center",
        }}

        child={() => (
          <>
            <Animation
              initial={{ transform: "translateY(-30%)", opacity: "0" }}
              animate={{ transform: "translateY(0)", opacity: "1" }}
              exit={{ transform: "translateY(-30%)", opacity: "0" }}
                
              duration={200}
              child={() => (
                <Badge
                  style={{
                    padding: ".4rem",
                    borderWidth: ".5px",
                    borderStyle: "solid",
                  }}
                  color="#00e6fb"
                  backgroundColor="#6dfbd726"
                  borderColor="#6dfbd74f"
                  child={() => <Text text="Available for Work" type="p" />}
                />
              )}
            />
            <Animation
              initial={{ transform: "translateX(-40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(-40%)", opacity: "0" }}
              child={() => (
                <Text
                  text="Inovation, Multivation & Admiration"
                  type="h1"
                  size="clamp(2rem, 3svw, 4rem)"
                  style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundImage:
                      "linear-gradient(90deg, #fff 10%, #6dfbd7, #2fb6ff, #fff)",
                  }}
                />
              )}
            />

            <Animation
              initial={{ transform: "translateX(40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(40%)", opacity: "0" }}
              child={() => (
                <Text
                  text="UI & Software Developer"
                  type="p"
                  size="clamp(1rem, 1svw, 3rem)"
                  style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                />
              )}
            />

            <Gap height="1rem" />

            <Animation
              className='anim'
              initial={{ transform: "translateY(40%)", opacity: "0" }}
              animate={{ transform: "translateY(0)", opacity: "1" }}
              exit={{ transform: "translateY(40%)", opacity: "0" }}
              
              child={() => (
                <div style={{ display: "flex" }} className="hero-btn-cnt">
                

                  <Button

                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".4rem",
                      background: "linear-gradient(90deg, #6dfbd7, #2fb6ff)",
                      borderRadius: "1rem",
                      padding: ".5rem 1rem",
                      color: "rgba(3, 25, 32, 0.98)",
                    }}
                    child={() => (
                      <>
                        <strong>Projects</strong>
                        <Icon icon={Icons.icon.ArrowRight} />
                      </>
                    )}
                  />
                  <Gap width="1rem" />

                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".4rem",
                      background: "none",
                      borderRadius: "1rem",
                      padding: ".5rem 1rem",
                      color: "rgba(201, 242, 255, 0.98)",
                      border: "1px solid #2fb6ff",
                    }}
                    child={() => (
                      <>
                        <strong>Contact</strong>
                        <Icon icon={Icons.icon.Contact} size={20} />
                      </>
                    )}
                  />
                </div>
              )}
            />
          </>
        )}
      />
    </>
  );
};

export default Hero;
