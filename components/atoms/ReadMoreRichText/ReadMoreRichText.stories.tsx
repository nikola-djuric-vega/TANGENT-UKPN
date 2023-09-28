import ReadMoreRichText, { ReadMoreRichTextProps } from './ReadMoreRichText'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/ReadMoreRichText',
  component: ReadMoreRichText,
} as Meta

export const ReadMoreRichTextMock: ReadMoreRichTextProps = {
  text: '<p>Storm Eunice caused significant damage to parts of the electricity network in the South East and East of England, after the worst sustained high winds we have seen in our region for years. Our equipment has been damaged in more than 1,800 locations.</p>',
  readMoreText:
    '<p>We have managed to restore more than 70% of those affected, by remote control so far. Now winds are subsiding, engineers are working to locate, assess and begin reparing damage to restore supplies as quickly as possible. We will be prioritising damage affecting the largest groups of customers first, however, we are working hard to restore all supplies as quickly as possible, this is a mult-day event.',
}

const Template: Story<ReadMoreRichTextProps> = (args) => (
  <ReadMoreRichText {...args} />
)

export const Default = Template.bind({})

Default.args = ReadMoreRichTextMock
