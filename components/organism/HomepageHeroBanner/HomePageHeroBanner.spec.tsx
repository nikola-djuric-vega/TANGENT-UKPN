import { ComponentsTypeName, LinkType } from '_types/CMS'
import HomePageHeroBanner from './HomePageHeroBanner'
import { render } from '@testing-library/react'
import { IconNames } from '_types/local'
import React from 'react'

import {
  HomePageHeroBannerSlideImageType,
  HomePageHeroSlideParallaxType,
  HomePageHeroBannerType,
  HomePageHeroSlideType,
} from '_types/CMS/nodes/components/UKPN'

jest.mock('lodash/debounce', () => jest.fn)

const mockSlideImg: HomePageHeroBannerSlideImageType = {
  __typename: HomePageHeroSlideType.IMAGE,
  desktopImage: {
    id: 'mock/desktopImage',
    name: 'mock desktopImage 1',
    url: 'www.mock.ii/url',
  },
  mobileImage: {
    id: 'mock/mobileImage',
    name: 'mock mobileImage 1',
    url: 'www.mock.ii/url',
  },
  tabletImage: {
    id: 'mock/tabletImage',
    name: 'mock tabletImage 1',
    url: 'www.mock.ii/url',
  },
  navigationTitle: 'Mock Banner Slide Image',
  lighting: 'mock_lightning',
  title: 'Mock Banner Slide Image',
  text: 'Mock Banner Slide Image Text',
  icon: IconNames.ARROW_ICON,
  link: {
    __typename: 'mock_type',
    name: 'Mock Banner Slide Link',
    type: LinkType.CONTENT,
    url: 'mock/bannerlink/url',
  },
}

const mockSlidePrlx: HomePageHeroSlideParallaxType = {
  __typename: HomePageHeroSlideType.PARALLAX,
  foregroundDesktopImage: {
    id: 'mock/desktopImage',
    name: 'Mock foregroundDesktopImage',
    url: 'www.mock.ii/url',
  },
  foregroundMobileImage: {
    id: 'mock/mobileImage',
    name: 'Mock foregroundMobileImage',
    url: 'www.mock.ii/url',
  },
  foregroundTabletImage: {
    id: 'mock/tabletImage',
    name: 'Mock foregroundTabletImage',
    url: 'www.mock.ii/url',
  },
  backgroudDesktopImage: {
    id: 'mock/desktopImage',
    name: 'Mock backgroudDesktopImage',
    url: 'www.mock.ii/url',
  },
  backgroudTabletImage: {
    id: 'mock/mobileImage',
    name: 'Mock backgroudTabletImage',
    url: 'www.mock.ii/url',
  },
  backgroundMobileImage: {
    id: 'mock/tabletImage',
    name: 'Mock backgroundMobileImage',
    url: 'www.mock.ii/url',
  },
  iconDesktopImage: {
    id: 'mock/desktopImage',
    name: 'Mock iconDesktopImage',
    url: 'www.mock.ii/url',
  },
  iconTabletImage: {
    id: 'mock/mobileImage',
    name: 'Mock iconTabletImage',
    url: 'www.mock.ii/url',
  },
  iconMobileImage: {
    id: 'mock/tabletImage',
    name: 'Mock iconMobileImage',
    url: 'www.mock.ii/url',
  },

  navigationTitle: 'Mock Banner Parallax',
  lighting: 'mock_lightning',
  title: 'Mock Banner Slide Parallax',
  text: 'Mock Banner Slide Parallax Text',
  icon: IconNames.ARROW_ICON,
  link: {
    __typename: 'mock_type',
    name: 'Mock Banner Slide Link',
    type: LinkType.CONTENT,
    url: 'mock/bannerlink/url',
  },
}

const mockProps0: HomePageHeroBannerType = {
  __typename: ComponentsTypeName.HOME_PAGE_HERO_BANNER,
  slides: [],
}

const mockProps1: HomePageHeroBannerType = {
  __typename: ComponentsTypeName.HOME_PAGE_HERO_BANNER,
  slides: [mockSlideImg],
}

const mockProps2: HomePageHeroBannerType = {
  __typename: ComponentsTypeName.HOME_PAGE_HERO_BANNER,
  slides: [mockSlidePrlx],
}

describe('Homepage Hero Banner', () => {
  it('Render Homepage Hero Banner With Image', async () => {
    const screen = render(<HomePageHeroBanner {...mockProps1} />)

    //Test regular render
    const element1 = screen.getAllByAltText('mock mobileImage 1')
    const element2 = screen.getAllByText('Mock Banner Slide Image')

    expect(element1[0]).toBeInTheDocument()
    expect(element2[0]).toBeInTheDocument()

    //Test window behaviour
    global.innerWidth = 380
    render(<HomePageHeroBanner {...mockProps1} />)
    global.innerWidth = 800
    render(<HomePageHeroBanner {...mockProps1} />)
  })

  it('Render Homepage Hero Banner With Parallax', async () => {
    const screen = render(<HomePageHeroBanner {...mockProps2} />)

    //Test regular render
    const element3 = screen.getAllByText('Mock Banner Parallax')
    expect(element3[0]).toBeInTheDocument()

    //Test window behaviour
  })
})
