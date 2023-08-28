import useSWR from 'swr'
import { apis } from '@/common/utils'
import { AxiosErrorFacade } from '@/common/facades'
import { INTERNAL_API_ROUTES } from '@/common/constants'
import { logger } from '@/log'
import { useMemo } from 'react'
import { GetPostsResponse, UsePosts } from '../types'
import { PostsDataFacade } from '../facades'

const { internal } = apis

function handlePostsError(error: unknown) {
  logger.error({ error }, 'Encountered error within usePosts')
}

async function fetchPosts(pathname: string): Promise<GetPostsResponse> {
  return internal.get(pathname).then(({ data }) => data)
}

export function usePosts(): UsePosts {
  const query = useSWR(INTERNAL_API_ROUTES.posts, fetchPosts, {
    onError: handlePostsError,
  })

  const { currentPosts, hasPosts } = useMemo(
    () => new PostsDataFacade(query.data),
    [query.data],
  )
  // TODO: toast on error instead
  const { message: errorMessage } = useMemo(
    () => new AxiosErrorFacade(query.error),
    [query.error],
  )

  return { ...query, currentPosts, hasPosts, errorMessage }
}
