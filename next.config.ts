import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gyangroup.in",
      },
    ],
  },
};

export default nextConfig;
