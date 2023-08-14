import clsx from 'clsx'
import { DLLinkVariant } from './types'

export const DL_LINK_CLASS_NAMES: Record<DLLinkVariant, string> = {
  none: '',
  primary: clsx(
    'text-blue-500 visited:text-purple-500 hover:text-blue-300',
    'hover:underline visited:hover:text-purple-300',
    'focus:text-blue-300 focus:underline visited:focus:text-purple-300',
  ),
}
