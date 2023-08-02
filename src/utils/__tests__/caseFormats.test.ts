import {
  camelCaseKeys,
  snakeCaseKeys,
  toCamelCase,
  toSnakeCase,
} from '../caseFormats'

const NON_CASED = {
  array: ['not an object'],
  string: 'not an object',
  name: undefined,
  address: null,
}

const CASED_BOOLEAN = false
const CASED_NUMBER = 1
const NESTED_CLASS = class {}
const NEW_CLASS = new (class {})()
const EMPTY_OBJECT = {}

const CAMEL_CASED = {
  ...NON_CASED,
  arrayWithObjects: [{ shouldFormat: 'should format' }, 1],
  casedBoolean: CASED_BOOLEAN,
  casedNumber: CASED_NUMBER,
  nestedObject: {
    nestedClass: NESTED_CLASS,
    nestedObjectKeyTwo: { emptyObject: EMPTY_OBJECT, newClass: NEW_CLASS },
  },
}

const SNAKE_CASED = {
  ...NON_CASED,
  array_with_objects: [{ should_format: 'should format' }, 1],
  cased_boolean: CASED_BOOLEAN,
  cased_number: CASED_NUMBER,
  nested_object: {
    nested_class: NESTED_CLASS,
    nested_object_key_two: {
      empty_object: EMPTY_OBJECT,
      new_class: NEW_CLASS,
    },
  },
}

describe('caseFormats', () => {
  describe('toSnakeCase', () => {
    it('Should convert a string to snake case', () => {
      expect(toSnakeCase('')).toEqual('')
      expect(toSnakeCase('foo')).toEqual('foo')
      expect(toSnakeCase('foo bar')).toEqual('foo_bar')
      expect(toSnakeCase(' foo  bar  baz ')).toEqual('foo_bar_baz')
      expect(toSnakeCase('\nfoo\nbar\nbaz\n')).toEqual('foo_bar_baz')
      expect(toSnakeCase('foo-bar')).toEqual('foo_bar')
      expect(toSnakeCase('--foo--bar--baz--')).toEqual('foo_bar_baz')
      expect(toSnakeCase('-foo-bar-baz-')).toEqual('foo_bar_baz')
      expect(toSnakeCase('foo_bar')).toEqual('foo_bar')
      expect(toSnakeCase('_foo_bar_baz_')).toEqual('foo_bar_baz')
      expect(toSnakeCase('_foo_bar_baz_')).toEqual('foo_bar_baz')
      expect(toSnakeCase('fooBar')).toEqual('foo_bar')
      expect(toSnakeCase('fooBarBaz')).toEqual('foo_bar_baz')
      expect(toSnakeCase('_fooBarBaz_')).toEqual('foo_bar_baz')
      expect(toSnakeCase('[Object object]')).toEqual('object_object')
      expect(toSnakeCase('FOOBar')).toEqual('foo_bar')
      expect(toSnakeCase('FOOBarBAZQuxx_Fee')).toEqual('foo_bar_baz_quxx_fee')
    })
  })

  describe('toCamelCase', () => {
    describe('toCamelCase', () => {
      it('Should convert a string to camel case', () => {
        expect(toCamelCase('')).toEqual('')
        expect(toCamelCase('foo')).toEqual('foo')
        expect(toCamelCase('foo bar')).toEqual('fooBar')
        expect(toCamelCase(' foo  bar  baz ')).toEqual('fooBarBaz')
        expect(toCamelCase('\nfoo\nbar\nbaz\n')).toEqual('fooBarBaz')
        expect(toCamelCase('foo-bar')).toEqual('fooBar')
        expect(toCamelCase('--foo--bar--baz--')).toEqual('fooBarBaz')
        expect(toCamelCase('-foo-bar-baz-')).toEqual('fooBarBaz')
        expect(toCamelCase('foo_bar')).toEqual('fooBar')
        expect(toCamelCase('_foo_bar_baz_')).toEqual('fooBarBaz')
        expect(toCamelCase('_foo_bar_baz_')).toEqual('fooBarBaz')
        expect(toCamelCase('fooBar')).toEqual('fooBar')
        expect(toCamelCase('fooBarBaz')).toEqual('fooBarBaz')
        expect(toCamelCase('_fooBarBaz_')).toEqual('fooBarBaz')
        expect(toCamelCase('[Object object]')).toEqual('objectObject')
        expect(toCamelCase('FOOBar')).toEqual('fooBar')
        expect(toCamelCase('FOOBarBAZQuxx_Fee')).toEqual('fooBarBazQuxxFee')
      })
    })
  })

  describe('snakeCaseKeys', () => {
    it('should return a snake cased object', () => {
      const result = snakeCaseKeys(CAMEL_CASED)
      expect(result).toEqual(SNAKE_CASED)
    })
  })

  describe('camelCaseKeys', () => {
    it('should return a camel cased object', () => {
      const result = camelCaseKeys(SNAKE_CASED)
      expect(result).toEqual(CAMEL_CASED)
    })
  })
})
