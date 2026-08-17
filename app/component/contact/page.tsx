"use client";
import {
  Animation,
  Button,
  Container,
  Gap,
  Icon,
  Icons,
  Text,
} from "elk-components";
import { siteConfig } from "../../lib/site";

const contactLinks = [
  {
    label: "Email",
    value: "elkanah@example.com",
    href: "mailto:elkanah@example.com",
    icon: Icons.icon.Contact,
  },
  {
    label: "GitHub",
    value: siteConfig.github,
    href: siteConfig.github,
    icon: Icons.icon.GitBranch,
  },
  {
    label: "X (Twitter)",
    value: siteConfig.handle,
    href: siteConfig.twitter,
    icon: Icons.icon.AtSign,
  },
];

const Contact = () => {
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
            text="Let's Work Together"
            color="var(--fg)"
            size="clamp(2rem, 3.5vw, 2.8rem)"
            style={{
              fontWeight: 900,
              fontFamily: "var(--font-fraunces)",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          />
          <Text
            type="p"
            text="Have a project in mind? I'd love to hear about it."
            color="var(--muted)"
            size="1.15rem"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          />

          <div className="contact-grid">
            {contactLinks.map((link, idx) => (
              <Animation
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                delay={idx * 100}
                child={() => (
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="contact-card"
                  >
                    <div className="contact-card__icon">
                      <Icon icon={link.icon} color="var(--accent)" size={26} />
                    </div>
                    <div className="contact-card__info">
                      <Text
                        type="p"
                        text={link.label}
                        color="var(--fg)"
                        size="1.1rem"
                        style={{
                          fontWeight: 700,
                          fontFamily: "var(--font-space-grotesk)",
                        }}
                      />
                      <Text
                        type="p"
                        text={link.value.replace("https://", "")}
                        color="var(--muted)"
                        size="1rem"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                        }}
                      />
                    </div>
                    <Icon
                      icon={Icons.icon.ArrowUpRight}
                      color="var(--muted)"
                      size={20}
                    />
                  </a>
                )}
              />
            ))}
          </div>

          <Gap height="2rem" />

          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            child={() => (
              <a href={`mailto:elkanah@example.com`} className="contact-cta">
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    background:
                      "linear-gradient(90deg, var(--accent), var(--amber))",
                    borderRadius: "9999px",
                    padding: ".85rem 2.2rem",
                    color: "#fffdf6",
                    boxShadow: "0 8px 20px var(--shadow)",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    border: "none",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                  child={() => (
                    <>
                      <strong>Send a Message</strong>
                      <Icon icon={Icons.icon.ArrowRight} />
                    </>
                  )}
                />
              </a>
            )}
          />
        </>
      )}
    />
  );
};

export default Contact;
