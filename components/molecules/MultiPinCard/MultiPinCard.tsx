import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import Button from '_atoms/Button&Link/Button/Button'
import Heading from '_atoms/Heading/Heading'
import Icon from '_atoms/Icon/Icon'
import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'
import { IncidentState } from '_containers/IncidentPage/IncidentPage'
import PopUp from '_hoc/PopUp/PopUp'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import {
  IncidentContentPlanned,
  IncidentContentRestored,
  IncidentContentUnplanned,
  PowerCutType,
} from '_types/local/incidents'
import { Step } from '_types/local/step'
import { formattedUpdateTime } from '_utils/formatted-update-time'
import styles from './MultiPinCard.module.scss'

interface SortedStep extends Step {
  date: string
}

const MultiPinCard = ({
  incident,
  isWide,
  setIncidentState,
}: {
  incident:
    | IncidentContentUnplanned
    | IncidentContentRestored
    | IncidentContentPlanned
  isWide?: boolean
  setIncidentState: Dispatch<SetStateAction<IncidentState>>
}) => {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false)
  const popUpRef = useRef(null)
  const router = useRouter()

  const getIncidentTypeTheme = () => {
    switch (incident.powerCutType) {
      case PowerCutType.PLANNED_INCIDENT:
        return PulsingAnimationTheme.PURPLE
      case PowerCutType.RESTORED_INCIDENT:
        return PulsingAnimationTheme.GREEN
      case PowerCutType.UNPLANNED_INCIDENT:
        return PulsingAnimationTheme.ORANGE

      default:
        return PulsingAnimationTheme.ORANGE
    }
  }

  // Get the last updated time from the steps
  const sortedSteps = incident.steps
    ? ([...incident.steps]
        .filter((step) => !!step.date)
        .sort((a, b) => {
          if (!a.date || !b.date) return -1

          return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
        }) as SortedStep[])
    : []

  const latestStep = sortedSteps[0]
  const pillTheme = getIncidentTypeTheme()
  const isSmall = (incident?.ukpnIncident?.postCodesAffected?.length || 0) <= 12

  const modalAnim = {
    out: {
      x: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: !isSmall ? 0.25 : 0,
      },
    },
  }

  const smallModal = {
    out: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: 0.25,
      },
    },
  }

  return (
    <div className={styles.wrapper} data-is-wide={isWide}>
      <div className={styles.header}>
        <PulsingAnimation text={incident.powerCutType} theme={pillTheme} />
        {!!latestStep && (
          <p className={styles.updatedText}>
            Updated: {formattedUpdateTime(latestStep.date)}
          </p>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>Power cut</h3>
        <p className={styles.bodyCopy}>
          Reference: {incident.incidentReference} - Reported{' '}
          {formattedUpdateTime(incident.ukpnIncident?.receivedDate)}
        </p>
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelSection}>
            <div>
              <div className={styles.infoPanelHeading}>
                <Icon name={IconNames.PROPERTY} baseColour />
                <p className={styles.infoPanelHeadingText}>
                  Roads affected near you
                </p>
              </div>
            </div>
            <div>
              <ul className={styles.roadsList}>
                <li>Road 1</li>
                <li>Road 2</li>
                <li>Road 3</li>
              </ul>
            </div>
          </div>

          <div className={styles.infoPanelSection}>
            <div>
              <div className={styles.infoPanelHeading}>
                <Icon name={IconNames.FORTY_PX_PERSON} baseColour />
                <p className={styles.infoPanelHeadingText}>
                  <strong>{incident.ukpnIncident?.noCustomerAffected}</strong>{' '}
                  Customers affected
                </p>
              </div>
            </div>
          </div>

          <div className={styles.infoPanelSection} ref={popUpRef}>
            <div>
              <div
                className={styles.infoPanelHeading}
                data-is-clickable="true"
                onClick={() => setPopUpIsOpen(!popUpIsOpen)}
              >
                <Icon name={IconNames.FORTY_PX_LOCATION} baseColour />
                <p className={styles.infoPanelHeadingText}>
                  <strong>
                    {incident.ukpnIncident?.postCodesAffected.length}
                  </strong>{' '}
                  Postcode areas affected
                </p>
                <div className={styles.postcodeArrowDownIcon}>
                  <Icon name={IconNames.CTA_ARROW_DOWN} flip={popUpIsOpen} />
                </div>
                <PopUp
                  animation={!isSmall ? modalAnim : smallModal}
                  classModal={styles.popUp}
                  data-is-small={isSmall}
                  shouldShow={popUpIsOpen}
                  isSmall={isSmall}
                  initial="out"
                  animate="in"
                  exit="out"
                  focusTrap
                  elementRef={popUpRef}
                >
                  <Button
                    appearance={ButtonAppearance.BLANK}
                    onClick={() => setPopUpIsOpen(!popUpIsOpen)}
                    className={styles.closeButton}
                  >
                    <Icon name={IconNames.ICO_CLOSE} />
                  </Button>
                  <Icon
                    className={styles.overlayIcon}
                    name={IconNames.ICON_LOCATION}
                    baseColour
                  />
                  <Heading level={5} className={styles.popUpTitle}>
                    {`${incident.ukpnIncident?.postCodesAffected?.length} affected postcodes`}
                  </Heading>
                  <div className={styles.affectedPostcodes}>
                    {incident.ukpnIncident?.postCodesAffected?.map(
                      (affectedPostcode, i) => (
                        <p className={styles.postcode} key={i}>
                          {affectedPostcode}
                        </p>
                      )
                    )}
                  </div>
                </PopUp>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          onClick={() => {
            router.push(
              `/power-cut/incident?incidentid=${incident.incidentReference}`
            )
          }}
          appearance={ButtonAppearance.PRIMARY}
        >
          View incident
        </Button>
      </div>
    </div>
  )
}

export default MultiPinCard
