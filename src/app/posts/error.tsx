'use client'

import React, { ReactElement, useCallback } from 'react'
import { usePosts } from './hooks'

export default function PostsError(): ReactElement | null {
  const { mutate } = usePosts()
  const handleClick = useCallback(() => mutate(), [mutate])

  return (
    <>
      <div data-testid="posts-error">
        <p>Something went wrong.</p>
        <button onClick={handleClick} type="button">
          Try Again
        </button>
      </div>
      <br />
    </>
  )
}
