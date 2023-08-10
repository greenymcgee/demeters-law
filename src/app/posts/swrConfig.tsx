'use client'

import { INTERNAL_API_ROUTES } from '@/constants'
import React, { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'
import { PostsSWRConfigProps } from './types'

const { posts } = INTERNAL_API_ROUTES

export function PostsSWRConfig({
  children,
  fallbackPosts,
}: PropsWithChildren<PostsSWRConfigProps>): JSX.Element {
  return (
    <SWRConfig value={{ fallback: { [posts]: fallbackPosts } }}>
      {children}
    </SWRConfig>
  )
}
