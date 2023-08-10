import { formatCaseChangeValue } from './formatCaseChangeValue'
import { isPlainObject } from './is'
import { toSnakeCase } from './toSnakeCase'

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
