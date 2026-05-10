import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.fis.ink',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blogpng.fishcpy.top',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
