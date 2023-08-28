import { LOGFLARE_API_KEY, LOGFLARE_SOURCE_TOKEN } from '@/common/constants'
import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

const { stream, send } = logflarePinoVercel({
  apiKey: LOGFLARE_API_KEY as string,
  sourceToken: LOGFLARE_SOURCE_TOKEN as string,
})

export const logger = pino(
  {
    browser: { transmit: { level: 'info', send } },
    level: 'debug',
    base: {
      VERCEL_ENV: process.env.VERCEL_ENV,
      COMMIT_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
  },
  stream,
)
