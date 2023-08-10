import { GetPostsResponse, PostRecord } from '@/app/posts/types'
import { getDaysFromNow } from '@/common/utils'

export const EXPIRED_POST_1: PostRecord = {
  createdAt: '1-1-1999',
  expiresAt: '1-2-1999',
  id: 1,
  title: 'An Expired Post With a Title',
}

export const CURRENT_POST_1: PostRecord = {
  id: 2,
  title: 'A Current Post - expires in 5 days',
  createdAt: getDaysFromNow(-60).toISOString(),
  expiresAt: getDaysFromNow(5).toISOString(),
}

const CURRENT_POST_2 = {
  id: 3,
  title: 'A Current Post - expires in 43 days',
  createdAt: getDaysFromNow(-43).toISOString(),
  expiresAt: getDaysFromNow(43).toISOString(),
}

export const GET_POSTS_RESPONSE: GetPostsResponse = {
  posts: [EXPIRED_POST_1, CURRENT_POST_1, CURRENT_POST_2],
}

export const GET_POSTS_RESPONSE_WITHOUT_POSTS: GetPostsResponse = {
  posts: [],
}
