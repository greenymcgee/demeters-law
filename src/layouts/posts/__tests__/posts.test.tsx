import React from 'react'
import { render, screen } from '@testing-library/react'
import { AXIOS_ERROR } from '@/fixtures/axiosError'
import { Posts } from '..'
import { GET_POSTS_RESPONSE } from '../../../fixtures/posts'

const { posts } = GET_POSTS_RESPONSE
const mutate = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

describe('<Posts /> Tests', () => {
  it('should render the error', () => {
    render(
      <Posts
        currentPosts={[]}
        error={AXIOS_ERROR}
        errorMessage="Server Error"
        hasPosts={false}
        isLoading={false}
        mutate={mutate}
      />,
    )
    expect(screen.getByTestId('posts-error')).toBeVisible()
    expect(screen.queryByTestId('posts-loader')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-empty')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).not.toBeInTheDocument()
  })

  it('should render a loader while the data is loading', () => {
    render(
      <Posts
        currentPosts={[]}
        error={undefined}
        errorMessage=""
        hasPosts={false}
        isLoading
        mutate={mutate}
      />,
    )
    expect(screen.queryByTestId('posts-error')).not.toBeInTheDocument()
    expect(screen.getByTestId('posts-loader')).toBeVisible()
    expect(screen.queryByTestId('posts-empty')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).not.toBeInTheDocument()
  })

  it('should render default message if no posts are returned', () => {
    render(
      <Posts
        currentPosts={[]}
        error={undefined}
        errorMessage=""
        hasPosts={false}
        isLoading={false}
        mutate={mutate}
      />,
    )
    expect(screen.queryByTestId('posts-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-loader')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-empty')).toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).not.toBeInTheDocument()
  })

  it('should render the currentPosts when given and loading is finished', () => {
    render(
      <Posts
        currentPosts={posts}
        error={undefined}
        errorMessage=""
        hasPosts
        isLoading={false}
        mutate={mutate}
      />,
    )
    expect(screen.queryByTestId('posts-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-loader')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-empty')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).toBeVisible()
  })
})
