"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      document.documentElement.classList.remove("js-motion");
      return;
    }

    document.documentElement.classList.add("js-motion");
    const observed = new WeakSet<Element>();
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 }
    );

    const register = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add("motion-reveal");
        const delay = Number(element.dataset.revealDelay ?? 0);
        element.style.setProperty("--reveal-delay", `${Math.min(delay, 6) * 90}ms`);
        revealObserver.observe(element);
      });
    };

    register();
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches("[data-reveal]")) register(node.parentElement ?? document);
            else register(node);
          }
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
