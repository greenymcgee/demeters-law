'use client'

import { clientSideLogger } from '@/log'
import React, { useEffect } from 'react'

export function ClientSide(): JSX.Element {
  useEffect(() => {
    clientSideLogger.info({}, "Demeter's Law loaded")
  }, [])

  return <>{}</>
}
