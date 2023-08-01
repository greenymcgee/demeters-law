/* eslint-disable max-classes-per-file */
import { noop } from 'swr/_internal'
import { isFunction, isNumber, isObject, isPlainObject, isString } from '..'

describe('is', () => {
  describe('isString', () => {
    it('should only return true when given a string', () => {
      expect(isString(null)).toBe(false)
      expect(isString(undefined)).toBe(false)
      expect(isString('')).toBe(true)
      expect(isString('foo')).toBe(true)
      expect(isString(/foo/)).toBe(false)
      expect(isString(0)).toBe(false)
      expect(isString({})).toBe(false)
      expect(isString(class {})).toBe(false)
      expect(isString(new (class {})())).toBe(false)
      expect(isString([])).toBe(false)
      expect(isString(true)).toBe(false)
    })
  })
  describe('isObject', () => {
    it('Should return true if given any object', () => {
      expect(isObject(0)).toBe(false)
      expect(isObject('')).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject('foo')).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject(undefined)).toBe(false)
      expect(isObject({})).toBe(true)
      expect(isObject([])).toBe(true)
      expect(isObject(/foo/)).toBe(true)
      expect(isObject(new (class {})())).toBe(true)
    })
  })
  describe('isFunction', () => {
    it('Should return true if given only a function', () => {
      expect(isFunction(null)).toBe(false)
      expect(isFunction(undefined)).toBe(false)
      expect(isFunction(0)).toBe(false)
      expect(isFunction('')).toBe(false)
      expect(isFunction('foo')).toBe(false)
      expect(isFunction(/foo/)).toBe(false)
      expect(isFunction(null)).toBe(false)
      expect(isFunction({})).toBe(false)
      expect(isFunction([])).toBe(false)
      expect(isFunction(new (class {})())).toBe(false)
    })
  })

  describe('isNumber', () => {
    it('Should only return true if given a non-NaN number', () => {
      expect(isNumber(undefined)).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber('')).toBe(false)
      expect(isNumber('foo')).toBe(false)
      expect(isNumber(/foo/)).toBe(false)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(-0)).toBe(true)
      expect(isNumber(1)).toBe(true)
      expect(isNumber(-1)).toBe(true)
      expect(isNumber(Infinity)).toBe(true)
      expect(isNumber(-Infinity)).toBe(true)
      expect(isNumber(NaN)).toBe(false)
      expect(isNumber('')).toBe(false)
      expect(isNumber({})).toBe(false)
      expect(isNumber(class {})).toBe(false)
      expect(isNumber(new (class {})())).toBe(false)
    })
  })

  describe('isPlainObject', () => {
    it('should return true only if given a plain object', () => {
      expect(isPlainObject(null)).toBe(false)
      expect(isPlainObject(undefined)).toBe(false)
      expect(isPlainObject(0)).toBe(false)
      expect(isPlainObject('')).toBe(false)
      expect(isPlainObject('foo')).toBe(false)
      expect(isPlainObject(/foo/)).toBe(false)
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject(noop)).toBe(false)
      expect(isPlainObject(class {})).toBe(false)
      expect(isPlainObject(new (class {})())).toBe(false)
      expect(isPlainObject({})).toBe(true)
    })
  })
})

/* eslint-enable max-classes-per-file */
