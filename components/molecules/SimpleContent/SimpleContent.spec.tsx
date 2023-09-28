import { SimpleContentType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import { ComponentsTypeName } from '_types/CMS'
import SimpleContent from './SimpleContent'
import React from 'react'

const mockProps: SimpleContentType = {
  __typename: ComponentsTypeName.SIMPLE_CONTENT,
  text: 'Mock Test Simple Content Text',
}

describe('Checklist Test', () => {
  it('should render a checklist with elements', () => {
    const screen = render(<SimpleContent {...mockProps} />)

    const element = screen.getByText('Mock Test Simple Content Text')

    expect(element).toBeInTheDocument()
  })
})
