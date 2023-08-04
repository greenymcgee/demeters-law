import { getWords } from './getWords'

function capitalizeFirstLetter(word: string): string {
  const firstLetter = word.slice(0, 1)
  const restOfWord = word.slice(1)
  return firstLetter.toUpperCase() + restOfWord
}

function formatWordForCamelCase(word: string, index: number): string {
  if (index === 0) return word

  return capitalizeFirstLetter(word)
}

export function toCamelCase(value: string): string {
  const formatted = getWords(value).map(formatWordForCamelCase)
  return formatted.join('')
}
