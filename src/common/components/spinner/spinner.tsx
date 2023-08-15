import clsx from 'clsx'
import React from 'react'
import { SPINNER_SIZES, SPINNER_VARIANTS } from './constants'
import { SpinnerProps } from './types'

export function Spinner({
  children,
  className,
  size = 'sm',
  variant = 'primary',
  ...options
}: SpinnerProps): JSX.Element {
  // TODO: add TW merge
  return (
    <div
      className={clsx(
        'inline-block animate-spin rounded-full',
        'border-4 border-solid border-r-transparent',
        'align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        SPINNER_VARIANTS[variant],
        SPINNER_SIZES[size],
        className,
      )}
      role="status"
      {...options}
    >
      <span
        className={clsx(
          '!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap',
          '!border-0 !p-0 ![clip:rect(0,0,0,0)]',
        )}
      >
        {children ?? 'Loading...'}
      </span>
    </div>
  )
}
