import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Enable static export for Firebase Hosting
  output: 'export',

  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    // ✅ Required for static export when using <Image>
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
