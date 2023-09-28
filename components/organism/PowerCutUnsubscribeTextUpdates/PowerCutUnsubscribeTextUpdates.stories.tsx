import { PowerCutUnsubscribeTextUpdates as PowerCutUnsubscribeTextUpdatesType } from '_types/CMS/pages'
import PowerCutUnsubscribeTextUpdates from './PowerCutUnsubscribeTextUpdates'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { LinkType, PageTypeNames } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import React from 'react'
import { IconNames } from '_types/local'

export default {
  title: 'organisms/PowerCutTextUpdates',
  component: PowerCutUnsubscribeTextUpdates,
  parameters: {},
} as Meta

const Template: Story<PowerCutUnsubscribeTextUpdatesType> = (args) => (
  <DictionaryItemsProvider
    items={{
      mobilePhoneNumber: 'Mobile phone number',
      getUpdates: 'Get updates',
    }}
  >
    <PowerCutUnsubscribeTextUpdates {...args} />
  </DictionaryItemsProvider>
)
export const Default = Template.bind({})
Default.args = {
  unsubscribeForTextUpdatesTitle: 'Get future text message updates',
  unsubscribeForTextUpdatesIcon: IconNames.EIGHTY_PX_MOBILE,
  unsubscribeForTextUpdatesGdpr: 'Privacy',
  children: {
    items: [
      {
        __typename: PageTypeNames.CONFIRMATION_SUCCESS,
        type: LinkType.CONTENT,
        name: 'SuccessPage',
        url: '/success-page',
      },
      {
        __typename: PageTypeNames.CONFIRMATION_FAILURE,
        type: LinkType.CONTENT,
        name: 'FailurePage',
        url: '/failure-page',
      },
    ],
  },
}
