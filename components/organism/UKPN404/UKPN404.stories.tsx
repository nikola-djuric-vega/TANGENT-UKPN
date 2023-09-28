import { DictionaryItemsProvider } from '_context/dictionary-items'
import UKPN404, { UKPN404Props } from './UKPN404'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Organisms/UKPN404',
  component: UKPN404,
} as Meta

const Template: Story<UKPN404Props> = (args) => {
  return (
    <DictionaryItemsProvider
      items={{
        errorButtonTextUkpn: '<p>Visit home page</p>',
      }}
    >
      <UKPN404 {...args}></UKPN404>
    </DictionaryItemsProvider>
  )
}

export const Primary = Template.bind({})
