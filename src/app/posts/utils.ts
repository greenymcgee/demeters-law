import { INTERNAL_API_ROUTES } from '@/constants'
import { apis } from '@/utils'
import { GetPostsResponse } from './types'

export async function fetchFallbackPosts(): Promise<
  GetPostsResponse | undefined
> {
  try {
    const { data } = await apis.internal.get<GetPostsResponse>(
      INTERNAL_API_ROUTES.posts,
    )
    return data
  } catch (error) {
    // TODO: log the error with winston
    return undefined
  }
}
