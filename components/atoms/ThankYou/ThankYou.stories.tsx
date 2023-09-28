import ThankYou, { ThankYouProps } from './ThankYou'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/ThankYou',
  component: ThankYou,
} as Meta<ThankYouProps>

const Template: Story<ThankYouProps> = (args) => <ThankYou {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Thank you',
  message:
    "We've received you application and will be in touch to arrange the site visit.",
  referenceMessage: 'Your reference number',
  referenceNumber: '123456',
}
