import clsx from 'clsx'
import { LinkVariant } from '../types'

export const LINK_CLASS_NAMES: Record<LinkVariant, string> = {
  none: '',
  primary: clsx(
    'text-blue-800 underline',
    'hover:text-blue-500 focus:text-blue-500',
    'visited:text-purple-800 visited:hover:text-purple-500 visited:focus:text-purple-500',
  ),
}
