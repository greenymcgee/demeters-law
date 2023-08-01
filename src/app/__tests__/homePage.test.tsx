import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import { TestSWRConfig } from '../../../jest.components'

describe('<HomePage /> Tests', () => {
  it('should render', () => {
    render(<HomePage />, { wrapper: TestSWRConfig })
    expect(screen.getByText('Home')).toBeVisible()
    expect(screen.getByText('Posts').getAttribute('href')).toEqual('/posts')
  })
})
