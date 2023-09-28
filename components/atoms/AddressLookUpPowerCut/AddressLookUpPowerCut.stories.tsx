import AddressLookUpPowerCut, {
  AddressLookUpPowerCutProps,
} from './AddressLookUpPowerCut'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { dictionaryItems } from './mock-dictionary-items'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/AddressLookUp',
  component: AddressLookUpPowerCut,
} as Meta

const Template: Story<AddressLookUpPowerCutProps> = (args) => (
  <DictionaryItemsProvider items={dictionaryItems}>
    <AddressLookUpPowerCut {...args} />
  </DictionaryItemsProvider>
)

export const Default = Template.bind({})
Default.args = {
  addressNotFound:
    '<p>Can’t find your address?</p><p>Drop a pin on our map to show your location</p>',
}
