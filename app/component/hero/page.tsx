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
import Link from "next/link";

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
                  size="clamp(1.8rem, 2.8svw, 2.8rem)"
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
                  size="clamp(2.6rem, 5svw, 4.8rem)"
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
                  size="clamp(1.15rem, 1.6svw, 1.8rem)"
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
                      gap: ".5rem",
                      background:
                        "linear-gradient(90deg, var(--accent), var(--amber))",
                      borderRadius: "9999px",
                      padding: ".75rem 1.7rem",
                      color: "#fffdf6",
                      boxShadow: "0 8px 20px var(--shadow)",
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
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

                  <Link href="#contact" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                        background: "var(--card)",
                        borderRadius: "9999px",
                        padding: ".75rem 1.7rem",
                        color: "var(--primary)",
                        border: "2px solid var(--primary)",
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                      }}
                      child={() => (
                        <>
                          <strong>Contact</strong>
                          <Icon icon={Icons.icon.Contact} size={22} />
                        </>
                      )}
                    />
                  </Link>
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
