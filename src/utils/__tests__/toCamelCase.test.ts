import { toCamelCase } from '../toCamelCase'

describe('toCamelCase', () => {
  it('should convert a string to camel case', () => {
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
