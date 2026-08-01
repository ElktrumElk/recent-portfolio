"use client";

import { useState } from "react";
import {
  Gap,
  Header,
  Hover,
  Icon,
  Icons,
  List,
  ListView,
  Navigator,
  Text,
} from "elk-components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import "./HeaderComponent.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contacts", label: "Contacts" },
];

const pillStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, var(--primary), var(--blue))",
  color: "#ffffff",
};

const HeaderComponet = (): React.ReactNode => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-root">
      <Header
        style={{
          backdropFilter: "blur(12px)",
          background: "var(--header-bg)",
          position: "relative",
        }}
        underLine="1px solid var(--border)"
        leading={() => <Icon icon={Icons.icon.Zap} color="var(--accent)" />}
        title={() => (
          <Text
            text="Elktrum Elk"
            type="h1"
            style={{
              color: "var(--fg)",
              fontFamily: "var(--font-fraunces)",
              fontWeight: 700,
              fontSize: "1.3rem",
            }}
          />
        )}
        action={() => (
          <div className="section-div">
            <Navigator
              className="section-nav"
              child={() => (
                <ListView
                  style={{ display: "flex", gap: ".5rem" }}
                  child={() => (
                    <>
                      {links.map((link) => (
                        <Hover
                          key={link.href}
                          style={pillStyle}
                          child={() => (
                            <List
                              style={{
                                padding: ".2rem 1rem",
                                borderRadius: "1rem",
                              }}
                              child={() => (
                                <Link href={link.href}>{link.label}</Link>
                              )}
                            />
                          )}
                        />
                      ))}
                    </>
                  )}
                />
              )}
            />

            <Navigator
              className="section-nav"
              child={() => (
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                  <Link
                    href={"https://github.com/ElktrumElk"}
                    target="_blank"
                    style={{ color: "var(--fg)", display: "flex" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                    </svg>
                  </Link>

                  <Gap width="1rem" />
                  <Link
                    href={"https://x.com/ElktrumElk"}
                    target="_blank"
                    style={{ color: "var(--fg)", display: "flex" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                </div>
              )}
            />

            <ThemeToggle />

            <button
              type="button"
              className="hamburger"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <Icon
                icon={open ? Icons.icon.Close : Icons.icon.HambuggerMenu}
                size={20}
                color="currentColor"
              />
            </button>
          </div>
        )}
      />

      {open && (
        <nav className="mobile-menu" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__social">
            <Link
              href={"https://github.com/ElktrumElk"}
              target="_blank"
              aria-label="GitHub"
            >
              GitHub
            </Link>
            <Link
              href={"https://x.com/ElktrumElk"}
              target="_blank"
              aria-label="X (Twitter)"
            >
              X
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default HeaderComponet;
