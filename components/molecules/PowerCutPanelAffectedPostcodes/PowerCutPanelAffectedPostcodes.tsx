import styles from './PowerCutPanelAffectedPostcodes.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

const PowerCutPanelAffectedPostocodes = () => {
  const { mapState, setMapState } = usePowerCutMap()

  const incident = mapState.overlayIncident || mapState.activeIncident
  const incidentReference = incident?.incidentReference || ''

  return (
    <section
      className={styles.PowerCutPanelAffectedPostocodes}
      data-active={mapState.isPostcodePanelOpen}
    >
      <Button
        data-top
        appearance={ButtonAppearance.BLANK}
        className={styles.closeButton}
        onClick={() =>
          setMapState((prevState) => ({
            ...prevState,
            isPostcodePanelOpen: false,
          }))
        }
      >
        <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
      </Button>
      <div className={styles.postCodesContainer}>
        <p className={styles.postCodesContainerTitle}>
          Affected postcode areas
        </p>
        {incidentReference && (
          <p className={styles.postCodesContainerReference}>
            Reference: {incidentReference}
          </p>
        )}
      </div>
      <div className={styles.postCodesList}>
        {incident?.ukpnIncident?.postCodesAffected.map((postalCode, index) => (
          <span key={index} className={styles.postCodesListItem}>
            {postalCode}
          </span>
        ))}
      </div>
    </section>
  )
}

export default PowerCutPanelAffectedPostocodes
