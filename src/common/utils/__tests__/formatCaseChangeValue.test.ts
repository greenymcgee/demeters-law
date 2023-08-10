import { formatCaseChangeValue } from '..'

const callback = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

describe('formatCaseChangeValue', () => {
  it('should call the callback with the value if value is a plain object', () => {
    const value = { test: 'test' }
    formatCaseChangeValue(value, callback)
    expect(callback).toHaveBeenCalledWith(value)
  })

  it('should map through an array and call the callback with each value', () => {
    const value = [{ test: 'test' }, { testTwo: 'test two' }]
    formatCaseChangeValue(value, callback)
    value.forEach((obj) => {
      expect(callback).toHaveBeenCalledWith(obj)
    })
  })

  it('should return the value when it is not an array or plain object', () => {
    const value = 'test'
    const result = formatCaseChangeValue(value, callback)
    expect(result).toEqual(value)
    expect(callback).not.toHaveBeenCalled()
  })
})
