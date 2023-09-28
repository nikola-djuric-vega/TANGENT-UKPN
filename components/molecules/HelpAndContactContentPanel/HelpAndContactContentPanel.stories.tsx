import { Story, Meta } from '@storybook/react'
import React from 'react'

import HelpAndContactContentPanel, {
  HelpAndContactContentPanelProps,
} from './HelpAndContactContentPanel'

export default {
  title: 'Molecules/HelpAndContactContentPanel',
  component: HelpAndContactContentPanel,
} as Meta

const Template: Story<HelpAndContactContentPanelProps> = (args) => (
  <HelpAndContactContentPanel {...args} />
)

export const Default = Template.bind({})
Default.args = {}
