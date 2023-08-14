import React from 'react'
import { DLLink } from '@/common/components'

export default function HomePage(): JSX.Element {
  return (
    <main className="container py-8">
      <header>
        <h1>Home</h1>
      </header>
      <DLLink href="/posts">Posts</DLLink>
    </main>
  )
}
