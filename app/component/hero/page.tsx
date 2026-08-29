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
    <div className="hero">
      <SectionDivider variant="curl" color="#1b1b1b" animate height={54} />

      <BubbleBackground />

      <div className="hero-inner">
        <Container
          className="cnt"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "auto",
            height: "auto",
            maxWidth: "860px",
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
                    padding: ".45rem 1.1rem",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "9999px",
                  }}
                  color="var(--fg)"
                  backgroundColor="var(--bg)"
                  borderColor="var(--fg)"
                  child={() => (
                    <div className="hero-badge">
                      <span className="hero-badge__dot" />
                      <Text
                        text="Available for Work"
                        type="p"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                        }}
                      />
                    </div>
                  )}
                />
              )}
            />

            <Gap height="1.6rem" />

            <Animation
              initial={{ transform: "translateX(-40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(-40%)", opacity: "0" }}
              child={() => <Text text="Hello, world." type="h3" className="hero-eyebrow" />}
            />

            <Gap height="1.2rem" />

            <Animation
              initial={{ transform: "translateX(-40%)", opacity: "0" }}
              animate={{ transform: "translateX(0)", opacity: "1" }}
              exit={{ transform: "translateX(-40%)", opacity: "0" }}
              delay={150}
              child={() => (
                <div className="hero-title-wrap">
                  <Text
                    text="Innovation, Motivation"
                    type="h1"
                    size="clamp(2.2rem, 5.3svw, 5.6rem)"
                    className="hero-title"
                  />
                  <Text
                    text="& Admiration"
                    type="h1"
                    size="clamp(2.2rem, 5.3svw, 5.6rem)"
                    className="hero-title hero-title--outline"
                  />
                </div>
              )}
            />

            <Gap height="2rem" />

            <Animation
              className="anim"
              initial={{ transform: "translateY(40%)", opacity: "0" }}
              animate={{ transform: "translateY(0)", opacity: "1" }}
              exit={{ transform: "translateY(40%)", opacity: "0" }}
              delay={350}
              child={() => (
                <div className="hero-btn-cnt">
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    className="hero-btn hero-btn--primary"
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
                      }}
                      className="hero-btn hero-btn--secondary"
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

      <div className="hero-side hero-cube" aria-hidden="true">
        <div className="cube">
          <div className="cube-face cube-face--front" />
          <div className="cube-face cube-face--back" />
          <div className="cube-face cube-face--right" />
          <div className="cube-face cube-face--left" />
          <div className="cube-face cube-face--top" />
          <div className="cube-face cube-face--bottom" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;