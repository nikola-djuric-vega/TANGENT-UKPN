import { Story, Meta } from '@storybook/react'
import MapLegend from './MapLegend'
import React from 'react'

export default {
  title: 'Molecules/MapLegend',
  component: MapLegend,
} as Meta

const Template: Story = (args) => <MapLegend isPanelOpened={false} {...args} />

export const Default = Template.bind({})
Default.args = {}
