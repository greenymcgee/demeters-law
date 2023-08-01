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

/* eslint-enable @typescript-eslint/no-explicit-any */
