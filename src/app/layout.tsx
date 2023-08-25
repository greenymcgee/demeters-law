import React, { PropsWithChildren } from 'react'
import { AxiomWebVitals } from 'next-axiom'
import '../styles/global.css'
import { ClientSide } from './root/components'

export const metadata = {
  title: "Demeter's Law",
  description: "An app for demonstrating Demeter's Law",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AxiomWebVitals />
        <ClientSide />
        {children}
      </body>
    </html>
  )
}
