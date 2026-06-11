import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Hebrew is the canonical locale, served at the unprefixed root. This proxy
// internally rewrites unprefixed paths into the hidden `/he/*` tree so the
// browser URL stays clean (`/about`) while the prebuilt Hebrew page is served.
//
//   /          -> /he
//   /about     -> /he/about
//   /projects  -> /he/projects
//   /contact   -> /he/contact
//
// The English tree (`/en/*`) and the explicit Hebrew tree (`/he/*`) are left
// untouched. (`/he` -> `/` is a later redirect step.) No browser-language
// auto-redirect. The rewrite is internal — the proxy does not re-run on the
// rewritten path — so there is no redirect loop.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Leave the explicit English and Hebrew trees as-is.
  if (
    pathname === "/en" ||
    pathname.startsWith("/en/") ||
    pathname === "/he" ||
    pathname.startsWith("/he/")
  ) {
    return NextResponse.next();
  }

  // Rewrite the unprefixed canonical path into the Hebrew tree.
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/he" : `/he${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, and any path with a file extension (all
  // public assets/images, favicon, sitemap, robots). The locale-tree exclusion
  // is handled in the function above.
  matcher: ["/((?!api|_next|.*\\.).*)"],
};
