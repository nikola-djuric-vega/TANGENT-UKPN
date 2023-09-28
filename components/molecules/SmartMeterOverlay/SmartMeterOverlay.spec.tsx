import { SmartMeterOverlayType } from '_types/CMS/form'
import SmartMeterOverlay from './SmartMeterOverlay'
import { render } from '@testing-library/react'
import { IconNames } from '_types/local'

const mockData: SmartMeterOverlayType = {
  smartMeterBodyText: `<p>Body text</p>`,
  smartMeterSubtitle: 'There is an electricity supply to your meter',
  smartMeterTitle: 'We have checked your electricity supply',
  smartMeterIcon: IconNames.ICON_METERBOX,
}

describe('SmartMeterOverlay test', () => {
  it('shall render SmartMeterOverlay with mock props', () => {
    const { queryByText } = render(<SmartMeterOverlay {...mockData} />)
    const bodyText = queryByText('Body text')
    const subTitle = queryByText('There is an electricity supply to your meter')
    const title = queryByText('We have checked your electricity supply')
    expect(bodyText).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(title).toBeInTheDocument
  })
})
