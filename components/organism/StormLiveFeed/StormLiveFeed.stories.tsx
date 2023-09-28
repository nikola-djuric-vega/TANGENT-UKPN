import { StormFeedData } from '_molecules/StormFeed/StormFeed.stories'
import { StormLiveFeedType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import StormLiveFeed from './StormLiveFeed'
import React from 'react'

export default {
  title: 'organisms/StormLiveFeed',
  component: StormLiveFeed,
} as Meta

export const StormLiveFeedData: StormLiveFeedType = {
  __typename: ComponentsTypeName.STORM_LIVE_FEED,
  storm: StormFeedData,
}

const Template: Story<StormLiveFeedType> = (args) => <StormLiveFeed {...args} />
export const Default = Template.bind({})

Default.args = StormLiveFeedData
