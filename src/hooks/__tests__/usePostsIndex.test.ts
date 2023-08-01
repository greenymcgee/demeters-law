import mockAxios from 'jest-mock-axios'
import { act, renderHook, waitFor } from '@testing-library/react'
import { AxiosErrorFacade, PostsDataFacade } from '@/facades'
import { GET_POSTS_RESPONSE } from '@/fixtures/posts'
import { AXIOS_ERROR } from '@/fixtures/axiosError'
import { usePostsIndex } from '..'
import { TestProviders } from '../../../jest.components'

afterEach(() => {
  mockAxios.reset()
})

describe('usePostsIndex Tests', () => {
  it('should return the currentPosts when data is present', async () => {
    const { result } = renderHook(() => usePostsIndex(), {
      wrapper: TestProviders,
    })
    expect(result.current.currentPosts).toEqual([])
    expect(result.current.isLoading).toEqual(true)
    act(() => {
      mockAxios.mockResponseFor('/api/posts', { data: GET_POSTS_RESPONSE })
    })
    await waitFor(() => expect(result.current.isLoading).toEqual(false))
    expect(result.current.data).toEqual(GET_POSTS_RESPONSE)
    expect(result.current.currentPosts).toEqual(
      new PostsDataFacade(GET_POSTS_RESPONSE).currentPosts,
    )
    expect(result.current.error).toBeUndefined()
  })

  it('should return the errorMessage upon failure', async () => {
    const { result } = renderHook(() => usePostsIndex(), {
      wrapper: TestProviders,
    })
    act(() => {
      const request = mockAxios.getReqByMatchUrl(/posts/)
      mockAxios.mockError(AXIOS_ERROR, request)
    })
    await waitFor(() => expect(result.current.isLoading).toEqual(false))
    expect(result.current.data).toBeUndefined()
    expect(result.current.error).toEqual(AXIOS_ERROR)
    expect(result.current.currentPosts).toEqual([])
    expect(result.current.errorMessage).toEqual(
      new AxiosErrorFacade(AXIOS_ERROR).message,
    )
  })
})
