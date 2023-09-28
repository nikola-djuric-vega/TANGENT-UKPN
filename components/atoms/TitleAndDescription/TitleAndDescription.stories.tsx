import { Story, Meta } from '@storybook/react'
import React from 'react'

import TitleAndDescription, {
  TitleAndDescriptionProps,
} from './TitleAndDescription'

export default {
  title: 'Atoms/TitleAndDescription',
  component: TitleAndDescription,
} as Meta

const Template: Story<TitleAndDescriptionProps> = (args) => (
  <TitleAndDescription {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Hello World',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore itaque obcaecati, rerum ratione aperiam assumenda numquam accusantium, aliquid error atque harum aut animi ad, beatae culpa quisquam. Tempore, voluptatum.',
}
