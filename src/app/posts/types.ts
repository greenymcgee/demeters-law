import { AxiosErrorFacade } from '@/common/facades'
import { AxiosError } from 'axios'
import { SWRResponse } from 'swr'

export interface PostRecord {
  createdAt: string
  expiresAt: string
  id: number
  title: string
  imageId: string
}

export interface GetPostsResponse {
  posts: PostRecord[]
}

export interface UsePosts extends SWRResponse<GetPostsResponse, AxiosError> {
  errorMessage: AxiosErrorFacade['message']
  currentPosts: PostRecord[]
  hasPosts: boolean
}

export interface PostsSWRConfigProps {
  fallbackPosts: GetPostsResponse | undefined
}

export type PostsListProps = Pick<UsePosts, 'currentPosts'>
