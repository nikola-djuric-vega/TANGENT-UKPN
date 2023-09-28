import { DoubleCtaNavIconImageType } from '_types/CMS/nodes/components/UKPN'
import DoubleCtaNavIconImage from './DoubleCtaNavIconImage'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/DoubleCtaNavIconImage',
  component: DoubleCtaNavIconImage,
} as Meta

const Template: Story<DoubleCtaNavIconImageType> = (args) => (
  <DoubleCtaNavIconImage {...args} />
)

export const Default = Template.bind({})
export const DoubleCtaNavIconImageData: DoubleCtaNavIconImageType = {
  __typename: ComponentsTypeName.NAV_ICON_ITEM,
  leftTitle: 'DER Owners and Operators',
  leftText:
    'Register for access to our outage planning application Network Vision to view Extra High Voltage (EHV) outages affecting your site. It’s vital, for all voltage levels, that we have the correct operational contact information for your site. You can view and amend your Site Responsibility Schedule (SRS) so we can inform you of planned works that could impact your sites operation.',
  leftImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/hfkglpyg/test2.png',
    name: 'left image',
  },
  leftIcon: IconNames.ICON_SPECIALIST_TEAM,
  leftButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },

  rightTitle: 'The Embedded Capacity Register',
  rightText:
    'The Embedded Capacity Register (ECR) has replaced the System-Wide Resource Register (SWRR). The Register provides information on Distributed Energy Resources and network requirements.',
  rightIcon: IconNames.FORTY_PX_LOCATION,
  rightButtonLink: {
    url: 'http://google.com',
    name: 'Find out more',
    type: LinkType.EXTERNAL,
  },
  rightImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/hfkglpyg/test2.png',
    name: 'right image',
  },
}
Default.args = DoubleCtaNavIconImageData
