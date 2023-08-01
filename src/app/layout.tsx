import React, { PropsWithChildren } from 'react'

export const metadata = {
  title: "Demeter's Law",
  description: "An app for demonstrating Demeter's Law",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {/* TODO: get TW */}
        <div style={{ margin: '0 auto', maxWidth: 1440, padding: '0 0.75rem' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
