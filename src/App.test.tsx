import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Transmax Dashboard Title', () => {
  render(<App />)
  const linkElement = screen.getByText(/Transmax Dashboard/i)
  expect(linkElement).toBeInTheDocument()
})
