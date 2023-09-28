import SafeSpaceWidget from './SafeSpaceWidget'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/RichText',
  component: SafeSpaceWidget,
} as Meta

const Template: Story = (args) => <SafeSpaceWidget {...args} />

export const Primary = Template.bind({})
