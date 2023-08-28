import {
  COMMIT_SHA,
  LOGFLARE_API_KEY,
  LOGFLARE_SOURCE_TOKEN,
  NODE_ENV,
} from '@/common/constants'
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
    base: { COMMIT_SHA, NODE_ENV },
  },
  stream,
)
