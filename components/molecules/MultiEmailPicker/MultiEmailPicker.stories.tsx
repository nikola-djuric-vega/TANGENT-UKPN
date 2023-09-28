import MultiEmailPicker, { MultiEmailPickerProps } from './MultiEmailPicker'
import { Story, Meta } from '@storybook/react'
import { Formik } from 'formik'
import React from 'react'

export default {
  title: 'molecules/MultiEmailPicker',
  component: MultiEmailPicker,
  args: {
    initialRequire: true,
    name: 'multiEmail',
  },
} as Meta

const Template: Story<MultiEmailPickerProps> = (args) => (
  <Formik initialValues={{ multiEmail: '' }} onSubmit={() => {}}>
    <MultiEmailPicker {...args} />
  </Formik>
)

export const Default = Template.bind({})

Default.args = {
  initialRequire: false,
}

export const Mandatory = Template.bind({})

Mandatory.args = {
  initialRequire: true,
}
