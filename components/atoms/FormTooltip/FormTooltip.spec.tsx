import React from 'react'
import FormTooltip, { FormTooltipProps } from './FormTooltip'
import { fireEvent, render } from '@testing-library/react'

const mockData: FormTooltipProps = {
  defaultTitle: 'Help',
  tooltipTitle: 'Close',
  tooltipMessage: 'Hello World',
  showTooltip: false,
}

describe('FormTooltip  Test', () => {
  it('should render Form Tooltip', () => {
    const { getByRole, getByText, getByTestId } = render(
      <FormTooltip {...mockData} />
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const text = getByText('Hello World')
    expect(text).toBeInTheDocument()
    const closeButton = getByTestId('close')
    fireEvent.click(closeButton)
    expect(text).not.toBeInTheDocument()
  })
})
