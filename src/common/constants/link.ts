import clsx from 'clsx'
import { LinkVariant } from '../types'

export const LINK_CLASS_NAMES: Record<LinkVariant, string> = {
  none: '',
  primary: clsx(
    'text-blue-500 visited:text-purple-500 hover:text-blue-300',
    'hover:underline visited:hover:text-purple-300',
    'focus:text-blue-300 focus:underline visited:focus:text-purple-300',
  ),
}
