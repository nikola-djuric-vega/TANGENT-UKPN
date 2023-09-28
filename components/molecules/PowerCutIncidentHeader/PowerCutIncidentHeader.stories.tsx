import { PowerCutIncidentHeaderData } from './PowerCutIncidentHeaderData.mock'
import { Story, Meta } from '@storybook/react'
import React from 'react'
import PowerCutIncidentHeader, {
  PowerCutIncidentHeaderProps,
} from './PowerCutIncidentHeader'

export default {
  title: 'Molecules/PowerCutIncidentHeader',
  component: PowerCutIncidentHeader,
} as Meta

const Template: Story<PowerCutIncidentHeaderProps> = (args) => (
  <PowerCutIncidentHeader {...args} />
)

export const Default = Template.bind({})

Default.args = PowerCutIncidentHeaderData
