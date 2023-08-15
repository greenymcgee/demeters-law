import { LinkVariant } from '@/common/types'
import Link from 'next/link'

export interface DLLinkProps extends PropsOf<typeof Link> {
  variant?: LinkVariant
}
