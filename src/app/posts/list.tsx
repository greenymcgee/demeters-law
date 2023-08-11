'use client'

import Image, { ImageLoaderProps } from 'next/image'
import React from 'react'
import { PostRecord, PostsListProps } from './types'

function imageLoader({ src, width }: ImageLoaderProps): string {
  return `https://picsum.photos/id/${src}/${width}`
}

function renderPost(post: PostRecord) {
  return (
    <li key={post.id}>
      <div>
        <b>{post.title}</b>
      </div>
      <Image
        alt={post.title}
        height={200}
        loader={imageLoader}
        priority
        src={post.imageId}
        width={300}
      />
    </li>
  )
}

export function PostsList({ currentPosts }: PostsListProps): JSX.Element {
  return <ul data-testid="posts-list">{currentPosts.map(renderPost)}</ul>
}
