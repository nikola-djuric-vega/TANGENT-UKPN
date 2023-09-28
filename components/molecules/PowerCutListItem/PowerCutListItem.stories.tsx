import { transformIncidentsListData } from '_utils/transform-incidents-list-data'
import { IncidentListItem, ExtraPropertiesItem } from '_types/local/incidents'
import PowerCutListItem from './PowerCutListItem'
import { Story, Meta } from '@storybook/react'
import React from 'react'

const extraProperties: ExtraPropertiesItem[] = [
  {
    TBCDescription: 'TBCDescription',
    friendlyDescription: 'friendlyDescription',
  },
]
const listData = [
  {
    incidentId: 'G00040edaINCD',
    incidentReference: 'INCD-265946-G',
    incidentDescription: '',
    incidentCategory: '47',
    incidentType: 2,
    dangerFlag: false,
    deadDeviceAlias: '',
    incidentPriority: 10,
    statusId: 5,
    ivrMessageFlag: false,
    mainMessage:
      'We are aware of an incident caused by LV UG Network Fault affecting the electricity supply in your area. Our engineers are dealing with this and we estimate that most supplies will be restored by 25-FEB-2022 15:00.  Please accept our sincere apologies for any inconvenience this may cause.',
    operatingZone: '',
    primaryFeeder: {
      feeder: '',
      name: '',
      alias: '',
    },
    secondayFeeder: {
      feeder: '',
      name: '',
      alias: '',
    },
    supplementaryMessage:
      'SORRY THAT YOU ARE WITHOUT POWER - OUR ENGINEERS ARE ON SITE AND WE ESTIMATE YOUR POWER WILL BE RESTORED BY 25/02 15:00 - DUE TO REPAIRS CONTINUING FROM STORM EUNICE THE TIME MAY CHANGE DEPENDING ON THE EXTENT OF WORK REQUIRED FROM ASSESSMENTS WHEN ON SITE - (UPDATED 25/02 09:29)',
    creationDateTime: '2022-02-18T06:51:11',
    estimatedRestorationDate: '2022-02-25T15:00:00',
    plannedDate: null,
    receivedDate: '2022-02-18T06:38:00',
    restoredDateTime: '2022-02-25T14:42:40.233',
    latitude: 0,
    longitude: 0,
    easting: -1,
    northing: -1,
    resource: {
      id: null,
      name: 'CLARENCE LIONEL (R5)',
      reference: '',
      notificationDetails: '',
      notificationMethod: '',
      estimatedTimeOfArrival: '2022-02-18T18:00:00',
      statusId: 6,
      dispatchedDate: null,
      arrivalDate: '2022-02-18T12:47:42',
    },
    customersOnSupply: 32,
    customersOffSupply: 0,
    affectedCustomers: [],
    logs: [],
    postCodesPlanned: [
      'GU68AE',
      'GU68AF',
      'GU68AJ',
      'GU68AL',
      'GU68AP',
      'GU68AQ',
      'GU68AS',
      'GU68RB',
      'GU68RQ',
      'GU68AG',
      'GU68AH',
    ],
    postCodesAffected: [
      'GU68AE',
      'GU68AF',
      'GU68AJ',
      'GU68AL',
      'GU68AP',
      'GU68AQ',
      'GU68AS',
      'GU68RB',
      'GU68RQ',
      'GU68AG',
      'GU68AH',
    ],
    postCodesRestored: [
      'GU68AE',
      'GU68AF',
      'GU68AJ',
      'GU68AL',
      'GU68AP',
      'GU68AQ',
      'GU68AS',
      'GU68RB',
      'GU68RQ',
      'GU68AG',
      'GU68AH',
    ],
    noCustomerAffected: 0,
    noPlannedCustomers: 0,
    noCallsReported: 5,
    plannedIncidentReason:
      "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.",
    message: '',
    timestamp: '',
    incidentTypeName: '',
    scope: '',
  },
]

export default {
  title: 'Molecules/PowerCutListItem',
  component: PowerCutListItem,
} as Meta

const transformedData = transformIncidentsListData(
  listData,
  extraProperties,
  {}
)
const Template: Story<IncidentListItem> = (args) => (
  <PowerCutListItem {...args} key={1} itemKey={1} />
)

export const Default = Template.bind({})
Default.args = transformedData[0]
