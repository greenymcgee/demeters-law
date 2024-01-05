import { isNumber } from './is'

/**
  - Add the two numbers when both are number. 
  - Throw an error when a or b is NaN.
 */
export function add(a: number, b: number) {
  if (!isNumber(a)) throw new Error(`Value given for "a" was NaN ${a}`)

  if (!isNumber(b)) throw new Error(`Value given for "b" was NaN ${b}`)

  return a + b
}
