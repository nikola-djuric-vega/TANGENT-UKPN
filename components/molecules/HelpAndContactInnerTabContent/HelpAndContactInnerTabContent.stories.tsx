import { Story, Meta } from '@storybook/react'
import React from 'react'

import HelpAndContactInnerTabContent, {
  HelpAndContactInnerTabContentProps,
} from './HelpAndContactInnerTabContent'

export default {
  title: 'Molecules/HelpAndContactInnerTabContent',
  component: HelpAndContactInnerTabContent,
} as Meta

const Template: Story<HelpAndContactInnerTabContentProps> = (args) => (
  <HelpAndContactInnerTabContent {...args} />
)

export const Default = Template.bind({})
Default.args = {}
