import React from 'react'
import InputPassword from './InputPassword'
import { fireEvent, render } from '@testing-library/react'

describe('Input Password Test', () => {
  it('should render input with the type password', () => {
    const { getByRole } = render(<InputPassword />)
    expect(getByRole('input')).toHaveAttribute('type', 'password')
  })

  it('should render input with the type text', () => {
    const { getByRole } = render(<InputPassword />)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(getByRole('input')).toHaveAttribute('type', 'text')
  })
})
