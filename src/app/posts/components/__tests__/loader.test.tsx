import React from 'react'
import { render, screen } from '@testing-library/react'
import { PostsLoader } from '../loader'

describe('<PostsLoader /> tests', () => {
  it('should render a loader for the posts', () => {
    render(<PostsLoader />)
    expect(screen.getByText('Loading Posts...')).toBeVisible()
  })
})
