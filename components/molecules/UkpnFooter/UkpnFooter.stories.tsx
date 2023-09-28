import { UkpnGlobalDataProvider } from '_context/ukpn-global-data'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { Meta, Story } from '@storybook/react'
import { LinkType } from '_types/CMS'
import UkpnFooter from './UkpnFooter'
import React from 'react'

import {
  GlobalChildrenItemsName,
  UkpnGlobalData,
  StormMode,
} from '_types/CMS/nodes'

export default {
  title: 'Molecules/UkpnFooter',
  component: UkpnFooter,
} as Meta

const mockData: UkpnGlobalData = {
  allSiteSettings: {
    click4AssistanceId: '09f53179-b870-4f80-acdb-d2ddbced3d27',
    enableNewWebChat: true,
    threePostcodesSearchPanelToggle: false,
    twoCallsPanelToggle: false,
    stormMode: StormMode.STORM,
    reportPowerCutLink: {
      url: '/power-cut/report-power-cut',
      type: LinkType.EXTERNAL,
      name: 'Power cut',
    },
    GlobalFooter: {
      __typename: GlobalChildrenItemsName.FOOTER,
      footerLogo: {
        url: 'https://media.umbraco.io/dev-uk-power-networks/ehkhpitu/logo-no-strap.png',
      },
      generalLinks: [
        {
          type: LinkType.EXTERNAL,
          name: 'About us',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'News and Media',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Engagement',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Innovation',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Careers',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'WhatsApp',
          url: 'http://google.com',
          target: '_blank',
        },
        {
          type: LinkType.EXTERNAL,
          name: 'Help and contact',
          url: 'http://google.com',
          target: '_blank',
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
    },
  },
}

const Template: Story = (args) => {
  return (
    <UkpnGlobalDataProvider items={mockData}>
      <DictionaryItemsProvider
        items={{
          usingWebsiteMessage: '<p>Need help using this website?</p>',
          selectLanguageLabel: '<p>Useful Information</p>',
          accessibilityMessage:
            '<p>We want to ensure that our website is as accessible and usable as possible and we are committed to constantly improving our website to meet the needs of all users. Find out <a>ways we can help</a>.</p><p><a><img src="https://media.umbraco.io/dev-uk-power-networks/ehkhpitu/logo-no-strap.png"></a></p>',
        }}
      >
        <UkpnFooter {...args}></UkpnFooter>
      </DictionaryItemsProvider>
    </UkpnGlobalDataProvider>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
