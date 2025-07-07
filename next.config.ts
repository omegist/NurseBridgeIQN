import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ⬇️ tells Next.js to generate a static "out/" folder
 // output: 'export',
  
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    // ⬇️ Required for static export when you use <Image>
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