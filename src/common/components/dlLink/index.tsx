import { LINK_CLASS_NAMES } from '@/common/constants'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { DLLinkProps } from './types'

/**
 * The demeters-law version of the Link component from Next.js.
 */
export function DLLink({
  className,
  href,
  variant = 'primary',
  ...options
}: DLLinkProps): JSX.Element {
  return (
    <Link
      className={clsx(className, LINK_CLASS_NAMES[variant])}
      href={href}
      {...options}
    />
  )
}
