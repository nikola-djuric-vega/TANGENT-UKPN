import { Story, Meta } from '@storybook/react'
import React from 'react'

import HeaderSearchContainerForm, {
  HeaderSearchContainerFormProps,
} from './HeaderSearchContainerForm'

export default {
  title: 'Molecules/HeaderSearchContainerForm',
  component: HeaderSearchContainerForm,
} as Meta

const Template: Story<HeaderSearchContainerFormProps> = (args) => (
  <HeaderSearchContainerForm {...args} />
)

export const Default = Template.bind({})
Default.args = {}
