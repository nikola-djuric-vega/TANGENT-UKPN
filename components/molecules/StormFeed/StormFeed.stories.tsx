import { StormSummaryData } from '_molecules/StormSummary/StormSummary.stories'
import { Storm } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import MockData from './mock-storm-feed-data'
import StormFeed from './StormFeed'
import React from 'react'

export default {
  title: 'Molecules/StormFeed',
  component: StormFeed,
} as Meta<Storm>

const Template: Story<Storm> = (args) => <StormFeed {...args} />

export const Default = Template.bind({})
export const StormFeedData: Storm = {
  stormSummary: [StormSummaryData],
  stormName: 'Storm Eunice',
  pinnedPost: MockData[2],
  hideStormSummary: false,
  descendants: {
    items: MockData,
  },
}
Default.args = StormFeedData
