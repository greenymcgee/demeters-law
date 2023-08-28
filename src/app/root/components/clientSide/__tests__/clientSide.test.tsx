import React from 'react'
import { BUILD_TIME, COMMIT_SHA, VERCEL_ENV } from '@/common/constants'
import { logger } from '@/log'
import { render } from '@testing-library/react'
import { ClientSide } from '../..'

describe('<ClientSide /> tests', () => {
  it('should run logs', () => {
    render(<ClientSide />)
    expect(logger.info).toHaveBeenCalledWith(
      { BUILD_TIME, COMMIT_SHA, NODE_ENV: process.env.NODE_ENV, VERCEL_ENV },
      "Demeter's Law loaded",
    )
  })
})
