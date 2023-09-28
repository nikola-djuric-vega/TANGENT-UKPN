import { mockFormDataMultiPage } from '../FormPage/mock-form-data-multipage'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import DynamicForm, { DynamicFormProps } from './DynamicForm'
import { mockFormData } from '../FormPage/mock-form-data'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Organisms/DynamicForm',
  component: DynamicForm,
} as Meta

const Template: Story<DynamicFormProps> = (args) => (
  <DictionaryItemsProvider
    items={{
      'homepage.searchbar': '<p>This is a rich text</p>',
      fileUpload: 'Drop file here or click upload',
      fileUploadMultiple: 'Upload multiple files here',
    }}
  >
    <DynamicForm {...args} />
  </DictionaryItemsProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  ...mockFormData,
}
export const Multipage = Template.bind({})
Multipage.args = {
  ...mockFormDataMultiPage,
}
