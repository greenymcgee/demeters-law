import { INTERNAL_API_ROUTES } from '@/common/constants'
import mockAxios from 'jest-mock-axios'
import { act, renderHook, waitFor } from '@testing-library/react'
import { AxiosErrorFacade } from '@/common/facades'
import { logger } from '@/log'
import { AXIOS_ERROR, GET_POSTS_RESPONSE } from '../../../../../fixtures'
import { TestSWRConfig } from '../../../../../jest.components'
import { usePosts } from '..'
import { PostsDataFacade } from '../../facades'

afterEach(() => {
  mockAxios.reset()
})

describe('usePosts Tests', () => {
  it('should return the currentPosts when data is present', async () => {
    const { result } = renderHook(() => usePosts(), { wrapper: TestSWRConfig })
    expect(logger.info).toHaveBeenCalledWith('Fetching latest posts')
    expect(result.current.currentPosts).toEqual([])
    expect(result.current.isLoading).toEqual(true)
    act(() => {
      mockAxios.mockResponseFor(INTERNAL_API_ROUTES.posts, {
        data: GET_POSTS_RESPONSE,
      })
    })
    await waitFor(() => expect(result.current.isLoading).toEqual(false))
    expect(result.current.data).toEqual(GET_POSTS_RESPONSE)
    expect(result.current.currentPosts).toEqual(
      new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts,
    )
    expect(result.current.error).toBeUndefined()
  })

  it('should return the errorMessage upon failure', async () => {
    const { result } = renderHook(() => usePosts(), { wrapper: TestSWRConfig })
    expect(logger.info).toHaveBeenCalledWith('Fetching latest posts')
    act(() => {
      const request = mockAxios.getReqByMatchUrl(/posts/)
      mockAxios.mockError(AXIOS_ERROR, request)
    })
    await waitFor(() => expect(result.current.isLoading).toEqual(false))
    expect(logger.error).toHaveBeenCalledWith(
      { error: AXIOS_ERROR },
      'Encountered error within usePosts',
    )
    expect(result.current.data).toBeUndefined()
    expect(result.current.error).toEqual(AXIOS_ERROR)
    expect(result.current.currentPosts).toEqual([])
    expect(result.current.errorMessage).toEqual(
      new AxiosErrorFacade(AXIOS_ERROR).message,
    )
  })
})
