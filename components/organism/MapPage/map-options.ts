export const mapOptions = {
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
}

export const mapCenter = {
  lat: 51.5074,
  lng: 0.1278,
}

export const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

export const ACTIVE_MARKER_DIMENSIONS = [42, 42]
export const INACTIVE_MARKER_DIMENSIONS = [30, 30]
export const USER_MARKER_DIMENSIONS = [28, 34]
export const SIDEBAR_OVERLAY_ANIMATION_DELAY = 250
export const USER_LOCATION = 'location'

export enum MapIconState {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  USER = 'user',
}
