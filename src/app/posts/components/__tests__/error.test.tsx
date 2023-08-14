import React from 'react'
import mockAxios from 'jest-mock-axios'
import { fireEvent, render, screen } from '@testing-library/react'
import { PostsError } from '..'

describe('<PostsError /> tests', () => {
  it('should render a message with an option to try again', () => {
    render(<PostsError />)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Something went wrong.')).toBeVisible()
    fireEvent.click(screen.getByText('Try Again'))
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
  })
})
