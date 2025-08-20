import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alema.consulting.de",
        port: "",
      },
    ],
  },
  experimental: {},
};

export default nextConfig;
