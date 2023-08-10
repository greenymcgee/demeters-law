import useSWR from 'swr'
import { AxiosErrorFacade } from '@/facades'
import { INTERNAL_API_ROUTES } from '@/constants'
import { useMemo } from 'react'
import { GetPostsResponse, UsePosts } from '../types'
import { PostsDataFacade } from '../facades'
import { apis } from '@/utils'

const { internal } = apis

async function fetchPosts(pathname: string): Promise<GetPostsResponse> {
  return internal.get(pathname).then(({ data }) => data)
}

export function usePosts(): UsePosts {
  const query = useSWR(INTERNAL_API_ROUTES.posts, fetchPosts)

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
