import React from 'react'
import { Story, Meta } from '@storybook/react'
import BannerCurved from './BannerCurved'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { BannerCurvedType } from '_types/CMS/nodes/components/UKPN'
export default {
  title: 'Molecules/BannerCurved',
  component: BannerCurved,
} as Meta

const Template: Story<BannerCurvedType> = (args) => <BannerCurved {...args} />

export const Default = Template.bind({})
export const BannerCurvedData: BannerCurvedType = {
  __typename: ComponentsTypeName.BANNER_CURVED,
  header: 'Fuse upgrade',
  tag: 'Latest update',
  subHeader:
    'If you need to upgrade your main electrical fuse to 80 or 100amps, we can help you. Please read the information guides to see what you need to do before we can safely carry out the work.',
  desktopImage: {
    umbracoFile: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/yx1lqcdz/extrasupportfamily.jpg?center=0.52545065446072525,0.22786539968652036&mode=crop&width=500&height=400',
    },
  },
  bannerCurvedCTA: {
    name: 'Find out more',
    url: 'http://google.com',
    type: LinkType.CONTENT,
    target: '_blank',
  },
}
Default.args = BannerCurvedData
