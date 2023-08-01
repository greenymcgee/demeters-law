import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '@/pages'
import { TestProviders } from '../../../jest.components'

describe('<HomePage /> Tests', () => {
  it('should render', () => {
    render(<HomePage />, { wrapper: TestProviders })
    expect(screen.getByText('Home')).toBeVisible()
    expect(screen.getByText('Posts').getAttribute('href')).toEqual('/posts')
  })
})
