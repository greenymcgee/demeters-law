import { INTERNAL_API_ROUTES } from '@/common/constants'
import mockAxios from 'jest-mock-axios'
import { logger } from '@/log'
import { fetchFallbackPosts } from '../utils'
import { AXIOS_ERROR, GET_POSTS_RESPONSE } from '../../../../fixtures'

afterEach(() => {
  mockAxios.reset()
})

describe('posts utils', () => {
  describe('fetchFallbackPosts', () => {
    it('should return the data from the response upon success', async () => {
      mockAxios.get.mockResolvedValue({ data: GET_POSTS_RESPONSE })
      const result = await fetchFallbackPosts()
      expect(logger.info).toHaveBeenCalledWith('Fetching fallback posts')
      expect(logger.info).toHaveBeenCalledWith(
        'Fetched fallback posts successfully',
      )
      expect(mockAxios.get).toHaveBeenCalledWith(INTERNAL_API_ROUTES.posts)
      expect(result).toEqual(GET_POSTS_RESPONSE)
    })

    it('should log the error', async () => {
      mockAxios.get.mockRejectedValue(AXIOS_ERROR)
      const result = await fetchFallbackPosts()
      expect(logger.info).toHaveBeenCalledWith('Fetching fallback posts')
      expect(logger.error).toHaveBeenCalledWith(
        { error: AXIOS_ERROR },
        'Encountered error fetching fallback posts',
      )
      expect(mockAxios.get).toHaveBeenCalledWith(INTERNAL_API_ROUTES.posts)
      expect(result).toBeUndefined()
    })
  })
})
