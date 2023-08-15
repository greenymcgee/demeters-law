import { SpinnerSize, SpinnerVariant } from './types'

export const SPINNER_VARIANTS: Record<SpinnerVariant, string> = {
  none: 'border-current',
  primary: 'border-blue-100',
}

export const SPINNER_SIZES: Record<SpinnerSize, string> = {
  lg: 'h-40 w-40',
  md: 'h-20 w-20',
  sm: 'h-10 w-10',
}
