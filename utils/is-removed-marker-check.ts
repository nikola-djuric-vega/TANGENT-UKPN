import { getPanelNameFromUrl } from './get-data-from-panel-url'
import { Incident } from '_types/local/incidents'
import { PowerCutPanel } from '_types/CMS/pages'

export const isRemovedMarkerCheck = (incident: Incident | null) => {
  const panelType = getPanelNameFromUrl(incident?.panelContentUrl)

  switch (panelType) {
    case PowerCutPanel.MULTIPIN:
      return incident?.incidentsCount === 0

    case PowerCutPanel.UNPLANNED:
    case PowerCutPanel.PLANNED:
    case PowerCutPanel.RESTORED:
      return !incident?.incidentReference

    default:
      return false
  }
}
