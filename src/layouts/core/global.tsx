import React, { PropsWithChildren } from 'react'

export function GlobalLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    // TODO: get TW
    <div style={{ margin: '0 auto', maxWidth: 1440, padding: '0 0.75rem' }}>
      {children}
    </div>
  )
}
