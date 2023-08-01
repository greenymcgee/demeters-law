import { isArray, isNumber, isPlainObject, isString } from './is'

export function delegateArray<Collection extends unknown[]>(
  value: Collection | undefined | null,
  defaultValue = [] as unknown[] as Collection,
): Collection {
  if (isArray(value)) return value

  return defaultValue
}

export function delegateNumber(
  value: number | undefined | null,
  defaultValue = Number(),
): number {
  if (isNumber(value)) return value

  return defaultValue
}

export function delegateObject<Type extends object>(
  value: Type | undefined | null,
  defaultValue = {} as Type,
): Type {
  if (isPlainObject(value)) return value

  return defaultValue
}

export function delegateString<
  Value extends string | undefined | null,
  ExplicitStringType extends Value extends string ? Value : string,
>(value: Value, defaultValue = '' as ExplicitStringType): ExplicitStringType {
  if (isString(value)) return value as ExplicitStringType

  return defaultValue as ExplicitStringType
}
