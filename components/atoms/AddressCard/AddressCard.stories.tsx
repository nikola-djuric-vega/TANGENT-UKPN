import AddressCard, { AddressCardType } from './AddressCard'
import { Story, Meta } from '@storybook/react'
import React from 'react'
import { Formik } from 'formik'

export default {
  title: 'Atoms/AddressCard',
  component: AddressCard,
} as Meta

const Template: Story<AddressCardType> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <AddressCard {...args} />
  </Formik>
)

export const Default = Template.bind({})
Default.args = {
  caption: 'Confirm your address',
  helpText: 'Want to report a powercut for a different',
  address: JSON.stringify({
    mpan: 'lYc0JfLlr/RjHLhjlA59ujyTpOeMO/Q5SoIPQD+V2wlayihOc90tYkXjMa0TjIvJs/zpLLW3jaFpoPR2iup1Ld/+x+YmAqMzHQiFVKFUNzfIugZtyKAqFpHRu4vlOJGx',
    uprn: 0,
    proNumber: 0,
    houseNo: '80',
    houseName: '',
    streetName: 'AGAR GROVE',
    county: 'LONDON',
    country: '',
    postCode: 'NW19TL',
    dno: 2,
    supplierName: 'EDF Energy',
    supplierNumber: '03332005100',
  }),
}

export const WithNoAddress = Template.bind({})
WithNoAddress.args = {
  caption: 'Confirm your address',
  helpText: 'Want to report a powercut for a different',
  address: null,
}
