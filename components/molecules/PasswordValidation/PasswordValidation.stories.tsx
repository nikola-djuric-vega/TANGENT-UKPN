import { Story, Meta } from '@storybook/react'
import React from 'react'

import PasswordValidation, {
  PasswordValidationProps,
} from './PasswordValidation'

export default {
  title: 'Molecules/PasswordValidation',
  component: PasswordValidation,
} as Meta

const Template: Story<PasswordValidationProps> = (args) => (
  <PasswordValidation {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isError: false,
  placeholder: 'Input Password',
  isValidation: true,
}
