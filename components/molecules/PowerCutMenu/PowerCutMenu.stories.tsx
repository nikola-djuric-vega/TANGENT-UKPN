import React from 'react'
import { Story, Meta } from '@storybook/react'
import PowerCutMenu from './PowerCutMenu'

export default {
  title: 'Molecules/PowerCutMenu',
  component: PowerCutMenu,
} as Meta

const Template: Story = (args) => <PowerCutMenu {...args} />

export const Default = Template.bind({})
Default.args = {}
