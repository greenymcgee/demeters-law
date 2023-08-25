/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withAxiom } = require('next-axiom')

const BUILD_TIME = new Date().toLocaleString('en-US', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'America/Denver',
})

const nextConfig = withAxiom({
  experimental: { typedRoutes: true },

  env: { NEXT_PUBLIC_BUILD_TIME: BUILD_TIME },

  output: 'standalone',
})

module.exports = nextConfig
