import { Story, Meta } from '@storybook/react'
import { PageTypeNames } from '_types/CMS'
import { IconNames } from '_types/local'
import React from 'react'

import RadioButtonsWithImages, {
  RadioButtonsWithImagesProps,
} from './RadioButtonsWithImages'

export default {
  title: 'Molecules/RadioButtonsWithImages',
  component: RadioButtonsWithImages,
} as Meta

const Template: Story<RadioButtonsWithImagesProps> = (args) => (
  <RadioButtonsWithImages {...args} />
)

export const Default = Template.bind({})
Default.args = {
  __typename: PageTypeNames.RADIO_BUTTONS_WITH_IMAGES,
  radioButtonQuestion: 'What type of property do you have?',
  mandatory: false,
  buttons: [
    {
      radioButtonText: 'House',
      radioButtonIcon: IconNames.ICO_VAN_ONE,
    },
    {
      radioButtonText: 'Flat',
      radioButtonIcon: IconNames.ICO_VAN_ONE,
    },
    {
      radioButtonText: 'Commercial',
      radioButtonIcon: IconNames.ICO_VAN_ONE,
    },
    {
      radioButtonText: 'Mixed',
      radioButtonIcon: IconNames.ICO_VAN_ONE,
    },
  ],
}
