import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ramiel.nerv.com.mx',
      },
    ],
  },
};

export default nextConfig;
