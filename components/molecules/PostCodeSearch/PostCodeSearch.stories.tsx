import { dictionaryItems } from '_atoms/AddressLookUp/mock-dictionary-items'
import PostCodeSearch, { PostCodeSearchProps } from './PostCodeSearch'
import { DictionaryItemsProvider } from '_context/dictionary-items'
import { AddressLookUpForm } from '_types/local'
import { Story, Meta } from '@storybook/react'
import { Formik } from 'formik'
import React from 'react'

export default {
  title: 'Molecules/PostCodeSearch',
  component: PostCodeSearch,
} as Meta

const Template: Story<PostCodeSearchProps> = (args) => (
  <DictionaryItemsProvider items={dictionaryItems}>
    <Formik initialValues={{ address: '' }} onSubmit={() => {}}>
      <PostCodeSearch {...args} />
    </Formik>
  </DictionaryItemsProvider>
)

export const Default = Template.bind({})
Default.args = {
  layout: AddressLookUpForm.DEFAULT,
  name: 'address',
}

export const Allow = Template.bind({})
Allow.args = {
  layout: AddressLookUpForm.ALLOW,
  name: 'address',
}

export const Manual = Template.bind({})
Manual.args = {
  layout: AddressLookUpForm.MANUAL,
  name: 'address',
}
