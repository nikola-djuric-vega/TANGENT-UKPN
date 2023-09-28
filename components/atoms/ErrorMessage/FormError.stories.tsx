import FormError, { FormErrorProps } from './FormError'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/FormError',
  component: FormError,
} as Meta

const Template: Story<FormErrorProps> = (args) => (
  <FormError {...args}></FormError>
)

export const Primary = Template.bind({})
Primary.args = {
  errorMessage: 'Please enter your first name',
  isVariant: false,
}

export const Variant = Template.bind({})
Variant.args = {
  errorMessage: 'Please enter your first name',
  isVariant: true,
}
