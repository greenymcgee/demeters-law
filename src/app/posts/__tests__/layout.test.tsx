import React from 'react'
import { render, screen } from '@testing-library/react'
import PostsLayout from '../layout'

describe('<PostsLayout /> Tests', () => {
  it('should render', () => {
    render(<PostsLayout>Children</PostsLayout>)
    expect(screen.getByText('Posts')).toBeVisible()
    expect(screen.getByText('Children')).toBeVisible()
    expect(screen.getByText('Back to Home')).toHaveAttribute('href', '/')
  })
})
