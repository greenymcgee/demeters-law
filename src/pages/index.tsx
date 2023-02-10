import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

function Home(): ReactElement {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/posts">Posts</Link>
    </main>
  )
}

const HomePage: NextPage = Home

export default HomePage
