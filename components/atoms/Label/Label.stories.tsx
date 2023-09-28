import { Story, Meta } from '@storybook/react'
import Label, { LabelProps } from './Label'
import React from 'react'

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta<LabelProps>

const Template: Story<
  LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>
> = (args) => <Label {...args}></Label>

export const Primary = Template.bind({})
Primary.args = {
  text: 'First name',
  isRequired: true,
  htmlFor: 'input',
}
