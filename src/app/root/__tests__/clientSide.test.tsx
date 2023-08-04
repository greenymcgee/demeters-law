import React from 'react'
import mockAxios from 'jest-mock-axios'
import { render } from '@testing-library/react'
import { ClientSide } from '..'
import { camelCaseResponseDataKeys } from '../utils'

describe('<ClientSide /> Tests', () => {
  it('should set axios interceptors', () => {
    render(<ClientSide />)
    expect(mockAxios.interceptors.response.use).toHaveBeenCalledWith(
      camelCaseResponseDataKeys,
    )
  })
})
