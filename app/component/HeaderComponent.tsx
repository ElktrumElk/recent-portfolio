"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import "./HeaderComponent.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Expertise" },
  { href: "#experience", label: "Experience" },
];

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-logo" href="#home" aria-label="Elkanah Cole, home">
          EC<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="admin-access" href="/admin/login">Admin</Link>
          <ThemeToggle />
          <Link className="header-contact" href="#contact">Let&apos;s talk <span>↗</span></Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {[...links, { href: "#contact", label: "Contact" }, { href: "/admin/login", label: "Admin login" }].map((link, index) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
