import { Story, Meta } from '@storybook/react'
import ScrollPromp from './ScrollPromp'
import React from 'react'

export default {
  title: 'molecules/ScrollPromp',
  component: ScrollPromp,
} as Meta

const Template: Story = (args) => <ScrollPromp callback={() => {}} {...args} />

export const Default = Template.bind({})
Default.args = {}
