import LocationFields, { LocationFieldsProps } from './LocationFields'
import { Meta, Story } from '@storybook/react'
import { Formik } from 'formik'
import React from 'react'

export default {
  title: 'Molecules/LocationFields',
  component: LocationFields,
} as Meta

const Template: Story<LocationFieldsProps> = (args) => (
  <Formik
    initialValues={{
      locationFields: {
        city: '',
        country: '',
        postcode: '',
        easting: '',
        northing: '',
        what3Words: '',
      },
    }}
    onSubmit={() => {}}
  >
    <LocationFields {...args} />
  </Formik>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'locationFields',
  isRequired: true,
}
