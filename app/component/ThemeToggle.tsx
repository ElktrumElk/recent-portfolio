"use client";

import { useSyncExternalStore } from "react";
import { Icon, Icons } from "elk-components";

type Theme = "light" | "dark";

const THEME_EVENT = "elk-theme-change";

const getSnapshot = (): Theme =>
  typeof document !== "undefined" &&
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

const subscribe = (onChange: () => void) => {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
};

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");

  const toggle = () => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon
        icon={isDark ? Icons.icon.Sun : Icons.icon.Moon}
        size={18}
        color="currentColor"
      />
    </button>
  );
};

export default ThemeToggle;
