import { DictionaryItemsProvider } from '_context/dictionary-items'
import {
  UkpnGlobalContexData,
  UkpnGlobalDataContext,
} from '_context/ukpn-global-data'
import { Meta, Story } from '@storybook/react'
import { LinkType } from '_types/CMS'
import UkpnHeader, { UkpnHeaderProps } from './UkpnHeader'
import React from 'react'
import { GlobalChildrenItemsName, StormMode } from '_types/CMS/nodes'

export default {
  title: 'Molecules/UkpnHeader',
  component: UkpnHeader,
} as Meta

export const mockUkpnGlobalData: UkpnGlobalContexData = {
  stormContainerData: {
    stormMode: StormMode.STORM,
    stormTracker: false,
  },
  fetchStormContainerData: async () => {},
  allSiteSettings: {
    stormModeLogo: {
      name: 'New Logo White',
      url: 'https://media.umbraco.io/dev-uk-power-networks/3zanfuiq/new_logo_white.svg',
    },
    mobileLogo: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/eayk5yzj/ukpnmobilelogo.jpg',
      name: 'Ukpnmobilelogo',
    },
    desktopLogo: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/g4sfe0v4/logo_svg.svg',
      name: 'Ukpn Logo Mobile',
    },
    enableNewWebChat: false,
    threePostcodesSearchPanelToggle: false,
    reportPowerCutLink: {
      __typename: 'mock_type',
      name: 'Mock Link',
      type: LinkType.EXTERNAL,
      url: 'mock/powercut/url',
    },
    twoCallsPanelToggle: false,
    MainNavigation: {
      __typename: GlobalChildrenItemsName.MAINNAVIGATION,
      children: {
        items: [
          {
            name: 'Power Cuts',
            promoBoxes: [
              {
                __typename: 'Promo box',
                cTA: {
                  name: 'google',
                  url: 'http://google.com',
                  type: LinkType.EXTERNAL,
                },
                promoBoxType: 'warning',
                title: 'Dangerous problem?',
                largeText: '',
                body: '<p>Please treat electricity cables as live, stay away and call us immediately on<span> </span><a href="tel:08003163105">0800 31 63 105</a><span> or </span><a href="tel:105">105</a></p>',
              },
            ],
            navigationMenu: [
              {
                title: 'Mock Navigation Menu',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Search for a power cut',
                    url: '/ukpn/power-cut/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'View all power cuts as a list',
                    url: '/ukpn/power-cut/list/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Report a power cut',
                    url: '/ukpn/power-cut/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Extra support during a power cut',
                    url: '/ukpn/power-cut/priority-services/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Help and advice',
                    url: '/ukpn/power-cut/help-and-advice/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Planned power cuts',
                    url: '/ukpn/power-cut/planned-power-cuts/',
                  },
                ],
              },
            ],
            showInStormMode: true,
          },
          {
            name: 'Electricity',
            promoBoxes: [
              {
                __typename: 'Promo box',
                promoBoxType: 'question',
                cTA: {
                  name: 'google',
                  url: 'http://google.com',
                  type: LinkType.EXTERNAL,
                },
                title: 'Dangerous problem?',
                largeText: 'large text test',
                body: '<p>Please treat electricity cables as live, stay away and call us immediately on<span> </span><a href="tel:08003163105">0800 31 63 105</a><span> or </span><a href="tel:105">105</a></p>',
              },
            ],
            navigationMenu: [
              {
                title: 'Install something new',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'New connection',
                    url: '/ukpn/electricity/new-connection/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Street furniture on the public highway',
                    url: '/ukpn/electricity/street-furniture-on-the-public-highway/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Temporary connection',
                    url: '/ukpn/electricity/temporary-connection/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Electric Vehicle Charging Point',
                    url: '/ukpn/electricity/electric-vehicle-charging-point/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Accessible Transport Information Hub',
                    url: '/ukpn/electricity/accessible-transport-information-hub/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Distribution energy resources',
                    url: '/ukpn/electricity/distribution-energy-resources/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Installing an electric heat pump',
                    url: '/ukpn/electricity/installing-an-electric-heat-pump/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Nature of supply',
                    url: '/ukpn/electricity/nature-of-supply/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Point of connection',
                    url: '/ukpn/electricity/point-of-connection/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Installing a 5G connection',
                    url: '/ukpn/electricity/installing-a-5g-connection/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Competition in Connections',
                    url: '/ukpn/electricity/competition-in-connections/',
                  },
                ],
              },
              {
                title: 'Change an existing supply',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Move',
                    url: '/ukpn/electricity/move/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Upgrade my power',
                    url: '/ukpn/electricity/upgrade-reduce-electricity/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Disconnect',
                    url: '/ukpn/electricity/disconnect/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Fuse upgrade',
                    url: '/ukpn/electricity/fuse-upgrade/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Replace meter board',
                    url: '/ukpn/electricity/replace-meter-board/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Replace meter box',
                    url: '/ukpn/electricity/replace-meter-box/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Replace fuse',
                    url: '/ukpn/electricity/replace-fuse/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Earthing',
                    url: '/ukpn/electricity/earthing/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Divert over70kva',
                    url: '/ukpn/electricity/divert-over70kva/',
                  },
                ],
              },
            ],
            showInStormMode: false,
          },
          {
            name: 'FAQs',
            navigationMenu: [
              {
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: "Who is my electricity supplier and what's my MPAN",
                    url: '/ukpn/help/who-is-my-electricity-supplier-and-what-is-my-mpan/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Your rights if you have electricity equipment on your land',
                    url: '/ukpn/electricity/equipment/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'What’s the difference between you and my electricity supplier',
                    url: '/ukpn/help/whats-the-difference-between-you-and-my-electricity-supplier/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'All FAQs',
                    url: '/ukpn/help-and-contact/',
                  },
                ],
              },
            ],
            showInStormMode: false,
          },
          {
            name: 'Safety',
            navigationMenu: [
              {
                title: 'Around power lines',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Cut trees and bushes near power line',
                    url: '/ukpn/safety/around-power-lines/cut-trees-and-bushes-near-power-line/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Cover my power lines so I can work near them',
                    url: '/ukpn/safety/around-power-lines/cover-my-power-lines-so-i-can-work-near-them/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Leaning or unsafe pole?',
                    url: '/ukpn/safety/around-power-lines/report-a-leaning-or-unsafe-electricity-pole/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'I need advice about working near overhead power lines',
                    url: '/ukpn/safety/around-power-lines/i-need-advice-about-working-near-overhead-power-lines/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Request plans showing where electricity cables are',
                    url: '/ukpn/safety/around-power-lines/request-plans-showing-where-electricity-cables-are/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Replace my power cable',
                    url: '/ukpn/safety/around-power-lines/replace-my-power-cable/',
                  },
                ],
              },
              {
                title: 'Around substations',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Need to get inside a substation?',
                    url: '/ukpn/safety/around-substations/need-to-get-inside-a-substation/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Substation issue',
                    url: '/ukpn/safety/around-substations/substation-issue/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Living next to electrical equipment',
                    url: '/ukpn/safety/around-substations/living-next-to-electrical-equipment/',
                  },
                ],
              },
              {
                title: 'Safety information',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Safety advice and resources',
                    url: '/ukpn/safety/safety-advice-and-resources/safety-advice-and-resources/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Power up!',
                    url: 'http://powerup.ukpowernetworks.co.uk/powerup/en/',
                  },
                ],
              },
            ],
            showInStormMode: true,
          },
          {
            name: 'Future energy',
            navigationMenu: [
              {
                title: 'Facilitating the future',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'RIIO-ED2 Business Plan',
                    url: 'https://ed2.ukpowernetworks.co.uk/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Facilitating Net Zero',
                    url: 'https://innovation.ukpowernetworks.co.uk/facilitating-net-zero/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Community Energy',
                    url: '/ukpn/future-energy/community-energy/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Renewable energy',
                    url: 'https://innovation.ukpowernetworks.co.uk/facilitating-net-zero/renewable-energy/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Electric vehicles',
                    url: 'https://innovation.ukpowernetworks.co.uk/facilitating-net-zero/electric-vehicles/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Heat decarbonisation',
                    url: 'https://innovation.ukpowernetworks.co.uk/facilitating-net-zero/heat-decarbonisation/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Green Recovery',
                    url: '/ukpn/green-recovery/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Innovation',
                    url: 'https://innovation.ukpowernetworks.co.uk/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Annual Review 2021',
                    url: 'https://annualreview2021.ukpowernetworks.co.uk/',
                  },
                ],
              },
              {
                title: 'Smart Grid',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Smart Grid home',
                    url: 'https://smartgrid.ukpowernetworks.co.uk/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Flexibility hub',
                    url: 'https://smartgrid.ukpowernetworks.co.uk/flexibility-hub/',
                  },
                ],
              },
              {
                title: 'Data and digitalisation',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,

                    name: 'Open Data Portal',
                    url: '/ukpn/open-data-portal/',
                  },
                  {
                    type: LinkType.EXTERNAL,

                    name: 'DSO dashboard',
                    url: '/ukpn/dso-dashboard/',
                  },
                  {
                    type: LinkType.EXTERNAL,

                    name: 'Digital strategy',
                    url: '/ukpn/future-energy/digital-strategy/',
                  },
                  {
                    type: LinkType.EXTERNAL,

                    name: 'Distribution Future Energy Scenarios 2022',
                    url: '/ukpn/future-energy/dfes-2022/',
                  },
                ],
              },
            ],
            showInStormMode: false,
          },
          {
            name: 'About us',
            navigationMenu: [
              {
                title: 'The company',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'About UK Power Networks',
                    url: '/ukpn/about-us/about-uk-power-networks/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Areas we cover',
                    url: '/ukpn/about-us/areas-we-cover/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Our ownership',
                    url: '/ukpn/about-us/our-ownership/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Our history',
                    url: '/ukpn/about-us/our-history/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Meet our Executive Management Team',
                    url: '/ukpn/about-us/meet-our-executive-management-team/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Our achievements',
                    url: '/ukpn/about-us/our-achievements/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'UK Power Networks pension arrangements',
                    url: '/ukpn/about-us/uk-power-networks-pension-arrangements/',
                  },
                ],
              },
              {
                title: 'Our vision',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'RIIO-ED2 Business Plan',
                    url: 'https://ed2.ukpowernetworks.co.uk/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Business Plan and Commitments 2015 - 2023',
                    url: '/ukpn/about-us/business-plan-2015-2023/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Our vision for the future',
                    url: '/ukpn/about-us/our-vision-for-the-future/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Environment and Sustainability',
                    url: '/ukpn/about-us/environment-and-sustainability/',
                  },
                ],
              },
              {
                title: 'Regulatory',
                navigationLinks: [
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Regulatory information',
                    url: '/ukpn/about-us/regulatory-information/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Infrastructure developers access statement',
                    url: '/ukpn/about-us/infrastructure-developers-access-statement/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Distribution use of system charges',
                    url: '/ukpn/about-us/distribution-use-of-system-charges/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Investor relations',
                    url: '/ukpn/about-us/investor-relations/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Suppliers and partners',
                    url: '/ukpn/about-us/suppliers-and-partners/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Road works',
                    url: '/ukpn/about-us/road-works/',
                  },
                  {
                    type: LinkType.EXTERNAL,
                    name: 'Insurance details',
                    url: '/ukpn/about-us/insurance-details/',
                  },
                ],
              },
            ],
            showInStormMode: false,
          },
        ],
      },
    },
    GlobalHeader: {
      __typename: GlobalChildrenItemsName.HEADER,
      secondaryNavigationLinks: [
        {
          url: '/ukpn/news/',
          type: LinkType.EXTERNAL,
          name: 'News and Media',
        },
        {
          url: '/ukpn/help-and-contact/',
          type: LinkType.EXTERNAL,
          name: 'Help and contact',
        },
        {
          url: '/ukpn/engagement/engaging-with-our-stakeholders/',
          type: LinkType.EXTERNAL,
          name: 'Engagement',
        },
        {
          url: '/ukpn/accessibility/',
          type: LinkType.EXTERNAL,
          name: 'Accessibility',
        },
      ],
    },
  },
}

const Template: Story<UkpnHeaderProps> = (args) => {
  return (
    <UkpnGlobalDataContext.Provider value={mockUkpnGlobalData}>
      <DictionaryItemsProvider
        items={{
          ukpnHeaderSearchPlaceholder: 'Enter search term',
        }}
      >
        <UkpnHeader {...args}></UkpnHeader>
      </DictionaryItemsProvider>
    </UkpnGlobalDataContext.Provider>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  isStormModePage: false,
}
