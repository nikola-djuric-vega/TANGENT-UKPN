import { ChecklistType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { render } from '@testing-library/react'
import Checklist from './Checklist'
import React from 'react'

const mockProps: ChecklistType = {
  __typename: ComponentsTypeName.CHECKLIST,
  title: 'Mock Checklist',
  checklistItems: ['Mock Item 1', 'Mock Item 2', 'Mock Item 3'],
}

describe('Checklist Test', () => {
  it('should render a checklist with elements', () => {
    const screen = render(<Checklist {...mockProps} />)

    const element0 = screen.getByText('Mock Checklist')
    const element1 = screen.getByText('Mock Item 1')
    const element2 = screen.getByText('Mock Item 2')
    const element3 = screen.getByText('Mock Item 3')

    expect(element0).toBeInTheDocument()
    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
  })
})
