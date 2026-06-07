"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll-entrance animation system.
 *
 * Any element tagged with `data-animate` starts hidden (handled in globals.css)
 * and fades/slides into view via IntersectionObserver when it enters the viewport.
 * Elements sharing the same parent are staggered by 0.1s per sibling index.
 *
 * Respects prefers-reduced-motion (reveals everything instantly, no transitions).
 * Re-runs on client-side navigation so every page is covered without duplicating code.
 */
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // No-JS-animation fallback: reveal immediately if motion is reduced
    // or IntersectionObserver is unavailable.
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          // Stagger by position among animated siblings (0s, 0.1s, 0.2s, ...).
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(
              parent.querySelectorAll<HTMLElement>(":scope > [data-animate]")
            );
            const index = siblings.indexOf(el);
            el.style.transitionDelay = `${Math.max(0, index) * 0.1}s`;
          }

          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
