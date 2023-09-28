import { Incident } from '_types/local/incidents'
import { mockIncidentHeader } from './mock-incident-details'
import IncidentDetails from './IncidentDetails'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/IncidentDetails',
  component: IncidentDetails,
} as Meta

const Template: Story<Incident> = (args) => <IncidentDetails {...args} />

export const Default = Template.bind({})
export const IncidentDetailsData = {
  incident: mockIncidentHeader,
}
