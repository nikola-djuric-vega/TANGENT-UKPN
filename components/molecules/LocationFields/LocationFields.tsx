import What3WordsMapModal from '_atoms/What3WordsMapModal/What3WordsMapModal'
import OsGridRef, { LatLon } from 'geodesy/osgridref.js'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import FormTooltip from '_atoms/FormTooltip/FormTooltip'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './LocationFields.module.scss'
import { ButtonAppearance } from '_types/CMS'
import React, { useState } from 'react'
import Input from '_atoms/Input/Input'
import Label from '_atoms/Label/Label'

import {
  ErrorMessage as ErrorMessageWrapper,
  useFormikContext,
  useField,
  Formik,
  Field,
} from 'formik'

export interface LocationFieldsProps {
  name: string
  isRequired: boolean
}

const LocationFields = ({ name, isRequired }: LocationFieldsProps) => {
  const placeHolder = 'Type Here'
  const startPosition = { lat: 51.5074, lng: 0.1278 }
  const [mapCenter, setMapCenter] = useState(startPosition)
  const { setFieldValue, values, errors, handleBlur, setFieldError } =
    useFormikContext()
  const [addressField, addressMeta, addressHelpers] = useField(name)
  const { city, county, postcode, easting, northing, what3Words } =
    addressMeta.value
  const [showMap, setShowMap] = useState(false)

  const updateMapCenter = (lat: number, lng: number) => {
    setMapCenter({ lat, lng })
  }

  const closeShowMap = () => {
    setShowMap(false)
    document.body.style.overflow = 'unset'
  }

  const setMapFromPostCode = async () => {
    const postCodeRegex =
      /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z]) *[0-9][a-zA-Z]{2} *$/
    if (
      postCodeRegex.test(postcode) &&
      what3Words === '' &&
      easting === '' &&
      northing === ''
    ) {
      fetch(`/api/geocode-from-postcode?postcode=${postcode}`, {
        method: 'GET',
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (res.message !== undefined) {
            setFieldError(`${name}.postcode`, res.message)
          } else {
            const lat = res.lat
            const lng = res.lng
            setMapCenter({ lat, lng })
          }
        })
    }
  }

  const updateAllLocationUTM = () => {
    const eastingRegex = /^[1-6]?\d{1,5}?$/
    const northingRegex = /^[1-6]?\d{1,5}?$/

    if (eastingRegex.test(easting) && northingRegex.test(northing)) {
      const gridref = new OsGridRef(easting, northing)
      const latlon = gridref.toLatLon()

      fetch(`/api/what-3-words?lat=${latlon.lat}&lng=${latlon.lng}`, {
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

      setMapCenter({ lat: latlon.lat, lng: latlon.lng })
    } else {
      setMapCenter(startPosition)
    }
  }

  const updateAllLocationW3W = () => {
    if (what3Words.indexOf('///') !== 0 && what3Words !== '') {
      setFieldValue(`${name}.what3Words`, '///' + what3Words)
    }
    if (what3Words !== '') {
      fetch(`/api/what-3-words?words=${what3Words}`, {
        method: 'GET',
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (res.message !== undefined) {
            setMapCenter(startPosition)
            setFieldError(`${name}.what3Words`, res.message)
          } else {
            const location = new LatLon(res.lat, res.lng)
            let osGridLocation: OsGridRef
            try {
              osGridLocation = location.toOsGrid()
              if (
                osGridLocation.northing >= 700000 ||
                osGridLocation.easting >= 700000
              ) {
                setFieldError(
                  `${name}.what3Words`,
                  'Please check if the what3words location is valid and is inside of UKPN coverage'
                )
                return
              }
            } catch (e) {
              setFieldError(
                `${name}.what3Words`,
                'Please check if the what3words location is valid and is inside of UKPN coverage'
              )
              return
            }
            const easting = osGridLocation.easting.toFixed(0)
            const northing = osGridLocation.northing.toFixed(0)
            setFieldValue(`${name}.northing`, northing.toString())
            setFieldValue(`${name}.easting`, easting.toString())
            setMapCenter({ lat: res.lat, lng: res.lng })
          }
        })
    } else {
      setMapCenter(startPosition)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Label
          text={'Town/City'}
          isRequired={isRequired}
          className={styles.label}
          htmlFor={`${name}_city`}
        />
        <Field
          as={Input}
          value={city}
          name={`${name}.city`}
          id={`${name}_city`}
          placeholder={placeHolder}
        />
        <ErrorMessageWrapper name={`${name}.city`}>
          {(msg) => <ErrorMessage errorMessage={msg} />}
        </ErrorMessageWrapper>
        <div className={styles.flexContainer}>
          <div className={styles.smallInput}>
            <Label
              text={'County'}
              isRequired={false}
              className={styles.label}
              htmlFor={`${name}_county`}
            />
            <Field
              as={Input}
              value={county}
              name={`${name}.county`}
              id={`${name}_county`}
              placeholder={placeHolder}
            />
            <ErrorMessageWrapper name={`${name}.county`}>
              {(msg) => <ErrorMessage errorMessage={msg} />}
            </ErrorMessageWrapper>
          </div>

          <div className={styles.smallInput}>
            <Label
              text={'Postcode'}
              isRequired={isRequired}
              className={styles.label}
              htmlFor={`${name}_postcode`}
            />
            <Field
              as={Input}
              value={postcode}
              name={`${name}.postcode`}
              id={`${name}_postcode`}
              placeholder={placeHolder}
              onBlur={(event: any) => {
                setMapFromPostCode()
                handleBlur(event)
              }}
            />
            <div className={styles.postCodeTooltip}>
              <FormTooltip
                defaultTitle="Help"
                tooltipTitle="Close"
                tooltipMessage={
                  'The postcode of where the asset requiring an electrical connection is located.'
                }
                showTooltip={false}
              />
              <ErrorMessageWrapper name={`${name}.postcode`}>
                {(msg) => <ErrorMessage errorMessage={msg} />}
              </ErrorMessageWrapper>
            </div>
          </div>
        </div>
        <div className={styles.instructions}>
          <div>
            <span>
              {
                "If you don't know the exact Easting and Northing, please use the "
              }
            </span>
            <Button
              appearance={ButtonAppearance.BLANK}
              onClick={() => {
                setShowMap(true)
                document.body.style.overflow = 'hidden'
              }}
              type="button"
              className={styles.mapLink}
            >
              map tool
            </Button>
            <span>{' to identify the location.'}</span>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.smallInput}>
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
          </div>
          <div className={styles.smallInput}>
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
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.smallInput}>
            <FormTooltip
              defaultTitle="Help"
              tooltipTitle="Close"
              tooltipMessage={
                'Easting and northing are geographic Cartesian coordinates for a point. Easting is the eastward-measured distance (or the x-coordinate).'
              }
              showTooltip={false}
            />
            <ErrorMessageWrapper name={`${name}.easting`}>
              {(msg) => <ErrorMessage errorMessage={msg} />}
            </ErrorMessageWrapper>
          </div>
          <div className={styles.smallInput}>
            <FormTooltip
              defaultTitle="Help"
              tooltipTitle="Close"
              tooltipMessage={
                'Easting and northing are geographic Cartesian coordinates for a point. Northing is the northward-measured distance (or the y-coordinate).'
              }
              showTooltip={false}
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
        <div className={styles.w3wInput}>
          <FormTooltip
            defaultTitle="Help"
            tooltipTitle="Close"
            tooltipMessage={
              'What3words is a digital geocoding system that lets you identify any location in the world that’s three by three meters, or 10 by 10 feet, in size.'
            }
            showTooltip={false}
          />
          <ErrorMessageWrapper name={`${name}.what3Words`}>
            {(msg) => <ErrorMessage errorMessage={msg} />}
          </ErrorMessageWrapper>
        </div>
      </div>
      {showMap && (
        <What3WordsMapModal
          name={name}
          isRequired={isRequired}
          updateAllLocationW3W={updateAllLocationW3W}
          closeMap={closeShowMap}
          updateAllLocationUTM={updateAllLocationUTM}
          updateMapCenter={updateMapCenter}
          mapCenter={mapCenter}
        />
      )}
    </>
  )
}

export default LocationFields
