import OptionSelectorData from '../../molecules/OptionSelector/option-selector-data'
import { LandingHeroBannerType } from '_types/CMS/nodes/components/UKPN'
import LandingHeroBanner from './LandingHeroBanner'
import { Story, Meta } from '@storybook/react'
import React from 'react'

import {
  ComponentsTypeName,
  ButtonAppearance,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Organisms/LandingHeroBanner',
  component: LandingHeroBanner,
} as Meta

const Template: Story<LandingHeroBannerType> = (args) => (
  <LandingHeroBanner {...args} />
)
interface LandingHeroBannerDataType {
  [key: string]: LandingHeroBannerType
}

export const LandingHeroBannerData: LandingHeroBannerDataType = {
  default: {
    __typename: ComponentsTypeName.LANDING_HERO_BANNER,
    headering: 'Need extra support during a power cut?',
    subHeading:
      'Whether you are domestic, commercial or industrial we can provide you with a new electricity supply',
    image: {
      url: 'https://picsum.photos/200',
      name: 'Landing Hero Banner',
      umbracoHeight: '300',
      umbracoWidth: '300',
    },
    anchorPanelTitle: 'Content on this page',
    anchorLinks: [
      {
        type: LinkType.EXTERNAL,
        name: 'MediaTiles',
        url: '#mediaTiles',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'What help should I expect to get?',
        url: 'http://delfi.com',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'How you can prepare for a power cut',
        url: 'http://delfi.com',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'Common questions',
        url: 'http://delfi.com',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'We work with a range of partners',
        url: 'http://delfi.com',
      },
    ],
    actionPanelTitle: 'We offer this service for FREE',
    actionPanelLinks: [
      {
        uRL: {
          type: LinkType.EXTERNAL,
          url: 'http://delfi.com',
          name: 'Book face-to-face',
        },
        __typename: LinkAppearance.SECONDARY,
        cTAType: ButtonColors.LIGHT,
      },
      {
        uRL: {
          type: LinkType.MEDIA,
          url: 'http://delfi.com',
          name: 'Download video',
        },
        __typename: ButtonAppearance.VIDEO,
        cTAType: ButtonColors.LIGHT,
      },
      {
        uRL: {
          type: LinkType.EXTERNAL,
          url: 'http://delfi.com',
          name: 'Download video',
        },
        __typename: LinkAppearance.TERTIARY,
        cTAType: ButtonColors.LIGHT,
      },
    ],
  },
  noImage: {
    __typename: ComponentsTypeName.LANDING_HERO_BANNER,
    headering: 'Need extra support during a power cut?',
    subHeading:
      'Whether you are domestic, commercial or industrial we can provide you with a new electricity supply',
  },
  onlyImage: {
    __typename: ComponentsTypeName.LANDING_HERO_BANNER,
    headering: 'Need extra support during a power cut?',
    subHeading:
      'Whether you are domestic, commercial or industrial we can provide you with a new electricity supply',
    image: {
      url: 'https://picsum.photos/200',
      name: 'Landing Hero Banner',
      umbracoHeight: '300',
      umbracoWidth: '300',
    },
  },
  withConnectionBox: {
    __typename: ComponentsTypeName.LANDING_HERO_BANNER,
    headering: 'Need extra support during a power cut?',
    subHeading:
      'Whether you are domestic, commercial or industrial we can provide you with a new electricity supply',
    anchorPanelTitle: 'Content on this page',
    image: {
      url: 'https://picsum.photos/200',
      name: 'Landing Hero Banner',
      umbracoHeight: '300',
      umbracoWidth: '300',
    },
    anchorLinks: [
      {
        type: LinkType.EXTERNAL,
        name: 'Whos eligible for extra support during a power cut',
        url: '#next',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'What help should I expect to get?',
        url: 'http://delfi.com',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'How you can prepare for a power cut',
        url: 'http://delfi.com',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'Common questions',
        url: 'http://delfi.com',
      },
      {
        type: LinkType.EXTERNAL,
        name: 'We work with a range of partners',
        url: 'http://delfi.com',
      },
    ],
    connectionsBox: OptionSelectorData,
  },
}

export const Default = Template.bind({})
export const NoImage = Template.bind({})
export const OnlyImage = Template.bind({})
export const WithConnectionBox = Template.bind({})

Default.args = LandingHeroBannerData.default
NoImage.args = LandingHeroBannerData.noImage
OnlyImage.args = LandingHeroBannerData.onlyImage
WithConnectionBox.args = LandingHeroBannerData.withConnectionBox
