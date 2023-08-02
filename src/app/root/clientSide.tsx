'use client'

import axios from 'axios'
import React, { useEffect } from 'react'
import { camelCaseResponseDataKeys } from './utils'

export function ClientSide(): JSX.Element {
  useEffect(() => {
    axios.interceptors.response.use(camelCaseResponseDataKeys)
  }, [])

  return <>{}</>
}
