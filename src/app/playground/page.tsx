import React from 'react'
import { PlaygroundClientSide } from './client'

export default function Playground() {
  return (
    <main className="container py-8">
      <header className="mb-8">
        <h1>Playground</h1>
      </header>
      <PlaygroundClientSide />
    </main>
  )
}
