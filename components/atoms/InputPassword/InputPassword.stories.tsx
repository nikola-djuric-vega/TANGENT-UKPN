import InputPassword, { InputPasswordProps } from './InputPassword'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/InputPassword',
  component: InputPassword,
} as Meta

const Template: Story<InputPasswordProps> = (args) => (
  <InputPassword {...args} />
)

export const Default = Template.bind({})
Default.args = {
  hasError: false,
}
