'use client'

import { Spinner } from '@/common/components'
import Image, { ImageLoaderProps } from 'next/image'
import React from 'react'
import { usePosts } from '../hooks'
import { PostRecord } from '../types'

function imageLoader({ src }: ImageLoaderProps): string {
  return `https://picsum.photos/id/${src}/600`
}

function renderPost(post: PostRecord) {
  return (
    <li className="rounded shadow-lg" key={post.id}>
      <div className="aspect-h-3 aspect-w-4 relative bg-gray-300">
        <Image
          alt={`${post.title} Background Image`}
          className="rounded-tl rounded-tr"
          fill
          loader={imageLoader}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={post.imageId}
        />
      </div>
      <p className="p-2 font-bold text-blue-900">{post.title}</p>
    </li>
  )
}

export function PostsList(): JSX.Element {
  const { currentPosts, isValidating } = usePosts()

  return (
    <ul
      className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
      data-testid="posts-list"
    >
      {currentPosts.map(renderPost)}
      {isValidating && (
        <li>
          <Spinner>Fetching latest posts...</Spinner>
        </li>
      )}
    </ul>
  )
}
