/* eslint-disable react/button-has-type */
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants'
import { ButtonProps } from './types'

export function Button({
  children,
  className,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...options
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className,
      )}
      type={type}
      {...options}
    >
      {children}
    </button>
  )
}

/* eslint-enable react/button-has-type */
