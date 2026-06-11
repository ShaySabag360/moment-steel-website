import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moment-steel.com",
      },
    ],
  },
  // Collapse the explicit Hebrew tree onto the canonical root. These 308s run
  // before the proxy (which rewrites unprefixed `/*` -> `/he/*` internally), so
  // there is no loop: `/he` -> 308 -> `/`, then `/` is rewritten to `/he` and
  // served. The bare `/he` needs its own rule since `/he/:path*` only matches a
  // trailing segment.
  async redirects() {
    return [
      { source: "/he", destination: "/", permanent: true },
      { source: "/he/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
