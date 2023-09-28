import { Story, Meta } from '@storybook/react'
import React from 'react'

import PowerCutPanelStats, {
  PowerCutPanelStatsProps,
} from './PowerCutPanelStats'

export default {
  title: 'Molecules/PowerCutPanelStats',
  component: PowerCutPanelStats,
} as Meta

const Template: Story<PowerCutPanelStatsProps> = (args) => (
  <PowerCutPanelStats {...args} />
)

export const Default = Template.bind({})
Default.args = {
  postcodeValue: 2,
  postcodeText: '<p>Postcodes affected</p>',
  callsValue: 2,
  callsText: '<p>Customer calls received</p>',
  customerValue: 2,
  customerText: '<p>Customers affected</p>',
}
