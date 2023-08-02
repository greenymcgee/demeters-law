import { AXIOS_RESPONSE } from '@/fixtures'
import { GET_POSTS_RESPONSE } from '@/fixtures/posts'
import { camelCaseKeys, snakeCaseKeys } from '@/utils/caseFormats'
import { camelCaseResponseDataKeys } from '../utils'

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
