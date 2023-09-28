import { Buttons5MaxType } from '_types/CMS/nodes/components/UKPN'
import { Story, Meta } from '@storybook/react'
import Buttons5Max from './Buttons5Max'
import React from 'react'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Molecules/Buttons5Max',
  component: Buttons5Max,
} as Meta<Buttons5MaxType>

const Template: Story<Buttons5MaxType> = (args) => <Buttons5Max {...args} />

export const Default = Template.bind({})
export const Buttons5MaxData: Buttons5MaxType = {
  __typename: ComponentsTypeName.BUTTONS_5_MAX,
  buttons: [
    {
      __typename: LinkAppearance.PRIMARY,
      uRL: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Find out more',
      },
      cTAType: ButtonColors.LIGHT,
    },
  ],
}
Default.args = Buttons5MaxData
