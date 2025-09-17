/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // If your app is under src, no special config is needed for Vercel, Next.js supports src/ by default
};

module.exports = nextConfig;