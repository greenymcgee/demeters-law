'use client'

import React from 'react'
import { usePosts } from '../hooks'
import { PostsEmpty } from './empty'
import { PostsError } from './error'
import { PostsList } from './list'
import { PostsLoader } from './loader'

export function Posts(): JSX.Element {
  const { error, hasPosts, isLoading } = usePosts()

  if (error) return <PostsError />

  if (isLoading) return <PostsLoader />

  if (!hasPosts) return <PostsEmpty />

  return <PostsList />
}
