import { Story, Meta } from '@storybook/react'
import { PageTypeNames } from '_types/CMS'
import React from 'react'

import RadioButtonsWithMainImage, {
  RadioButtonsWithMainImageProps,
} from './RadioButtonsWithMainImage'

export default {
  title: 'Molecules/RadioButtonsWithImages',
  component: RadioButtonsWithMainImage,
} as Meta

const Template: Story<RadioButtonsWithMainImageProps> = (args) => (
  <RadioButtonsWithMainImage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  __typename: PageTypeNames.RADIO_BUTTONS_WITH_MAIN_IMAGE,
  radioButtonWithImageText: 'Do you like wind?',
  radioButtonWithImageMainImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/d1mfic3t/wind-farm.jpg',
    name: 'Wind farm',
  },
  radioButtonWithImageOptions: ['Yes', 'No'],
}
