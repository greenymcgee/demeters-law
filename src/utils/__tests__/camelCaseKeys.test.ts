import { CAMEL_CASED, SNAKE_CASED } from '@/fixtures'
import { camelCaseKeys } from '..'

describe('camelCaseKeys', () => {
  it('should return a camel cased object', () => {
    const result = camelCaseKeys(SNAKE_CASED)
    expect(result).toEqual(CAMEL_CASED)
  })
})
