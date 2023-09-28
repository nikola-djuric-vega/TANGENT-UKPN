import { StormChecklistMockData } from './StormChecklistMockData'
import { render } from '@testing-library/react'
import StormChecklist from './StormChecklist'

describe('StormChecklist test', () => {
  it('Shall render StormChecklist with title, subtitle and correct number of links', () => {
    const screen = render(<StormChecklist {...StormChecklistMockData} />)

    const links = screen.getAllByRole('link')
    const title = screen.getByText(
      `${StormChecklistMockData.stormChecklistTitle}`
    )
    const subtitle = screen.getByText(
      `${StormChecklistMockData.stormChecklistSubtitle}`
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(links).toHaveLength(
      Number(`${StormChecklistMockData.stormChecklistLinks?.length}`)
    )
  })
})
