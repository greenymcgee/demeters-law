import { AXIOS_ERROR } from '@/fixtures/axiosError'
import { INTERNAL_API_ROUTES } from '@/common/constants'
import { GET_POSTS_RESPONSE } from '@/fixtures/posts'
import mockAxios from 'jest-mock-axios'
import { fetchFallbackPosts } from '../utils'

afterEach(() => {
  mockAxios.reset()
})

describe('posts utils', () => {
  describe('fetchFallbackPosts', () => {
    it('should return the data from the response upon success', async () => {
      mockAxios.get.mockResolvedValue({ data: GET_POSTS_RESPONSE })
      const result = await fetchFallbackPosts()
      expect(mockAxios.get).toHaveBeenCalledWith(INTERNAL_API_ROUTES.posts)
      expect(result).toEqual(GET_POSTS_RESPONSE)
    })

    it('should log the error', async () => {
      mockAxios.get.mockRejectedValue(AXIOS_ERROR)
      const result = await fetchFallbackPosts()
      expect(mockAxios.get).toHaveBeenCalledWith(INTERNAL_API_ROUTES.posts)
      expect(result).toBeUndefined()
      // TODO: test logger here
      // expect(serverLogger.error).toHaveBeenCalledWith('blah')
    })
  })
})
