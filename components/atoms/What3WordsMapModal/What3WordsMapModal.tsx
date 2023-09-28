import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { mapOptions, mapContainerStyle } from '_organism/MapPage/map-options'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import OsGridRef, { LatLon } from 'geodesy/osgridref.js'
import { Breakpoints } from '_types/local/breakpoints'
import styles from './What3WordsMapModal.module.scss'
import React, { useCallback, useState } from 'react'
import Heading from '_atoms/Heading/Heading'
import Label from '_atoms/Label/Label'
import Input from '_atoms/Input/Input'
import Icon from '_atoms/Icon/Icon'

import {
  ErrorMessage as ErrorMessageWrapper,
  useFormikContext,
  useField,
  Field,
} from 'formik'
import { IconNames } from '_types/local'

interface What3WordsMapModalProps {
  name: string
  isRequired: boolean
  updateAllLocationW3W: () => void
  closeMap: () => void
  updateAllLocationUTM: () => void
  updateMapCenter: (lat: number, lng: number) => void
  mapCenter: {
    lat: number
    lng: number
  }
}

const What3WordsMapModal = ({
  name,
  isRequired,
  updateAllLocationW3W,
  closeMap,
  updateAllLocationUTM,
  updateMapCenter,
  mapCenter,
}: What3WordsMapModalProps) => {
  const placeHolder = 'Type Here'
  const instructions =
    'Either enter a reference or drag the red pin on map to mark your exact location'

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  })

  const [controlsPosition, setControlsPosition] = useState(6)
  const [map, setMap] = useState<GoogleMap | null>(null)
  const [previousMapCenter, setPreviousMapCenter] = useState(mapCenter)

  const { setFieldValue, values, errors, handleBlur } = useFormikContext()
  const [addressField, addressMeta, addressHelpers] = useField(name)

  const { easting, northing, what3Words } = addressMeta.value

  const onLoad = useCallback((map) => {
    setMapZoomControlsPosition()

    setMap(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, [])

  const setMapZoomControlsPosition = () => {
    const largeScreen = window.innerWidth >= Breakpoints.LG

    const zoomControlsPosition = largeScreen
      ? google.maps.ControlPosition.RIGHT_BOTTOM
      : google.maps.ControlPosition.LEFT_TOP

    setControlsPosition(zoomControlsPosition)
  }

  const updateLocationLonLat = async (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat() as number
    const lng = event.latLng?.lng() as number
    const location = new LatLon(lat, lng)
    let osGridLocation: OsGridRef
    try {
      osGridLocation = location.toOsGrid()
      if (
        osGridLocation.northing >= 700000 ||
        osGridLocation.easting >= 700000
      ) {
        updateMapCenter(previousMapCenter.lat, previousMapCenter.lng)
        return
      }
    } catch (e) {
      updateMapCenter(previousMapCenter.lat, previousMapCenter.lng)
      return
    }
    const easting = osGridLocation.easting.toFixed(0)
    const northing = osGridLocation.northing.toFixed(0)
    setFieldValue(`${name}.northing`, northing.toString())
    setFieldValue(`${name}.easting`, easting.toString())
    updateMapCenter(lat, lng)
    setPreviousMapCenter({ lat, lng })
    fetch(`/api/what-3-words?lat=${lat}&lng=${lng}`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json()
        }
      })
      .then((res) => {
        setFieldValue(`${name}.what3Words`, '///' + res.words)
      })
  }

  return (
    <div className={styles.modal} onClick={closeMap}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <Heading level={5}>Select your location</Heading>
          <p className={styles.closeButton} onClick={closeMap}>
            <Icon name={IconNames.ICO_CLOSE} size="xs" />
          </p>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.locationContainer}>
            <p className={styles.instructions}>{instructions}</p>
            <div className={styles.utmContainer}>
              <div className={styles.utmInput}>
                <Label
                  text={'Easting'}
                  isRequired={isRequired}
                  className={styles.label}
                  htmlFor={`${name}_easting`}
                />
                <Field
                  as={Input}
                  value={easting}
                  name={`${name}.easting`}
                  id={`${name}_easting`}
                  placeholder={placeHolder}
                  onBlur={(event: any) => {
                    updateAllLocationUTM()
                    handleBlur(event)
                  }}
                />
                <ErrorMessageWrapper name={`${name}.easting`}>
                  {(msg) => <ErrorMessage errorMessage={msg} />}
                </ErrorMessageWrapper>
              </div>
              <div className={styles.utmInput}>
                <Label
                  text={'Northing'}
                  isRequired={isRequired}
                  className={styles.label}
                  htmlFor={`${name}_northing`}
                />
                <Field
                  as={Input}
                  value={northing}
                  name={`${name}.northing`}
                  id={`${name}_northing`}
                  placeholder={placeHolder}
                  onBlur={(event: any) => {
                    updateAllLocationUTM()
                    handleBlur(event)
                  }}
                />
                <ErrorMessageWrapper name={`${name}.northing`}>
                  {(msg) => <ErrorMessage errorMessage={msg} />}
                </ErrorMessageWrapper>
              </div>
            </div>
            <Label
              text={'What3words'}
              isRequired={false}
              className={styles.label}
              htmlFor={`${name}_what3Words`}
            />
            <Field
              as={Input}
              value={what3Words}
              name={`${name}.what3Words`}
              id={`${name}_what3Words`}
              placeholder="///"
              onBlur={(event: any) => {
                updateAllLocationW3W()
                handleBlur(event)
              }}
            />
            <ErrorMessageWrapper name={`${name}.what3Words`}>
              {(msg) => <ErrorMessage errorMessage={msg} />}
            </ErrorMessageWrapper>
            <div className={styles.map}>
              {isLoaded && (
                <GoogleMap
                  options={{
                    ...mapOptions,
                    fullscreenControl: true,
                    streetViewControl: true,
                    mapTypeControl: true,
                    zoomControlOptions: {
                      position: controlsPosition,
                    },
                  }}
                  mapContainerStyle={mapContainerStyle}
                  center={mapCenter}
                  zoom={18}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <Marker
                    position={mapCenter}
                    draggable={true}
                    onDragEnd={updateLocationLonLat}
                    icon={{
                      url: '/images/map_marker.svg',
                    }}
                  />
                </GoogleMap>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default What3WordsMapModal
