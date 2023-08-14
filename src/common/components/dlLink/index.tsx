import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { DL_LINK_CLASS_NAMES } from './constants'
import { DLLinkProps } from './types'

/**
 * The "Demeter' Law" version of the Link component from Next.js.
 */
export function DLLink({
  className,
  href,
  variant = 'primary',
  ...options
}: DLLinkProps): JSX.Element {
  return (
    <Link
      className={clsx(className, DL_LINK_CLASS_NAMES[variant])}
      href={href}
      {...options}
    />
  )
}
