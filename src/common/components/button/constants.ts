import { ColorVariant, SizeVariant } from '@/common/types'

const BASE_BUTTON_CLASS_NAMES =
  'rounded-md font-semibold text-white transition-colors duration-150 ease-in-out'

export const BUTTON_VARIANTS: Record<ColorVariant, string> = {
  danger: `${BASE_BUTTON_CLASS_NAMES} bg-red-500 hover:bg-red-800`,
  none: '',
  primary: `${BASE_BUTTON_CLASS_NAMES} bg-blue-500 hover:bg-blue-800`,
  secondary: `${BASE_BUTTON_CLASS_NAMES} bg-gray-500 hover:bg-gray-800`,
  success: `${BASE_BUTTON_CLASS_NAMES} bg-green-500 hover:bg-green-800`,
  warning: `${BASE_BUTTON_CLASS_NAMES} bg-orange-500 hover:bg-orange-800`,
}

export const BUTTON_SIZES: Record<SizeVariant, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}
