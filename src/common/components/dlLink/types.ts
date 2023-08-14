import Link from 'next/link'

export type DLLinkVariant = 'none' | 'primary'

export interface DLLinkProps extends PropsOf<typeof Link> {
  variant?: DLLinkVariant
}
