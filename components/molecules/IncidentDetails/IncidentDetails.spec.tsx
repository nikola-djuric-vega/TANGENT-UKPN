import { render, fireEvent } from '@testing-library/react'
import { IncidentDetailsData } from './IncidentDetails.stories'
import { mockIncidentHeader } from './mock-incident-details'
import IncidentDetails from './IncidentDetails'
import React from 'react'

// TODO: Test if svg icon is displaying and is correct for each case on all tests applicable
describe('IncidentDetails Test', () => {
  it('should render incident statistics box one in component if incident is PLANNED', () => {
    const { getByText } = render(<IncidentDetails {...mockIncidentHeader} />)
    const isPlanned = IncidentDetailsData.incident.powerCutType === 'Planned'

    if (isPlanned) {
      const plannedDate = IncidentDetailsData.incident.ukpnIncident?.plannedDate

      const label = getByText('Power was switched off' as string)
      const value = getByText((!!plannedDate ? '18:10' : '') as string)

      expect(label).toBeInTheDocument()
      expect(value).toBeInTheDocument()
    }
  })

  it('should render incident statistics box one in component if incident is NOT PLANNED', () => {
    const { getByText } = render(<IncidentDetails {...mockIncidentHeader} />)
    const isPlanned = IncidentDetailsData.incident.powerCutType === 'Planned'

    if (!isPlanned) {
      const noCustomerAffected =
        IncidentDetailsData.incident.ukpnIncident?.noCustomerAffected

      const label = getByText('Customers Affected' as string)
      const value = getByText(noCustomerAffected as number)

      expect(label).toBeInTheDocument()
      expect(value).toBeInTheDocument()
    }
  })

  it('should render incident statistics box two in component and popup box with more detail', async () => {
    const { getByText, findByRole } = render(
      <IncidentDetails {...mockIncidentHeader} />
    )

    const postcodeAffectedCount =
      IncidentDetailsData.incident.ukpnIncident?.postCodesAffected.length || 0

    const label = getByText('Postcodes areas affected' as string)
    const value = getByText(postcodeAffectedCount as number)

    expect(label).toBeInTheDocument()
    expect(value).toBeInTheDocument()

    const button = await findByRole('button')
    fireEvent.click(button)

    const hasPopUp = await findByRole('dialog')
    expect(hasPopUp).toBeInTheDocument()
  })

  it('should render affected postcodes for statistics box two popup', async () => {
    const { findByText } = render(<IncidentDetails {...mockIncidentHeader} />)

    const affectedPostcodes = IncidentDetailsData.incident.ukpnIncident
      ?.postCodesAffected as string[]

    const displayedAffectedPostcodes = affectedPostcodes.map(
      async (pst) => await findByText(pst)
    )
    expect(displayedAffectedPostcodes).toHaveLength(affectedPostcodes.length)
  })

  it('should render incident statistics box three in component if incident is PLANNED', () => {
    const { getByText } = render(<IncidentDetails {...mockIncidentHeader} />)
    const isPlanned = IncidentDetailsData.incident.powerCutType === 'Planned'

    if (isPlanned) {
      const noCallsReported =
        IncidentDetailsData.incident.ukpnIncident?.noCallsReported

      const label = getByText('Customer calls received' as string)
      const value = getByText(noCallsReported as number)

      expect(label).toBeInTheDocument()
      expect(value).toBeInTheDocument()
    }
  })

  it('should render incident statistics box three in component if incident NOT PLANNED', () => {
    const { getByText } = render(<IncidentDetails {...mockIncidentHeader} />)
    const isPlanned = IncidentDetailsData.incident.powerCutType === 'Planned'

    if (!isPlanned) {
      const noCustomerAffected =
        IncidentDetailsData.incident.ukpnIncident?.noCustomerAffected

      const label = getByText('Customers Affected' as string)
      const value = getByText(noCustomerAffected as number)

      expect(label).toBeInTheDocument()
      expect(value).toBeInTheDocument()
    }
  })

  it('should render no customer affected number', () => {
    const { getByText } = render(<IncidentDetails {...mockIncidentHeader} />)
    const noCustomerAffected = getByText(
      IncidentDetailsData.incident.ukpnIncident?.noCustomerAffected as number
    )
    expect(noCustomerAffected).toBeInTheDocument()
  })

  it('should render no call reported number', () => {
    const { getByText } = render(<IncidentDetails {...mockIncidentHeader} />)
    const noCallsReported = getByText(
      IncidentDetailsData.incident.ukpnIncident?.noCallsReported as number
    )
    expect(noCallsReported).toBeInTheDocument()
  })
})
