import { ContactCardType } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import ContactCard from './ContactCard'
import React from 'react'

export default {
  title: 'Molecules/ContactCard',
  component: ContactCard,
} as Meta

const Template: Story<ContactCardType> = (args) => <ContactCard {...args} />

export const Default = Template.bind({})
export const test: ContactCardType = {
  author: {
    authorName: 'Alex Williams',
    department: 'Customer Services',
  },
  cardTitle:
    'If you see an overhead line down, please keep well clear and call our emergency line on 105',
  cardSubtitle:
    'Please treat electricity cables as live, stay away and call us immediatly on 0800 31 63 105 or 105 (Free to call from a landline or mobile phone). If you see electricity lines that are down or causing signifcant risk to the public please call 999.',
}
Default.args = test
