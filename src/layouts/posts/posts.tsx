import React, { ReactElement } from 'react'
import { PostsEmpty } from './empty'
import { PostsError } from './error'
import { PostsList } from './list'
import { PostsLoader } from './loader'
import { PostsProps } from './types'

export function Posts({
  currentPosts,
  error,
  errorMessage,
  hasPosts,
  isLoading,
  mutate,
}: PostsProps): ReactElement | null {
  // TODO: toast on error instead
  if (error) return <PostsError errorMessage={errorMessage} mutate={mutate} />

  if (isLoading) return <PostsLoader />

  if (!hasPosts) return <PostsEmpty />

  return <PostsList currentPosts={currentPosts} />
}
