import { LINK_CLASS_NAMES } from '@/common/constants'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ExternalLink } from '..'

describe('<ExternalLink />', () => {
  it('should render with default props', () => {
    render(<ExternalLink>children</ExternalLink>)
    const anchor = screen.getByText('children')
    expect(anchor).toBeVisible()
    expect(anchor).toHaveClass(LINK_CLASS_NAMES.primary)
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer')
    expect(anchor).toHaveAttribute('target', '_blank')
  })

  it('should render with given props', () => {
    render(
      <ExternalLink className="px-2" variant="none">
        children
      </ExternalLink>,
    )
    const anchor = screen.getByText('children')
    expect(anchor).toBeVisible()
    expect(anchor).toHaveAttribute('class', 'px-2')
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer')
    expect(anchor).toHaveAttribute('target', '_blank')
  })
})
