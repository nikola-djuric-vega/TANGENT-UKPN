import { formattedUpdateTime } from '_utils/formatted-update-time'
import { sortIncidentSteps } from '_utils/sort-incident-steps'
import { IncidentHelper } from '../../../lib/incident-helper'
import { transformString } from '_utils/tranform-string'
import TrackIncident from './TrackIncident'
import { Step } from '_types/local/step'
import React from 'react'

import {
  waitForElementToBeRemoved,
  fireEvent,
  render,
} from '@testing-library/react'

import {
  UnplannedIncidentData,
  powerCutDictionary,
} from '_organism/IncidentCard/IncidentCard.stories'

jest.mock('lodash/debounce', () => jest.fn)

const { incidentState } = UnplannedIncidentData

const definedReason = IncidentHelper.defineReason(
  incidentState.incident,
  powerCutDictionary,
  incidentState.cmsData[0]
)

describe('TrackIncident Test', () => {
  it('should render TrackIncident', () => {
    const lastUpdated = incidentState.incident?.steps?.find(
      (step) => !!step.active
    ) as Step
    const { getByText, getByAltText, getByRole } = render(
      <TrackIncident
        steps={incidentState.incident?.steps}
        incidentReason={definedReason}
      />
    )

    //Last updated time string
    const updatedTime = formattedUpdateTime(lastUpdated.date as string)
    const lastUpdatedTime = getByText(`Last updated ${updatedTime}`)

    // Van Image
    const vanImage = getByAltText(lastUpdated.name as string)
    // Track Incident Button
    const trackIncidentButton = getByText('Track power cut')
    // Incident reason
    const IncidentReasonTitle = getByText(
      transformString(definedReason.title as string)
    )
    const IncidentReason = getByText(
      transformString(definedReason.reason as string)
    )

    expect(lastUpdatedTime).toBeInTheDocument()
    expect(trackIncidentButton).toBeInTheDocument()
    expect(vanImage).toBeInTheDocument()
    expect(IncidentReasonTitle).toBeInTheDocument()
    expect(IncidentReason).toBeInTheDocument
  })

  it('should open pop up', async () => {
    const { findByRole, getByTestId, getAllByRole } = render(
      <TrackIncident
        steps={incidentState.incident?.steps}
        incidentReason={definedReason}
      />
    )
    const comp = getByTestId('Track-power-cut')
    fireEvent.click(comp)

    const stepsFeed = await findByRole('feed')
    expect(stepsFeed).toBeInTheDocument()

    const { sortedSteps } = sortIncidentSteps(incidentState.incident?.steps)
    const steps = getAllByRole('article')
    expect(steps).toHaveLength(sortedSteps?.length as number)
    expect(steps[0]).toHaveAttribute('aria-setsize', `${sortedSteps?.length}`)
    expect(steps[0]).toHaveAttribute('aria-posinset', '0')
  })

  it('should open pop up on mobile', async () => {
    global.innerWidth = 414

    const { findByRole, getByTestId } = render(
      <TrackIncident
        steps={incidentState.incident?.steps}
        incidentReason={definedReason}
      />
    )

    const comp = getByTestId('Track-power-cut')

    fireEvent.click(comp)

    const stepsFeed = await findByRole('feed')
    expect(stepsFeed).toBeInTheDocument()

    fireEvent.resize(window, { innerWidth: 1080 })
    expect(stepsFeed).toBeInTheDocument()
  })

  it('should close pop up', async () => {
    const { findByRole, getByRole, getByTestId } = render(
      <TrackIncident
        steps={incidentState.incident?.steps}
        incidentReason={definedReason}
      />
    )

    const comp = getByTestId('Track-power-cut')
    fireEvent.click(comp)

    const stepsFeed = await findByRole('feed')
    expect(stepsFeed).toBeInTheDocument()

    const closeButton = await findByRole('button', { name: 'close' })
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)

    await waitForElementToBeRemoved(() => getByRole('feed'))
  })

  it('should display each step detail', async () => {
    const { getByTestId, getAllByText, getByText } = render(
      <TrackIncident
        steps={incidentState.incident?.steps}
        incidentReason={definedReason}
      />
    )

    const comp = getByTestId('Track-power-cut')
    fireEvent.click(comp)

    const { sortedSteps } = sortIncidentSteps(incidentState.incident?.steps)
    const firstStep = (sortedSteps as Step[])[0]

    const stepName = getAllByText(firstStep.name as string)
    const stepMessage = getByText(transformString(firstStep.message as string))
    const stepUpdatedTime = getByText(/Last updated/)

    expect(stepUpdatedTime).toBeInTheDocument()
    expect(stepMessage).toBeInTheDocument()
    expect(stepName).toHaveLength(2)
  })
})
