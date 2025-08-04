/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

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
        hostname: 'eva-page-5mw5-eight.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app', // السماح بجميع نطاقات Vercel
      }
    ],
    domains: [
      'eva-page-5mw5-eight.vercel.app',
      'localhost'
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  output: 'standalone',
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
}

module.exports = nextConfig