import { INTERNAL_API_ROUTES } from '@/common/constants'
import { apis } from '@/common/utils'
import { logger } from '@/log'
import { GetPostsResponse } from './types'

export async function fetchFallbackPosts(): Promise<GetPostsResponse | void> {
  try {
    logger.info('Fetching fallback posts')
    const { data } = await apis.internal.get<GetPostsResponse>(
      INTERNAL_API_ROUTES.posts,
    )
    logger.info('Fetched fallback posts successfully')
    return data
  } catch (error) {
    return logger.error({ error }, 'Encountered error fetching fallback posts')
  }
}
