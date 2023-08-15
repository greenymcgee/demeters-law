import { LinkVariant } from '@/common/types'
import { AnchorHTMLAttributes } from 'react'

export interface ExternalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'> {
  variant?: LinkVariant
}
