import React from 'react'
import { LINK_CLASS_NAMES } from '@/common/constants'
import { render, screen } from '@testing-library/react'
import { DLLink } from '..'

describe('<DLLink />', () => {
  it('should render as the "primary" variant by default', () => {
    render(
      <DLLink className="px-2" href="/">
        Link
      </DLLink>,
    )
    const link = screen.getByText('Link')
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('class', `px-2 ${LINK_CLASS_NAMES.primary}`)
    expect(link).toHaveAttribute('href', '/')
  })

  it('should work with the "none" variant', () => {
    render(
      <DLLink href="/" variant="none">
        Link
      </DLLink>,
    )
    expect(screen.getByText('Link')).toHaveAttribute('class', '')
  })
})
