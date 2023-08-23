/* eslint-disable no-console */
import React from 'react'
import { BUILD_TIME, COMMIT_SHA } from '@/common/constants'
import { render } from '@testing-library/react'
import { ClientSide } from '../..'

beforeAll(() => {
  console.info = jest.fn()
})

describe('<ClientSide /> tests', () => {
  it('should run logs', () => {
    render(<ClientSide />)
    expect(console.info).toHaveBeenCalledWith("Demeter's Law loaded")
    expect(console.info).toHaveBeenCalledWith(`Build time: ${BUILD_TIME}`)
    expect(console.info).toHaveBeenCalledWith(`Commit sha: ${COMMIT_SHA}`)
  })
})
