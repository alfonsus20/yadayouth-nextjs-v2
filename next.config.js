/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.ibb.co',
      'images.unsplash.com',
      'zcspsixwoefhuabatnmr.supabase.co',
    ],
  },
  pageExtensions: ['page.tsx'],
};

module.exports = nextConfig;
