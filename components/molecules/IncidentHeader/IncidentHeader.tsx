import { PowerCutPanelItem, UnplannedPanel } from '_types/CMS/pages'
import { Incident, PowerCutType } from '_types/local/incidents'
import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import styles from './IncidentHeader.module.scss'
import RichText from '_atoms/RichText/RichText'
import { StormMode } from '_types/CMS/nodes'
import { DateTime } from 'luxon'

export interface IncidentHeaderProps {
  cmsData?: PowerCutPanelItem
  incident: Incident
}

export interface IncidentHeaderText {
  topLine?: string
  estimate?: string | null
  bottomLine?: string
}

const IncidentHeader = ({ incident, cmsData }: IncidentHeaderProps) => {
  const dictionary = useDictionaryItems()
  const globalData = useUkpnGlobalData()

  const isStorm = globalData?.allSiteSettings?.stormMode == StormMode.STORM

  let headerText: IncidentHeaderText | undefined

  const getDisplayDate = (date: DateTime, secondTime?: string | null) => {
    return `
      ${date.toFormat('dd MMM')} <strong>${
      secondTime || date.toFormat('T')
    }</strong>
    `
  }

  const estimatedRestorationDate =
    !!incident.ukpnIncident?.estimatedRestorationDate &&
    DateTime.fromISO(incident.ukpnIncident?.estimatedRestorationDate, {
      setZone: true,
    })

  const estimatedRestoreTime =
    (estimatedRestorationDate &&
      `${getDisplayDate(
        estimatedRestorationDate,
        incident?.incidentTypeTBCEstimatedFriendlyDescription
      )}`) ||
    `${
      incident?.incidentTypeTBCEstimatedFriendlyDescription || 'To be confirmed'
    }`

  const restoredDate =
    !!incident.ukpnIncident?.restoredDateTime &&
    DateTime.fromISO(incident.ukpnIncident?.restoredDateTime, {
      setZone: true,
    })

  const restoredTime =
    restoredDate && restoredDate.isValid
      ? getDisplayDate(restoredDate)
      : dictionary.restoredTimeUnspecified

  switch (incident.powerCutType) {
    case PowerCutType.PLANNED_INCIDENT:
      headerText = {
        topLine: dictionary.plannedWorkBackOn,
        estimate: estimatedRestoreTime,
        bottomLine: '',
      }
      break
    case PowerCutType.UNPLANNED_INCIDENT:
      headerText = {
        topLine: (cmsData as UnplannedPanel).eTRIntroduction,
        estimate:
          !estimatedRestorationDate && !!isStorm
            ? incident.incidentCategoryCustomerFriendlyDescription
            : estimatedRestoreTime,
        bottomLine:
          estimatedRestorationDate && estimatedRestorationDate.isValid
            ? (cmsData as UnplannedPanel).eTRFooter
            : (cmsData as UnplannedPanel).noETRFooter,
      }
      break
    case PowerCutType.RESTORED_INCIDENT:
      headerText = {
        topLine: dictionary.powerBackOnAllCustomers,
        estimate: restoredTime,
        bottomLine: dictionary.restoredSorryForDisruption,
      }
      break
    default:
      return null
  }

  return (
    <div className={styles.incidentHeader}>
      {!!headerText && (
        <>
          {!!headerText.topLine && (
            <RichText
              className={styles.incidentHeaderTopLine}
              text={headerText.topLine}
            />
          )}
          {!!headerText.estimate && (
            <RichText
              data-storm-no-etr={!estimatedRestorationDate && !!isStorm}
              className={styles.incidentHeaderEstimate}
              text={headerText.estimate}
            />
          )}
          {!!headerText.bottomLine && (
            <RichText
              className={styles.incidentHeaderBottomLine}
              text={headerText.bottomLine}
            />
          )}
        </>
      )}
    </div>
  )
}

export default IncidentHeader
