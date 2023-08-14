import React from 'react'
import { render, screen } from '@testing-library/react'
import PostsLoading from '../loading'

describe('<PostsLoading /> tests', () => {
  it('should render', () => {
    render(<PostsLoading />)
    expect(screen.getByTestId('posts-loader')).toBeVisible()
  })
})
