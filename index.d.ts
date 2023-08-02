/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A utility type for easily grabbing the first parameter of a method.
 */
type FirstParameterOf<Method extends (...args: any) => any> =
  Parameters<Method>[0]
type SecondParameterOf<Method extends (...args: any) => any> =
  Parameters<Method>[1]
type ThirdParameterOf<Method extends (...args: any) => any> =
  Parameters<Method>[2]

/**
 * An alias for FirstParameterOf. It's a littles easier to read when working
 * with components.
 */
type PropsOf<Component extends (...args: any) => any> =
  FirstParameterOf<Component>

type OneOf<AnyArray extends Array<unknown>> = AnyArray[0]

type AnyFunc = (...args: any) => any

type AnyConstructor = new (...args: any) => any

type Definitely<T> = T extends AnyConstructor
  ? InstanceType<T>
  : T extends AnyFunc
  ? ReturnType<T>
  : never

type AnyObject = Record<string, any>

/**
 * See this gist for KeysToSnakeCase:
 * https://gist.github.com/kuroski/9a7ae8e5e5c9e22985364d1ddbf3389d
 */
type RemoveUnderscoreFirstLetter<S extends string> =
  S extends `${infer FirstLetter}${infer Underscore}`
    ? `${FirstLetter extends '_' ? Underscore : `${FirstLetter}${Underscore}`}`
    : S

type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer Underscore}`
    ? `${T extends Capitalize<T> ? '_' : ''}${RemoveUnderscoreFirstLetter<
        Lowercase<T>
      >}${CamelToSnakeCase<Underscore>}`
    : S

type KeysToSnakeCase<Obj> = {
  [Key in keyof Obj as CamelToSnakeCase<
    string & Key
  >]: Obj[Key] extends AnyObject ? KeysToSnakeCase<Obj[Key]> : Obj[Key]
}

/* eslint-enable @typescript-eslint/no-explicit-any */
