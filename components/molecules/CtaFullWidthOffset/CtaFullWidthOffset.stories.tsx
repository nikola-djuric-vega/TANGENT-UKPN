import { CtaFullWidthOffsetType } from '_types/CMS/nodes/components/UKPN'
import CtaFullWidthOffset from './CtaFullWidthOffset'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Molecules/CtaFullWidthOffset',
  component: CtaFullWidthOffset,
} as Meta

const Template: Story<CtaFullWidthOffsetType> = (args) => (
  <CtaFullWidthOffset {...args} />
)

export const Default = Template.bind({})
export const CtaFullWidthOffsetData: CtaFullWidthOffsetType = {
  __typename: ComponentsTypeName.CTA_FULL_WIDTH_OFFSET,
  image: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/hnmhsqqe/1600x900.jpg',
    name: '',
    umbracoHeight: '900',
    umbracoWidth: '1600',
  },
  icon: IconNames.ICON_APPLY,
  title: 'Want to go ahead with the work?',
  text: 'The next step is booking an appointment with one of our surveyors so they can visit your property and give you a price.',
  cTA: [
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
}
Default.args = CtaFullWidthOffsetData
