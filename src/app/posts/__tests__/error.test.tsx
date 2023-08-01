import React from 'react'
import mockAxios from 'jest-mock-axios'
import { act, fireEvent, render, screen } from '@testing-library/react'
import PostsError from '../error'

describe('<PostsError /> Tests', () => {
  it('should render the message and a try again button if an error is given', async () => {
    render(<PostsError />)
    act(() => {
      fireEvent.click(screen.getByText('Try Again'))
    })
    expect(mockAxios.get).toHaveBeenCalledWith('/api/posts')
  })
})
