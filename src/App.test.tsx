import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { setupJestCanvasMock } from 'jest-canvas-mock'

describe('renders Transmax Dashboard Title', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    setupJestCanvasMock()
  })

  it('should render title on the page', () => {
    render(<App />)
    const linkElement = screen.getByText(/Transmax Dashboard/i)
    expect(linkElement).toBeInTheDocument()
  })
})
