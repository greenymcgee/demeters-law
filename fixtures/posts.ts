import { GetPostsResponse, PostRecord } from '@/app/posts/types'
import { getDaysFromNow } from '@/common/utils'

export const EXPIRED_POST_1: PostRecord = {
  createdAt: '1-1-1999',
  expiresAt: '1-2-1999',
  id: 1,
  imageId: '200',
  title: 'An Expired Post',
}

export const CURRENT_POST_1: PostRecord = {
  createdAt: getDaysFromNow(-60).toISOString(),
  expiresAt: getDaysFromNow(5).toISOString(),
  id: 2,
  imageId: '204',
  title: 'Sack Lunches',
}

const CURRENT_POST_2 = {
  createdAt: getDaysFromNow(-43).toISOString(),
  expiresAt: getDaysFromNow(43).toISOString(),
  id: 3,
  imageId: '206',
  title: '10 Musicians That Died at 27',
}

export const GET_POSTS_RESPONSE: GetPostsResponse = {
  posts: [EXPIRED_POST_1, CURRENT_POST_1, CURRENT_POST_2],
}

export const GET_POSTS_RESPONSE_WITHOUT_POSTS: GetPostsResponse = {
  posts: [],
}
