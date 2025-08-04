/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات TypeScript (للتجاهل أثناء البناء في حالة وجود أخطاء)
  typescript: {
    ignoreBuildErrors: true,
  },

  // إعدادات ESLint (للتجاهل أثناء البناء)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // إعدادات الصور المثلى
  images: {
    // قائمة النطاقات المسموح بها للصور الخارجية
    domains: [
      'localhost',
      'eva-page-5mw5-eight.vercel.app',
      '*.vercel.app'
    ],

    // أنماط الروابط البعيدة المسموح بها
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'eva-page-5mw5-eight.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        pathname: '/**',
      }
    ],

    // تنسيقات الصور المدعومة (تمت إضافة jpeg و png)
    formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/png'],

    // أحجام الأجهزة والصور المثلى
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // الحد الأدنى لوقت التخزين المؤقت (بالثواني)
    minimumCacheTTL: 60,
  },

  // إعدادات عامة
  output: 'standalone',  // مخصص لتطبيقات Docker/Serverless
  compress: true,        // ضغط الملفات
  productionBrowserSourceMaps: false, // عدم إنشاء source maps للنتاج
  swcMinify: true,      // استخدام SWC للتصغير (أسرع من Terser)
  
  // إعدادات إضافية محتملة
  reactStrictMode: true, // تمكين وضع Strict Mode لـ React
  poweredByHeader: false, // إخفاء رأس "Powered by Next.js"
}

module.exports = nextConfig