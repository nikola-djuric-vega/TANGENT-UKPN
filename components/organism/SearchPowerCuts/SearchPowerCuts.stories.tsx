import { SearchPowerCutsType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS/base'
import { Story, Meta } from '@storybook/react'
import SearchPowerCuts from './SearchPowerCuts'
import { LinkType } from '_types/CMS'
import React from 'react'
import { IconNames } from '_types/local'

export default {
  title: 'organisms/SearchPowerCuts',
  component: SearchPowerCuts,
} as Meta<SearchPowerCutsType>

const Template: Story<SearchPowerCutsType> = (args) => (
  <SearchPowerCuts {...args} />
)

export const Default = Template.bind({})
export const SearchPowerCutsData: SearchPowerCutsType = {
  __typename: ComponentsTypeName.SEARCH_POWER_CUTS,
  searchPowerCutsItems: [
    {
      icon: IconNames.ICO_VISIT,
      link: {
        type: LinkType.CONTENT,
        name: 'Areas we cover',
        udi: 'umb://document/214a5ed4ab3a42ff9428f869363034b9',
        url: '/ukpn/about-us/areas-we-cover/',
        __typename: 'Link',
      },
    },
    {
      icon: IconNames.ICON_VAN,
      link: {
        type: LinkType.CONTENT,
        name: 'Extra support during a power cut',
        udi: 'umb://document/2067f16627ab40478bc0858239af33b4',
        url: '/ukpn/contact-information-pages/extra-support-during-a-power-cut/',
        __typename: 'Link',
      },
    },
    {
      icon: IconNames.ICON_PERSON,
      link: {
        type: LinkType.CONTENT,
        name: 'Investor relations',
        udi: 'umb://document/01a181d672954cb09511eac48fff609a',
        url: '/ukpn/about-us/investor-relations/',
        __typename: 'Link',
      },
    },
    {
      icon: IconNames.ICON_POWER_ON,
      link: {
        type: LinkType.CONTENT,
        name: 'Community Energy',
        udi: 'umb://document/6e3e289764af4f569c115fd403830a60',
        url: '/ukpn/future-energy/community-energy/',
        __typename: 'Link',
      },
    },
  ],
  searchPowerCutsMapLink: {
    type: LinkType.CONTENT,
    name: 'Map',
    udi: 'umb://document/e5fbb4adff894f9b82df5d7edc97bc4b',
    url: '/ukpn/power-cut/map/',
    __typename: 'Link',
  },
  searchPowerCutsImage: {
    umbracoHeight: '111',
    umbracoWidth: '111',
    name: '105 Logo',
    url: 'https://media.umbraco.io/dev-uk-power-networks/q5mohwfd/105-logo.png',
  },
  searchPowerCutsTitle: 'Search, track and report power cuts',
  searchPowerCutsHeader:
    'Enter your postcode to search, track and report power cuts',
}

Default.args = SearchPowerCutsData
