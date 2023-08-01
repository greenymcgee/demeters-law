import {
  GET_POSTS_RESPONSE,
  GET_POSTS_RESPONSE_WITHOUT_POSTS,
} from '@/fixtures/posts'
import { PostsDataFacade } from '..'

describe('PostsDataFacade Tests', () => {
  describe('delegations', () => {
    describe('posts', () => {
      it('should return an empty array when posts are undefined', () => {
        const result = new PostsDataFacade(undefined)
        expect(result.posts).toEqual([])
      })

      it('should return all of the given posts', () => {
        const result = new PostsDataFacade(GET_POSTS_RESPONSE)
        expect(result.posts).toEqual(GET_POSTS_RESPONSE.posts)
      })
    })
  })

  describe('currentPosts', () => {
    it('should only return posts that have not expired', () => {
      const expectation = GET_POSTS_RESPONSE.posts.filter(
        (post) => new Date(post.expiresAt).getTime() > Date.now(),
      )
      const result = new PostsDataFacade(GET_POSTS_RESPONSE)
      expect(result.currentPosts).toEqual(expectation)
    })
  })

  describe('hasPosts', () => {
    it('should return true when posts are present', () => {
      const result = new PostsDataFacade(GET_POSTS_RESPONSE)
      expect(result.hasPosts).toEqual(true)
    })

    it('should return false when posts are empty', () => {
      const result = new PostsDataFacade(GET_POSTS_RESPONSE_WITHOUT_POSTS)
      expect(result.hasPosts).toEqual(false)
    })
  })
})
