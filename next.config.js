/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true, // لتسهيل debugging في production

  // إعدادات TypeScript
  typescript: {
    ignoreBuildErrors: true, // تجاهل أخطاء TypeScript أثناء البناء
  },

  // إعدادات ESLint
  eslint: {
    ignoreDuringBuilds: true, // تجاهل أخطاء ESLint أثناء البناء
  },

  // إعدادات الصور
  images: {
    // السماح بجميع النطاقات
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // تقبل أي نطاق
        port: '',
        pathname: '**', // تقبل أي مسار
      },
      {
        protocol: 'http',
        hostname: '**', // تقبل أي نطاق (حتى غير الآمن)
        port: '',
        pathname: '**',
      },
    ],
    
    // الأبعاد القياسية للصور
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // إعدادات الأداء
    minimumCacheTTL: 60, // الحد الأدنى لوقت التخزين المؤقت (بالثواني)
    disableStaticImages: false, // تمكين الصور الثابتة
    unoptimized: false, // تمكين تحسين الصور (افضل تعطيله إذا كنت تريد التحكم الكامل)
    
    // إعدادات متقدمة
    formats: ['image/webp', 'image/jpeg', 'image/png'], // تنسيقات الصور المفضلة
    dangerouslyAllowSVG: true, // السماح بتحميل SVG (بحذر)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // سياسة أمان أساسية
  },

  // إعدادات إضافية
  experimental: {
    appDir: true, // تمكين دليل app الجديد (إذا كنت تستخدمه)
    optimizeCss: true, // تحسين CSS
    scrollRestoration: true, // استعادة وضع التمرين
  },
};

module.exports = nextConfig;