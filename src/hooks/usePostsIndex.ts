import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import { AxiosErrorFacade, PostsDataFacade } from '@/facades'
import { GetPostsResponse } from '@/types/posts'
import axios, { AxiosError } from 'axios'
import { useMemo } from 'react'

type UsePostsIndexExtensions = SWRResponse<GetPostsResponse, AxiosError> &
  Pick<PostsDataFacade, 'currentPosts' | 'hasPosts'>

// TODO figure out where these types go
export interface UsePostsIndex extends UsePostsIndexExtensions {
  errorMessage: AxiosErrorFacade['message']
}

async function fetchPosts(url: string) {
  return axios.get(url).then((response) => response.data)
}

export function usePostsIndex(config?: SWRConfiguration): UsePostsIndex {
  const query = useSWR('/api/posts', fetchPosts, config)

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
