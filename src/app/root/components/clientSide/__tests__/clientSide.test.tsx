/* eslint-disable no-console */
import React from 'react'
import { render } from '@testing-library/react'
import { ClientSide } from '../..'

describe('<ClientSide /> tests', () => {
  it('should render null', () => {
    const { container } = render(<ClientSide />)
    expect(container.firstChild).toBeNull()
  })
})
