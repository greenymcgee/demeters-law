import { SWRConfig } from 'swr'
import React, { PropsWithChildren } from 'react'

export function TestSWRConfig({ children }: PropsWithChildren): JSX.Element {
  return (
    <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
      {children}
    </SWRConfig>
  )
}
