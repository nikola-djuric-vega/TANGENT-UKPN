import PowerCutPanelContainer from '_organism/PowerCutPanelContainer/PowerCutPanelContainer'
import PowerCutAddressModal from '_molecules/PowerCutAddressModal/PowerCutAddressModal'
import { isRemovedMarkerCheck } from '_utils/is-removed-marker-check'
import { getMarkerByPostcode, storePostcodes } from './map-utils'
import { MapPage as MapPageType } from '_types/CMS/pages'
import { usePowerCutMap } from '_context/power-cut-map'
import { Breakpoints } from '_types/local/breakpoints'
import MapLegend from '_molecules/MapLegend/MapLegend'
import MapMarker from '_atoms/MapMarker/MapMarker'
import { areaPolygons } from './map-area-polygons'
import { useCallback, useEffect } from 'react'
import styles from './MapPage.module.scss'
import Loader from '_atoms/Loader/Loader'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce'
import queryString from 'query-string'
import mapConfig from './map-config'
import React from 'react'

import {
  INACTIVE_MARKER_DIMENSIONS,
  mapContainerStyle,
  mapCenter,
  mapOptions,
} from './map-options'

import {
  MarkerClusterer,
  useLoadScript,
  GoogleMap,
  Polygon,
  Marker,
} from '@react-google-maps/api'
interface MapPageProps {
  data: MapPageType
}

const libraries: 'geometry'[] = ['geometry']

