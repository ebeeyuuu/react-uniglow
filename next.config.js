/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // This allows any image path from this domain
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      return config;
    }

    config.resolve = config.resolve ?? {};
    config.resolve.fallback = config.resolve.fallback ?? {};

    config.resolve.fallback.async_hooks = false;

    return config;
  },
};

module.exports = nextConfig;
