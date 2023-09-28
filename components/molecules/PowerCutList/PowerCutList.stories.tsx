import PowerCutList, { PowerCutListProps } from './PowerCutList'
import { PowerCutListMockData } from './PowerCutListMockData'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'molecules/PowerCutList',
  component: PowerCutList,
} as Meta

const Template: Story<PowerCutListProps> = (args) => <PowerCutList {...args} />

export const Default = Template.bind({})

Default.args = PowerCutListMockData
