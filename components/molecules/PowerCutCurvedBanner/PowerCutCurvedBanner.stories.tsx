import { PowerCutCurvedBannerType } from '_types/CMS/nodes/components/UKPN'
import PowerCutCurvedBanner from './PowerCutCurvedBanner'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/PowerCutCurvedBanner',
  component: PowerCutCurvedBanner,
} as Meta

const Template: Story<PowerCutCurvedBannerType> = (args) => (
  <PowerCutCurvedBanner {...args} />
)

export const Default = Template.bind({})
export const PowerCutCurvedBannerData: PowerCutCurvedBannerType = {
  __typename: ComponentsTypeName.POWER_CUT_CURVED_BANNER,
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  tagLine: 'Get in touch',
  status: 'In progress',
  title: 'Contact us',
  icon: IconNames.FORTY_PX_POWER_CUT,
}
Default.args = PowerCutCurvedBannerData
