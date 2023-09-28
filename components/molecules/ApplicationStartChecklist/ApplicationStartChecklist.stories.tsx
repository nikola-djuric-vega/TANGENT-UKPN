import { Story, Meta } from '@storybook/react'
import React from 'react'

import ApplicationStartChecklist, {
  ApplicationStartChecklistProps,
} from './ApplicationStartChecklist'

export default {
  title: 'Molecules/ApplicationStartChecklist',
  component: ApplicationStartChecklist,
} as Meta

const Template: Story<ApplicationStartChecklistProps> = (args) => (
  <ApplicationStartChecklist {...args} />
)

export const Default = Template.bind({})
Default.args = {
  checkListTitle:
    'Please make sure you have the following to hand before starting:',
  checklistItems: [
    'Property and address details',
    'Your existing Meter Point Administration Number (MPAN)',
    'Details of how much power you need to upgrade to',
    'A drawing or a plan would be useful showing the location of the electricity meter within the property',
  ],
}
