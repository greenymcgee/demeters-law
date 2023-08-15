import { render, screen } from '@testing-library/react'
import clsx from 'clsx'
import React from 'react'
import { Spinner } from '..'
import { SPINNER_SIZES, SPINNER_VARIANTS } from '../constants'

const baseClassName = clsx(
  'inline-block animate-spin rounded-full',
  'border-4 border-solid border-r-transparent',
  'align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
)

describe('<Spinner />', () => {
  it('should render with default props', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('status')
    const label = screen.getByText('Loading...')
    expect(label).toBeVisible()
    expect(spinner).toBeVisible()
    expect(spinner).toHaveClass(
      clsx(baseClassName, SPINNER_VARIANTS.primary, SPINNER_SIZES.sm),
    )
  })

  it('should render with given props', () => {
    render(
      <Spinner className="px-2" size="lg" variant="none">
        with props
      </Spinner>,
    )
    const spinner = screen.getByRole('status')
    const label = screen.getByText('with props')
    expect(label).toBeVisible()
    expect(spinner).toBeVisible()
    expect(spinner).toHaveClass(
      clsx(baseClassName, SPINNER_VARIANTS.none, SPINNER_SIZES.lg, 'px-2'),
    )
  })
})
