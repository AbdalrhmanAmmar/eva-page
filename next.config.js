/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build optimizations
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,

  // Error handling during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization configuration
  images: {
    // For remote images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eva-page-fis354-one.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.evasaudi.com',
      },
    ],
    
    // For local images (public folder)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'], // 'image/avif' can be added if needed
    minimumCacheTTL: 60,
    disableStaticImages: false, // Keep false to allow static image imports
  },

  // Internationalization (if needed)
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: true,
  },

  // Custom headers (security)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Webpack configuration (optional)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;