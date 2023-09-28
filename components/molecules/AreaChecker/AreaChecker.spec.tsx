import { AreaCheckerType } from '_types/CMS/nodes/components/UKPN'
import { DictionaryItemsContext } from '_context/dictionary-items'
import { DictionaryItems } from '_types/local/dictionary-items'
import { render, fireEvent } from '@testing-library/react'
import AreaChecker, { AreaCheck } from './AreaChecker'
import { ComponentsTypeName } from '_types/CMS'
import React from 'react'

const mockDictionaryItems: DictionaryItems = {
  ['noAddressFound']: 'Address Not Found',
}

const realUseState = React.useState

const mockProps: AreaCheckerType = {
  __typename: ComponentsTypeName.AREA_CHECKER,
  title: 'Check if you’re in our area',
  text: "<p>Enter your postcode and select your address to see if we're responsible for your electricity supply</p>",
  desktopImage: {
    name: 'desktop-image',
    url: 'https://media.umbraco.io/dev-uk-power-networks/naaat1ek/area-checker-desktop.png',
  },
  mobileImage: {
    name: 'desktop-image',
    url: 'https://media.umbraco.io/dev-uk-power-networks/lsehivw4/area-checker-mobile.png',
  },
  successTitle:
    'Good News. UK Power Networks own and maintain the electricity cables in your area.',
  successText:
    'Your address is within our London Network Area. So if you have a power cut, need extra support or need another electrical service then we can help.',
  errorAreaTitle:
    'Sorry, unfortunately we are not the local electricity distributor for your address.',
  errorAddressTitle:
    'Sorry, we’re not able to find that address. Can you check you’ve entred your adress correctly?',
  errorAddressText:
    '<p>If you have please <a href="#>contact</a> us and we’ll help you</p>',
}

const mockAreaCheckInArea: AreaCheck = {
  address: {
    mpan: '1',
    uprn: 2,
    proNumber: 3,
    houseNo: '888',
    houseName: 'Mock House Name 1',
    streetName: 'Mock Street',
    county: 'Mock County',
    country: 'GB',
    postCode: 'Mock54sdCode',
    dno: 3,
    supplierName: 'Mock Suplier 1',
    supplierNumber: '111',
    isInUkpnDno: true,
  },
  isSuccessful: true,
  notInTheArea: false,
  incorrectAddress: false,
}

const mockAreaCheckNotInArea: AreaCheck = {
  address: {
    mpan: '1',
    uprn: 2,
    proNumber: 3,
    houseNo: '888',
    houseName: 'Mock House Name 2',
    streetName: 'Mock Street',
    county: 'Mock County',
    country: 'GB',
    postCode: 'Mock54sdCode',
    dno: 3,
    supplierName: 'Mock Suplier 2',
    supplierNumber: '222',
    isInUkpnDno: true,
  },
  isSuccessful: false,
  notInTheArea: true,
  incorrectAddress: false,
}

const axios = require('axios').default
jest.mock('axios')

describe('Area Checker Test', () => {
  window.HTMLElement.prototype.scrollIntoView = function () {}
  const mockCancelTokenSource = {
    cancel: jest.fn(),
    token: { reason: { message: 'user canceled' } },
  }
  axios.CancelToken.source.mockResolvedValue(mockCancelTokenSource)

  it('should render Area Checker State Incorrect', () => {
    const screen = render(
      <DictionaryItemsContext.Provider value={mockDictionaryItems}>
        <AreaChecker {...mockProps} />
      </DictionaryItemsContext.Provider>
    )

    const element1 = screen.getByText('Check if you’re in our area')

    expect(element1).toBeInTheDocument()

    fireEvent.click(screen.getByText('Submit'))

    //Test Resize
    global.innerWidth = 380
  })

  it('should render Area Checker In Area', async () => {
    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([mockAreaCheckInArea, jest.fn])

    const screen = render(
      <DictionaryItemsContext.Provider value={mockDictionaryItems}>
        <AreaChecker {...mockProps} />
      </DictionaryItemsContext.Provider>
    )

    const element1 = screen.getByText('Check if you’re in our area')
    const elementPC = screen.getByPlaceholderText(
      'Enter a postcode here'
    ) as HTMLInputElement
    const elementSbmt = screen.getByText('Submit')

    expect(element1).toBeInTheDocument()

    fireEvent.click(elementPC)
    fireEvent.change(elementPC, {
      target: { value: 'IG117PS' },
    })

    //This Works
    expect(elementPC.value).toBe('IG117PS')

    fireEvent.click(elementPC)
    fireEvent.click(elementSbmt)
  })

  it('should render Area Checker State Not In Area', () => {
    const screen = render(
      <DictionaryItemsContext.Provider value={mockDictionaryItems}>
        <AreaChecker {...mockProps} />
      </DictionaryItemsContext.Provider>
    )

    const element1 = screen.getByText('Check if you’re in our area')
    expect(element1).toBeInTheDocument()

    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([mockAreaCheckNotInArea, jest.fn])

    fireEvent.click(screen.getByText('Submit'))
  })
})
