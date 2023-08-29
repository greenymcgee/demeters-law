/** @type {import('next').NextConfig} */

const BUILD_TIME = new Date().toLocaleString('en-US', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'America/Denver',
})

const nextConfig = {
  experimental: { typedRoutes: true },

  env: {
    NEXT_PUBLIC_BUILD_TIME: BUILD_TIME,
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV,
  },

  output: 'standalone',
}

module.exports = nextConfig
