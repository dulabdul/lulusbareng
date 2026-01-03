import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Izinkan domain placeholder
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
