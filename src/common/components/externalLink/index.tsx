import { LINK_CLASS_NAMES } from '@/common/constants'
import clsx from 'clsx'
import React from 'react'
import { ExternalLinkProps } from './types'

export function ExternalLink({
  children,
  className,
  variant = 'primary',
  ...options
}: ExternalLinkProps): JSX.Element {
  return (
    <a
      className={clsx(LINK_CLASS_NAMES[variant], className)}
      rel="noopener noreferrer"
      target="_blank"
      {...options}
    >
      {children}
    </a>
  )
}
