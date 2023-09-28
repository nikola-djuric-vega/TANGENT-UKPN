import { DictionaryItemsProvider } from '_context/dictionary-items'
import PostcodeForm, { PostcodeFormProps } from './PostcodeForm'
import { Story, Meta } from '@storybook/react'
import { LinkType } from '_types/CMS'
import React from 'react'

const mockDictionaryItems = {
  postcodeSearchDescription:
    "<p>If you don't have a postcode yet (e.g for new build properties), please provide the nearest postcode.</p>",
}

export default {
  title: 'Molecules/PostcodeForm',
  component: PostcodeForm,
} as Meta<PostcodeFormProps>

const Template: Story<PostcodeFormProps> = (args) => (
  <DictionaryItemsProvider items={mockDictionaryItems}>
    <PostcodeForm {...args} />
  </DictionaryItemsProvider>
)

export const Default = Template.bind({})
Default.args = {
  formDestination: {
    type: LinkType.EXTERNAL,
    url: '/forms/SmallService/move',
    name: '/forms/SmallService/move',
    target: '_self',
  },
  pDFDownloadLink: {
    type: LinkType.MEDIA,
    url: 'https://media.umbraco.io/dev-uk-power-networks/bmenoiqw/file-example_pdf_500_kb.pdf',
    name: 'Download PDF Form',
    target: '_self',
  },
}
