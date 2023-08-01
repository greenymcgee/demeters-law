function is<Constructor extends AnyConstructor | AnyFunc>(
  constructor: Constructor,
) {
  return (value: unknown): value is Definitely<Constructor> => {
    return (
      (value != null && value.constructor === constructor) ||
      value instanceof constructor
    )
  }
}

export const isArray = is(Array)
export const isString = is(String)
export const isFunction = is(Function)
export const isObject = is(Object)

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value)
}

export function isPlainObject<Obj extends object = object>(
  value: unknown,
): value is Obj {
  return isObject(value) && value.constructor === Object
}
