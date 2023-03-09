/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
    swcTraceProfiling: true
  }
};

module.exports = nextConfig;
