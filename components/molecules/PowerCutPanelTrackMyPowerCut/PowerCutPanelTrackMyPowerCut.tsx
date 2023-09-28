import TrackMyPowerReport from '_molecules/TrackMyPoweReport/TrackMyPowerReport'
import { IncidentType } from '../../../types/local/incident-dto'
import styles from './PowerCutPanelTrackMyPowerCut.module.scss'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { ButtonAppearance } from '_types/CMS'
import { StormMode } from '_types/CMS/nodes'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import { DateTime } from 'luxon'
import React, { useEffect } from 'react'

const PowerCutPanelTrackMyPowerCut = ({ activeIncidentsCmsData }: any) => {
  const { mapState, setMapState } = usePowerCutMap()
  const incident = mapState.overlayIncident || mapState.activeIncident
  const settings = useUkpnGlobalData()
  const isStormMode =
    settings?.stormContainerData?.stormMode === StormMode.STORM
  const informationNotice = activeIncidentsCmsData?.informationNotice || ''
  const steps = incident?.steps?.filter((item) => item.name)

  const printIconPath: any = () => {
    const activeIconIndex =
      steps?.findIndex((item) => item.name && item.active) || -1

    const icons: any = {
      0: IconNames.ICO_CHAT_ONE,
      1: isStormMode ? IconNames.ICO_MAINTENANCE_ONE : IconNames.ICO_VAN_ONE,
      2: isStormMode ? IconNames.ICO_POWER_ONE : IconNames.ICO_MAINTENANCE_ONE,
      3: IconNames.ICO_POWER_ONE,
    }

    return steps?.map((item, i) => {
      let applyClasses = ''
      let icon

      if (item.active && !item.name) {
        return
      }

      if (activeIconIndex < 0 && i === 0) {
        icon = icons[i]
        applyClasses = `${styles.trackerStatusActive} ${styles.trackerStatusActiveCurrent}`
      } else if (i < activeIconIndex) {
        icon = IconNames.ICO_CHECK_THREE
        applyClasses = `${styles.trackerStatusActive}`
      } else if (i === activeIconIndex) {
        icon = icons[i]
        applyClasses = `${styles.trackerStatusActive} ${styles.trackerStatusActiveCurrent}`
      }

      return (
        <li className={applyClasses} key={i}>
          <Icon name={icon} size="xxs" />
          <span>{item?.name}</span>
        </li>
      )
    })
  }

  const sortStepsByDateDescending =
    incident?.steps &&
    [...incident?.steps].sort(function (a: any, b: any) {
      return new Date(b.date).valueOf() - new Date(a.date).valueOf()
    })

  const checkHighVoltage =
    incident?.ukpnIncident?.incidentType ===
      IncidentType.HIGH_VOLTAGE_NETWORK ||
    incident?.ukpnIncident?.incidentType === IncidentType.HIGH_VOLTAGE

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

  return (
    <section
      className={styles.powerCutPanelTrackMyPowerCut}
      data-active={mapState.isTrackPanelOpen}
    >
      <Button
        data-top
        appearance={ButtonAppearance.BLANK}
        className={styles.closeButton}
        onClick={() =>
          setMapState((prevState) => ({
            ...prevState,
            isTrackPanelOpen: false,
          }))
        }
      >
        <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
      </Button>
      <div className={styles.trackerHeaderContainer}>
        <p className={styles.trackerHeaderContainerTitle}>Track my power cut</p>
        <p className={styles.trackerHeaderContainerEstimated}>
          Estimated power restoration time
        </p>
        <p className={styles.trackerHeaderContainerConfirmed}>
          {estimatedRestoreTime}
        </p>
      </div>
      <div className={styles.trackerStatus}>
        <ul>{printIconPath()}</ul>
      </div>
      <div className={styles.latestUpdate}>
        <span>Latest Update</span>
      </div>
      <div>
        {sortStepsByDateDescending?.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <TrackMyPowerReport data={item} />
            </React.Fragment>
          )
        })}
      </div>
      <p className={styles.informationNotice}>{informationNotice}</p>
      {checkHighVoltage && (
        <div className={styles.getTextContainer}>
          <p className={styles.getTextContainerDescription}>
            Want to get these straight to your phone?
          </p>
          <div>
            <Button
              appearance={ButtonAppearance.PRIMARY}
              onClick={() =>
                setMapState((prevState) => ({
                  ...prevState,
                  isTextUpdatesPanelOpen: true,
                  isTrackPanelOpen: false,
                }))
              }
            >
              Get text message updates
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default PowerCutPanelTrackMyPowerCut
