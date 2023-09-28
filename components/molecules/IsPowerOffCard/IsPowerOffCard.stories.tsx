import { Meta, Story } from '@storybook/react'
import IsPowerOffCard from './IsPowerOffCard'
import React from 'react'

export default {
  title: 'Atoms/IsPowerOffCard',
  component: IsPowerOffCard,
} as Meta

export const Primary: Story = (args) => <IsPowerOffCard {...args} />
