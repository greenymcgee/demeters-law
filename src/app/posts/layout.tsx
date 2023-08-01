import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

export default function PostsLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <main>
      <h1>Posts</h1>
      {children}
      <Link href="/">Back to Home</Link>
    </main>
  )
}
