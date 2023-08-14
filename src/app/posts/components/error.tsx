'use client'

import React, { useCallback } from 'react'
import { usePosts } from '../hooks'

export function PostsError(): JSX.Element {
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
