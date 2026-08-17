"use client";
import { useEffect, useState } from "react";
import { Icon, Icons } from "elk-components";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollUp}
      className="scroll-to-top"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <Icon icon={Icons.icon.ArrowUp} size={20} color="currentColor" />
    </button>
  );
};

export default ScrollToTop;
