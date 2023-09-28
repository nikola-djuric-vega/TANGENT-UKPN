import React from 'react'
import { Meta, Story } from '@storybook/react'
import Select, { SelectProps } from './Select'
import { Formik } from 'formik'

export default {
  title: 'Atoms/Select',
  component: Select,
  args: {
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    change: (value: object | null) => console.log(value),
  },
} as Meta

export const Default: Story<SelectProps> = (args) => (
  <Formik
    initialValues={{
      locationFields: {},
    }}
    onSubmit={() => {}}
  >
    <Select {...args} />
  </Formik>
)
