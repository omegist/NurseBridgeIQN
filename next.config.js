/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/createOrder',
        destination: 'https://api-w74e2s66uq-uc.a.run.app', // Points to your deployed Firebase Function
      },
    ];
  },
};

module.exports = nextConfig;
