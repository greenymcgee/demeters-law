/* eslint-disable max-classes-per-file */
import {
  delegateArray,
  delegateNumber,
  delegateObject,
  delegateString,
} from '..'

type TestObj = Record<string, unknown>

describe('delegations', () => {
  describe('delegateArray', () => {
    it('should return only return arrays', () => {
      expect(delegateArray(undefined)).toEqual([])
      expect(delegateArray(null)).toEqual([])
      expect(delegateArray('' as unknown as [])).toEqual([])
      expect(delegateArray('foo-bar' as unknown as [])).toEqual([])
      expect(delegateArray(class {} as unknown as [])).toEqual([])
      expect(delegateArray(new (class {})() as unknown as [])).toEqual([])
      expect(delegateArray(0 as unknown as [])).toEqual([])
      expect(delegateArray({} as unknown as [])).toEqual([])
      expect(delegateArray(false as unknown as [])).toEqual([])
      expect(delegateArray(['1', '2'])).toEqual(['1', '2'])
    })

    it('should return the default value when it is present and value is undefined', () => {
      const defaultValue = [{ bill: 'bill' }]
      const result = delegateArray(undefined, defaultValue)
      expect(result).toEqual(defaultValue)
    })
  })

  describe('delegateNumber', () => {
    it('should return 0 when the value is undefined', () => {
      expect(delegateNumber(undefined)).toEqual(0)
      expect(delegateNumber(null)).toEqual(0)
      expect(delegateNumber('' as unknown as number)).toEqual(0)
      expect(delegateNumber('foo-bar' as unknown as number)).toEqual(0)
      expect(delegateNumber(class {} as unknown as number)).toEqual(0)
      expect(delegateNumber(new (class {})() as unknown as number)).toEqual(0)
      expect(delegateNumber([] as unknown as number)).toEqual(0)
      expect(delegateNumber({} as unknown as number)).toEqual(0)
      expect(delegateNumber(false as unknown as number)).toEqual(0)
      expect(delegateNumber(43.5)).toEqual(43.5)
    })

    it('should return the default value when it is present and value is undefined', () => {
      const defaultValue = 23
      const result = delegateNumber(undefined, defaultValue)
      expect(result).toEqual(defaultValue)
    })
  })

  describe('delegateObject', () => {
    it('should return an object when the value is undefined', () => {
      expect(delegateObject(undefined)).toEqual({})
      expect(delegateObject(null)).toEqual({})
      expect(delegateObject('' as unknown as TestObj)).toEqual({})
      expect(delegateObject('foo-bar' as unknown as TestObj)).toEqual({})
      expect(delegateObject(class {} as unknown as TestObj)).toEqual({})
      expect(delegateObject(new (class {})() as unknown as TestObj)).toEqual({})
      expect(delegateObject([] as unknown as TestObj)).toEqual({})
      expect(delegateObject(0 as unknown as TestObj)).toEqual({})
      expect(delegateObject(false as unknown as TestObj)).toEqual({})
      expect(delegateObject({ bill: 'test' })).toEqual({ bill: 'test' })
    })

    it('should return the default value when it is present and value is undefined', () => {
      const defaultValue = { bill: 'bill' }
      const result = delegateObject(undefined, defaultValue)
      expect(result).toEqual(defaultValue)
    })
  })

  describe('delegateString', () => {
    it('should return a string when the value is undefined', () => {
      expect(delegateString(undefined)).toEqual('')
      expect(delegateString(null)).toEqual('')
      expect(delegateString({} as unknown as string)).toEqual('')
      expect(delegateString(class {} as unknown as string)).toEqual('')
      expect(delegateString(new (class {})() as unknown as string)).toEqual('')
      expect(delegateString([] as unknown as string)).toEqual('')
      expect(delegateString(0 as unknown as string)).toEqual('')
      expect(delegateString(false as unknown as string)).toEqual('')
      expect(delegateString('foo-bar' as unknown as string)).toEqual('foo-bar')
    })

    it('should return the default value when it is present and value is undefined', () => {
      const defaultValue = 'ted'
      const result = delegateString(undefined, defaultValue)
      expect(result).toEqual(defaultValue)
    })
  })
})
