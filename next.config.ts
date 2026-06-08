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
};

export default nextConfig;
