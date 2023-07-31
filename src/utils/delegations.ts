export function delegateArray<Collection extends unknown[]>(
  value: Collection | undefined | null,
  defaultValue = [] as unknown[] as Collection,
): Collection {
  if (!Array.isArray(value)) return defaultValue

  return value
}

export function delegateNumber(
  value: number | undefined | null,
  defaultValue = Number(),
): number {
  if (typeof value !== 'number') return defaultValue

  return value
}

export function delegateObject<Type extends object>(
  value: Type | undefined | null,
  defaultValue = {} as Type,
): Type {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return defaultValue
  }

  return value
}

export function delegateString<
  Value extends string | undefined | null,
  ExplicitStringType extends Value extends string ? Value : string,
>(value: Value, defaultValue = '' as ExplicitStringType): ExplicitStringType {
  if (typeof value !== 'string') return defaultValue

  return value as ExplicitStringType
}
