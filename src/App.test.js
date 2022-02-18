import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders "Add" button', () => {
  render(<App />)
  const addButton = screen.getByText(/Add/i)
  expect(addButton).toBeInTheDocument()
})
