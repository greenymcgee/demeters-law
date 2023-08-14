import { DLLink } from '@/common/components'
import React, { PropsWithChildren } from 'react'

export default function PostsLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <main className="container py-8">
      <header>
        <h1>Posts</h1>
      </header>
      {children}
      <DLLink href="/">Back to Home</DLLink>
    </main>
  )
}
