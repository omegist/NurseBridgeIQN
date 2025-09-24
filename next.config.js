/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add this to use polling for file watching, which is more stable in some environments
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay rebuild after the first change
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/createOrder',
        destination: 'https://us-central1-nurse-iq.cloudfunctions.net/api/createOrder',
      },
    ];
  },
};

module.exports = nextConfig;
