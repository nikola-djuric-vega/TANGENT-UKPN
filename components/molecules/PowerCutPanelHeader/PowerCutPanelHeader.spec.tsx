import { IncidentType, IncidentDto } from '_types/local/incident-dto'
import { DictionaryItemsContext } from '_context/dictionary-items'
import { Incident, PowerCutType } from '_types/local/incidents'
import { DictionaryItems } from '_types/local/dictionary-items'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import {
  PowerCutMapContext,
  PowerCutMapState,
  PowerCutMap,
} from '_context/power-cut-map'

import PowerCutPanelHeader, {
  PowerCutPanelHeaderProps,
} from './PowerCutPanelHeader'

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

const mockProps: PowerCutPanelHeaderProps = {
  title: 'Mock Panel Header Title',
  incident: mockActiveIncident,
}

const mockDictionaryItems: DictionaryItems = {
  ['getTextUpdatesButton']: 'Mock Get Text Updates',
}

const mockPowerMapData: PowerCutMap = {
  mapState: { activeIncident: mockActiveIncident },
  setMapState: jest.fn() as React.Dispatch<
    React.SetStateAction<PowerCutMapState>
  >,
} as PowerCutMap

describe('Panel Cut Header', () => {
  it('should render Panel Cut Header', () => {
    const screen = render(
      <DictionaryItemsContext.Provider value={mockDictionaryItems}>
        <PowerCutMapContext.Provider value={mockPowerMapData}>
          <PowerCutPanelHeader {...mockProps} />
        </PowerCutMapContext.Provider>
      </DictionaryItemsContext.Provider>
    )

    //Test regular rendering
    const element = screen.getByText('Mock Panel Header Title')
    const element2 = screen.getByText('Reference: Mock Incident Reference')
    const element3 = screen.getByText('Mock Get Text Updates')
    const element4 = screen.getByText('Track my power cut')

    expect(element).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4).toBeInTheDocument()

    //Test Clicks
    fireEvent.click(element3)
    fireEvent.click(element4)
  })
})
