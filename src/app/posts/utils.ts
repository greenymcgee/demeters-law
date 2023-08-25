import { INTERNAL_API_ROUTES } from '@/common/constants'
import { AxiosErrorFacade } from '@/common/facades'
import { apis } from '@/common/utils'
import { DLLogger } from '@/log'
import { GetPostsResponse } from './types'

const log = DLLogger()

export async function fetchFallbackPosts(): Promise<GetPostsResponse | void> {
  try {
    log.info('Fetching fallback posts')
    const { data } = await apis.internal.get<GetPostsResponse>(
      INTERNAL_API_ROUTES.posts,
    )
    log.info('Fallback posts data fetched successfully')
    return data
  } catch (error) {
    return log.error(new AxiosErrorFacade(error).message, { error })
  } finally {
    log.flush()
  }
}
