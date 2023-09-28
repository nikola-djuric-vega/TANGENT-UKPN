import PowerCutPanelStats from '_molecules/PowerCutPanelStats/PowerCutPanelStats'
import { Incident, PowerCutType } from '_types/local/incidents'
import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import styles from './PowerCutPanelUnplanned.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import { UnplannedPanel } from '_types/CMS/pages'
import RichText from '_atoms/RichText/RichText'
import { StormMode } from '_types/CMS/nodes'
import queryString from 'query-string'
import { useEffect } from 'react'
import { DateTime } from 'luxon'

export interface PowerCutPanelUnplannedProps {
  incident: Incident | null
  cmsData?: UnplannedPanel
}

const PowerCutPanelUnplanned = ({
  incident,
  cmsData,
}: PowerCutPanelUnplannedProps) => {
  const dictionary = useDictionaryItems()
  const globalData = useUkpnGlobalData()
  const { mapState, actions, setMapState } = usePowerCutMap()

  useEffect(() => {
    globalData?.fetchStormContainerData()
    if (
      mapState.activeIncident &&
      mapState.activeIncident.incidentReference &&
      mapState.activeIncident.powerCutType === PowerCutType.UNPLANNED_INCIDENT
    ) {
      const interval = setInterval(() => {
        actions
          .getIncidentById(
            mapState.activeIncident?.incidentReference,
            mapState.activeIncident?.ukpnIncident?.timestamp
          )
          .then((incident) => {
            if (!incident.ukpnIncident?.timestamp) return

            // check if anything has changed since our last get request
            if (
              incident.ukpnIncident?.timestamp ===
              mapState.activeIncident?.ukpnIncident?.timestamp
            )
              return

            if (
              incident.ukpnIncident?.timestamp &&
              !mapState.activeIncident?.ukpnIncident?.timestamp
            ) {
              setMapState((prevState) => ({
                ...prevState,
                activeIncident: incident,
              }))

              return
            }

            setMapState((prevState) => ({
              ...prevState,
              activeIncident: incident,
            }))

            const queryParams = queryString.parse(location.search)

            const queryIncidentId = queryParams.incidentId
            const queryShowTracker = queryParams.showTracker
            const showTracker =
              (queryShowTracker &&
                queryIncidentId === incident.incidentReference) ||
              false

            actions.goToIncident({
              incident,
              marker: mapState.activeMarker,
              options: { showTracker, skipContentLoad: true },
            })

            if (!incident.incidentReference) return
          })
      }, mapState.pollingIntervalTime)

      setMapState((prevState) => ({
        ...prevState,
        refreshIncidentsInterval: interval as unknown as number,
      }))

      return () => {
        clearInterval(interval)
      }
    }
  }, [mapState.activeIncident])

  const UKPNIncident = incident?.ukpnIncident
  const estimatedRestorationDate =
    !!UKPNIncident?.estimatedRestorationDate &&
    DateTime.fromISO(UKPNIncident?.estimatedRestorationDate, {
      setZone: true,
    })

  const customersAffectedCount = incident?.ukpnIncident?.noCustomerAffected

  const postcodeAffectedCount =
    incident?.ukpnIncident?.postCodesAffected.length || 0

  const estimatedRestoreTime =
    (estimatedRestorationDate &&
      `${estimatedRestorationDate.toFormat('dd MMM')} ${
        incident?.incidentTypeTBCEstimatedFriendlyDescription
      }`) ||
    `${
      incident?.incidentTypeTBCEstimatedFriendlyDescription || 'To be confirmed'
    }`

  useEffect(() => {
    globalData?.fetchStormContainerData()
  }, [])

  return (
    <div>
      <div className={styles.etrWrapper}>
        <p className={styles.flushText}>{cmsData?.subtitle}</p>
        <p>{cmsData?.eTRIntroduction}</p>
        <p className={styles.estimateText}>{estimatedRestoreTime}</p>
        {estimatedRestorationDate && estimatedRestorationDate.isValid ? (
          <p className={styles.flushText}>{cmsData?.eTRFooter}</p>
        ) : (
          <p className={styles.flushText}>{cmsData?.noETRFooter}</p>
        )}
      </div>

      <PowerCutPanelStats
        customerText={dictionary.unplannedWorkCustomersAffected}
        customerValue={
          customersAffectedCount && customersAffectedCount > 5000
            ? dictionary.unplannedWorkThousandsAffected
            : customersAffectedCount === 0
            ? dictionary.unplannedWorkZeroAffected
            : customersAffectedCount
        }
        postcodeText={
          postcodeAffectedCount === 1
            ? dictionary.unplannedWorkPostcodeAffected
            : dictionary.unplannedWorkPostcodesAffected
        }
        postcodeValue={postcodeAffectedCount}
        callsText={dictionary.unplannedCustomerCalls}
        callsValue={UKPNIncident?.noCallsReported}
      />

      <section className={styles.reasonWrapper}>
        {cmsData?.reasonTitle && (
          <RichText
            text={cmsData?.reasonTitle}
            className={styles.reasonTitle}
          />
        )}
        <div className={styles.reasonInnerWrapper}>
          <p className={styles.reasonText}>
            <strong>
              {incident?.incidentCategoryCustomerFriendlyDescription}
            </strong>
          </p>
          <p className={styles.reasonInfo}>{cmsData?.informationNotice}</p>
        </div>
      </section>
    </div>
  )
}

export default PowerCutPanelUnplanned
