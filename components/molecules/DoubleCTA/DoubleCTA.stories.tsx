import { DoubleCTAType } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import DoubleCTA from './DoubleCTA'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Molecules/DoubleCTA',
  component: DoubleCTA,
} as Meta

const Template: Story<DoubleCTAType> = (args) => <DoubleCTA {...args} />

export const DoubleCTAData: DoubleCTAType = {
  __typename: ComponentsTypeName.DOUBLE_CTA,
  leftCTATitle: 'Still not sure about applying?',
  leftCTAText:
    'We understand you may still have questions. Read through the common questions that customers ask us. ',
  leftCTAs: [
    {
      __typename: LinkAppearance.SECONDARY,
      uRL: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'FAQs',
      },
      cTAType: ButtonColors.LIGHT,
    },
  ],
  rightCTATitle: 'Want to go ahead with this work?',
  rightCTAText:
    'The next step is booking a free appointment with one of our surveyors so that can visit your site or property and give you a price.',
  rightCTAs: [
    {
      __typename: LinkAppearance.PRIMARY,
      uRL: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Apply now',
      },
      cTAType: ButtonColors.LIGHT,
    },
    {
      __typename: LinkAppearance.PRIMARY,
      uRL: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Apply now',
      },
      cTAType: ButtonColors.LIGHT,
    },
  ],
}
export const Default = Template.bind({})
Default.args = DoubleCTAData
