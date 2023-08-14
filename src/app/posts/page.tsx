import React from 'react'
import { Posts, PostsSWRConfig } from './components'
import { fetchFallbackPosts } from './utils'

export default async function PostsPage(): Promise<JSX.Element> {
  const fallbackPosts = await fetchFallbackPosts()

  return (
    <PostsSWRConfig fallbackPosts={fallbackPosts}>
      <Posts />
    </PostsSWRConfig>
  )
}
