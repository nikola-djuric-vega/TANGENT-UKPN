import { GlobalChildrenItemsName, StormMode } from '_types/CMS/nodes'
import {
  UkpnGlobalContexData,
  UkpnGlobalDataContext,
} from '_context/ukpn-global-data'
import { fireEvent, render } from '@testing-library/react'
import { Link, LinkType } from '_types/CMS'
import UkpnFooter from './UkpnFooter'
import React from 'react'

interface optionProps {
  label: string
  value: Link
}

interface Language {
  label: string
  value: Link
}

const mockoptionProps: optionProps = {
  label: 'Option',
  value: {
    __typename: 'mock_type',
    name: 'Mock Link',
    type: LinkType.CONTENT,
    url: 'mock/notification/url',
  },
}

const mockLanguageProps: Language = {
  label: 'Language',
  value: {
    __typename: 'mock_type',
    name: 'Mock Link',
    type: LinkType.CONTENT,
    url: 'mock/notification/url',
  },
}

const mockUkpnGlobalData: UkpnGlobalContexData = {
  stormContainerData: {
    stormMode: StormMode.STORM,
    stormTracker: false,
  },
  fetchStormContainerData: async () => {},
  allSiteSettings: {
    enableNewWebChat: false,
    threePostcodesSearchPanelToggle: false,
    reportPowerCutLink: {
      __typename: 'mock_type',
      name: 'Mock Link',
      type: LinkType.EXTERNAL,
      url: 'mock/powercut/url',
    },
    twoCallsPanelToggle: false,
    GlobalFooter: {
      __typename: GlobalChildrenItemsName.FOOTER,
      generalLinks: [
        {
          type: LinkType.EXTERNAL,
          name: 'Mock About us',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Mock News and Media',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Mock Engagement',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Mock Innovation',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Mock Careers',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Mock WhatsApp',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Mock Help and contact',
          url: 'http://google.com',
          target: '_blank',
        },
      ],
      socialMediaItems: [
        {
          icon: 'instagram',
          url: 'https://www.instagram.com/uk_power_networks/',
        },
        {
          icon: 'facebook',
          url: 'https://www.facebook.com/',
        },
        {
          icon: 'twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'youtube',
          url: 'https://www.youtube.com/',
        },
        {
          icon: 'linkedin',
          url: 'https://www.linkedin.com/company/ukpowernetworks',
        },
      ],
      languageSelector: [
        {
          label: 'Arabic',
          link: { type: LinkType.EXTERNAL, name: 'UKPN', url: '/ukpn/' },
        },
        {
          label: 'Bangla',
          link: { type: LinkType.EXTERNAL, name: 'UKPN', url: '/ukpn/' },
        },
        {
          label: 'French',
          link: { type: LinkType.EXTERNAL, name: 'UKPN', url: '/ukpn/' },
        },
        {
          label: 'Spanish',
          link: { type: LinkType.EXTERNAL, name: 'UKPN', url: '/ukpn/' },
        },
      ],
      informationLinks: [
        {
          type: LinkType.EXTERNAL,
          name: 'Privacy policy',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Terms and conditions',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Cookie policy',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Modern Slavery Act',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Sitemap',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Accessibility',
          url: 'http://google.com',
          target: '_blank',
        },
      ],
      serviceLinks: [
        {
          type: LinkType.EXTERNAL,
          name: 'Infrastructure services',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'DER, DG and storage',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Competition in Connections',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'G81 Library',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Areas of Outstanding Natural Beauty map',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Customer Engagement Group',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Suppliers and partners',
          url: 'http://google.com',
          target: '_blank',
        },
      ],
    },
    GlobalHeader: {
      __typename: GlobalChildrenItemsName.HEADER,
      secondaryNavigationLinks: [],
    },
    RightHandMenuNavigation: {
      __typename: GlobalChildrenItemsName.RIGHTHANDMENUNAVIGATION,
      menuLinks: [] as Link[],
    },
  },
}

describe('Ukpn Footer Test', () => {
  it('should render the Footer', () => {
    const screen = render(
      <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
        <UkpnFooter />
      </UkpnGlobalDataContext.Provider>
    )

    const element1 = screen.getByText('Mock About us')
    const element2 = screen.getByText('Cookie policy')

    fireEvent.click(element1)
    fireEvent.click(element2)
  })
})
