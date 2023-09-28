import { PowerCutType } from '_types/local/incidents'
import {
  INACTIVE_MARKER_DIMENSIONS,
  ACTIVE_MARKER_DIMENSIONS,
  USER_MARKER_DIMENSIONS,
} from './map-options'

const mapConfig = {
  icons: {
    path: '/Media/map',
    ext: 'png',
    size: {
      inactive: {
        width: INACTIVE_MARKER_DIMENSIONS[0],
        height: INACTIVE_MARKER_DIMENSIONS[1],
      },
      active: {
        width: ACTIVE_MARKER_DIMENSIONS[0],
        height: ACTIVE_MARKER_DIMENSIONS[1],
      },
      user: {
        width: USER_MARKER_DIMENSIONS[0],
        height: USER_MARKER_DIMENSIONS[1],
      },
    },
    anchor: {
      inactive: {
        x: INACTIVE_MARKER_DIMENSIONS[0] / 2,
        y: INACTIVE_MARKER_DIMENSIONS[1] / 2,
      },
      active: {
        x: ACTIVE_MARKER_DIMENSIONS[0] / 2,
        y: ACTIVE_MARKER_DIMENSIONS[1] / 2,
      },
      user: {
        x: USER_MARKER_DIMENSIONS[0] / 2,
        y: USER_MARKER_DIMENSIONS[1],
      },
    },
  },
  zoomLevels: {
    zoomedIn: 15,
    default: 11,
    zoomedOut: 8,
  },
  polygons: {
    fillColor: {
      [PowerCutType.UNPLANNED_INCIDENT]: '#FF630C',
      [PowerCutType.REPORTED_INCIDENT]: '#FF630C',
      [PowerCutType.PLANNED_INCIDENT]: '#600A72',
      [PowerCutType.RESTORED_INCIDENT]: '#18C7C5',
      [PowerCutType.MULTIPLE_INCIDENT]: '#999999',
    },
    fillOpacity: {
      [PowerCutType.UNPLANNED_INCIDENT]: 0.3,
      [PowerCutType.REPORTED_INCIDENT]: 0.3,
      [PowerCutType.PLANNED_INCIDENT]: 0.3,
      [PowerCutType.RESTORED_INCIDENT]: 0.3,
      [PowerCutType.MULTIPLE_INCIDENT]: 0.4,
    },
  },
  defaultOptions: {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    gestureHandling: 'greedy',
    clickableIcons: false,
    styles: [
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ],
  },
}

export default mapConfig
