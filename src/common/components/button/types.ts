import { ColorVariant, SizeVariant } from '@/common/types'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: SizeVariant
  variant?: ColorVariant
}
