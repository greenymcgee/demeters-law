import { Logger, useLogger } from 'next-axiom'
import { DL_LOG_LEVEL } from './constants'

export function useDLLogger(): Logger {
  return useLogger({ logLevel: DL_LOG_LEVEL })
}
