import { INTERNAL_API_ROUTES } from '@/common/constants'
import React from 'react'
import mockAxios from 'jest-mock-axios'
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { TestSWRConfig } from '../../../../../jest.components'
import {
  AXIOS_ERROR,
  EXPIRED_POST_1,
  GET_POSTS_RESPONSE,
  GET_POSTS_RESPONSE_WITHOUT_POSTS,
} from '../../../../../fixtures'
import { Posts } from '..'
import { PostsDataFacade } from '../../facades'

afterEach(() => {
  mockAxios.reset()
})

describe('<Posts /> tests', () => {
  it('should render the error', async () => {
    render(<Posts />, { wrapper: TestSWRConfig })
    act(() => {
      const request = mockAxios.getReqByMatchUrl(/posts/)
      mockAxios.mockError(AXIOS_ERROR, request)
    })
    await waitForElementToBeRemoved(screen.getByTestId('posts-loader'))
    expect(screen.getByTestId('posts-error')).toBeVisible()
    expect(screen.queryByTestId('posts-empty')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).not.toBeInTheDocument()
  })

  it('should render default message if no posts are returned', async () => {
    render(<Posts />, { wrapper: TestSWRConfig })
    act(() =>
      mockAxios.mockResponseFor(INTERNAL_API_ROUTES.posts, {
        data: GET_POSTS_RESPONSE_WITHOUT_POSTS,
      }),
    )
    await waitForElementToBeRemoved(screen.getByTestId('posts-loader'))
    expect(screen.queryByTestId('posts-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-empty')).toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).not.toBeInTheDocument()
  })

  it('should render the currentPosts when given', async () => {
    render(<Posts />, { wrapper: TestSWRConfig })
    act(() =>
      mockAxios.mockResponseFor(INTERNAL_API_ROUTES.posts, {
        data: GET_POSTS_RESPONSE,
      }),
    )
    await waitForElementToBeRemoved(screen.getByTestId('posts-loader'))
    expect(screen.queryByTestId('posts-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-empty')).not.toBeInTheDocument()
    expect(screen.queryByTestId('posts-list')).toBeVisible()
    expect(screen.queryByText(EXPIRED_POST_1.title)).not.toBeInTheDocument()
    new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeVisible()
      expect(
        screen.getByAltText(`${post.title} Background Image`),
      ).toBeVisible()
    })
  })
})
