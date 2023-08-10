import { getWords } from '..'

describe('getWords', () => {
  it('should return an array of words from a given string', () => {
    expect(getWords('')).toEqual([''])
    expect(getWords('foo')).toEqual(['foo'])
    expect(getWords('foo bar')).toEqual(['foo', 'bar'])
    expect(getWords(' foo  bar  baz ')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('\nfoo\nbar\nbaz\n')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('foo-bar')).toEqual(['foo', 'bar'])
    expect(getWords('--foo--bar--baz--')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('-foo-bar-baz-')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('foo_bar')).toEqual(['foo', 'bar'])
    expect(getWords('_foo_bar_baz_')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('_foo_bar_baz_')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('fooBar')).toEqual(['foo', 'bar'])
    expect(getWords('fooBarBaz')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords('_fooBarBaz_')).toEqual(['foo', 'bar', 'baz'])
    expect(getWords({})).toEqual(['object', 'object'])
    expect(getWords([])).toEqual([''])
    expect(getWords(false)).toEqual(['false'])
    expect(getWords('FOOBar')).toEqual(['foo', 'bar'])
    expect(getWords('FOOBarBAZQuxx_Fee')).toEqual([
      'foo',
      'bar',
      'baz',
      'quxx',
      'fee',
    ])
  })
})
