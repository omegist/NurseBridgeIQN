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
        destination: 'https://us-central1-nurse-iq.cloudfunctions.net/api/createOrder',
      },
    ];
  },
};

export default nextConfig;
