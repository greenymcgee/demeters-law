import { INTERNAL_API_ROUTES } from '@/constants'
import mockAxios from 'jest-mock-axios'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { EXPIRED_POST_1, GET_POSTS_RESPONSE } from '@/fixtures/posts'
import PostsPage from '../page'
import { PostsDataFacade } from '../facades'

describe('<PostsPage /> test', () => {
  it('should render the posts', async () => {
    mockAxios.get.mockResolvedValue({ data: GET_POSTS_RESPONSE })
    const jsx = await PostsPage()
    expect(mockAxios.get).toHaveBeenCalledWith(INTERNAL_API_ROUTES.posts)
    render(jsx)
    await waitForElementToBeRemoved(screen.queryByTestId('posts-loader'))
    expect(screen.queryByText(EXPIRED_POST_1.title)).not.toBeInTheDocument()
    new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeVisible()
    })
  })
})
