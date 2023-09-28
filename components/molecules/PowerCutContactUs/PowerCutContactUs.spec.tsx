import PowerCutContactUs from './PowerCutContactUs'
import { render } from '@testing-library/react'
import { PowerCutContactUsData } from './PowerCutContactUs.stories'

describe('PowerCutContactUs test', () => {
  it('should render PowerCutContactUs component', () => {
    const { getByText } = render(
      <PowerCutContactUs {...PowerCutContactUsData} />
    )

    const text1 = getByText(`${PowerCutContactUsData.title}`)
    expect(text1).toBeInTheDocument()

    expect(
      getByText(`${PowerCutContactUsData.facebook?.name}`)
    ).toBeInTheDocument()
    expect(
      getByText(`${PowerCutContactUsData.twitter?.name}`)
    ).toBeInTheDocument()
    expect(
      getByText(`${PowerCutContactUsData.powerCutContactUsWhatsApp?.name}`)
    ).toBeInTheDocument()
  })
})
