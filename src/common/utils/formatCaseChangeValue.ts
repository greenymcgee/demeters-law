import { isPlainObject } from './is'

export function formatCaseChangeValue(
  value: unknown,
  callback: (obj: AnyObject) => AnyObject,
): typeof value {
  if (isPlainObject(value)) return callback(value)

  if (Array.isArray(value)) {
    return value.map((nestedValue) => callback(nestedValue))
  }

  return value
}
