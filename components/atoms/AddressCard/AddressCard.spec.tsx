import React from 'react'
import AddressCard, { AddressCardType } from './AddressCard'
import { render } from '@testing-library/react'
import { FieldType } from '_types/CMS'
import { Formik } from 'formik'

const mockDataWithAddress: AddressCardType = {
  caption: 'Confirm your address',
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
  linkText: '',
  alias: '',
  required: false,
  settings: {
    defaultValue: '',
    DefaultValue: '',
    pattern: undefined,
    patternInvalidErrorMessage: undefined,
    showLabel: '',
    ShowLabel: '',
  },
  type: FieldType.TITLE_AND_DESCRIPTION,
}

const mockDataWithNoAddress: AddressCardType = {
  caption: 'Confirm your address',
  helpText: 'Want to report a powercut for a different',
  address: null,
  linkText: '',
  alias: '',
  required: false,
  settings: {
    defaultValue: '',
    DefaultValue: '',
    pattern: undefined,
    patternInvalidErrorMessage: undefined,
    showLabel: '',
    ShowLabel: '',
  },
  type: FieldType.TITLE_AND_DESCRIPTION,
}

describe('AddressCard  Test', () => {
  it('should render addressCard with address', () => {
    const { getByText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <AddressCard {...mockDataWithAddress} />
      </Formik>
    )
    const address = getByText('80 Agar Grove, London, NW1 9TL')
    const caption = getByText('Confirm your address')
    expect(address).toBeInTheDocument()
    expect(caption).toBeInTheDocument()
  })

  it('should { getByText } addressCard with no address', () => {
    const { getByText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <AddressCard {...mockDataWithNoAddress} />
      </Formik>
    )

    const addressLine1 = getByText('Address line 1')
    const addressLine2 = getByText('Address line 2')
    const townCity = getByText('Town/City')
    const county = getByText('County')
    const postcode = getByText('Postcode')
    expect(addressLine1).toBeInTheDocument()
    expect(addressLine2).toBeInTheDocument()
    expect(townCity).toBeInTheDocument()
    expect(county).toBeInTheDocument()
    expect(postcode).toBeInTheDocument()
  })
})
