/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // إعدادات النطاقات
    domains: [
      'eva-page-yepm.vercel.app', // بدون https:// أو /
    ],
    
    // إعدادات Vercel المهمة
    loader: 'default', // يستخدم محسن صور Vercel
    unoptimized: false, // يجب أن يكون false للاستفادة من تحسين Vercel
    
    // إعدادات الأبعاد
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    
    
    // إعدادات التخزين المؤقت
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'], // ✅ صيغ مدعومة فقط
  },
};

module.exports = nextConfig;