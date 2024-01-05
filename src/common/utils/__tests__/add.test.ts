import { add } from '../add'

describe('add', () => {
  it('should add a + b', () => {
    const result = add(1, 2)
    expect(result).toEqual(3)
  })

  it('should throw an error when a is NaN', () => {
    expect(add).toThrow(`Value given for "a" was NaN ${undefined}`)
  })

  it('should throw an error when b is NaN', () => {
    const result = () => {
      // @ts-ignore
      add(1, {})
    }
    expect(result).toThrow(`Value given for "b" was NaN ${{}}`)
  })
})
