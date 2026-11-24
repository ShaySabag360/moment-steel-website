"use client";

import { useEffect, useRef, useState } from "react";

type ShareButtonProps = {
  /** Accessible label for the icon button. */
  label: string;
  /** Short confirmation shown after the link is copied. */
  copiedMessage: string;
  className: string;
};

/**
 * Shares the current page. On a touch device with the Web Share API it opens
 * the device share sheet; on desktop (or without share support) it copies the
 * link and briefly shows `copiedMessage`. The shared URL is the clean page
 * address: query strings (utm_*, fbclid…) and hashes are dropped.
 */
export default function ShareButton({ label, copiedMessage, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Older browsers without the async Clipboard API.
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      if (!ok) return;
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  const share = async () => {
    const url = window.location.origin + window.location.pathname;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (touch && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: document.title, url });
      } catch (err) {
        // AbortError = the user closed the share sheet; anything else, fall back to copying.
        if (!(err instanceof DOMException && err.name === "AbortError")) await copy(url);
      }
      return;
    }
    await copy(url);
  };

  return (
    <span className="relative inline-flex">
      <button type="button" onClick={share} aria-label={label} className={className}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
          />
        </svg>
      </button>
      {/* Live region stays mounted so screen readers announce the message. */}
      <span
        role="status"
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-[#111111] text-sm font-medium px-3 py-1.5 shadow-lg transition-opacity duration-200 pointer-events-none ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {copied ? copiedMessage : ""}
      </span>
    </span>
  );
}
