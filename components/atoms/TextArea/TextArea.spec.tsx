import React from 'react'
import TextArea, { TextAreaComponentProps } from './TextArea'
import { render } from '@testing-library/react'

const mockTextAreaData: TextAreaComponentProps = {
  hasError: false,
}

describe('TextArea Test', () => {
  it('should render TextArea', () => {
    const { getByRole } = render(<TextArea {...mockTextAreaData} />)
    const element1 = getByRole('textbox')
    expect(element1).toBeInTheDocument()
    expect(element1).toHaveAttribute('data-error')
  })
})
