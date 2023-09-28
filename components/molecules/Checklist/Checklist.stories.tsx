import { ChecklistType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import Checklist from './Checklist'
import React from 'react'

export default {
  title: 'Molecules/Checklist',
  component: Checklist,
} as Meta

const Template: Story<ChecklistType> = (args) => <Checklist {...args} />

export const Default = Template.bind({})
export const ChecklistData: ChecklistType = {
  __typename: ComponentsTypeName.CHECKLIST,
  title: 'Whos eligible for extra support during a power cut ',
  checklistItems: [
    'If you are of pensionable age',
    'If you rely on medical equipment',
    'If you are chronically ill',
    'If you need extra support for a short time period (e.g. you are recovering from medical treatment)',
    'If you have children under five in your house hold',
  ],
}
Default.args = ChecklistData
