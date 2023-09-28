import React from 'react'
import RadioButton, { RadioButtonComponentProps } from './RadioButton'
import { fireEvent, render } from '@testing-library/react'

const mockData: RadioButtonComponentProps = {
  value: 'yes',
  setOption: () => {},
  name: 'option',
}

describe('RadioButton  Test', () => {
  it('should render Radio Button', () => {
    const { getByRole } = render(<RadioButton {...mockData} />)
    const radioButton = getByRole('input')
    fireEvent.click(radioButton)
    expect(radioButton).toBeInTheDocument()
    expect(radioButton).toHaveAttribute('type', 'radio')
  })
})
