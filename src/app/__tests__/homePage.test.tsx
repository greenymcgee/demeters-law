import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import { TestSWRConfig } from '../../../jest.components'

describe('<HomePage /> Tests', () => {
  it('should render', () => {
    render(<HomePage />, { wrapper: TestSWRConfig })
    expect(screen.getByText("Demeter's Law Demonstrations")).toBeVisible()
    expect(screen.getAllByText('posts').at(0)?.getAttribute('href')).toEqual(
      '/posts',
    )
  })
})
