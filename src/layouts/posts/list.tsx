import React from 'react'
import { PostRecord } from '@/types/posts'
import { PostsProps } from './types'

function renderPost(post: PostRecord) {
  return <li key={post.id}>{post.title}</li>
}

export function PostsList({
  currentPosts,
}: Pick<PostsProps, 'currentPosts'>): JSX.Element {
  return <ul data-testid="posts-list">{currentPosts.map(renderPost)}</ul>
}
