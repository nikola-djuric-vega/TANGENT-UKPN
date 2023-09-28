import { ComponentsTypeName, LinkType } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import TextBoxes from './TextBoxes'
import React from 'react'

import {
  TextBoxBackgroundStyle,
  TextBoxesType,
} from '_types/CMS/nodes/components/UKPN'

export default {
  title: 'Molecules/TextBoxes',
  component: TextBoxes,
} as Meta

const Template: Story<TextBoxesType> = (args) => <TextBoxes {...args} />

export const Default = Template.bind({})
Default.args = {
  __typename: ComponentsTypeName.TEXT_BOXES,
  textBoxes: [
    {
      title: 'Need help before you apply?',
      text: 'Find FAQ’s, Ask the Expert online or request a face-to-face meeting to learn more before you apply.',
      textBoxCTA: {
        url: 'http://google.com',
        name: 'Find out more',
        type: LinkType.EXTERNAL,
      },
      icon: IconNames.ICON_QUESTION,
      backgroundStyle: TextBoxBackgroundStyle.BLUE,
    },
    {
      title: 'How much will this cost?',
      text: 'For us to send our experts out to assess, this will cost £175 + VAT.',
      textBoxCTA: {
        url: 'http://google.com',
        name: 'Find out more',
        type: LinkType.EXTERNAL,
      },
      icon: IconNames.ICON_QUESTION,
    },
  ],
}
