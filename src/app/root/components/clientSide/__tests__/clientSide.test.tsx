import React from 'react'
import { logger } from '@/log'
import { render } from '@testing-library/react'
import { ClientSide } from '../..'

describe('<ClientSide /> tests', () => {
  it('should run logs', () => {
    render(<ClientSide />)
    expect(logger.info).toHaveBeenCalledWith("Demeter's Law loaded")
  })
})
