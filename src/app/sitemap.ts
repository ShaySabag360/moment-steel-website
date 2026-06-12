import type { MetadataRoute } from "next";
import { SITE_URL, CANONICAL_PATHS } from "@/lib/seo";

// Lives at the app root (NOT under [lang]) so it serves at /sitemap.xml. The
// proxy matcher excludes any path with a file extension, so /sitemap.xml is
// served directly and never rewritten into the /he tree.
//
// One <loc> per canonical URL: the four Hebrew-root paths and the four /en
// paths. No /he paths (those only redirect). hreflang alternates are emitted
// per page via <link rel="alternate" hreflang> (see src/lib/seo.ts), so the
// sitemap stays a flat list of exactly the eight canonical URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return CANONICAL_PATHS.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
