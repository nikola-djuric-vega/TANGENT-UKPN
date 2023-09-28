import ApplicationStartChecklist, {
  ApplicationStartChecklistProps,
} from './ApplicationStartChecklist'
import { render } from '@testing-library/react'

const mockData: ApplicationStartChecklistProps = {
  checkListTitle:
    'Please make sure you have the following to hand before starting:',
  checklistItems: [
    'Property and address details',
    'Your existing Meter Point Administration Number (MPAN)',
    'Details of how much power you need to upgrade to',
    'A drawing or a plan would be useful showing the location of the electricity meter within the property',
  ],
}

describe('ApplicationStartChecklist test', () => {
  it('shall render ApplicationStartChecklist with mock props', () => {
    const { queryByText } = render(<ApplicationStartChecklist {...mockData} />)
    const listTitle = queryByText(
      'Please make sure you have the following to hand before starting:'
    )
    const listItem1 = queryByText('Property and address details')
    const listItem2 = queryByText(
      'Your existing Meter Point Administration Number (MPAN)'
    )
    const listItem3 = queryByText(
      'Details of how much power you need to upgrade to'
    )
    const listItem4 = queryByText(
      'A drawing or a plan would be useful showing the location of the electricity meter within the property'
    )
    expect(listTitle).toBeInTheDocument()
    expect(listItem1).toBeInTheDocument()
    expect(listItem2).toBeInTheDocument()
    expect(listItem3).toBeInTheDocument()
    expect(listItem4).toBeInTheDocument()
  })
})
