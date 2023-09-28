import React from 'react'
import BannerCurved from './BannerCurved'
import { BannerCurvedType } from '_types/CMS/nodes/components/UKPN'
import { render } from '@testing-library/react'
import { ComponentsTypeName, LinkType } from '_types/CMS'

const mockData: BannerCurvedType = {
  __typename: ComponentsTypeName.BANNER_CURVED,
  header: 'Fuse upgrade',
  tag: 'Latest update',
  subHeader:
    'If you need to upgrade your main electrical fuse to 80 or 100amps, we can help you. Please read the information guides to see what you need to do before we can safely carry out the work.',
  desktopImage: {
    umbracoFile: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/yx1lqcdz/extrasupportfamily.jpg?center=0.52545065446072525,0.22786539968652036&mode=crop&width=500&height=400',
    },
  },
  bannerCurvedCTA: {
    name: 'Find out more',
    url: 'http://google.com',
    type: LinkType.CONTENT,
    target: '_blank',
  },
  backgroundColour: true,
}

describe('BannerCurved test', () => {
  it('should render BannerCurved component with mock data and background color', () => {
    const { getByText } = render(<BannerCurved {...mockData} />)
    const header = getByText(mockData.header)
    expect(header).toBeInTheDocument()
  })

  it('should render BannerCurved component with mock data and no background color', () => {
    mockData.backgroundColour = false
    const { getByText } = render(<BannerCurved {...mockData} />)
    const header = getByText(mockData.header)
    expect(header).toBeInTheDocument()
  })
})
