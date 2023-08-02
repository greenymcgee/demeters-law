import { WHITESPACE_PATTERN, WORDS_PATTERN } from '@/constants'
import { isPlainObject } from './is'

// TODO: separate all this out into separate files. Too messy in here still
function separateByTwoCapitalLetters(searchValue: string): string {
  const lastLetterOfWord = searchValue[0]
  const firstLetterOfNextWord = searchValue[1]
  const secondLetterOfNextWord = searchValue[2]
  return `${lastLetterOfWord} ${firstLetterOfNextWord}${secondLetterOfNextWord}`
}

function removeDashes(searchValue: string): string {
  const withoutDashes = searchValue[0]
  return `${withoutDashes} `
}

function separateByUpperAndLowerCase(searchValue: string): string {
  const lowercaseLetter = searchValue[0]
  const uppercaseLetter = searchValue[1]
  return `${lowercaseLetter} ${uppercaseLetter}`
}

function wordsReplacer(searchValue: string, ...replaceValue: string[]): string {
  const [dash, twoUppercaseFollowedByLower, , lowercaseWithDashes] =
    replaceValue

  if (dash) return ''

  if (twoUppercaseFollowedByLower) {
    return separateByTwoCapitalLetters(searchValue)
  }

  if (lowercaseWithDashes) return removeDashes(searchValue)

  return separateByUpperAndLowerCase(searchValue)
}

function getWords(value: unknown): string[] {
  return String(value)
    .replace(WORDS_PATTERN, wordsReplacer)
    .trim()
    .toLowerCase()
    .split(WHITESPACE_PATTERN)
}

function capitalizeFirstLetter(word: string): string {
  const firstLetter = word.slice(0, 1)
  const restOfWord = word.slice(1)
  return firstLetter.toUpperCase() + restOfWord
}

export function toSnakeCase(value: string): string {
  return getWords(value).join('_')
}

function formatWordForCamelCase(word: string, index: number): string {
  if (index === 0) return word

  return capitalizeFirstLetter(word)
}

export function toCamelCase(value: string): string {
  const formatted = getWords(value).map(formatWordForCamelCase)
  return formatted.join('')
}

function formatCaseChangeValue(
  value: unknown,
  callback: (obj: AnyObject) => AnyObject,
): typeof value {
  if (isPlainObject(value)) return callback(value)

  if (Array.isArray(value)) {
    return value.map((nestedValue) => callback(nestedValue))
  }

  return value
}

export function snakeCaseKeys<Obj extends AnyObject>(
  obj: Obj,
): KeysToSnakeCase<Obj> {
  if (isPlainObject(obj)) {
    return Object.keys(obj).reduce((accumulator: KeysToSnakeCase<Obj>, key) => {
      return {
        ...accumulator,
        [toSnakeCase(key) as CamelToSnakeCase<typeof key>]:
          formatCaseChangeValue(obj[key], snakeCaseKeys),
      }
    }, {} as KeysToSnakeCase<Obj>)
  }

  return obj
}

export function camelCaseKeys<Obj extends AnyObject>(obj: Obj): Obj {
  if (isPlainObject(obj)) {
    return Object.keys(obj).reduce((accumulator: Obj, key) => {
      return {
        ...accumulator,
        [toCamelCase(key)]: formatCaseChangeValue(obj[key], camelCaseKeys),
      }
    }, {} as Obj)
  }

  return obj
}
