import { HTMLAttributes, PropsWithChildren } from 'react'

export type SpinnerVariant = 'primary' | 'none'

export type SpinnerSize = 'sm' | 'md' | 'lg'

type SpinnerExtensions = Omit<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
  'role'
>

export interface SpinnerProps extends SpinnerExtensions {
  size?: 'sm' | 'md' | 'lg'
  variant?: SpinnerVariant
}
