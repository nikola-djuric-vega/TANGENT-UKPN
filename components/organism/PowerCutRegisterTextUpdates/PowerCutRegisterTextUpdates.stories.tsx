import { PowerCutRegisterTextUpdates as PowerCutRegisterTextUpdatesType } from '_types/CMS/pages'
import PowerCutRegisterTextUpdates from './PowerCutRegisterTextUpdates'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { LinkType, PageTypeNames } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'organisms/PowerCutTextUpdates',
  component: PowerCutRegisterTextUpdates,
  parameters: {},
} as Meta

const Template: Story<PowerCutRegisterTextUpdatesType> = (args) => (
  <DictionaryItemsProvider
    items={{
      mobilePhoneNumber: 'Mobile phone number',
      getUpdates: 'Get updates',
    }}
  >
    <PowerCutRegisterTextUpdates {...args} />
  </DictionaryItemsProvider>
)

export const Default = Template.bind({})
Default.args = {
  futureTitle: 'Get future text message updates',
  futureSubtitle: 'During a power cut we can text you to make you aware.',
  futureTerms: [
    'We will not send you marketing messages, only notifications about power cuts in your area.',
    'This service is free, however, your network may charge you if youre outside of the UK. Standard text fees will apply for messages that you send to us',
    'If you are signed up to our Priority Services Register to receive extra support during a power cut, we can text you 24 hours a day to make you aware.',
  ],
  futureGdpr: 'Privacy',
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
