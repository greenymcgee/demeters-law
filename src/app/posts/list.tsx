import React from 'react'
import { PostRecord, UsePosts } from './types'

function renderPost(post: PostRecord) {
  return <li key={post.id}>{post.title}</li>
}

export function PostsList({
  currentPosts,
}: Pick<UsePosts, 'currentPosts'>): JSX.Element {
  return <ul data-testid="posts-list">{currentPosts.map(renderPost)}</ul>
}
