import { Viewports } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import { LinkType } from '_types/CMS'
import React from 'react'

import HomePageHeroBannerSlideParallax, {
  HomePageHeroBannerSlideParallaxProps,
} from './HomePageHeroBannerSlideParallax'

export default {
  title: 'Molecules/HomePageHeroBannerSlideParallax',
  component: HomePageHeroBannerSlideParallax,
} as Meta

const Template: Story<HomePageHeroBannerSlideParallaxProps> = (args) => (
  <HomePageHeroBannerSlideParallax {...args} />
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
}
