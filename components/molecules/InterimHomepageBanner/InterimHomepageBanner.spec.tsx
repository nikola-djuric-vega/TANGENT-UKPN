import { InterimHomepageBannerType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { render } from '@testing-library/react'
import InterimHomepageBanner from './InterimHomepageBanner'
import React from 'react'

const mockProps: InterimHomepageBannerType = {
  __typename: ComponentsTypeName.INTERIM_HOMEPAGE_BANNER,
  headerText:
    'We maintain the power networks across London, the South East and East of England.',
  backgroundImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/fpvbpu0c/ukpn-field-operative-mp-19-1-1.png',
    name: 'Interim Hero Banner',
    umbracoHeight: '496',
    umbracoWidth: '569',
  },
}

describe('Interhim Homepage Banner', () => {
  it('should render Interim Homepage Banner', () => {
    const { getByText, getAllByRole } = render(
      <InterimHomepageBanner {...mockProps} />
    )

    const headerText = getByText(
      'We maintain the power networks across London, the South East and East of England.'
    )
    expect(headerText).toBeInTheDocument()

    const images = getAllByRole('img')
    expect(images[0]).toHaveAttribute(
      'src',
      'https://media.umbraco.io/dev-uk-power-networks/fpvbpu0c/ukpn-field-operative-mp-19-1-1.png'
    )
  })
})
