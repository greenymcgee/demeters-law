import {
  COMMIT_SHA,
  LOGFLARE_API_KEY,
  LOGFLARE_SOURCE_TOKEN,
  VERCEL_ENV,
} from '@/common/constants'
import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

const { stream, send } = logflarePinoVercel({
  apiKey: LOGFLARE_API_KEY as string,
  sourceToken: LOGFLARE_SOURCE_TOKEN as string,
})

export const logger = pino(
  {
    base: {
      COMMIT_SHA: COMMIT_SHA ?? 'COMMIT_SHA not found',
      NODE_ENV: process.env.NOD_ENV ?? 'NODE_ENV not found',
      VERCEL_ENV: VERCEL_ENV ?? 'VERCEL_ENV not found',
    },
    browser: { transmit: { level: 'info', send } },
    level: 'debug',
  },
  stream,
)
