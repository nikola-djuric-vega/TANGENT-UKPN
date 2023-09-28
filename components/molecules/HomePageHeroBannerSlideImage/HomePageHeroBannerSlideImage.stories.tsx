import { Viewports } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import { LinkType } from '_types/CMS'
import React from 'react'

import HomePageHeroBannerSlideImage, {
  HomePageHeroBannerSlideImageProps,
} from './HomePageHeroBannerSlideImage'

export default {
  title: 'Molecules/HomePageHeroBannerSlideImage',
  component: HomePageHeroBannerSlideImage,
} as Meta

const Template: Story<HomePageHeroBannerSlideImageProps> = (args) => (
  <HomePageHeroBannerSlideImage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'UK Power Networks',
  navigationTitle: 'What we do',
  icon: IconNames.EIGHTY_PX_CONNECTIONS,
  viewport: Viewports.DESKTOP,
  lighting: 'light',
  text: 'We own and maintain electricity cables and lines across London, the South East and East of England. Customers don’t pay their electricity bills to us.',
  link: {
    name: 'Read our Business Plan',
    type: LinkType.EXTERNAL,
    url: '/',
  },
  desktopImage: {
    name: '',
    url: 'https://media.umbraco.io/dev-uk-power-networks/oa2hgk31/home-banner-parallax-ukpn-desktop.jpg',
  },
  tabletImage: {
    name: '',
    url: 'https://media.umbraco.io/dev-uk-power-networks/l0ufngzw/poppy-graphic-website-desktop-v2-3.png',
    umbracoHeight: '300',
    umbracoWidth: '300',
  },
  mobileImage: {
    name: '',
    url: 'https://media.umbraco.io/dev-uk-power-networks/ourgq4xz/poppy-graphic-website-desktop-v2-2.png',
    umbracoHeight: '300',
    umbracoWidth: '300',
  },
}
