'use client'

import { logger } from '@/log'
import React, { useEffect } from 'react'

export function ClientSide(): JSX.Element {
  useEffect(() => {
    logger.info("Demeter's Law loaded")
  }, [])

  return <>{}</>
}
