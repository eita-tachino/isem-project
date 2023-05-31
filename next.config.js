/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["egghead.io", "cdn.dribbble.com"],
  },
};

module.exports = nextConfig;
