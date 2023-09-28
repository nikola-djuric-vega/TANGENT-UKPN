import ApplicationStart, { ApplicationStartProps } from './ApplicationStart'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'organisms/ApplicationStart',
  component: ApplicationStart,
} as Meta

const Template: Story<ApplicationStartProps> = (args) => (
  <ApplicationStart {...args} />
)

export const Default = Template.bind({})
Default.args = {
  checkListTitle: 'checkListTitle',
}
