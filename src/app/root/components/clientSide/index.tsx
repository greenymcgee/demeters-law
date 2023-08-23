'use client'

/* eslint-disable no-console */

import { BUILD_TIME, COMMIT_SHA } from '@/common/constants'
import React, { useEffect } from 'react'

export function ClientSide(): JSX.Element {
  useEffect(() => {
    // TODO: get logger
    console.info("Demeter's Law loaded")
    console.info(`Build time: ${BUILD_TIME}`)
    console.info(`Commit sha: ${COMMIT_SHA}`)
  }, [])

  return <>{}</>
}
