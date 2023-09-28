import { fireEvent, render } from '@testing-library/react'
import { StormSummaryData } from './StormSummary.stories'
import StormSummary from './StormSummary'

describe('StormSummary test', () => {
  it('shall render StormSummary with mock props', () => {
    const { queryByText, getByRole, getByLabelText } = render(
      <StormSummary {...StormSummaryData} />
    )
    const title = queryByText(StormSummaryData.title as string)
    const description = getByRole('textbox')
    const tablesSummary = getByRole('presentation')
    const button = getByLabelText('Read more')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tablesSummary).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('shall change button label', () => {
    const { getByLabelText } = render(<StormSummary {...StormSummaryData} />)

    const button = getByLabelText('Read more')
    fireEvent.click(button)
    expect(button).toHaveTextContent('Read less')
  })

  it('shall reveal content', () => {
    const { getByLabelText, getByRole } = render(
      <StormSummary {...StormSummaryData} />
    )

    const button = getByLabelText('Read more')
    const tablesSummaryStyle = window.getComputedStyle(
      getByRole('presentation')
    )
    fireEvent.click(button)
    expect(tablesSummaryStyle.height).toBeDefined()
  })

  it('shall hide content', () => {
    const { getByLabelText, getByRole } = render(
      <StormSummary {...StormSummaryData} />
    )

    const button = getByLabelText('Read more')
    const tablesSummaryStyle = window.getComputedStyle(
      getByRole('presentation')
    )
    fireEvent.click(button)
    expect(tablesSummaryStyle.height).toBeDefined()
    fireEvent.click(button)
    expect(tablesSummaryStyle.height).toBe('0px')
  })
})
