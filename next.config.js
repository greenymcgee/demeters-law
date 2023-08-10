/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },

  env: {
    BUILD_TIME: new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
    }),
  },
}

module.exports = nextConfig
