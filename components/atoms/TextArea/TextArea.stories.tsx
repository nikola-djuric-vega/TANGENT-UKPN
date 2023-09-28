import { Story, Meta } from '@storybook/react'
import React from 'react'

import TextArea, { TextAreaProps } from './TextArea'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Primary = Template.bind({})
Primary.args = {
  hasError: false,
}
