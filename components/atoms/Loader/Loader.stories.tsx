import { Meta, Story } from '@storybook/react'
import Loader from './Loader'
import React from 'react'

export default {
  title: 'Atoms/Loader',
  component: Loader,
} as Meta

export const Primary: Story = (args) => <Loader {...args} />
