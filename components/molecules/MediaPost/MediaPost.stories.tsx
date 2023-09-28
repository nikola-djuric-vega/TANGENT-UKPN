import { MediaPostType } from '_types/CMS/nodes/components/UKPN'
import MockData from '../StormFeed/mock-storm-feed-data'
import { Story, Meta } from '@storybook/react'
import MediaPost from './MediaPost'
import React from 'react'

export default {
  title: 'Molecules/MediaPost',
  component: MediaPost,
} as Meta

const Template: Story<MediaPostType> = (args) => <MediaPost {...args} />

export const Primary = Template.bind({})
Primary.args = MockData[3] as MediaPostType
