/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential settings
  reactStrictMode: true,
  
  // Image configuration
  images: {
    // For both remote and local images
    domains: [
      'eva-page-fis354-one.vercel.app',
      'evasaudi.com'
    ],
    // For local public folder images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    disableStaticImages: false,
      unoptimized: true
  }
};

module.exports = nextConfig;