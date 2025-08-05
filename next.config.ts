import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image settings
  images: {
    // For images from public folder
    // formats: ['image/avif', 'image/webp'],
    // minimumCacheTTL: 60,
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // For remote images (adjust according to your needs)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eva-page-e3zq.vercel.app', // Replace with your domain
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app', // For Vercel deployments
      },
    ],
    // If you're using unoptimized images
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },

  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
}

export default nextConfig