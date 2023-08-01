import { UsePostsIndex } from '@/hooks'
import React, { ReactElement, useCallback } from 'react'

interface PostsErrorProps {
  errorMessage: UsePostsIndex['errorMessage']
  mutate: UsePostsIndex['mutate']
}

export function PostsError({
  errorMessage,
  mutate,
}: PostsErrorProps): ReactElement | null {
  const tryAgain = useCallback(() => mutate(), [mutate])

  return (
    <>
      <div data-testid="posts-error">
        <p>{errorMessage}</p>
        <button onClick={tryAgain} type="button">
          Try Again
        </button>
      </div>
      <br />
    </>
  )
}
