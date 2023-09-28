import { PowerCutIncidentHeaderData } from './PowerCutIncidentHeaderData.mock'
import { formattedUpdateTime } from '_utils/formatted-update-time'
import PowerCutIncidentHeader from './PowerCutIncidentHeader'
import { fireEvent, render } from '@testing-library/react'

describe('PowerCutIncidentHeader test', () => {
  it('shall render PowerCutIncidentHeader for desktop', () => {
    const screen = render(
      <PowerCutIncidentHeader {...PowerCutIncidentHeaderData} />
    )

    const shareButton = screen.getByRole('button', { name: 'Share' })
    expect(shareButton).toBeInTheDocument()
    fireEvent.click(shareButton)

    const shareCard = screen.getByTestId('shareCard')
    expect(shareCard).toBeInTheDocument()

    fireEvent.mouseDown(document.body)
    expect(shareCard).not.toBeVisible()

    const reference = screen.getByText(
      `Reference: ${PowerCutIncidentHeaderData.incident?.incidentReference}`
    )
    expect(reference).toBeInTheDocument()

    const updateTime = screen.getByText(
      `Reported: ${formattedUpdateTime(
        PowerCutIncidentHeaderData.incident?.ukpnIncident?.receivedDate
      )}`
    )
    expect(updateTime).toBeInTheDocument()
  })
})

describe('PowerCutIncidentHeader test', () => {
  it('shall render PowerCutIncidentHeader for mobile', () => {
    const screen = render(
      <PowerCutIncidentHeader {...PowerCutIncidentHeaderData} />
    )
    window.innerWidth = 400

    const shareButton = screen.getByRole('button', { name: 'Share' })
    expect(shareButton).toBeInTheDocument()
    fireEvent.click(shareButton)

    const shareCard = screen.getByTestId('shareCard')
    expect(shareCard).toBeInTheDocument()

    const closeButton = screen.getByLabelText('close')
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(shareCard).not.toBeVisible()
  })
})
