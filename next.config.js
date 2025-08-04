/** @type {import('next').NextConfig} */
const nextConfig = {
  // تجاهل أخطاء TypeScript وESLint أثناء البناء
  typescript: {
    ignoreBuildErrors: true, // يتجاهل جميع أخطاء TypeScript
  },
  eslint: {
    ignoreDuringBuilds: true, // يتجاهل أخطاء ESLint
  },

  // إعدادات تحسين الصور
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: '**.example.com', // استبدلها بنطاقك
      }
    ],
    // إعدادات إضافية للأداء
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // إعدادات مهمة للنشر على Vercel
  output: 'standalone', // لتحسين الأداء على Vercel
  compress: true, // ضغط الملفات تلقائياً
  productionBrowserSourceMaps: false, // إيقاف إنشاء source maps للعميل
  swcMinify: true, // استخدام SWC للت minify
}

module.exports = nextConfig