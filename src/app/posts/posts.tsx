'use client'

import React, { ReactElement } from 'react'
import { PostsEmpty } from './empty'
import PostsError from './error'
import { usePosts } from './hooks'
import { PostsList } from './list'
import PostsLoader from './loading'

export function Posts(): ReactElement | null {
  const { currentPosts, error, hasPosts, isLoading } = usePosts()

  if (error) return <PostsError />

  if (isLoading) return <PostsLoader />

  if (!hasPosts) return <PostsEmpty />

  return <PostsList currentPosts={currentPosts} />
}
