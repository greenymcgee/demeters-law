import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { PostsError } from '../error'

const mutate = jest.fn()

afterEach(() => {
  mutate.mockReset()
})

describe('<PostsError /> Tests', () => {
  it('should render the message and a try again button if an error is given', () => {
    render(<PostsError errorMessage="Server Error" mutate={mutate} />)
    expect(screen.getByText('Server Error')).toBeVisible()
    act(() => {
      fireEvent.click(screen.getByText('Try Again'))
    })
    expect(mutate).toHaveBeenCalledTimes(1)
  })
})
