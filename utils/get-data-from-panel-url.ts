import { PowerCutPanel } from '_types/CMS/pages'

//Gets panel name from panelContentUrl (ex. '/power-cut/map/aware?postcode=IG117PF' => aware)
export const getPanelNameFromUrl = (url?: string) => {
  let panelName
  if (url) {
    if (url.includes('?')) {
      panelName = url.split('map/')[1].split('?')[0]
    } else {
      panelName = url.split('map/')[1]
    }
  } else {
    return PowerCutPanel.NOT_AWARE
  }

  switch (panelName.toLowerCase()) {
    case 'planned-work':
      return PowerCutPanel.PLANNED
    case 'power-back-on':
      return PowerCutPanel.RESTORED
    case 'unplanned':
      return PowerCutPanel.UNPLANNED
    case 'aware':
      return PowerCutPanel.AWARE
    case 'not-aware':
      return PowerCutPanel.NOT_AWARE
    case 'multiple':
      return PowerCutPanel.MULTIPIN
    default:
      return PowerCutPanel.NOT_IN_AREA
  }
}
