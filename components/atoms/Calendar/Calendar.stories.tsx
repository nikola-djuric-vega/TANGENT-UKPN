import Calendar, { CalendarProps } from './Calendar'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/Calendar',
  component: Calendar,
} as Meta

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />

export const DaySelector = Template.bind({})
DaySelector.args = {
  placeholder: 'Pick a day',
}

export const MonthSelector = Template.bind({})
MonthSelector.args = {
  placeholder: 'Pick a month',
  month: true,
}
