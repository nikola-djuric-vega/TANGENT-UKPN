import { InterimHomepageBannerType } from '_types/CMS/nodes/components/UKPN'
import InterimHomepageBanner from './InterimHomepageBanner'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/InterimHomepageBanner',
  component: InterimHomepageBanner,
} as Meta<InterimHomepageBannerType>

const Template: Story<InterimHomepageBannerType> = (args) => (
  <InterimHomepageBanner {...args} />
)

export const Default = Template.bind({})
export const InterimHomepageBannerData: InterimHomepageBannerType = {
  __typename: ComponentsTypeName.INTERIM_HOMEPAGE_BANNER,
  headerText:
    'We maintain the power networks across London, the South East and East of England.',
  backgroundImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/fpvbpu0c/ukpn-field-operative-mp-19-1-1.png',
    name: 'Interim Hero Banner',
    umbracoHeight: '496',
    umbracoWidth: '569',
  },
}
Default.args = InterimHomepageBannerData
