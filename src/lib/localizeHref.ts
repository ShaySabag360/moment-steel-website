import type { Lang } from "@/content";

/**
 * Localize an internal app href for the active locale.
 *
 * Hebrew is the canonical root, so its links stay unprefixed (`/about`).
 * English lives under `/en`, so its links gain the prefix
 * (`/about` -> `/en/about`, `/` -> `/en`).
 *
 * External / protocol links (tel:, mailto:, https://, #...) and any value that
 * does not start with `/` are returned untouched.
 */
export function localizeHref(href: string, lang: Lang): string {
  if (!href.startsWith("/")) return href;
  if (lang === "he") return href;
  return href === "/" ? "/en" : `/en${href}`;
}
