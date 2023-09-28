import FormStepper, { FormStepperProps } from './FormStepper'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/FormStepper',
  component: FormStepper,
} as Meta

const Template: Story<FormStepperProps> = (args) => {
  return <FormStepper {...args}></FormStepper>
}

export const Primary = Template.bind({})
Primary.args = {
  activePage: 0,
  completedPages: [],
  pages: [
    { caption: 'Property details', fieldsets: [] },
    { caption: 'Diversion works', fieldsets: [] },
    { caption: 'Your details', fieldsets: [] },
  ],
}

export const StepCompleted = Template.bind({})
StepCompleted.args = {
  activePage: 1,
  completedPages: [1],
  pages: [
    { caption: 'Property details', fieldsets: [] },
    { caption: 'Diversion works', fieldsets: [] },
    { caption: 'Your details', fieldsets: [] },
  ],
}
