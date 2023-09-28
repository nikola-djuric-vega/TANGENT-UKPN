import { DictionaryItemsProvider } from '_context/dictionary-items'
import { StormBodyType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import StormBody from './StormBody'
import React from 'react'

export default {
  title: 'organisms/StormBody',
  component: StormBody,
  parameters: {},
} as Meta

const Template: Story<StormBodyType> = (args) => (
  <DictionaryItemsProvider
    items={{
      mobilePhoneNumber: 'Mobile phone number',
      getUpdates: 'Get updates',
    }}
  >
    <StormBody {...args} />
  </DictionaryItemsProvider>
)
export const Default = Template.bind({})
Default.args = {
  __typename: ComponentsTypeName.STORM_BODY,
  stormBodyText: `<p>We want to reassure you that we are taking all necessary measures to help ensure the safety of customers, out staff, and the people they may meet as part pf their work activities.</p>
  <p>We're working closely with the governament, health organisations, the energy regulator Ofgem and consumer advice organisations to ensure we continue to work safely and follow the latest advice.</p>
  <p>With your support and working together we can keep the electricity flowing and keep our communities and colleagues safe.</p>
  <p>Advice for customers</p>
  <p>Advice for staff</p>
  <p>Useful links</p>`,
  stormBodyTitle: 'Enter your postcode to search, track and report power cuts.',
  powerCutBoxTitle: 'Power off?',
  powerCutBoxIcon: IconNames.ICO_POWER_CUT,
  powerCutBoxRegisterForTextsLink: {
    type: LinkType.CONTENT,
    name: 'google',
    url: 'http://gogle.com',
  },
  powerCutBoxFacebookLink: {
    type: LinkType.CONTENT,
    name: 'Facebook',
    url: 'http://facebook.com',
  },
  powerCutBoxTwitterLink: {
    type: LinkType.CONTENT,
    name: 'Twitter',
    url: 'http://twitter.com',
  },
}
