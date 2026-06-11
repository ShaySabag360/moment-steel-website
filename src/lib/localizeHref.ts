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

/**
 * Given the current browser pathname and the active locale, return the href of
 * the SAME page in the OTHER locale (for the language switcher).
 *
 *   he  "/"        -> "/en"       he  "/about" -> "/en/about"
 *   en  "/en"      -> "/"         en  "/en/about" -> "/about"
 *
 * The leading locale prefix is stripped defensively (matches `/en` or `/he`), so
 * a `/he` href can never be produced even if the router exposes the internal
 * rewrite path. Hebrew is the canonical root, so its alternate is the unprefixed
 * base path.
 */
export function getAlternateLocaleHref(pathname: string, lang: Lang): string {
  const base = pathname.replace(/^\/(?:en|he)(?=\/|$)/, "") || "/";
  return lang === "he" ? (base === "/" ? "/en" : `/en${base}`) : base;
}
