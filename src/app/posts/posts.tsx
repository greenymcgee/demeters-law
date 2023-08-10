'use client'

import React from 'react'
import { PostsEmpty } from './empty'
import { usePosts } from './hooks'
import { PostsList } from './list'
// TODO: refactor to not have these default imports here
// create a app/posts/components dir
import PostsError from './error'
import PostsLoader from './loading'

export function Posts(): JSX.Element {
  // TODO: work with isValidating in PostsList
  const { currentPosts, error, hasPosts, isLoading } = usePosts()

  if (error) return <PostsError />

  if (isLoading) return <PostsLoader />

  if (!hasPosts) return <PostsEmpty />

  return <PostsList currentPosts={currentPosts} />
}
