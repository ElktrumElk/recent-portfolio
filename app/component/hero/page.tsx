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
  LetterAnimation,
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
              delay={0}
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
              delay={80}
              child={() => <Text text="UI & Fullstack Developer" type="h3" className="hero-eyebrow" />}
            />

            <Gap height="1.2rem" />

            <Animation
              initial={{ opacity: "0" }}
              animate={{ opacity: "1" }}
              duration={10}
              delay={170}
              child={() => (
                <div className="hero-title-wrap">
                  <LetterAnimation
                    text="Innovation, Motivation"
                    type="words"
                    animation="dropIn"
                    duration={600}
                    delay={200}
                    stagger={140}
                    size="clamp(2.2rem, 5.3svw, 5.6rem)"
                    textType="h1"
                    className="hero-title"
                  />
                  <LetterAnimation
                    text="& Admiration"
                    type="words"
                    animation="dropIn"
                    duration={600}
                    delay={380}
                    stagger={140}
                    size="clamp(2.2rem, 5.3svw, 5.6rem)"
                    textType="h1"
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
              delay={460}
              child={() => (
                <div className="hero-btn-cnt">
                  <Link href="#projects" style={{ textDecoration: "none" }}>
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
                  </Link>
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