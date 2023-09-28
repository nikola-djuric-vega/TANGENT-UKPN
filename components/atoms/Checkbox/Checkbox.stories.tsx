import Checkbox, { CheckboxProps } from './Checkbox'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    name: { text: 'string' },
  },
  args: {
    text: 'Can you confirm you are the electricity bill payer or currently responsible for the bill?',
    name: 'Is check',
    id: 'check',
    hasError: false,
  },
} as Meta

export const Primary: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const WithLink: Story<CheckboxProps> = (args) => <Checkbox {...args} />
WithLink.args = {
  text: `Can you confirm you are the <a href='https://www.tutorialsteacher.com/typescript/arrow-function'>electricity bill</a> payer or currently responsible for the bill?`,
}
