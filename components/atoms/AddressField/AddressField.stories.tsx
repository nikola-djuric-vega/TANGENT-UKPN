import AddressField, { AddressFieldProps } from './AddressField'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/AddressField',
  component: AddressField,
} as Meta

const Template: Story<AddressFieldProps> = (args) => <AddressField {...args} />

export const Default = Template.bind({})
Default.args = {}
