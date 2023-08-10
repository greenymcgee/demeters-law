import { CAMEL_CASED, SNAKE_CASED } from '../../../../fixtures'
import { snakeCaseKeys } from '..'

describe('snakeCaseKeys', () => {
  it('should return a snake cased object', () => {
    const result = snakeCaseKeys(CAMEL_CASED)
    expect(result).toEqual(SNAKE_CASED)
  })
})
