import { ContactUsType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import ContactUs, { ContactUsProps } from './ContactUs'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

export default {
  title: 'Molecules/ContactUs',
  component: ContactUs,
} as Meta

const Template: Story<ContactUsProps> = (args) => <ContactUs {...args} />

export const Default = Template.bind({})
export const ContactUsData: ContactUsType = {
  __typename: ComponentsTypeName.CONTACT_US,
  contactUsItems: [
    {
      icon: IconNames.ICO_EMAIL,
      title: 'Customers in the South East of England',
      text: 'Lines open Mon-Fri, 8.30am-5.00pm. Alternatively you can email us and we will call you back.',
      telephone1: '0207 055 4343',
      telephone2: '0207 055 4444',
      email: {
        url: 'test@test.com',
        name: 'Email us',
        type: LinkType.EXTERNAL,
      },
      twitter: {
        url: 'http://twitter.com',
        name: 'Twitter',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
      facebook: {
        url: 'http://facebook.com',
        name: 'Facebook',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
      linkedIn: {
        url: 'http://linkedin.com',
        name: 'LinkedIn',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
    },
    {
      icon: IconNames.ICON_CALL,
      title: 'Customers in London',
      text: 'Lines open Mon-Fri, 8.30am-5.00pm. Alternatively you can email us and we will call you back.',
      telephone1: '0207 055 4343',
      // telephone2: '0207 055 4444',
      email: {
        url: 'test@test.com',
        name: 'Email us',
        type: LinkType.EXTERNAL,
      },
      twitter: {
        url: 'http://twitter.com',
        name: 'Twitter',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
      facebook: {
        url: 'http://facebook.com',
        name: 'Facebook',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
      linkedIn: {
        url: 'http://linkedin.com',
        name: 'LinkedIn',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
    },

    {
      icon: IconNames.ICON_CHAT,
      title: 'Customers in the East of England',
      text: 'Lines open Mon-Fri, 8.30am-5.00pm. Alternatively you can email us and we will call you back.',
      telephone1: '0207 055 4343',
      telephone2: '0207 055 4444',
      twitter: {
        url: 'http://twitter.com',
        name: 'Twitter',
        target: '_blank',
        type: LinkType.EXTERNAL,
      },
      facebook: {
        url: 'http://facebook.com',
        name: 'Facebook',
        type: LinkType.EXTERNAL,
        target: '_blank',
      },
    },
  ],
}
Default.args = ContactUsData
