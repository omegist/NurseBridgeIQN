/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    // Disable webpack caching in development to prevent ChunkLoadError
    if (dev && !isServer) {
      config.cache = false;
    }

    return config;
  },
  // This allows the Next.js dev server to accept requests from your cloud development environment.
  allowedDevOrigins: [
    "*.cloudworkstations.dev",
  ],
};

export default nextConfig;
