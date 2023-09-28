import { FormPage as FormPageType } from '_types/CMS'
import { mockFormData } from './mock-form-data'
import { Story, Meta } from '@storybook/react'
import FormPage from './FormPage'
import { Formik } from 'formik'
import React from 'react'

const formPage = mockFormData.pages[0]

export default {
  title: 'Organisms/FormPage',
  component: FormPage,
} as Meta

const Template: Story<FormPageType> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <FormPage {...args}></FormPage>
  </Formik>
)

export const Primary = Template.bind({})
Primary.args = formPage
