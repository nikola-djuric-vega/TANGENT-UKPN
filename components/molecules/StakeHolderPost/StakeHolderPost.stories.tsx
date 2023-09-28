import { StakeHolderPostType } from '_types/CMS/nodes/components/UKPN'
import MockData from '../StormFeed/mock-storm-feed-data'
import StakeHolderPost from './StakeHolderPost'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/StakeHolderPost',
  component: StakeHolderPost,
} as Meta

const Template: Story<StakeHolderPostType> = (args) => (
  <StakeHolderPost {...args} />
)

export const Primary = Template.bind({})
Primary.args = MockData[5] as StakeHolderPostType
