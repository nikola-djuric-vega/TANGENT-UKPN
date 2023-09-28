import { PowerCutPanel } from '_types/CMS/pages/map-page'
import { IncidentCardProps } from './IncidentCard'

export const mockIncidentCard: IncidentCardProps = {
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
    incident: null,
    isMultipin: false,
    isLoading: false,
  },
  setIncidentState: () => {},
}
