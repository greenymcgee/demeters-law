import { getDaysFromNow } from '../getDaysFromNow'

describe('getDaysFromNow', () => {
  it('should return a Date set to the number of days given from now', () => {
    const expectation = new Date()
    expectation.setDate(expectation.getDate() + 4)
    const result = getDaysFromNow(4)
    expect(result).toEqual(expectation)
  })
})
