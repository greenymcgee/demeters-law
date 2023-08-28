'use client'

import { BUILD_TIME } from '@/common/constants'
import { logger } from '@/log'
import React, { useEffect } from 'react'

export function ClientSide(): JSX.Element {
  useEffect(() => {
    logger.info({ BUILD_TIME }, "Demeter's Law loaded")
  }, [])

  return <>{}</>
}
