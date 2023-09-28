import { CtaFullWidthBoxType } from '_types/CMS/nodes/components/UKPN'
import CtaFullWidthBox from './CtaFullWidthBox'
import { Story, Meta } from '@storybook/react'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Molecules/CtaFullWidthBox',
  component: CtaFullWidthBox,
} as Meta

const Template: Story<CtaFullWidthBoxType> = (args) => (
  <CtaFullWidthBox {...args} />
)

export const Default = Template.bind({})
export const CtaFullWidthBoxData: CtaFullWidthBoxType = {
  __typename: ComponentsTypeName.CTA_FULL_WIDTH_BOX,
  cTAItems: [
    {
      title: 'Want to go ahead with the work?',
      text: 'The next step is booking an appointment with one of our surveyors so they can visit your property and give you a price.',
      cTAFullWidthItemCTA: [
        {
          __typename: LinkAppearance.DOWNLOAD,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Download PDF form',
          },
          cTAType: ButtonColors.LIGHT,
        },
        {
          __typename: LinkAppearance.PRIMARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Get this free support now',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
    {
      title: 'Want to go ahead with the work?',
      text: 'The next step is booking an appointment with one of our surveyors so they can visit your property and give you a price.',
      cTAFullWidthItemCTA: [
        {
          __typename: LinkAppearance.SECONDARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://google.com',
            name: 'Find out more',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
  ],
}
Default.args = CtaFullWidthBoxData
