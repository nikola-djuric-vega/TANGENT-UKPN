import IncidentReason from './IncidentReason'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/IncidentReason',
  component: IncidentReason,
} as Meta

const Template: Story = (args) => <IncidentReason {...args} />

export const Default = Template.bind({})
export const IncidentReasonData = {
  title: 'We restored a power cut in your area at: 23 Jun 22:30',
  reason:
    'A fault occurred on a piece of electrical equipment which controls the power to your home.',
}
