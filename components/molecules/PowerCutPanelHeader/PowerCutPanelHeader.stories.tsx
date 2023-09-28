import { DictionaryItemsProvider } from '_context/dictionary-items'
import { PowerCutMapProvider } from '_context/power-cut-map'
import { Story, Meta } from '@storybook/react'
import React from 'react'

import PowerCutPanelHeader, {
  PowerCutPanelHeaderProps,
} from './PowerCutPanelHeader'

const mockDictionaryItems = {
  getTextUpdatesButton: 'Get text updates',
}

export default {
  title: 'Molecules/PowerCutPanelHeader',
  component: PowerCutPanelHeader,
} as Meta

const Template: Story<PowerCutPanelHeaderProps> = (args) => (
  <PowerCutMapProvider>
    <DictionaryItemsProvider items={mockDictionaryItems}>
      <PowerCutPanelHeader {...args} />
    </DictionaryItemsProvider>
  </PowerCutMapProvider>
)

export const Default = Template.bind({})
Default.args = {
  title: 'There was power cut here earlier',
}
