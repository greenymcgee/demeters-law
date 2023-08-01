import React from 'react'
import { AXIOS_ERROR } from '@/fixtures/axiosError'
import mockAxios from 'jest-mock-axios'
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import {
  EXPIRED_POST_1,
  GET_POSTS_RESPONSE,
  GET_POSTS_RESPONSE_WITHOUT_POSTS,
} from '@/fixtures/posts'
import PostsPage from '../page'
import { TestSWRConfig } from '../../../../jest.components'
import { PostsDataFacade } from '../facades'

afterEach(() => {
  mockAxios.reset()
})

describe('<PostsPage /> Tests', () => {
  it('should render the posts upon GET request success', async () => {
    render(<PostsPage />, { wrapper: TestSWRConfig })
    act(() => {
      mockAxios.mockResponseFor('/api/posts', { data: GET_POSTS_RESPONSE })
    })
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.queryByText(EXPIRED_POST_1.title)).not.toBeInTheDocument()
    new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeVisible()
    })
  })

  it('should render an empty posts message', async () => {
    render(<PostsPage />, { wrapper: TestSWRConfig })
    act(() => {
      mockAxios.mockResponseFor('/api/posts', {
        data: GET_POSTS_RESPONSE_WITHOUT_POSTS,
      })
    })
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.getByTestId('posts-empty')).toBeVisible()
  })

  it('should not display posts and should display the error if the api throws one', async () => {
    render(<PostsPage />, { wrapper: TestSWRConfig })
    act(() => {
      const request = mockAxios.getReqByMatchUrl(/posts/)
      mockAxios.mockError(AXIOS_ERROR, request)
    })
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.getByTestId('posts-error')).toBeVisible()
  })
})
