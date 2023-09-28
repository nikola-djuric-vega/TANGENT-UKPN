import { powerCutDictionary } from '_organism/IncidentCard/IncidentCard.stories'
import GetTextUpdates, { GetTextUpdatesProps } from './GetTextUpdates'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/GetTextUpdates',
  component: GetTextUpdates,
} as Meta

const Template: Story<GetTextUpdatesProps> = (args) => (
  <DictionaryItemsProvider items={powerCutDictionary}>
    <GetTextUpdates {...args}></GetTextUpdates>
  </DictionaryItemsProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  isPromoted: true,
}
