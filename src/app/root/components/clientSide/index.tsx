'use client'

import { BUILD_TIME, COMMIT_SHA, VERCEL_ENV } from '@/common/constants'
import { logger } from '@/log'
import React, { useEffect } from 'react'

export function ClientSide(): JSX.Element {
  useEffect(() => {
    logger.info(
      { BUILD_TIME, COMMIT_SHA, NODE_ENV: process.env.NODE_ENV, VERCEL_ENV },
      "Demeter's Law loaded",
    )
  }, [])

  return <>{}</>
}
