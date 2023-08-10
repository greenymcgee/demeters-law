import { formatCaseChangeValue } from './formatCaseChangeValue'
import { isPlainObject } from './is'
import { toCamelCase } from './toCamelCase'

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
