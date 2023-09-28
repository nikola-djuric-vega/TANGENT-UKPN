import { ComponentsTypeName, LinkType } from '_types/CMS'
import { PowerCutContactUsType } from '_types/CMS/nodes/components/UKPN'
import PowerCutContactUs from './PowerCutContactUs'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/PowerCutContactUs',
  component: PowerCutContactUs,
} as Meta

const Template: Story<PowerCutContactUsType> = (args) => (
  <PowerCutContactUs {...args} />
)

export const Default = Template.bind({})
export const PowerCutContactUsData: PowerCutContactUsType = {
  __typename: ComponentsTypeName.POWER_CUT_CONTACT_US,
  powerCutContactUsAuthor: {
    authorName: 'Basil Scarsella',
    department: 'CEO of UK Power Networks',
    image: {
      url: 'https://picsum.photos/200',
      name: 'test',
    },
  },
  title:
    'The information you see on the website is live and up-to-date. If you call us, you won’t be given any additional information from what you can see on the website.',
  text: '<p>Please only call <b>0800 31 63 105</b> or <b>105</b> if you’re in danger or notice any of our equipment damaged. Our number is free to call from a mobile or a landline phone.</p>',
  telephone: '08003163105',
  facebook: {
    name: 'Talk to us 24/7 on Facebook',
    url: 'http://www.facebook.com/ukpowernetworks',
    target: '_blank',
    type: LinkType.EXTERNAL,
  },
  twitter: {
    name: 'Talk to us 24/7 on Twitter',
    url: 'https://twitter.com/UKPowerNetworks',
    target: '_blank',
    type: LinkType.EXTERNAL,
  },
  powerCutContactUsWhatsApp: {
    name: 'Talk to us 24/7 on WhatsApp',
    url: 'https://whatsapp.com/UKPowerNetworks',
    target: '_blank',
    type: LinkType.EXTERNAL,
  },
}
Default.args = PowerCutContactUsData