const MapPage = ({ data }: MapPageProps) => {
  const { mapState, setMapState, actions } = usePowerCutMap()
  const router = useRouter()

  const isRemovedMarker = isRemovedMarkerCheck(mapState.activeIncident)

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    libraries,
    channel: 'EXTERNAL_SCVIEW',
  })

  const isSubPanelActive =
    mapState.isCurrentThankYouPanelOpen ||
    mapState.isFutureThankYouPanelOpen ||
    mapState.isPostcodePanelOpen ||
    mapState.isTextUpdatesPanelOpen ||
    mapState.isTrackPanelOpen ||
    mapState.isAddressModalVisible

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)

      actions.resetMapState()
    }
  }, [])

  useEffect(() => {
    if (router.asPath === '/power-cut/map' && mapState?.map) {
      actions.resetMapState()
      setMapState((prevState) => ({ ...prevState, markersVisible: true }))
    }
  }, [router])

  const onResize = debounce(() => {
    if (google && google.maps) {
      setMapZoomControlsPosition()
    }
  }, 200)

  const setMapZoomControlsPosition = () => {
    const largeScreen = window.innerWidth >= Breakpoints.LG

    const zoomControlsPosition = largeScreen
      ? google.maps.ControlPosition.RIGHT_BOTTOM
      : google.maps.ControlPosition.LEFT_TOP

    setMapState((prevState) => ({
      ...prevState,
      controlsPosition: zoomControlsPosition,
    }))
  }

  const onLoad = useCallback((map) => {
    setMapState((prevState) => ({
      ...prevState,
      map,
    }))

    setMapZoomControlsPosition()
    mapSetup(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMapState((prevState) => ({
      ...prevState,
      map: null,
    }))
  }, [])

  const mapSetup = async (map: google.maps.Map) => {
    const allIncidents = await actions.getAllIncidents()

    setMapState((prevState) => ({ ...prevState, incidents: allIncidents }))

    storePostcodes(allIncidents)

    const queryParams = queryString.parse(location.search)

    const queryShowTracker = queryParams.showTracker === 'true'
    const queryIncidentId = queryParams.incidentid as string
    const queryPostcodeSector = queryParams.postcodesector as string

    // GO TO SINGLE INCIDENT
    // Check for incident in query string
    if (queryIncidentId) {
      actions.getIncidentById(queryIncidentId).then((incident) => {
        const { postcodeData = [] } = incident

        // Take first postcode as no searched postcode to use
        const postcode = postcodeData[0] && postcodeData[0].postcode
        const marker = getMarkerByPostcode(allIncidents, postcode)

        actions.goToIncident({
          incident,
          marker,
          map,
          options: {
            showTracker: queryShowTracker,
            useIncidentType: true,
            forceMultiMarker: true,
            zoom: true,
          },
        })
      })
    }

    // GO TO MULTIPLE BY POSTCODE
    // Check for postCodeSector in query string
    else if (queryPostcodeSector) {
      // Check if there is a matching marker before calling API
      const marker = getMarkerByPostcode(allIncidents, queryPostcodeSector)
      if (marker) {
        actions.fetchIncidentByPostcode(queryPostcodeSector).then((incident) =>
          actions.goToIncident({
            incident,
            marker,
            map,
            options: { zoom: true },
          })
        )
      }
    }
    // Power cut search from non-map page
    else if (!mapState.userMode && mapState.searchedAddress) {
      actions.loadIncidentFromSearch(
        mapState.searchedAddress,
        allIncidents,
        map
      )
    }
    // Show all markers
    else {
      setMapState((prevState) => ({ ...prevState, markersVisible: true }))
    }
  }

  const onOverlayClickHandler = () => {
    setMapState((prevState) => ({
      ...prevState,
      isPanelVisible: false,
      isPreviewBarVisible: true,
    }))
  }

  const isPanelOpen =
    !isRemovedMarker &&
    !!mapState.activeIncident &&
    !mapState.isPreviewBarVisible &&
    mapState.isPanelVisible

  return (
    <>
      {!isLoaded && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        </div>
      )}

      {isLoaded && (
        <GoogleMap
          options={{
            ...mapOptions,
            zoomControlOptions: {
              position: mapState.controlsPosition,
            },
            gestureHandling: mapState.userMode ? 'none' : 'greedy',
            zoomControl: mapState.userMode ? false : true,
          }}
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerClassName={`${styles.googleMap} ${
            isPanelOpen ? styles.googleMapShort : ''
          }`}
        >
          <>
            {mapState.mapLegendVisible && (
              <MapLegend isPanelOpened={isPanelOpen} />
            )}

            {areaPolygons.map(({ paths, ...options }, index) => (
              <Polygon key={index} paths={paths} options={options} />
            ))}

            {mapState.mapPolygons.map((polygon, index) => (
              <Polygon
                key={index}
                paths={polygon.paths as google.maps.MVCArray<any>}
                options={{
                  strokeWeight: polygon.strokeWeight,
                  fillColor: mapState.overlayIncident
                    ? mapConfig.polygons.fillColor[
                        mapState.overlayIncident.powerCutType
                      ]
                    : polygon.fillColor,
                  fillOpacity: mapState.overlayIncident
                    ? mapConfig.polygons.fillOpacity[
                        mapState.overlayIncident.powerCutType
                      ]
                    : polygon.fillOpacity,
                }}
              />
            ))}

            {mapState.markersVisible && (
              <MarkerClusterer
                gridSize={30}
                onClick={(cluster) => {
                  const currentZoom = mapState.map?.getZoom()
                  const clusterCenter = cluster.getCenter()

                  if (currentZoom) {
                    mapState.map?.setZoom(currentZoom + 1)
                  }

                  if (clusterCenter) {
                    mapState.map?.setCenter(clusterCenter)
                  }

                  // TODO: Add below method once sidebar/header is in.
                  // offsetCenter()
                }}
                zoomOnClick={false}
                clusterClass={styles.clusterMarker}
                styles={[
                  {
                    url: '/images/map/cluster.png',
                    height: INACTIVE_MARKER_DIMENSIONS[0],
                    width: INACTIVE_MARKER_DIMENSIONS[1],
                    textSize: 0,
                    textColor: 'transparent',
                  },
                ]}
              >
                {(clusterer) => (
                  <>
                    {mapState.incidents.map((incident, index) => (
                      <React.Fragment key={index}>
                        {incident.postcodeData.map((postcodeData) => (
                          <MapMarker
                            key={`${postcodeData.center.lat}-${postcodeData.center.lng}`}
                            incident={incident}
                            marker={postcodeData}
                            clusterer={clusterer}
                          />
                        ))}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </MarkerClusterer>
            )}

            {mapState.userLocationMarker && (
              <Marker
                key={`${mapState.userLocationMarker.postcodeData[0].center.lat}-${mapState.userLocationMarker.postcodeData[0].center.lng}`}
                position={mapState.userLocationMarker.postcodeData[0].center}
                icon={{
                  url: `/images/map/${mapState.userLocationMarker.powerCutType.toLowerCase()}.png`,
                  size: new google.maps.Size(
                    mapConfig.icons.size.user.width,
                    mapConfig.icons.size.user.height
                  ),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(
                    mapConfig.icons.anchor.user.x,
                    mapConfig.icons.anchor.user.y
                  ),
                  scaledSize: new google.maps.Size(
                    mapConfig.icons.size.user.width,
                    mapConfig.icons.size.user.height
                  ),
                }}
              />
            )}
          </>
        </GoogleMap>
      )}
      {!!mapState.isAddressModalVisible && <PowerCutAddressModal />}

      <div
        className={styles.panelWrapper}
        data-is-panel-open={isPanelOpen}
        data-is-preview-open={
          !!mapState.activeIncident &&
          mapState.isPreviewBarVisible &&
          !mapState.isPanelVisible
        }
        data-is-sub-panel-open={isSubPanelActive}
      >
        <div
          className={styles.overlay}
          data-is-overlay-open={
            mapState.isPanelVisible && !mapState.isPreviewBarVisible
          }
          data-is-preview-open={
            !mapState.isPanelVisible && mapState.isPreviewBarVisible
          }
          onClick={onOverlayClickHandler}
        />

        {!isRemovedMarker && <PowerCutPanelContainer data={data} />}
      </div>
    </>
  )
}

export default MapPage
