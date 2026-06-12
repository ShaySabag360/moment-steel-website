import type { Metadata } from "next";
import { getDictionary, type Lang } from "@/content";

/**
 * Single source of truth for the site's absolute base URL. Environment-aware:
 * uses NEXT_PUBLIC_SITE_URL when set (so a preview/staging deploy can override
 * it), and otherwise falls back to the intended production domain. The trailing
 * slash is stripped so URL joins are predictable. Vercel preview URLs are never
 * hardcoded here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://moment-steel.com"
).replace(/\/$/, "");

export type PageKey = "home" | "about" | "projects" | "contact";

// Canonical path for each page, per locale. Hebrew is the unprefixed root;
// English lives under /en. No /he path is ever produced (those only redirect).
const HE_PATH: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
};
const EN_PATH: Record<PageKey, string> = {
  home: "/en",
  about: "/en/about",
  projects: "/en/projects",
  contact: "/en/contact",
};

/** All 8 canonical paths (Hebrew root + English /en), for the sitemap. */
export const CANONICAL_PATHS: string[] = [
  ...Object.values(HE_PATH),
  ...Object.values(EN_PATH),
];

/** Resolve a path to an absolute URL on the canonical site origin. */
export const absoluteUrl = (path: string): string =>
  new URL(path, SITE_URL).toString();

/**
 * Build per-page, per-locale metadata: localized title/description, the
 * canonical URL for the active locale, and hreflang alternates
 * (he -> Hebrew root, en -> /en, x-default -> Hebrew root). All URLs are
 * emitted absolute so they never depend on request host or rewrite path.
 */
export function buildPageMetadata(lang: Lang, page: PageKey): Metadata {
  const dict = getDictionary(lang);
  const { title, description } = dict.seo[page];
  const hePath = HE_PATH[page];
  const enPath = EN_PATH[page];
  const canonical = lang === "he" ? hePath : enPath;
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(canonical),
      languages: {
        he: absoluteUrl(hePath),
        en: absoluteUrl(enPath),
        "x-default": absoluteUrl(hePath),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      siteName: dict.nav.logoAlt,
      locale: lang === "he" ? "he_IL" : "en_US",
      type: "website",
    },
  };
}
