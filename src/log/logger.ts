import {
  BUILD_TIME,
  COMMIT_SHA,
  LOGFLARE_API_KEY,
  LOGFLARE_SOURCE_TOKEN,
  NODE_ENV,
  VERCEL_ENV,
} from '@/common/constants'
import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

const { stream, send } = logflarePinoVercel({
  apiKey: LOGFLARE_API_KEY as string,
  sourceToken: LOGFLARE_SOURCE_TOKEN as string,
})

const BASE = { BUILD_TIME, COMMIT_SHA, NODE_ENV, VERCEL_ENV }

export const logger = pino(
  {
    base: BASE,
    browser: { transmit: { level: 'info', send } },
    level: 'debug',
  },
  stream,
)

export const clientSideLogger = logger.child(BASE)
