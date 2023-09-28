import { render } from '@testing-library/react'
import TextBoxWithCTA from './TextBoxWithCTA'
import {
  TextBoxWithCTAData,
  TextBoxWithCTADataWithWhiteBG,
} from './TextBoxWithCTA.stories'

describe('TextBoxWithCTA test', () => {
  it('shall render TextBoxWithCTA component with Ocean blue or Midnight blue background colour', () => {
    const screen = render(<TextBoxWithCTA {...TextBoxWithCTAData} />)

    const leftTitle = screen.getByText(`${TextBoxWithCTAData.leftTitle}`)
    const leftText = screen.getByText(/left text/i)
    const rightTitle = screen.getByText(`${TextBoxWithCTAData.rightTitle}`)
    const rightText = screen.getByText(/right text/i)
    const links = screen.queryAllByRole('link')
    const leftItem = screen.getByTestId('leftItem')
    const link = links[0]

    expect(leftTitle).toBeInTheDocument()
    expect(leftText).toBeInTheDocument()
    expect(rightTitle).toBeInTheDocument()
    expect(rightText).toBeInTheDocument()
    expect(links.length).toEqual(2)
    expect(leftItem).toBeInTheDocument()
    expect(leftItem).toHaveAttribute(
      'data-bg-colour',
      `${TextBoxWithCTAData.leftBackgroundColour}`
    )

    expect(link).toHaveAttribute('href', 'http://google.com')
  })

  it('shall render TextBoxWithCTA component with Default background colour (white)', () => {
    const screen = render(<TextBoxWithCTA {...TextBoxWithCTADataWithWhiteBG} />)

    const leftItem = screen.getByTestId('leftItem')
    expect(leftItem).toBeInTheDocument()
    expect(leftItem).toHaveAttribute(
      'data-bg-colour',
      `${TextBoxWithCTADataWithWhiteBG.leftBackgroundColour}`
    )
  })
})
