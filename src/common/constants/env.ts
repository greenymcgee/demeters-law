// eslint-disable-next-line prefer-destructuring
export const NODE_ENV = process.env.NODE_ENV
export const INTERNAL_API_HOST = process.env.NEXT_PUBLIC_INTERNAL_API_HOST
export const COMMIT_SHA = process.env.NEXT_PUBLIC_COMMIT_SHA
export const BUILD_TIME = process.env.NEXT_PUBLIC_BUILD_TIME

/**
 * Logflare
 */
export const LOGFLARE_API_KEY = process.env.NEXT_PUBLIC_LOGFLARE_API_KEY
export const LOGFLARE_SOURCE_TOKEN =
  process.env.NEXT_PUBLIC_LOGFLARE_SOURCE_TOKEN

/**
 * Vercel
 */
export const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV
