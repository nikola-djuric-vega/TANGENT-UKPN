import { StormLandingBannerType } from '_types/CMS/nodes/components/UKPN/storm-landing-banner'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import StormLandingBanner from './StormLandingBanner'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'organisms/StormLandingBanner',
  component: StormLandingBanner,
  parameters: {},
} as Meta

const Template: Story<StormLandingBannerType> = (args) => (
  <StormLandingBanner {...args} />
)
export const Default = Template.bind({})
export const Storm = Template.bind({})
export const ContactCard = Template.bind({})

export const StormPrepareData: StormLandingBannerType = {
  __typename: ComponentsTypeName.STORM_LANDING_BANNER,
  backgroundImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/nb1btkoe/storm-banner.jpg',
    name: 'Storm Banner',
  },
  title:
    'Strong winds are forecast across parts of our electricity network in the East of England.',
  updatedTime: '2022-10-18T11:00:00Z',
  summary:
    '<p>We are currently monitoring the weather closely and are in regular contact with the Met Office as the forecast develops.</p>',
  powerOffTitle: 'Is your power off?',
  powerOffSubtitle:
    'Enter your postcode to search, track and report power cuts',
  links: [
    {
      linkIcon: IconNames.ICON_HOME,
      linkURL: {
        name: 'Checklist item',
        type: LinkType.CONTENT,
        url: 'http://www.google.com',
      },
    },
    {
      linkIcon: IconNames.ICON_TREE_BUSH_POWERLINE,
      linkURL: {
        name: 'Checklist item with an example of longer text length',
        type: LinkType.CONTENT,
        url: 'http://www.google.com',
      },
    },
  ],
}

const StormData: StormLandingBannerType = {
  __typename: ComponentsTypeName.STORM_LANDING_BANNER,
  backgroundImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/nb1btkoe/storm-banner.jpg',
    name: 'Storm Banner',
  },
  title:
    'Strong winds are forecast across parts of our electricity network in the East of England.',
  updatedTime: '2022-10-11T12:00:00Z',
  summary:
    '<ul><li>We understand how difficult is to be without power and we prepared with extra teams on duty</li><li>If you see an overhead line down, please keep well clear and call our emergency powercut line on 105</li><li>Please treat electricity cables as live, stay away and call us immediatly on 0800 31 63 105 or 105 (Free to call from a landline or mobile phone). If you see electricity lines that are down or causing signifcant risk to the public please call 999.</li></ul>',
  powerOffTitle: 'Is your power off?',
  powerOffSubtitle:
    'Enter your postcode to search, track and report power cuts',
  links: [
    {
      linkIcon: IconNames.ICON_HOME,
      linkURL: {
        name: 'Checklist item',
        type: LinkType.CONTENT,
        url: 'http://www.google.com',
      },
    },
    {
      linkIcon: IconNames.ICON_TREE_BUSH_POWERLINE,
      linkURL: {
        name: 'Checklist item with an example of longer text length',
        type: LinkType.CONTENT,
        url: 'http://www.google.com',
      },
    },
  ],
}

export const ContactCardData: StormLandingBannerType = {
  __typename: ComponentsTypeName.STORM_LANDING_BANNER,
  backgroundImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/nb1btkoe/storm-banner.jpg',
    name: 'Storm Banner',
  },
  title:
    'Strong winds are forecast across parts of our electricity network in the East of England.',
  updatedTime: '2022-10-11T12:00:00Z',
  contactCardLink: {
    type: LinkType.EXTERNAL,
    name: 'UKPN',
    url: '/ukpn/',
  },
  contactCard: [
    {
      author: {
        authorName: 'Alex Williams',
        department: 'Customer Services',
      },
      cardTitle:
        'If you see an overhead line down, please keep well clear and call our emergency line on 105',
      cardSubtitle:
        '<p>Please treat electricity cables as live, stay away and call us immediately 0800 31 63 105 or 105 (Free to call from a landline or a mobile phone). If you see electricity lines down or causing significant risk to the public please call 999.</p>',
    },
  ],
}

Default.args = StormPrepareData
Storm.args = StormData
ContactCard.args = ContactCardData
