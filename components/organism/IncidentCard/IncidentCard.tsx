import { PowerCutType } from '_types/local/incidents'
import IncidentDetails from '_molecules/IncidentDetails/IncidentDetails'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import IncidentHeader from '_molecules/IncidentHeader/IncidentHeader'
import GetTextUpdates from '_molecules/GetTextUpdates/GetTextUpdates'
import { IncidentState } from '_containers/IncidentPage/IncidentPage'
import { getPanelNameFromUrl } from '_utils/get-data-from-panel-url'
import TrackIncident from '_molecules/TrackIncident/TrackIncident'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import IncidentReason from '_atoms/IncidentReason/IncidentReason'
import { useDictionaryItems } from '_context/dictionary-items'
import { mapCenter, mapOptions } from '../MapPage/map-options'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { areaPolygons } from '../MapPage/map-area-polygons'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import { IncidentType } from '_types/local/incident-dto'
import { transformString } from '_utils/tranform-string'
import { IncidentHelper } from '_lib/incident-helper'
import { usePowerCut } from '_context/power-cut'
import styles from './IncidentCard.module.scss'
import RichText from '_atoms/RichText/RichText'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { DateTime } from 'luxon'

import {
  useLoadScript,
  GoogleMap,
  Polygon,
  Marker,
} from '@react-google-maps/api'

import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'

export interface IncidentCardProps {
  setIncidentState: Dispatch<SetStateAction<IncidentState>>
  incidentState: IncidentState
}

const IncidentCard = ({
  setIncidentState,
  incidentState,
}: IncidentCardProps) => {
  const dictionary = useDictionaryItems()
  const { powerCutState } = usePowerCut()
  const globalData = useUkpnGlobalData()

  const { pollingIntervalTime, addressMarker, incident, polygon, cmsData } =
    incidentState

  const isUnplanned = incident?.powerCutType === PowerCutType.UNPLANNED_INCIDENT
  const isRestored = incident?.powerCutType === PowerCutType.RESTORED_INCIDENT
  const isPlanned = incident?.powerCutType === PowerCutType.PLANNED_INCIDENT

  const incidentCreationTime = incident?.ukpnIncident?.creationDateTime
  const powerCutLinkUrl =
    globalData?.allSiteSettings?.reportPowerCutLink?.url || '/'
  const mapMarkerHeight = 66
  const mapMarkerWidth = 58

  const cmsFields = cmsData.find(
    (panel) =>
      panel.__typename === getPanelNameFromUrl(incident?.panelContentUrl)
  )

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    channel: 'EXTERNAL_SCVIEW',
  })

  const isHighVoltage =
    incident?.ukpnIncident?.incidentType == IncidentType.HIGH_VOLTAGE ||
    incident?.ukpnIncident?.incidentType == IncidentType.HIGH_VOLTAGE_NETWORK

  const incidentReason = IncidentHelper.defineReason(
    incident,
    dictionary,
    cmsFields
  )
  let isPromoted

  if (!!incidentCreationTime) {
    isPromoted =
      DateTime.fromISO(incidentCreationTime).diffNow('hours').hours >= -1
  }

  const onLoad = (map: google.maps.Map) => {
    setIncidentState((prevState) => ({ ...prevState, map }))
  }

  const onUnmount = useCallback((map) => {
    setIncidentState((prevState) => ({ ...prevState, map }))
  }, [])

  useEffect(() => {
    if (
      !!incident?.incidentReference &&
      (incident?.powerCutType === PowerCutType.UNPLANNED_INCIDENT ||
        incident?.powerCutType === PowerCutType.PLANNED_INCIDENT)
    ) {
      const interval = setInterval(() => {
        IncidentHelper.getIncidentById(
          incident.incidentReference,
          incident.ukpnIncident?.timestamp
        ).then((fetchedIncident) => {
          const foundIncident = IncidentHelper.incidentInterval(
            incident,
            fetchedIncident
          )

          setIncidentState((prevState) => ({
            ...prevState,
            ...(!!foundIncident && { incident: foundIncident }),
          }))
        })
      }, pollingIntervalTime)

      return () => {
        clearInterval(interval)
      }
    }
  }, [incident])

  return (
    <ComponentLayout>
      <div className={styles.IncidentCard}>
        <div
          className={styles.IncidentCardContent}
          data-incident-defined={!incident}
        >
          {!!incident ? (
            <>
              <IncidentHeader cmsData={cmsFields} incident={incident} />
              {!isPlanned && (
                <div
                  data-is-promoted={isPromoted}
                  className={styles.IncidentCardInnerWrapper}
                >
                  <TrackIncident
                    steps={incident?.steps}
                    incidentReason={incidentReason}
                  />
                  {!!isUnplanned &&
                    !!isHighVoltage &&
                    incident.incidentReference && (
                      <GetTextUpdates
                        incidentId={incident.incidentReference}
                        isPromoted={isPromoted}
                      />
                    )}
                </div>
              )}
              {!!isRestored && !powerCutState.disableRPCButton && (
                <div className={styles.rpcPrompt}>
                  <RichText
                    text={dictionary.restoredPowerStillOff}
                    className={styles.rpcPromptText}
                  />
                  <Link
                    appearance={LinkAppearance.PRIMARY}
                    color={ButtonColors.DARK}
                    url={powerCutLinkUrl}
                  >
                    {transformString(dictionary.restoredReportIt)}
                  </Link>
                </div>
              )}
              {!!isPlanned && (
                <>
                  <IncidentReason {...incidentReason} />
                  <IncidentDetails {...incident} />
                </>
              )}
            </>
          ) : (
            <>
              <PulsingAnimation theme={PulsingAnimationTheme.WHITE} />
              <Heading level={4} className={styles.notAwareHeading}>
                {transformString(dictionary.noIncidentReported)}
              </Heading>
              {!powerCutState.disableRPCButton && (
                <Link
                  appearance={LinkAppearance.PRIMARY}
                  color={ButtonColors.DARK}
                  url={powerCutLinkUrl}
                >
                  Report a power cut
                </Link>
              )}
            </>
          )}
        </div>
        <div className={styles.IncidentDetails}>
          {isLoaded && (
            <GoogleMap
              mapContainerClassName={styles.googleMap}
              onUnmount={onUnmount}
              center={mapCenter}
              onLoad={onLoad}
              zoom={12}
              options={{
                ...mapOptions,
                gestureHandling: 'none',
                zoomControl: true,
              }}
            >
              {areaPolygons.map(({ paths, ...options }, index) => (
                <Polygon key={index} paths={paths} options={options} />
              ))}

              {polygon?.map(({ paths, ...polygon }, index) => (
                <Polygon
                  paths={paths as google.maps.MVCArray<any>}
                  options={polygon}
                  key={index}
                />
              ))}
              {!!addressMarker && (
                <Marker
                  key={`${addressMarker.postcodeData[0].center.lat}-${addressMarker.postcodeData[0].center.lng}`}
                  position={addressMarker.postcodeData[0].center}
                  icon={{
                    url: `/images/map_pin.svg`,
                    size: new google.maps.Size(mapMarkerWidth, mapMarkerHeight),
                    origin: new google.maps.Point(0, 0),
                    scaledSize: new google.maps.Size(58, 66),
                  }}
                />
              )}
            </GoogleMap>
          )}
          {!!incident && !isPlanned && <IncidentDetails {...incident} />}
        </div>
      </div>
    </ComponentLayout>
  )
}

export default IncidentCard
