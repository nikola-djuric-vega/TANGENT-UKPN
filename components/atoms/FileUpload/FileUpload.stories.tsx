import FileUpload, { FileUploadProps } from './FileUpload'
import { Story, Meta } from '@storybook/react'
import { Formik } from 'formik'
import React from 'react'

export default {
  title: 'Atoms/FileUpload',
  component: FileUpload,
  args: {
    helperText: 'Drop files here or click to upload ',
    label: 'Upload plan showing site layout',
    name: 'file',
  },
} as Meta

const Template: Story<FileUploadProps> = (args) => (
  <Formik initialValues={{ file: [] }} onSubmit={() => {}}>
    <FileUpload {...args} />
  </Formik>
)

export const Default = Template.bind({})

Default.args = {
  multiple: false,
}

export const Multiple = Template.bind({})

Multiple.args = {
  multiple: true,
}
