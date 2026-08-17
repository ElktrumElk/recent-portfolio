"use client";
import {
  Container,
  Gap,
  Icon,
  Icons,
  Text,
} from "elk-components";
import Link from "next/link";
import { siteConfig } from "../../lib/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1000px",
          alignSelf: "center",
          padding: "3rem 1rem 1.5rem",
        }}
        child={() => (
          <>
            <div className="footer-top">
              <div className="footer-brand">
                <Icon icon={Icons.icon.Zap} color="var(--accent)" />
                <Gap width="0.5rem" />
                <Text
                  type="h3"
                  text="Elktrum Elk"
                  color="var(--fg)"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                  }}
                />
              </div>
              <nav className="footer-nav" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer-divider" />

            <div className="footer-bottom">
              <Text
                type="p"
                text={`© ${year} ${siteConfig.name}. All rights reserved.`}
                color="var(--muted)"
                size="0.85rem"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                }}
              />
              <div className="footer-social">
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="footer-social-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.2 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                </Link>
                <Link
                  href={siteConfig.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="footer-social-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </>
        )}
      />
    </footer>
  );
};

export default Footer;
