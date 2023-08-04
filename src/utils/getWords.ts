import { WHITESPACE_PATTERN, WORDS_PATTERN } from '@/constants'

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

export function getWords(value: unknown): string[] {
  const replaced = String(value).replace(WORDS_PATTERN, wordsReplacer)
  const trimmed = replaced.trim()
  const lowercased = trimmed.toLowerCase()
  return lowercased.split(WHITESPACE_PATTERN)
}
