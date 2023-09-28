import { PowerCutBannerType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import PowerCutBanner from './PowerCutBanner'
import React from 'react'

export default {
  title: 'organisms/PowerCutBanner',
  component: PowerCutBanner,
} as Meta

const Template: Story<PowerCutBannerType> = (args) => (
  <PowerCutBanner {...args} />
)

export const PowerCutBannerData: PowerCutBannerType = {
  __typename: ComponentsTypeName.POWER_CUT_BANNER,
  title: 'Search, track and report power cuts',
  isLive: true,
}

export const Default = Template.bind({})
Default.args = PowerCutBannerData
