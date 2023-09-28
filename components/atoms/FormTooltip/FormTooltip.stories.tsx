import FormTooltip, { FormTooltipProps } from './FormTooltip'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/FormTooltip',
  component: FormTooltip,
} as Meta

const Template: Story<FormTooltipProps> = (args) => (
  <FormTooltip {...args}></FormTooltip>
)

export const Primary = Template.bind({})
Primary.args = {
  defaultTitle: 'Help',
  tooltipTitle: 'Close',
  tooltipMessage:
    'Electricity gets to your home by electricity cables that are either buried underground (which you cannot see) or from pole which you can see. Its easy to confuse electricity poles and telephone poles, look out for this yellow sign which will tell you if its an electricity pole. Customers sometimes confuse electric and telephone poles.',
}
