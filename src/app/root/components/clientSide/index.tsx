'use client'

import { BUILD_TIME, COMMIT_SHA } from '@/common/constants'
import { useDLLogger } from '@/log'
import React, { useEffect } from 'react'

export function ClientSide(): JSX.Element {
  const log = useDLLogger()

  useEffect(() => {
    log.info("Demeter's Law loaded", {
      BUILD_TIME,
      COMMIT_SHA,
      NODE_ENV: process.env.NODE_ENV,
    })
  }, [log])

  return <>{}</>
}
