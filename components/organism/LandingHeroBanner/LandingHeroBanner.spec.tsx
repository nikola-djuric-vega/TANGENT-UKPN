import { LandingHeroBannerType } from '_types/CMS/nodes/components/UKPN'
import LandingHeroBanner from './LandingHeroBanner'
import { render } from '@testing-library/react'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

const mockProps: LandingHeroBannerType = {
  __typename: ComponentsTypeName.LANDING_HERO_BANNER,
  headering: 'Mock Headering',
  subHeading: 'Mock Subheading',
  image: { name: 'Mock Media Image', url: 'mock.com/media' },
  anchorPanelTitle: 'string',
  anchorLinks: [
    {
      name: 'Mock Anchor Link',
      type: LinkType.EXTERNAL,
      url: 'mock/anchor',
    },
  ],
  actionPanelTitle: 'Mock Action Panel Title',
  actionPanelLinks: [
    {
      uRL: {
        name: 'Mock Panel Link 1',
        type: LinkType.EXTERNAL,
        url: 'panel/link/url1',
      },
      __typename: LinkAppearance.PRIMARY,
      cTAType: ButtonColors.LIGHT,
    },
    {
      uRL: {
        name: 'Mock Panel Link 2',
        type: LinkType.EXTERNAL,
        url: 'panel/link/url2',
      },
      __typename: LinkAppearance.SECONDARY,
      cTAType: ButtonColors.LIGHT,
    },
  ],
  connectionsBox: 'mock_connections_box',
}

describe('Landing Hero Banner', () => {
  it('should render Landing Hero Banner', async () => {
    const screen = render(<LandingHeroBanner {...mockProps} />)

    const elementH = screen.getByText('Mock Headering')
    const elementAL = screen.getByText('Mock Anchor Link')
    const elementAP = screen.getByText('Mock Action Panel Title')
    const element1 = screen.getByText('Mock Panel Link 1')
    const element2U = screen.getByText('Mock Panel Link 2').closest('a')

    expect(elementH).toBeInTheDocument()
    expect(elementAL).toBeInTheDocument()
    expect(elementAP).toBeInTheDocument()
    expect(element1).toBeInTheDocument()
    expect(element2U).toHaveAttribute('href', '/panel/link/url2')
  })
})
