import { AlertErrorType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { render } from '@testing-library/react'
import AlertError from './AlertError'
import React from 'react'
import { IconNames } from '_types/local'

const mockProps: AlertErrorType = {
  __typename: ComponentsTypeName.ALERT_ERROR,
  alertErrorDescription: 'Mock description',
  alertErrorIcon: IconNames.ANIMATION,
  alertErrorTitle: 'Mock title',
}

describe('AlertError Test', () => {
  it('should render AlertError', () => {
    const screen = render(<AlertError {...mockProps} />)

    const elementDescription = screen.getByText('Mock description')
    const elementTitle = screen.getByText('Mock title')

    expect(elementDescription).toBeInTheDocument()
    expect(elementTitle).toBeInTheDocument()
  })
})
