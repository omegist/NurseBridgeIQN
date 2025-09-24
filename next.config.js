/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  // Add the experimental block below
  experimental: {
    // This allows the Next.js dev server to accept requests from your cloud development environment.
    allowedDevOrigins: [
      "https://*.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
