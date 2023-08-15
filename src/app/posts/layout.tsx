import { DLLink } from '@/common/components'
import React, { PropsWithChildren } from 'react'

export default function PostsLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <main className="container py-8">
      <header className="mb-8">
        <h1>Posts</h1>
      </header>
      <div className="mb-4">{children}</div>
      <DLLink href="/">Back to Home</DLLink>
    </main>
  )
}
