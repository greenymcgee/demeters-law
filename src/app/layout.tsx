import React, { PropsWithChildren } from 'react'
import '../styles/global.css'

export const metadata = {
  title: "Demeter's Law",
  description: "An app for demonstrating Demeter's Law",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
