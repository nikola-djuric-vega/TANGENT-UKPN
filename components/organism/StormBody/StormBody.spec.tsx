import { StormBodyType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { render } from '@testing-library/react'
import { IconNames } from '_types/local'
import StormBody from './StormBody'

const mockData: StormBodyType = {
  __typename: ComponentsTypeName.STORM_BODY,
  stormBodyText: `<p>We want to reassure you that we are taking all necessary measures to help ensure the safety of customers, out staff, and the people they may meet as part pf their work activities.</p>
    <p>We're working closely with the governament, health organisations, the energy regulator Ofgem and consumer advice organisations to ensure we continue to work safely and follow the latest advice.</p>
    <p>With your support and working together we can keep the electricity flowing and keep our communities and colleagues safe.</p>
    <p>Advice for customers</p>
    <p>Advice for staff</p>
    <p>Useful links</p>`,
  stormBodyTitle: 'Enter your postcode to search, track and report power cuts.',
  powerCutBoxTitle: 'Power off?',
  powerCutBoxIcon: IconNames.ICO_POWER_CUT,
  powerCutBoxRegisterForTextsLink: {
    type: LinkType.CONTENT,
    name: '',
    url: '/',
  },
  powerCutBoxFacebookLink: {
    type: LinkType.CONTENT,
    name: 'Facebook',
    url: '/',
  },
  powerCutBoxTwitterLink: {
    type: LinkType.CONTENT,
    name: 'Twitter',
    url: '/',
  },
}

const mockDataWithFacebook: StormBodyType = {
  __typename: ComponentsTypeName.STORM_BODY,
  stormBodyText: `<p>We want to reassure you that we are taking all necessary measures to help ensure the safety of customers, out staff, and the people they may meet as part pf their work activities.</p>
      <p>We're working closely with the governament, health organisations, the energy regulator Ofgem and consumer advice organisations to ensure we continue to work safely and follow the latest advice.</p>
      <p>With your support and working together we can keep the electricity flowing and keep our communities and colleagues safe.</p>
      <p>Advice for customers</p>
      <p>Advice for staff</p>
      <p>Useful links</p>`,
  stormBodyTitle: 'Enter your postcode to search, track and report power cuts.',
  powerCutBoxTitle: 'Power off?',
  powerCutBoxIcon: IconNames.ICO_POWER_CUT,
  powerCutBoxRegisterForTextsLink: {
    type: LinkType.CONTENT,
    name: 'test',
    url: 'http://google.com',
  },
  powerCutBoxFacebookLink: {
    type: LinkType.CONTENT,
    name: 'Facebook',
    url: '/',
  },
}

describe('StormBody test', () => {
  it('shall render StormBody with ....', async () => {
    const { getByPlaceholderText, getByText, debug } = render(
      <StormBody {...mockData} />
    )

    const bodyText = getByText(
      'We want to reassure you that we are taking all necessary measures to help ensure the safety of customers, out staff, and the people they may meet as part pf their work activities.'
    )
    const bodyTitle = getByText(
      'Enter your postcode to search, track and report power cuts.'
    )
    const elementPC = getByPlaceholderText(
      'Enter a postcode here'
    ) as HTMLInputElement
    const boxTitle = getByText('Power off?')

    expect(bodyText).toBeInTheDocument()
    expect(bodyTitle).toBeInTheDocument()
    expect(elementPC).toBeInTheDocument()
    expect(boxTitle).toBeInTheDocument()
  })

  it('shall render StormBody with ....', () => {
    render(<StormBody {...mockDataWithFacebook} />)
  })
})
