import PowerCutPanelStats from '_molecules/PowerCutPanelStats/PowerCutPanelStats'
import { Incident, PowerCutType } from '_types/local/incidents'
import { useDictionaryItems } from '_context/dictionary-items'
import styles from './PowerCutPanelPlanned.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import RichText from '_atoms/RichText/RichText'
import queryString from 'query-string'
import { useEffect } from 'react'
import { DateTime } from 'luxon'

const PowerCutPanelPlanned = ({ incident }: { incident: Incident | null }) => {
  const dictionary = useDictionaryItems()
  const { mapState, actions, setMapState } = usePowerCutMap()

  const plannedDateISO = incident?.ukpnIncident?.plannedDate
  const plannedDate =
    !!plannedDateISO &&
    DateTime.fromISO(plannedDateISO, {
      setZone: true,
    })

  const customersAffectedCount = incident?.ukpnIncident?.noPlannedCustomers

  const postcodeAffectedCount =
    incident?.ukpnIncident?.postCodesAffected.length || 0

  const UKPNIncident = incident?.ukpnIncident
  const estimatedRestorationDate =
    !!UKPNIncident?.estimatedRestorationDate &&
    DateTime.fromISO(UKPNIncident?.estimatedRestorationDate, {
      setZone: true,
    })

  const estimatedRestoreTime =
    (estimatedRestorationDate &&
      `${estimatedRestorationDate.toFormat('dd MMM')} ${
        incident?.incidentTypeTBCEstimatedFriendlyDescription
      }`) ||
    `${
      incident?.incidentTypeTBCEstimatedFriendlyDescription || 'To be confirmed'
    }`

  useEffect(() => {
    if (
      mapState.activeIncident &&
      mapState.activeIncident.incidentReference &&
      mapState.activeIncident.powerCutType === PowerCutType.PLANNED_INCIDENT
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <RichText text={dictionary.plannedWorkIntroduction} />
      </div>
      <section className={styles.infoWrapper}>
        <div className={styles.infoSections}>
          <div className={styles.infoSection}>
            <div className={styles.infoSectionHeading}>
              <RichText text={dictionary.plannedWorkSwitchedOff} />
            </div>

            <div className={styles.infoSectionValue}>
              {plannedDate && plannedDate.isValid ? (
                plannedDate.toFormat('HH:mm')
              ) : (
                <RichText text={dictionary.plannedWorkUnknownTime} />
              )}
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoSectionHeading}>
              <RichText text={dictionary.plannedWorkBackOn} />
            </div>
            <div className={styles.infoSectionValue}>
              {estimatedRestoreTime}
            </div>
          </div>
        </div>
      </section>
      <PowerCutPanelStats
        customerText={dictionary.plannedWorkCustomersAffected}
        customerValue={
          customersAffectedCount && customersAffectedCount > 5000
            ? dictionary.plannedWorkThousandsAffected
            : customersAffectedCount === 0
            ? dictionary.plannedWorkZeroAffected
            : customersAffectedCount
        }
        postcodeText={
          postcodeAffectedCount === 1
            ? dictionary.plannedWorkPostcodeAffected
            : dictionary.plannedWorkPostcodesAffected
        }
        postcodeValue={postcodeAffectedCount}
      />
      <section className={styles.reasonSection}>
        <RichText
          text={dictionary.reasonForThisPlannedWorkHeader}
          className={styles.reasonHeading}
        />
        <p className={styles.reasonDescription}>
          {incident?.ukpnIncident?.plannedIncidentReason}
        </p>
      </section>
    </div>
  )
}

export default PowerCutPanelPlanned
