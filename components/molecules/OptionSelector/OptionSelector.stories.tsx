import OptionSelector, { OptionSelectorProps } from './OptionSelector'
import OptionSelectorData from './option-selector-data'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/OptionSelector',
  component: OptionSelector,
} as Meta

const Template: Story<OptionSelectorProps> = (args) => (
  <OptionSelector {...args} />
)

export const Default = Template.bind({})
Default.args = {
  rawHTML: OptionSelectorData,
}
