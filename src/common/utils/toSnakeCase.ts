import { getWords } from './getWords'

export function toSnakeCase(value: string): string {
  return getWords(value).join('_')
}
