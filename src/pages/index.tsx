import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { GlobalLayout } from '@/layouts/core'

function Home(): ReactElement {
  return (
    <GlobalLayout>
      <main>
        <header>
          <h1>Home</h1>
        </header>
        <Link href="/posts">Posts</Link>
      </main>
    </GlobalLayout>
  )
}

const HomePage: NextPage = Home

export default HomePage
