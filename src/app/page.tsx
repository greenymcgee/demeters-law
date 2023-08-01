import React from 'react'
import Link from 'next/link'

export default function HomePage(): JSX.Element {
  return (
    <main>
      <header>
        <h1>Home</h1>
      </header>
      <Link href="/posts">Posts</Link>
    </main>
  )
}
