import { PowerCutMap, PowerCutMapContext } from '_context/power-cut-map'
import { IncidentDto, IncidentType } from '_types/local/incident-dto'
import { DictionaryItemsContext } from '_context/dictionary-items'
import PowerCutPanelTextUpdates from './PowerCutPanelTextUpdates'
import { act, fireEvent, render } from '@testing-library/react'
import { DictionaryItems } from '_types/local/dictionary-items'
import { Incident, PowerCutType } from '_types/local/incidents'
import React from 'react'

jest.mock('postcode', () => {
  return {
    toNormalised: () => {
      return jest.fn()
    },
    isValid: () => {
      return jest.fn()
    },
  }
})

const mockUpnkIncident: IncidentDto = {
  incidentId: 'incidentId',
  incidentReference: 'Mock Incident Reference',
  incidentCategory: 'incidentCategory',
  incidentType: IncidentType.HIGH_VOLTAGE,
  incidentPriority: 1,
  statusId: 1,
  creationDateTime: '02-02-2020',
  restoredDateTime: null,
  estimatedRestorationDate: null,
  plannedDate: null,

  noCustomerAffected: 2,
  noPlannedCustomers: 2,
  noCallsReported: 2,

  resource: {
    id: null,
    name: null,
    estimatedTimeOfArrival: null,
    dispatchedDate: null,
    arrivalDate: null,
    statusId: 2,
  },
  affectedCustomers: [],
  logs: [],
  postCodesAffected: [],
  postCodesRestored: [],
  postCodesPlanned: [],
  customersOnSupply: 4,
  customersOffSupply: 4,
  timestamp: 'timestamp',
  incidentTypeName: 'incidentTypeName',
  plannedIncidentReason: 'plannedIncidentReason',
  scope: null,
}

const mockDictionaryItems: DictionaryItems = {
  ['getUpdates']: 'Mock Get Updates',
  ['textUpdatesPanelTerms']: 'Mock Terms & Conditions',
  ['textUpdatesPanelGdpr']: 'Mock General Data Protection Regulation',
}

const mockActiveIncident: Incident = {
  postcode: 'MockPostcode',
  coordinates: {
    ['postcode: string']: [],
  },
  postcodeData: [],
  incidentReference: 'Mock Incident Reference',
  panelContentUrl: 'string',
  powerCutType: PowerCutType.UNPLANNED_INCIDENT,
  incidentsCount: 4,
  postcodesRemaining: [],
  serviceDown: true,
  ukpnIncident: mockUpnkIncident,
}

const mockPowerMapData: PowerCutMap = {
  mapState: {
    activeIncident: mockActiveIncident,
  },
} as PowerCutMap
mockPowerMapData.setMapState = jest.fn()

const mockSearchedAddress: string =
  '{"Mpan":"iXX0k0J9kSAbVZnVGh2L1xet2wUm882ewQ64NFT52BA3TLfESNC1gQPNNdBpxcJG%2bO8s7BYLTcmblg%2fIFCeqP1TgMVo%2fwW%2fCJGiol%2fA9%2bmk9s41Gh%2fZnNzoHofWjR9YN","UPRN":0,"ProNumber":0,"HouseNo":"101","HouseName":"BATH HOUSE","StreetName":"5 ARBORETUM PLACE","County":"BARKING","Country":"","PostCode":"IG117PS","Dno":2,"SupplierName":"E.ON","SupplierNumber":"08085015200"}'

describe('Power Cut Panel Text Updates', () => {
  it('should render Power Cut Panel Text Updates With No Address', async () => {
    const screen = render(
      <PowerCutMapContext.Provider value={mockPowerMapData}>
        <DictionaryItemsContext.Provider value={mockDictionaryItems}>
          <PowerCutPanelTextUpdates />
        </DictionaryItemsContext.Provider>
      </PowerCutMapContext.Provider>
    )

    const elementPN = screen.getByText('Mobile phone number')
    const elementPNIn = elementPN.previousSibling as HTMLInputElement
    const elementPC = screen.getByText('Postcode') as HTMLInputElement
    const elementClosePage = screen.getAllByText('Close')

    const element4 = screen.getByText('Mock General Data Protection Regulation')
    const elementSbmt = screen.getByText('Mock Get Updates')

    expect(elementPN).toBeInTheDocument()
    expect(elementPC).toBeInTheDocument()
    expect(element4).toBeInTheDocument()
    expect(elementClosePage[0]).toBeInTheDocument()

    //Test Incorrect Phone Number
    window.HTMLElement.prototype.scrollIntoView = function () {}
    await act(async () => {
      fireEvent.change(elementPNIn, {
        target: { value: '+440555555555' },
      })
    })
    expect(elementPNIn.value).toBe('+440555555555')

    await act(async () => {
      fireEvent.click(elementSbmt)
    })

    //Test Correct Phone Number
    fireEvent.change(elementPNIn, {
      target: { value: '+447555555555' },
    })
    expect(elementPNIn.value).toBe('+447555555555')

    await act(async () => {
      fireEvent.click(elementSbmt)
    })

    fireEvent.click(elementClosePage[1])
  })

  it('should render Power Cut Panel Text Updates With Address', async () => {
    localStorage.setItem('searchedAddress', mockSearchedAddress)

    const screen = render(
      <PowerCutMapContext.Provider value={mockPowerMapData}>
        <DictionaryItemsContext.Provider value={mockDictionaryItems}>
          <PowerCutPanelTextUpdates />
        </DictionaryItemsContext.Provider>
      </PowerCutMapContext.Provider>
    )

    const elementPN = screen.getByText('Mobile phone number')
    const elementPNIn = elementPN.previousSibling as HTMLInputElement
    const elementPC = screen.getByText('Postcode') as HTMLInputElement
    const elementClosePage = screen.getAllByText('Close')
    const element4 = screen.getByText('Mock General Data Protection Regulation')
    const elementSbmt = screen.getByText('Mock Get Updates')

    expect(elementPN).toBeInTheDocument()
    expect(elementPC).toBeInTheDocument()
    expect(element4).toBeInTheDocument()
    expect(elementClosePage[0]).toBeInTheDocument()

    //Test Incorrect Phone Number
    window.HTMLElement.prototype.scrollIntoView = function () {}
    await act(async () => {
      fireEvent.change(elementPNIn, {
        target: { value: '+440555555555' },
      })
    })
    expect(elementPNIn.value).toBe('+440555555555')

    await act(async () => {
      fireEvent.click(elementSbmt)
    })

    //Test Correct Phone Number
    fireEvent.change(elementPNIn, {
      target: { value: '+447555555555' },
    })
    expect(elementPNIn.value).toBe('+447555555555')

    await act(async () => {
      fireEvent.click(elementSbmt)
    })

    fireEvent.click(elementClosePage[0])
  })
})
