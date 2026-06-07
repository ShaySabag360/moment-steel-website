"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

// Run synchronously before paint on the client (avoids a flash of hidden
// content for elements already in the viewport); falls back to useEffect on
// the server to avoid SSR warnings.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Global scroll-entrance animation system.
 *
 * Any element tagged with `data-animate` starts hidden (handled in globals.css)
 * and fades/slides into view when it enters the viewport. Elements sharing the
 * same parent are staggered by 0.1s per sibling index.
 *
 * Elements already in the viewport on load are revealed immediately (before
 * paint) so above-the-fold content never flashes hidden. Off-screen elements
 * are revealed by an IntersectionObserver as they scroll in.
 *
 * Respects prefers-reduced-motion (reveals everything instantly, no transitions).
 * Re-runs on client-side navigation so every page is covered without duplicating code.
 */
export default function ScrollAnimator() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );
    if (els.length === 0) return;

    const reveal = (el: HTMLElement) => {
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
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reveal everything immediately if motion is reduced or IO is unavailable.
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const inViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px" }
    );

    els.forEach((el) => {
      if (inViewport(el)) {
        // Already visible on load — show instantly, no fade, before first
        // paint. (A fade on already-visible content reads as a flash.)
        el.style.transition = "none";
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
