'use client'

import Image, { ImageLoaderProps } from 'next/image'
import React from 'react'
import { usePosts } from '../hooks'
import { PostRecord } from '../types'

function imageLoader({ src }: ImageLoaderProps): string {
  return `https://picsum.photos/id/${src}/300/225`
}

function renderPost(post: PostRecord) {
  return (
    <li key={post.id}>
      <div>
        <b>{post.title}</b>
      </div>
      <Image
        alt={post.title}
        height={225}
        loader={imageLoader}
        priority
        src={post.imageId}
        width={300}
      />
    </li>
  )
}

export function PostsList(): JSX.Element {
  const { currentPosts, isValidating } = usePosts()

  return (
    <>
      <ul data-testid="posts-list">{currentPosts.map(renderPost)}</ul>
      {isValidating && <p>Fetching latest posts...</p>}
    </>
  )
}
