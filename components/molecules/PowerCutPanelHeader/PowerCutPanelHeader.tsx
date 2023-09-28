import renderPanelIcon from '_hoc/RenderPanelIcon/RenderPanelIcon'
import { Incident, PowerCutType } from '_types/local/incidents'
import { useDictionaryItems } from '_context/dictionary-items'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import { IncidentType } from '_types/local/incident-dto'
import { transformString } from '_utils/tranform-string'
import { usePowerCutMap } from '_context/power-cut-map'
import styles from './PowerCutPanelHeader.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import Heading from '_atoms/Heading/Heading'
import React from 'react'

export interface PowerCutPanelHeaderProps {
  incident: Incident | null
  title: string
}

const PowerCutPanelHeader = ({ incident, title }: PowerCutPanelHeaderProps) => {
  const { setMapState } = usePowerCutMap()
  const dictionary = useDictionaryItems()

  const isHighVoltage =
    incident?.ukpnIncident?.incidentType == IncidentType.HIGH_VOLTAGE ||
    incident?.ukpnIncident?.incidentType == IncidentType.HIGH_VOLTAGE_NETWORK

  return (
    <section className={styles.powerCutPanelHeader}>
      <div className={styles.inner}>
        {renderPanelIcon(incident?.incidentsCount, incident?.powerCutType)}

        <Heading level={2} className={styles.heading}>
          {title}
        </Heading>

        {!!incident?.incidentReference && (
          <div className={styles.referenceNr}>
            Reference: {incident?.incidentReference}
          </div>
        )}

        {incident?.powerCutType === PowerCutType.UNPLANNED_INCIDENT && (
          <div className={styles.ctas}>
            {isHighVoltage && (
              <Button
                appearance={ButtonAppearance.PRIMARY}
                className={styles.button}
                onClick={() =>
                  setMapState((prevState) => ({
                    ...prevState,
                    isTextUpdatesPanelOpen: true,
                  }))
                }
              >
                {transformString(dictionary.getTextUpdatesButton)}
              </Button>
            )}

            <Button
              appearance={ButtonAppearance.SECONDARY}
              className={styles.button}
              color={ButtonColors.DARK}
              type="button"
              onClick={() =>
                setMapState((prevState) => ({
                  ...prevState,
                  isTrackPanelOpen: true,
                }))
              }
            >
              Track my power cut
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PowerCutPanelHeader
