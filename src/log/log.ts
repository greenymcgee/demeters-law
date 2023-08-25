import { log } from 'next-axiom'
import { DL_LOG_LEVEL } from './constants'

export const dlLog = log
dlLog.config.logLevel = DL_LOG_LEVEL
