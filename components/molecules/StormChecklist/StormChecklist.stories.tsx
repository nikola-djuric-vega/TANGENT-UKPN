import { StormChecklistMockData } from './StormChecklistMockData'
import { StormChecklistType } from '_types/CMS/pages'
import { Story, Meta } from '@storybook/react'
import StormChecklist from './StormChecklist'
import React from 'react'

export default {
  title: 'Molecules/StormChecklist',
  component: StormChecklist,
} as Meta<StormChecklistType>

const Template: Story<StormChecklistType> = (args) => (
  <StormChecklist {...args} />
)

export const Default = Template.bind({})
Default.args = StormChecklistMockData
