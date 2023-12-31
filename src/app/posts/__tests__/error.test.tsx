import { INTERNAL_API_ROUTES } from '@/common/constants'
import React from 'react'
import mockAxios from 'jest-mock-axios'
import { act, fireEvent, render, screen } from '@testing-library/react'
import PostsErrorBoundary from '../error'

describe('<PostsErrorBoundary /> tests', () => {
  it('should render the message and a try again button if an error is given', async () => {
    render(<PostsErrorBoundary />)
    act(() => {
      fireEvent.click(screen.getByText('Try Again'))
    })
    expect(mockAxios.get).toHaveBeenCalledWith(INTERNAL_API_ROUTES.posts)
  })
})
