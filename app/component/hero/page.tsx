"use client";
import "./hero.css";
import {
  Animation,
  Badge,
  Button,
  Container,
  Gap,
  Icon,
  Icons,
  SectionDivider,
  Text,
} from "elk-components";
import BubbleBackground from "./BubbleBackground";
import { DownloadIcon } from "../../lib/BrandIcons";

const Hero = () => {
  return (
    <>
      <SectionDivider variant="curl" color="var(--amber)" animate height={54} />

      <BubbleBackground />

      <Container
        className="cnt"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: "820px",
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
                    padding: ".4rem .9rem",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "9999px",
                  }}
                  color="var(--fg)"
                  backgroundColor="var(--card)"
                  borderColor="var(--accent)"
                  child={() => (
                    <Text
                      text="Available for Work"
                      type="p"
                      style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 500 }}
                    />
                  )}
                />
              )}
            />

            <Animation
              initial={{ transform: "translateX(-40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(-40%)", opacity: "0" }}
              child={() => (
                <Text
                  text="Hello, world."
                  type="h3"
                  size="clamp(1.6rem, 2.4svw, 2.4rem)"
                  className="hero-script"
                />
              )}
            />

            <Animation
              initial={{ transform: "translateX(-40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(-40%)", opacity: "0" }}
              delay={150}
              child={() => (
                <Text
                  text="Innovation, Motivation & Admiration"
                  type="h1"
                  size="clamp(2.2rem, 4svw, 4rem)"
                  className="hero-title"
                  style={{
                    textAlign: "center",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                />
              )}
            />

            <Animation
              initial={{ transform: "translateX(40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(40%)", opacity: "0" }}
              delay={250}
              child={() => (
                <Text
                  text="UI & Software Developer"
                  type="p"
                  size="clamp(1rem, 1.4svw, 1.6rem)"
                  style={{
                    textAlign: "center",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 500,
                    color: "var(--muted)",
                  }}
                />
              )}
            />

            <Gap height="1.2rem" />

            <Animation
              className="anim"
              initial={{ transform: "translateY(40%)", opacity: "0" }}
              animate={{ transform: "translateY(0)", opacity: "1" }}
              exit={{ transform: "translateY(40%)", opacity: "0" }}
              delay={350}
              child={() => (
                <div style={{ display: "flex" }} className="hero-btn-cnt">
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".4rem",
                      background:
                        "linear-gradient(90deg, var(--accent), var(--amber))",
                      borderRadius: "9999px",
                      padding: ".6rem 1.3rem",
                      color: "#fffdf6",
                      boxShadow: "0 8px 20px var(--shadow)",
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      border: "none",
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
                      background: "var(--card)",
                      borderRadius: "9999px",
                      padding: ".6rem 1.3rem",
                      color: "var(--primary)",
                      border: "2px solid var(--primary)",
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                    }}
                    child={() => (
                      <>
                        <strong>Contact</strong>
                        <Icon icon={Icons.icon.Contact} size={20} />
                      </>
                    )}
                  />
                  <Gap width="1rem" />
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".4rem",
                      background: "transparent",
                      borderRadius: "9999px",
                      padding: ".6rem 1.3rem",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                    child={() => (
                      <>
                        <strong>Resume</strong>
                        <DownloadIcon size={18} color="currentColor" />
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
