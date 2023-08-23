/** @type {import('next').NextConfig} */

const BUILD_TIME = new Date().toLocaleString('en-US', {
  timeZone: 'America/Chicago',
})

const nextConfig = {
  experimental: { typedRoutes: true },

  env: { BUILD_TIME },

  output: 'standalone',
}

module.exports = nextConfig
