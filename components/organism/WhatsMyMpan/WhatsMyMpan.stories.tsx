import { WhatsMyMpanType } from '_types/CMS/nodes/components/UKPN/whats-my-mpan'
import { ComponentsTypeName } from '_types/CMS'
import { Meta, Story } from '@storybook/react'
import WhatsMyMpan from './WhatsMyMpan'
import React from 'react'

export default {
  title: 'Organisms/WhatsMyMpan',
  component: WhatsMyMpan,
} as Meta

const Template: Story<WhatsMyMpanType> = (args) => {
  return <WhatsMyMpan {...args} />
}

export const Default = Template.bind({})
export const WhatsMyMpanData: WhatsMyMpanType = {
  __typename: ComponentsTypeName.WHATS_MY_MPAN,
  removeBottomMargin: false,
  leftTitle: 'Find my supplier and MPAN',
  checkboxText:
    'Can you confirm you are the electricity bill payer or currently responsible for the bill?',
  leftBlurb:
    'Enter your address, email and confirm you’re the bill payer and we’ll send you your details',
  successfulTitle: 'Thank you, your details have been emailed to you. ',
  successfulBlurb:
    'If you have not received an email, please check your spam folder.',
  rightDesktopImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/naaat1ek/area-checker-desktop.png',
    umbracoWidth: '1304',
    umbracoHeight: '754',
    name: 'MPAN',
  },
  rightMobileImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/lsehivw4/area-checker-mobile.png',
    umbracoWidth: '668',
    umbracoHeight: '676',
    name: 'MPAN',
  },
  errorTitle:
    'Sorry, we still can’t find the electricity supplier for the address you’ve given.',
  errorBlurb:
    'Please check you’ve entered your address correctly. If you are still experiencing issues please email us with your details to MPAS@ukpowernetowrks.co.uk or call us on 0800 029 4283 and we’ll be happy to help. Remember, we can only help you if you live in London, the South East or East of England.',
}
Default.args = WhatsMyMpanData
