import { PowerCutRegisterTextUpdates as PowerCutRegisterTextUpdatesType } from '_types/CMS/pages'
import PowerCutRegisterTextUpdates from './PowerCutRegisterTextUpdates'
import { DictionaryItemsContext } from '_context/dictionary-items'
import { LookUpState } from '_atoms/AddressLookUp/AddressLookUp'
import { DictionaryItems } from '_types/local/dictionary-items'
import { fireEvent, render } from '@testing-library/react'
import { Address } from '_types/local/address-lookup'
import { LinkType, PageTypeNames } from '_types/CMS'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'
import { IconNames } from '_types/local'
import React from 'react'

//#region Mock modules
const axios = require('axios').default
jest.mock('axios')

jest.mock('next/router', () => require('next-router-mock'))
//#endregion

const mockPropsPhone: PowerCutRegisterTextUpdatesType = {
  __typename: PageTypeNames.POWER_CUT_REGISTER_TEXT_UPDATES,
  name: 'Mock Power Cut Text Updates',
  url: 'mock.uk/textupdates',
  id: 'MockPwrCtId',
  contentTypeAlias: 'string',
  futureTitle: 'Get future text message updates',
  futureSubtitle: 'During a power cut we can text you to make you aware.',
  futureTerms: [
    'We will not send you marketing messages, only notifications about power cuts in your area.',
    'This service is free, however, your network may charge you if youre outside of the UK. Standard text fees will apply for messages that you send to us',
    'If you are signed up to our Priority Services Register to receive extra support during a power cut, we can text you 24 hours a day to make you aware.',
  ],
  futureGdpr: 'Privacy',
  children: {
    items: [
      {
        __typename: PageTypeNames.CONFIRMATION_SUCCESS,
        type: LinkType.CONTENT,
        name: 'SuccessPage',
        url: '/success-page',
      },
      {
        __typename: PageTypeNames.CONFIRMATION_FAILURE,
        type: LinkType.CONTENT,
        name: 'FailurePage',
        url: '/failure-page',
      },
    ],
  },
}

const mockPropsNoFailure: PowerCutRegisterTextUpdatesType = {
  __typename: PageTypeNames.POWER_CUT_REGISTER_TEXT_UPDATES,
  name: 'Mock Power Cut Text Updates',
  url: 'mock.uk/textupdates',
  id: 'MockPwrCtId',
  contentTypeAlias: 'string',
  futureTitle: 'Get future text message updates',
  futureSubtitle: 'During a power cut we can text you to make you aware.',
  futureTerms: [
    'We will not send you marketing messages, only notifications about power cuts in your area.',
    'This service is free, however, your network may charge you if youre outside of the UK. Standard text fees will apply for messages that you send to us',
    'If you are signed up to our Priority Services Register to receive extra support during a power cut, we can text you 24 hours a day to make you aware.',
  ],
  futureGdpr: 'Privacy',
  children: {
    items: [
      {
        __typename: PageTypeNames.CONFIRMATION_SUCCESS,
        type: LinkType.CONTENT,
        name: 'SuccessPage',
        url: '/success-page',
      },
    ],
  },
}

const mockAddress: Address = {
  mpan: '1234MockMpan',
  uprn: 2,
  proNumber: 3,
  houseNo: '888',
  houseName: 'Mock House Name 1',
  streetName: 'Mock Street',
  county: 'Mock County',
  country: 'GB',
  postCode: 'IG117PS',
  dno: 3,
  supplierName: 'Mock Suplier 1',
  supplierNumber: '111',
  isInUkpnDno: true,
}

const mockLandingDictionaryItems: DictionaryItems = {
  ['noAddressFound']: 'true',
}
const mockFormDictionaryItems: DictionaryItems = {
  ['']: '',
}
const mockPhoneDictionaryItems: DictionaryItems = {
  ['panelTextUpdatesPhone']: 'Mock Dictionary item Phone',
}
const mockAddressDictionaryItems: DictionaryItems = {
  ['panelTextUpdatesAddress']: 'Mock Dictionary item Address',
}

describe('Power Cut Text Updates', () => {
  it('should render Power Cut Text Updates Phone Input', async () => {
    mockRouter.query = mockFormDictionaryItems

    const screen = render(
      <DictionaryItemsContext.Provider value={mockPhoneDictionaryItems}>
        <PowerCutRegisterTextUpdates {...mockPropsPhone} />{' '}
      </DictionaryItemsContext.Provider>
    )

    const element1 = screen.getByText('Get future text message updates')
    const element2PN = screen.getByText('Mobile phone number')
    const element2PNIn = element2PN.nextSibling as HTMLInputElement
    const elementSbmt = screen.getByText('Get updates')
    expect(element1).toBeInTheDocument()
    expect(element2PN).toBeInTheDocument()

    //Test Incorrect Phone Number
    await act(async () => {
      fireEvent.change(element2PNIn, {
        target: { value: '+440555555555' },
      })
    })

    expect(element2PNIn.value).toBe('+440555555555')

    await act(async () => {
      fireEvent.click(elementSbmt)
    })

    //Test Correct Phone Number
    await act(async () => {
      fireEvent.change(element2PNIn, {
        target: { value: '+447555555555' },
      })
    })

    expect(element2PNIn.value).toBe('+447555555555')

    await act(async () => {
      fireEvent.click(elementSbmt)
    })

    const element4 = screen.getByText('Back')
    fireEvent.click(element4)
  })

  it('should render Power Cut Text Updates Postcode Input', async () => {
    mockRouter.query = mockLandingDictionaryItems

    const cancelTokenSource = {
      cancel: jest.fn(),
      token: { reason: { message: 'user canceled' } },
    }

    axios.CancelToken.source.mockReturnValue(cancelTokenSource)

    const screen = render(
      <DictionaryItemsContext.Provider value={mockAddressDictionaryItems}>
        <PowerCutRegisterTextUpdates {...mockPropsNoFailure} />{' '}
      </DictionaryItemsContext.Provider>
    )

    const element1 = screen.getByText('Get future text message updates')
    const element2 = screen.getByText(
      'During a power cut we can text you to make you aware.'
    )

    const elementSearchDropdown = screen.getByRole(
      'combobox'
    ) as HTMLInputElement
    const elementCloseSearch =
      elementSearchDropdown.nextSibling as HTMLInputElement

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()

    fireEvent.click(elementCloseSearch)

    //Check PostCode Input
    await act(async () => {
      fireEvent.change(elementSearchDropdown, {
        target: { value: 'IG117PS' },
      })
    })

    expect(elementSearchDropdown.value).toBe('IG117PS')
  })
})
