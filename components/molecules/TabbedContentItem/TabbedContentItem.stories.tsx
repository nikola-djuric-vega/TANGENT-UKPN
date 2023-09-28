import TabbedContentItem, { TabbedContentItemProps } from './TabbedContentItem'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/TabbedContentItem',
  component: TabbedContentItem,
} as Meta

const Template: Story<TabbedContentItemProps> = (args) => (
  <TabbedContentItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  tabbedContentItem: {},
}
