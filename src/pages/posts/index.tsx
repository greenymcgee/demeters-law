import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import { Posts } from '@/layouts/posts'
import { usePostsIndex } from '@/hooks'
import Link from 'next/link'
import { GlobalLayout } from '@/layouts/core'

function PostsIndex(): ReactElement {
  const { currentPosts, error, errorMessage, hasPosts, isLoading, mutate } =
    usePostsIndex()

  return (
    <GlobalLayout>
      <main>
        <h1>Posts</h1>
        <Posts
          currentPosts={currentPosts}
          error={error}
          errorMessage={errorMessage}
          hasPosts={hasPosts}
          isLoading={isLoading}
          mutate={mutate}
        />
        <Link href="/">Back to Home</Link>
      </main>
    </GlobalLayout>
  )
}

const PostsPage: NextPage = PostsIndex

export default PostsPage
