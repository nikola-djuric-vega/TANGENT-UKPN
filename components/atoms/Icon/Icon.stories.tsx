import { IconNames, IconProps } from '_types/local'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import Icon from './Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'select' },
    name: { text: 'string' },
  },
  args: {
    size: 'md',
    name: IconNames.FORTY_PX_LOCATION,
    flip: false,
  },
} as Meta

export const Primary: Story<IconProps> = (args) => <Icon {...args} />
