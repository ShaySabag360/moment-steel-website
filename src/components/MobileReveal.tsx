"use client";

import { useId, useState, type ReactNode } from "react";

// Static map so Tailwind's class scanner keeps these (a dynamic
// `line-clamp-${n}` string would be purged from the build).
const CLAMP: Record<number, string> = {
  2: "max-md:line-clamp-2",
  3: "max-md:line-clamp-3",
  4: "max-md:line-clamp-4",
};

type MobileRevealProps = {
  children: ReactNode;
  /** "clamp" truncates a single text block to `lines`; "collapse" hides the block entirely. */
  variant?: "clamp" | "collapse";
  /** clamp variant only — visible lines on mobile before expanding. Default 3. */
  lines?: 2 | 3 | 4;
  moreLabel?: string;
  lessLabel?: string;
  /** Passed through to the text wrapper (carry the original text styling here). */
  className?: string;
};

/**
 * Mobile-only progressive disclosure. Below 768px the content is clamped
 * ("clamp") or hidden ("collapse") with a "Read more" toggle. At >=768px every
 * reveal class is `max-md:*` and the button is `md:hidden`, so desktop renders
 * the full content with an inert (display:none) button — zero visual change.
 */
export default function MobileReveal({
  children,
  variant = "clamp",
  lines = 3,
  moreLabel = "Read more",
  lessLabel = "Show less",
  className = "",
}: MobileRevealProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  const collapsedClass =
    variant === "clamp" ? CLAMP[lines] ?? CLAMP[3] : "max-md:hidden";
  const stateClass = open ? "" : collapsedClass;

  return (
    <>
      {variant === "clamp" ? (
        <p id={id} className={`${className} ${stateClass}`.trim()}>
          {children}
        </p>
      ) : (
        <div id={id} className={`${className} ${stateClass}`.trim()}>
          {children}
        </div>
      )}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden mt-3 inline-flex items-center gap-1 text-[#fd008d] text-sm font-semibold uppercase tracking-widest"
      >
        {open ? lessLabel : moreLabel}
      </button>
    </>
  );
}
