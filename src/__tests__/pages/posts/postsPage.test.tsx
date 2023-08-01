import React from 'react'
import { AXIOS_ERROR } from '@/fixtures/axiosError'
import mockAxios from 'jest-mock-axios'
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import PostsPage from '@/pages/posts'
import {
  EXPIRED_POST_1,
  GET_POSTS_RESPONSE,
  GET_POSTS_RESPONSE_WITHOUT_POSTS,
} from '@/fixtures/posts'
import { PostsDataFacade } from '@/facades'
import { TestProviders } from '../../../../jest.components'

function expectCommonPostsElementsToRender(): void {
  expect(screen.getByText('Posts')).toBeVisible()
  expect(screen.getByText('Back to Home')).toHaveAttribute('href', '/')
}

describe('<PostsPage /> Tests', () => {
  it('should render the posts upon GET request success', async () => {
    render(<PostsPage />, { wrapper: TestProviders })
    act(() => {
      mockAxios.mockResponseFor('/api/posts', { data: GET_POSTS_RESPONSE })
    })
    expectCommonPostsElementsToRender()
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.queryByText(EXPIRED_POST_1.title)).not.toBeInTheDocument()
    new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeVisible()
    })
  })

  it('should render an empty posts message', async () => {
    render(<PostsPage />, { wrapper: TestProviders })
    act(() => {
      mockAxios.mockResponseFor('/api/posts', {
        data: GET_POSTS_RESPONSE_WITHOUT_POSTS,
      })
    })
    expectCommonPostsElementsToRender()
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.getByTestId('posts-empty')).toBeVisible()
  })

  it('should not display posts and should display the error if the api throws one', async () => {
    render(<PostsPage />, { wrapper: TestProviders })
    act(() => {
      const request = mockAxios.getReqByMatchUrl(/posts/)
      mockAxios.mockError(AXIOS_ERROR, request)
    })
    expectCommonPostsElementsToRender()
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.getByTestId('posts-error')).toBeVisible()
  })
})
