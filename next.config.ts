import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["msw"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
