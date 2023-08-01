import useSWR, { SWRConfiguration } from 'swr'
import { AxiosErrorFacade } from '@/facades'
import axios from 'axios'
import { useMemo } from 'react'
import { UsePosts } from '../types'
import { PostsDataFacade } from '../facades'

async function fetchPosts(url: string) {
  return axios.get(url).then((response) => response.data)
}

export function usePosts(config?: SWRConfiguration): UsePosts {
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
