import { Clusterer } from '@react-google-maps/marker-clusterer'
import { MapIconState } from '_organism/MapPage/map-options'
import { isSameMarker } from '_organism/MapPage/map-utils'
import { usePowerCutMap } from '_context/power-cut-map'
import { Breakpoints } from '_types/local/breakpoints'
import mapConfig from '_organism/MapPage/map-config'
import { Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import React from 'react'

import {
  Marker as MarkerType,
  PowerCutType,
  Incident,
} from '_types/local/incidents'

const MapMarker = ({
  incident,
  marker,
  clusterer,
}: {
  incident: Incident
  marker: MarkerType
  clusterer: Clusterer
}) => {
  const [iconState, setIconState] = useState<MapIconState>(
    MapIconState.INACTIVE
  )
  const [iconSuffix, setIconSuffix] = useState('')
  const { actions, mapState, setMapState } = usePowerCutMap()
  const { activeMarker } = mapState
  const isActiveMarker = isSameMarker(activeMarker?.center, marker.center)
  const overlayIncident = isActiveMarker && mapState.overlayIncident
  const useIncidentIcon =
    isActiveMarker && mapState.activeIncident && mapState.useIncidentType

  const getMapIcon = () => {
    if (
      isActiveMarker &&
      activeMarker?.powerCutType === PowerCutType.MULTIPLE_INCIDENT &&
      mapState.forceMultiMarker
    ) {
      return PowerCutType.MULTIPLE_INCIDENT.toLowerCase()
    } else if (useIncidentIcon) {
      return mapState.activeIncident?.powerCutType.toLowerCase()
    } else {
      return (overlayIncident || incident).powerCutType.toLowerCase()
    }
  }

  const mapIcon = getMapIcon()

  useEffect(() => {
    if (isActiveMarker) {
      setIconSuffix('-active')
      setIconState(MapIconState.ACTIVE)
    } else {
      setIconSuffix('')
      setIconState(MapIconState.INACTIVE)
    }
  }, [activeMarker])

  const handleMarkerClick = async (clickedMarker: MarkerType) => {
    const isSmallScreen = window.innerWidth < Breakpoints.MD
    localStorage.removeItem('searchedAddress')

    // Toggle panel if clicking active incident
    if (
      isSameMarker(activeMarker?.center, clickedMarker.center) &&
      !mapState.forceMultiMarker
    ) {
      setMapState((prevState) => ({
        ...prevState,
        mapPolygons: [],
        activeIncident: null,
        overlayIncident: null,
        activeMarker: null,
        refreshIncidentsInterval: null,
        isPanelVisible:
          isSmallScreen && prevState.isPreviewBarVisible
            ? false
            : !prevState.isPanelVisible,
        isPreviewBarVisible:
          isSmallScreen && prevState.isPreviewBarVisible
            ? false
            : prevState.isPanelVisible,
      }))

      history.replaceState(null, '', location.pathname)

      return
    }

    if (incident.powerCutType === PowerCutType.MULTIPLE_INCIDENT) {
      const incidentData = await actions.fetchIncidentByPostcode(
        incident.postcode
      )

      actions.goToIncident({
        incident: incidentData,
        marker: clickedMarker,
      })
    } else {
      const incidentData = await actions.getIncidentById(
        incident.incidentReference
      )

      actions.goToIncident({
        incident: incidentData,
        marker: clickedMarker,
      })
    }

    setMapState((prevState) => ({
      ...prevState,
      isPanelVisible: true,
      isPreviewBarVisible: false,
      lastFetchTimestamp: '',
    }))
  }

  return (
    <>
      <Marker
        position={marker.center}
        onClick={() => handleMarkerClick(marker)}
        clusterer={clusterer}
        icon={{
          url: `/images/map/${mapIcon}${iconSuffix}.png`,
          size: new google.maps.Size(
            mapConfig.icons.size[iconState].width,
            mapConfig.icons.size[iconState].height
          ),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(
            mapConfig.icons.anchor[iconState].x,
            mapConfig.icons.anchor[iconState].y
          ),
          scaledSize: new google.maps.Size(
            mapConfig.icons.size[iconState].width,
            mapConfig.icons.size[iconState].height
          ),
        }}
      />
    </>
  )
}

export default React.memo(MapMarker)
