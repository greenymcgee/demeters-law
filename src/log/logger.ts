import { Logger, LoggerConfig } from 'next-axiom'
import { DL_LOG_LEVEL } from './constants'

export function DLLogger(config: LoggerConfig = {}): Logger {
  return new Logger({ logLevel: DL_LOG_LEVEL, ...config })
}
