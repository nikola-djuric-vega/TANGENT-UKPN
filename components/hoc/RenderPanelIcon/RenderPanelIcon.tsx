import styles from '_molecules/PowerCutPanelHeader/PowerCutPanelHeader.module.scss'
import PowerCutPanelIcon from '_molecules/PowerCutPanelIcon/PowerCutPanelIcon'
import { PowerCutType } from '_types/local/incidents'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

const renderPanelIcon = (
  incidentsCount?: number | null,
  type?: PowerCutType
) => {
  switch (type) {
    case PowerCutType.MULTIPLE_INCIDENT:
      return (
        <div className={styles.multiIconWrapper}>
          <Icon name={IconNames.MULTIPIN_STATUS} />
          <span className={styles.multiIconCount}>{incidentsCount}</span>
        </div>
      )

    case PowerCutType.PLANNED_INCIDENT:
      return (
        <PowerCutPanelIcon
          iconName={IconNames.ICO_MAINTENANCE_ONE}
          className={`${styles.linePurple} ${styles.animated}`}
        />
      )

    case PowerCutType.RESTORED_INCIDENT:
      return (
        <PowerCutPanelIcon
          iconName={IconNames.FORTY_PX_SUCCESS}
          className={`${styles.lineTeal} ${styles.animated}`}
        />
      )

    case PowerCutType.UNPLANNED_INCIDENT:
      return (
        <PowerCutPanelIcon
          iconName={IconNames.FORTY_PX_POWER_CUT}
          className={`${styles.lineOrange} ${styles.animated}`}
        />
      )

    case PowerCutType.REPORTED_INCIDENT:
      return (
        <PowerCutPanelIcon
          iconName={IconNames.ICO_POWER_CUT}
          className={`${styles.lineRed} ${styles.filled25}`}
        />
      )

    default:
      return (
        <PowerCutPanelIcon
          iconName={IconNames.ICO_POWER_CUT}
          className={`${styles.lineRed} ${styles.filled25}`}
        />
      )
  }
}

export default renderPanelIcon
