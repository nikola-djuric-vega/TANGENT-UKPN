import { mockIncidentHeader } from './mock-incident-header'
import IncidentHeader, { IncidentHeaderProps } from './IncidentHeader'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/IncidentHeader',
  component: IncidentHeader,
} as Meta

const Template: Story<IncidentHeaderProps> = (args) => (
  <IncidentHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  incident: mockIncidentHeader,
}
