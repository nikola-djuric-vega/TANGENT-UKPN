import { Story, Meta } from '@storybook/react'
import Figure, { FigureProps } from './Figure'
import React from 'react'

export default {
  title: 'Atoms/Figure',
  component: Figure,
} as Meta

const Template: Story<FigureProps> = (args) => <Figure {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/id/237/200/300',
  caption: 'figure caption',
}

export const withoutCaption = Template.bind({})
withoutCaption.args = {
  src: 'https://picsum.photos/id/237/200/300',
}
