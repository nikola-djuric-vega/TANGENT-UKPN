import { DictionaryItemsProvider } from '_context/dictionary-items'
import IncidentCard, { IncidentCardProps } from './IncidentCard'
import { PowerCutPanel } from '_types/CMS/pages/map-page'
import { Story, Meta } from '@storybook/react'
import { StepName } from '_types/local/step'
import React from 'react'

import {
  IncidentContentCommon,
  PowerCutType,
  Incident,
} from '_types/local/incidents'

export default {
  title: 'organisms/IncidentCard',
  component: IncidentCard,
} as Meta

export const powerCutDictionary = {
  textUpdatesPanelTitle: 'We’ll update you when we know the restoration time',
  textUpdatesPanelIntro:
    'You can track the progress of your power cut and get updates until your power is back on.',
  successGetTextUpdatesBody: '',
  successGetTextUpdatesTitle:
    "<p>We've saved your details and we'll text you in the future if there's a power cut in your area</p>",
  failureGetTextUpdatesTitle:
    '<p>We were unable to add your number to receive future alerts.</p>',
  failureGetTextUpdatesBody:
    "<p>Please give us a call on 0800 31 63 105 and we'll be more than happy to help.</p>",
  panelTextUpdatesPhone: '<p>Please enter a valid UK mobile number</p>',
}

const Template: Story<IncidentCardProps> = (args) => (
  <DictionaryItemsProvider items={powerCutDictionary}>
    <IncidentCard {...args} />
  </DictionaryItemsProvider>
)

const sharedIncidentData: IncidentContentCommon = {
  incidentCategoryCustomerFriendlyDescription:
    'Our engineers are addressing the cause of the fault and how best to repair it. We will update you with an estimated restoration time as soon as we know more.',
  postcodesRemaining: [],
  panelContentUrl: './',
  serviceDown: false,
  steps: [
    {
      active: true,
      date: '2022-11-15T15:10:00Z',
      message:
        '<p>We became aware of a power cut at 15:10. We’re sorry for any disruption this may have caused you. We didn’t know in advance there would be a power cut but now that we know, our teams will do everything they can to get your power back quickly.</p>',
      name: StepName.POWER_CUT_REPORTED,
    },
    {
      active: true,
      date: '2022-11-15T16:15:06Z',
      message: null,
      name: StepName.ENGINEERS_ON_THEIR_WAY,
    },
    {
      active: false,
      date: '2022-11-15T16:15:06Z',
      message: null,
      name: StepName.ENGINEERS_INVESTIGATING_AND_FIXING,
    },
    {
      active: false,
      date: '2022-11-15T16:15:06Z',
      message: null,
      name: StepName.POWER_RESTORED,
    },
  ],
  postcodeData: [
    {
      powerCutType: PowerCutType.PLANNED_INCIDENT,
      panelContentUrl: './',
      incidentReference: '',
      postcode: '',
      center: {
        lat: 484938,
        lng: 47873,
      },
    },
  ],
}

export const PlannedWork = Template.bind({})
const PlannedWorkIncident: Incident = {
  powerCutType: PowerCutType.PLANNED_INCIDENT,
  postcode: '',
  coordinates: {
    NW19TL: undefined,
  },
  ...sharedIncidentData,
}
export const PlannedWorkData: IncidentCardProps = {
  incidentState: {
    refreshIncidentsInterval: null,
    cmsData: [
      {
        __typename: PowerCutPanel.NOT_IN_AREA,
        title: '',
        image: '',
        isIndexed: false,
        hidePostcode: false,
        components: [],
      },
    ],
    pollingIntervalTime: 0,
    incident: PlannedWorkIncident,
    isMultipin: false,
    isLoading: false,
  },
  setIncidentState: () => {},
}

PlannedWork.args = PlannedWorkData

export const Unplanned = Template.bind({})
const UnplannedIncident: Incident = {
  powerCutType: PowerCutType.UNPLANNED_INCIDENT,
  postcode: '',
  coordinates: {
    NW19TL: undefined,
  },
  ...sharedIncidentData,
}
export const UnplannedIncidentData: IncidentCardProps = {
  incidentState: {
    refreshIncidentsInterval: null,
    cmsData: [
      {
        __typename: PowerCutPanel.UNPLANNED,
        title: '',
        image: '',
        isIndexed: false,
        hidePostcode: false,
        reasonTitle: `<p>Reason for this unplanned power cut</p>`,
        components: [],
      },
    ],
    pollingIntervalTime: 0,
    incident: UnplannedIncident,
    isMultipin: false,
    isLoading: false,
  },
  setIncidentState: () => {},
}

Unplanned.args = UnplannedIncidentData

export const Aware = Template.bind({})
const AwareData: Incident = {
  powerCutType: PowerCutType.REPORTED_INCIDENT,
  postcode: '',
  coordinates: {
    NW19TL: undefined,
  },
  ...sharedIncidentData,
}
export const AwareIncindentData: IncidentCardProps = {
  incidentState: {
    refreshIncidentsInterval: null,
    cmsData: [
      {
        __typename: PowerCutPanel.PLANNED,
        title: '',
        image: '',
        isIndexed: false,
        hidePostcode: false,
        components: [],
      },
    ],
    pollingIntervalTime: 0,
    incident: AwareData,
    isMultipin: false,
    isLoading: false,
  },
  setIncidentState: () => {},
}

Aware.args = AwareIncindentData

export const PowerBackOn = Template.bind({})
export const PowerBackOnIncident: Incident = {
  powerCutType: PowerCutType.REPORTED_INCIDENT,
  postcode: '',
  coordinates: {
    NW19TL: undefined,
  },
  ...sharedIncidentData,
}

export const PowerBackOnIncidentData: IncidentCardProps = {
  incidentState: {
    refreshIncidentsInterval: null,
    cmsData: [
      {
        __typename: PowerCutPanel.PLANNED,
        title: '',
        image: '',
        isIndexed: false,
        hidePostcode: false,
        components: [],
      },
    ],
    incident: PowerBackOnIncident,
    pollingIntervalTime: 0,
    isMultipin: false,
    isLoading: false,
  },
  setIncidentState: () => {},
}
PowerBackOn.args = PowerBackOnIncidentData
