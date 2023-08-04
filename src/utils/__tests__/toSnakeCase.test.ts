import { toSnakeCase } from '../toSnakeCase'

describe('toSnakeCase', () => {
  it('should convert a string to snake case', () => {
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
