/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alema.consulting.de",
        port: "",
      },
    ],
  },
};

export default nextConfig;
