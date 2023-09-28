import { ConfirmationSuccess, ConfirmationFailure } from '_types/CMS/pages'
import ConfirmationPage from './ConfirmationPage'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import { LinkType } from '_types/CMS'
import React from 'react'

export default {
  title: 'organisms/ConfirmationPage',
  component: ConfirmationPage,
  parameters: {},
} as Meta

const Template: Story<ConfirmationSuccess | ConfirmationFailure> = (args) => (
  <ConfirmationPage {...args} />
)
export const SuccessPage = Template.bind({})
SuccessPage.args = {
  title: 'Register for text updates success',
  icon: IconNames.EIGHTY_PX_MOBILE,
  copy: '<p>Thanks for signing up for text updates, we’ll text you shortly.</p>',
  cTA: {
    type: LinkType.CONTENT,
    name: 'Map',
    url: '/ukpn/power-cut/map/',
  },
}

export const FailurePage = Template.bind({})
FailurePage.args = {
  title: 'Register for text updates success',
  icon: IconNames.EIGHTY_PX_MOBILE,
  copy: '<p>Sorry, we’re unable to offer you text message updates for the postcode you have entered. Please call us free 24 hours a day on <a href="tel:08003163105">0800 316 3105</a> and we’ll be happy to help you.</p>',
  cTA: {
    type: LinkType.CONTENT,
    name: 'Map',
    url: '/ukpn/power-cut/map/',
  },
}
