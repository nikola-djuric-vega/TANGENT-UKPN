import AppointmentPicker, { AppointmentPickerProps } from './AppointmentPicker'
import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'
import React from 'react'

export default {
  title: 'Molecules/AppointmentPicker',
  component: AppointmentPicker,
} as Meta

const Template: Story<AppointmentPickerProps> = (args) => (
  <Formik
    initialValues={{
      appointment: {
        day: '',
        noAccess: '',
        timeFrom: '',
        timeUntil: '',
      },
    }}
    onSubmit={() => {}}
  >
    <AppointmentPicker {...args} />
  </Formik>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'appointment',
}
