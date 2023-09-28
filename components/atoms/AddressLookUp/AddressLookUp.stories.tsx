import AddressLookUp, { AddressLookUpProps } from './AddressLookUp'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { dictionaryItems } from './mock-dictionary-items'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/AddressLookUp',
  component: AddressLookUp,
} as Meta

const Template: Story<AddressLookUpProps> = (args) => (
  <DictionaryItemsProvider items={dictionaryItems}>
    <AddressLookUp {...args} />
  </DictionaryItemsProvider>
)

export const Default = Template.bind({})
Default.args = {
  addressNotFound:
    '<p>Can’t find your address?</p><p>Drop a pin on our map to show your location</p>',
}
