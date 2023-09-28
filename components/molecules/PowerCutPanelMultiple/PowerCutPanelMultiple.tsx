import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { ButtonAppearance, TextSizes } from '_types/CMS'
import styles from './PowerCutPanelMultiple.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { transformUrl } from '_utils/transform-url'
import { usePowerCut } from '_context/power-cut'
import { MultipinPanel } from '_types/CMS/pages'
import RichText from '_atoms/RichText/RichText'
import { useRouter } from 'next/router'
import queryString from 'query-string'
import Icon from '_atoms/Icon/Icon'
import { useEffect } from 'react'
import Image from 'next/image'

import {
  replaceUrlWithPostcode,
  processIncidentData,
  replaceUrlWithId,
} from '_organism/MapPage/map-utils'

import {
  IncidentContentMulti,
  PowerCutType,
  Incident,
} from '_types/local/incidents'
import { IconNames } from '_types/local'
export interface PowerCutPanelMultipleProps {
  cmsData?: MultipinPanel
}

const PowerCutPanelMultiple = ({ cmsData }: PowerCutPanelMultipleProps) => {
  const { mapState, setMapState } = usePowerCutMap()
  const { powerCutState, fetchRpcToggle } = usePowerCut()
  const dictionary = useDictionaryItems()
  const globalData = useUkpnGlobalData()
  const activeIncident = mapState.activeIncident as IncidentContentMulti
  const router = useRouter()

  useEffect(() => {
    if (activeIncident?.unplannedIncidents?.length === 0) {
      fetchRpcToggle()
    }
  }, [activeIncident])

  const handleMarkerClick = (incident: Incident) => {
    const queryParams = queryString.parse(location.search)
    const showTracker = queryParams.showTracker === 'true'

    incident.powerCutType === PowerCutType.MULTIPLE_INCIDENT
      ? replaceUrlWithPostcode(router, incident.postcode)
      : replaceUrlWithId(router, incident.incidentReference, showTracker)

    setMapState((prevState) => ({
      ...prevState,
      overlayIncident: processIncidentData(incident),
    }))
  }

  const powerCutLinkUrl =
    globalData?.allSiteSettings?.reportPowerCutLink?.url || '/'

  const handleReportClick = () => {
    const address = localStorage.getItem('searchedAddress')

    if (address) {
      router.push(transformUrl(powerCutLinkUrl))
    } else {
      setMapState((prevState) => ({
        ...prevState,
        isAddressModalVisible: true,
      }))
    }
  }

  return (
    <div className={styles.container}>
      <p>{cmsData?.incidentsIntroduction}</p>

      <div className={styles.multiItems}>
        {activeIncident?.unplannedIncidents?.map((incident, index) => (
          <div className={styles.multiItem} key={index}>
            <div className={styles.multiItemIcon}>
              <Image
                src={`/images/map/unplanned.svg`}
                title="Unplanned"
                alt="Unplanned"
                width={26}
                height={26}
              />
            </div>
            <div className={styles.multiItemContent}>
              <p className={styles.multiItemLabel}>
                {cmsData?.unplannedPowerCutsTitle}
              </p>
              <Button
                appearance={ButtonAppearance.BLANK}
                className={styles.multiItemLink}
                type="button"
                onClick={() => handleMarkerClick(processIncidentData(incident))}
              >
                {`${cmsData?.incidentReference} ${incident.incidentReference}`}
                <Icon name={IconNames.ICON_ARROW_LONG} size="xs" />
              </Button>
            </div>
          </div>
        ))}

        {activeIncident?.restoredIncidents?.map((incident, index) => (
          <div className={styles.multiItem} key={index}>
            <div className={styles.multiItemIcon}>
              <Image
                src={`/images/map/restored.svg`}
                title="Restored"
                alt="Restored"
                width={26}
                height={26}
              />
            </div>
            <div className={styles.multiItemContent}>
              <p className={styles.multiItemLabel}>
                {cmsData?.restoredPowerCutsTitle}
              </p>
              <Button
                appearance={ButtonAppearance.BLANK}
                className={styles.multiItemLink}
                type="button"
                onClick={() => handleMarkerClick(processIncidentData(incident))}
              >
                {`${cmsData?.incidentReference} ${incident.incidentReference}`}
                <Icon name={IconNames.ICON_ARROW_LONG} size="xs" />
              </Button>
            </div>
          </div>
        ))}

        {activeIncident?.plannedIncidents?.map((incident, index) => (
          <div className={styles.multiItem} key={index}>
            <div className={styles.multiItemIcon}>
              <Image
                src={`/images/map/planned.svg`}
                title="Planned"
                alt="Planned"
                width={26}
                height={26}
              />
            </div>
            <div className={styles.multiItemContent}>
              <p className={styles.multiItemLabel}>
                {cmsData?.plannedPowerCutsTitle}
              </p>
              <Button
                appearance={ButtonAppearance.BLANK}
                className={styles.multiItemLink}
                type="button"
                onClick={() => handleMarkerClick(processIncidentData(incident))}
              >
                {`${cmsData?.incidentReference} ${incident.incidentReference}`}
                <Icon name={IconNames.ICON_ARROW_LONG} size="xs" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {activeIncident?.unplannedIncidents?.length === 0 &&
        !powerCutState.disableRPCButton && (
          <div className={styles.reportIt}>
            <RichText text={dictionary.multiNeedToReportIncidentQuestion} />
            <Button
              className={styles.reportCTA}
              appearance={ButtonAppearance.PRIMARY}
              type="button"
              onClick={handleReportClick}
            >
              <RichText
                text={dictionary.restoredReportIt}
                size={TextSizes.TEXT_BODY_2}
              />
            </Button>
          </div>
        )}
    </div>
  )
}

export default PowerCutPanelMultiple
