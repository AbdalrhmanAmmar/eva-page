/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ تجاهل أخطاء TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ تجاهل أخطاء ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ إعدادات الصور
  images: {
     unoptimized: true,
    domains: [
      '**',
      '**',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    disableStaticImages: false,
    unoptimized: true,

    
  },
 
};

module.exports = nextConfig;
