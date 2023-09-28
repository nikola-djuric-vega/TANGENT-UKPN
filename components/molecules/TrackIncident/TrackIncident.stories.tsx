import TrackIncident, { TrackIncidentProps } from './TrackIncident'
import { IncidentHelper } from '_lib/incident-helper'
import { Story, Meta } from '@storybook/react'
import React from 'react'

import {
  powerCutDictionary,
  UnplannedIncidentData,
} from '_organism/IncidentCard/IncidentCard.stories'

export default {
  title: 'Molecules/TrackIncident',
  component: TrackIncident,
} as Meta<TrackIncidentProps>

const { incidentState } = UnplannedIncidentData

const definedReason = IncidentHelper.defineReason(
  incidentState.incident,
  powerCutDictionary,
  incidentState.cmsData[0]
)

const Template: Story<TrackIncidentProps> = (args) => (
  <TrackIncident {...args} />
)

export const Default = Template.bind({})
Default.args = {
  steps: incidentState.incident?.steps,
  incidentReason: definedReason,
}
