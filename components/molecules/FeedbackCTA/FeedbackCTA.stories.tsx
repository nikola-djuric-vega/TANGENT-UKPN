import { FeedbackCTAType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import FeedbackCTA from './FeedbackCTA'
import React from 'react'

export default {
  title: 'Molecules/FeedbackCTA',
  component: FeedbackCTA,
} as Meta

const Template: Story<FeedbackCTAType> = (args) => <FeedbackCTA {...args} />

export const Default = Template.bind({})
export const FeedbackCtaData: FeedbackCTAType = {
  __typename: ComponentsTypeName.FEEDBACK_CTA,
  feedbackCTAs: [
    {
      title: 'Website feedback',
      text: 'We are always trying to improve our website for our customers so please let us know what you think of it and how you think we should improve it.',
      cTALink: {
        name: 'Leave us feedback',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
    {
      title: 'Contact us about anything else',
      text: 'If you need a new power supply or want to make changes to your existing supply or need maintenance carried out near overhead power lines then we can help.',
      cTALink: {
        name: 'Contact us',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
  ],
}
Default.args = FeedbackCtaData
