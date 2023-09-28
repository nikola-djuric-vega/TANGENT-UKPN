import { Story, Meta } from '@storybook/react'
import React from 'react'

import HelpAndContactTabItem, {
  HelpAndContactTabItemProps,
} from './HelpAndContactTabItem'

export default {
  title: 'Molecules/HelpAndContactTabItem',
  component: HelpAndContactTabItem,
} as Meta

const Template: Story<HelpAndContactTabItemProps> = (args) => (
  <HelpAndContactTabItem {...args} />
)

export const Default = Template.bind({})
Default.args = {}
