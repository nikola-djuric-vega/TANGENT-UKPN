import { IncidentReasonData } from './IncidentReason.stories'
import { render } from '@testing-library/react'
import IncidentReason from './IncidentReason'
import React from 'react'

describe('IncidentReason Test', () => {
  it('should render incident reason component', async () => {
    const { getByText } = render(<IncidentReason {...IncidentReasonData} />)

    const title = getByText(IncidentReasonData.title as string)
    const reason = getByText(IncidentReasonData.reason as string)

    expect(title).toBeInTheDocument()
    expect(reason).toBeInTheDocument()
  })
})
