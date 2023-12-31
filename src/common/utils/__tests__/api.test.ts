import mockAxios from 'jest-mock-axios'
import {
  apis,
  camelCaseKeys,
  camelCaseResponseDataKeys,
  createApis,
  snakeCaseKeys,
} from '@/common/utils'
import { INTERNAL_API_HOST } from '@/common/constants'
import { AXIOS_RESPONSE, GET_POSTS_RESPONSE } from '../../../../fixtures'

describe('api utils', () => {
  describe('camelCaseResponseDataKeys', () => {
    it("should camel case the data's keys", () => {
      const result = camelCaseResponseDataKeys({
        ...AXIOS_RESPONSE,
        data: snakeCaseKeys(GET_POSTS_RESPONSE),
      })
      expect(result).toEqual({
        ...AXIOS_RESPONSE,
        data: camelCaseKeys(GET_POSTS_RESPONSE),
      })
    })

    it('should camel case data that is an array', () => {
      const result = camelCaseResponseDataKeys({
        ...AXIOS_RESPONSE,
        data: GET_POSTS_RESPONSE.posts.map(snakeCaseKeys),
      })
      expect(result).toEqual({
        ...AXIOS_RESPONSE,
        data: GET_POSTS_RESPONSE.posts.map(camelCaseKeys),
      })
    })

    it('should work with undefined data', () => {
      const result = camelCaseResponseDataKeys({
        ...AXIOS_RESPONSE,
        data: undefined,
      })
      expect(result.data).toEqual(undefined)
    })

    it('should work with null data', () => {
      const result = camelCaseResponseDataKeys({
        ...AXIOS_RESPONSE,
        data: null,
      })
      expect(result.data).toEqual(null)
    })
  })

  describe('createApis', () => {
    it('should create the internal api', () => {
      const { internal } = createApis()
      expect(mockAxios.create).toHaveBeenCalledWith({
        baseURL: INTERNAL_API_HOST,
      })
      expect(internal.interceptors.response.use).toHaveBeenCalledWith(
        camelCaseResponseDataKeys,
      )
    })

    it('should add camelCaseResponseDataKeys to response interceptors', () => {
      createApis()
      expect(mockAxios.interceptors.response.use).toHaveBeenCalledWith(
        camelCaseResponseDataKeys,
      )
    })
  })

  describe('apis', () => {
    expect(apis).toEqual(createApis())
  })
})
