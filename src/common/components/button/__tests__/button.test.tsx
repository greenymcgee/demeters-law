import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button, BUTTON_SIZES, BUTTON_VARIANTS } from '..'

describe('<Button />', () => {
  it('should take children prop', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeVisible()
  })

  it('should have a default value for type prop of "button"', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toHaveAttribute('type', 'button')
  })

  it('should use given type prop', () => {
    render(<Button type="submit">Click Me</Button>)
    expect(screen.getByText('Click Me')).toHaveAttribute('type', 'submit')
  })

  it('should take optional button props', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click Me</Button>)
    fireEvent.click(screen.getByText('Click Me'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  describe('className prop', () => {
    it('should append the given className to the default className', () => {
      const className = 'mr-4'
      render(<Button className={className}>Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(
        `${BUTTON_VARIANTS.primary} ${BUTTON_SIZES.md} ${className}`,
      )
    })

    it('should avoid className conflicts', () => {
      const className = 'p-4'
      render(<Button className={className}>Click Me</Button>)
      expect(screen.getByText('Click Me')).not.toHaveClass('py-3')
    })
  })

  describe('variant prop', () => {
    it('should have a default variant', () => {
      render(<Button>Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_VARIANTS.primary)
    })

    it('should use given "none" variant', () => {
      render(<Button variant="none">Click Me</Button>)
      expect(screen.getByText('Click Me')).not.toHaveClass(
        BUTTON_VARIANTS.primary,
      )
    })
  })

  describe('size prop', () => {
    it('should have a default size of "md"', () => {
      render(<Button>Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_SIZES.md)
    })

    it('should use given "xs" size', () => {
      render(<Button size="xs">Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_SIZES.xs)
    })

    it('should use given "sm" size', () => {
      render(<Button size="sm">Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_SIZES.sm)
    })

    it('should use given "md" size', () => {
      render(<Button size="md">Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_SIZES.md)
    })

    it('should use given "lg" size', () => {
      render(<Button size="lg">Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_SIZES.lg)
    })

    it('should use given "xl" size', () => {
      render(<Button size="xl">Click Me</Button>)
      expect(screen.getByText('Click Me')).toHaveClass(BUTTON_SIZES.xl)
    })
  })
})
