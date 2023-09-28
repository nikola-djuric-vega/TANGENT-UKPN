import { Meta, Story } from '@storybook/react'
import PulsingAnimation from './PulsingAnimation'
import React from 'react'

export default {
  title: 'Atoms/PulsingAnimation',
  component: PulsingAnimation,
} as Meta

export const Primary: Story = (args) => (
  <PulsingAnimation text="Live" {...args} />
)
