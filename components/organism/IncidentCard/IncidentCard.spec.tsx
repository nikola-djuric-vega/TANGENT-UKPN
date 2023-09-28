import { mockIncidentCard } from './mock-incident-card'
import { render } from '@testing-library/react'
import IncidentCard from './IncidentCard'
import React from 'react'

describe('IncidentCard', () => {
  it('IncidentCard - Multiple', async () => {
    const screen = render(<IncidentCard {...mockIncidentCard} />)
  })
})
