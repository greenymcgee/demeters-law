import React from 'react'
import { BUILD_TIME } from '@/common/constants'
import { logger } from '@/log'
import { render } from '@testing-library/react'
import { ClientSide } from '../..'

describe('<ClientSide /> tests', () => {
  it('should run logs', () => {
    render(<ClientSide />)
    expect(logger.info).toHaveBeenCalledWith(
      { BUILD_TIME },
      "Demeter's Law loaded",
    )
  })
})
