import { INTERNAL_API_ROUTES } from '@/common/constants'
import React from 'react'
import mockAxios from 'jest-mock-axios'
import { act, render, screen } from '@testing-library/react'
import { TestSWRConfig } from '../../../../../jest.components'
import {
  CURRENT_POST_1,
  EXPIRED_POST_1,
  GET_POSTS_RESPONSE,
} from '../../../../../fixtures'
import { PostsList } from '../list'
import { PostsDataFacade } from '../../facades'

afterEach(() => {
  mockAxios.reset()
})

describe('<PostsList /> tests', () => {
  it('should render current posts and show a message while updating', async () => {
    render(<PostsList />, { wrapper: TestSWRConfig })
    expect(screen.getByText('Fetching latest posts...')).toBeVisible()
    act(() =>
      mockAxios.mockResponseFor(INTERNAL_API_ROUTES.posts, {
        data: GET_POSTS_RESPONSE,
      }),
    )
    await screen.findByText(CURRENT_POST_1.title)
    expect(screen.queryByText(EXPIRED_POST_1.title)).not.toBeInTheDocument()
    new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts.forEach((post) => {
      const image = screen.getByAltText(post.title)
      expect(screen.getByText(post.title)).toBeVisible()
      expect(image).toBeVisible()
      expect(image).toHaveAttribute(
        'src',
        `https://picsum.photos/id/${post.imageId}/300/225`,
      )
    })
    expect(
      screen.queryByText('Fetching latest posts...'),
    ).not.toBeInTheDocument()
  })
})
