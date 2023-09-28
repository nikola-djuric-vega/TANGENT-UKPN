import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from './Input'
import React from 'react'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  hasError: false,
}
