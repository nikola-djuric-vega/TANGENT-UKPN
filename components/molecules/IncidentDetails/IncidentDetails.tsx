import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { Incident, PowerCutType } from '_types/local/incidents'
import { useDictionaryItems } from '_context/dictionary-items'
import { transformString } from '_utils/tranform-string'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './IncidentDetails.module.scss'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import PopUp from '_hoc/PopUp/PopUp'
import Icon from '_atoms/Icon/Icon'
import { useRef, useState } from 'react'
import { DateTime } from 'luxon'

export interface IncidentStats {
  label: string
  value?: any
  icon: IconNames
  hasPopUp?: boolean
}

const IncidentDetails = ({ ukpnIncident, powerCutType }: Incident) => {
  const postcodeAffectedCount = ukpnIncident?.postCodesAffected.length || 0
  const isPlanned = powerCutType === PowerCutType.PLANNED_INCIDENT
  const [popUp, setOpenPopUp] = useState<boolean>(false)
  const noCustomerAffected = ukpnIncident?.noCustomerAffected
  const isSmall = postcodeAffectedCount <= 12
  const dictionary = useDictionaryItems()
  const popUpRef = useRef<HTMLDivElement>(null)

  const plannedDateISO = ukpnIncident?.plannedDate
  const plannedDate =
    !!plannedDateISO &&
    DateTime.fromISO(plannedDateISO, {
      setZone: true,
    })

  const plannedTime =
    !!plannedDate && plannedDate.isValid
      ? plannedDate.toFormat('HH:mm')
      : transformString(dictionary.plannedWorkUnknownTime)
    
  const customerAffected = (noCustomerAffectd: string) => {
    if (noCustomerAffected && noCustomerAffected > 5000) {
      return transformString(dictionary.restoredWorkThousandsAffected)
    } else if (noCustomerAffected === 0) {
      return transformString(noCustomerAffectd)
    } else {
      return noCustomerAffected
    }
  }

  const stats: IncidentStats[] = [
    {
      label: !!isPlanned ? 'Power was switched off' : 'Customers Affected',
      value: !!isPlanned ? plannedTime : customerAffected(dictionary.unplannedWorkZeroAffected),
      icon: !!isPlanned ? IconNames.ICO_TIMER : IconNames.FORTY_PX_PERSON,
    },
    {
      label: 'Postcodes areas affected',
      value: postcodeAffectedCount,
      icon: IconNames.ICON_LOCATION,
      hasPopUp: true,
    },
    {
      label: !isPlanned ? 'Customer calls received' : 'Customers Affected',
      value: !isPlanned
        ? ukpnIncident?.noCallsReported
        : customerAffected(dictionary.restoredWorkZeroAffected),
      icon: !isPlanned ? IconNames.TEXT_UPDATES : IconNames.FORTY_PX_PERSON,
    },
  ]

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
    <div className={styles.incidentDetails}>
      {stats.map((sta, i) => (
        <div
          className={styles.incidentSingleStat}
          key={i}
          {...(sta.hasPopUp && { ref: popUpRef })}
        >
          <ConditionalWrapper
            condition={!!sta.hasPopUp}
            wrapper={(children) => (
              <Button
                className={styles.affectedPostcodesButton}
                appearance={ButtonAppearance.BLANK}
                onClick={() => setOpenPopUp(!popUp)}
              >
                {children}
              </Button>
            )}
          >
            <>
              <p className={styles.data}>
                <Icon className={styles.dataIcon} name={sta.icon} baseColour />
                {sta.value}
              </p>
              <p className={styles.dataLabel}>{sta.label}</p>
            </>
          </ConditionalWrapper>
          {!!sta.hasPopUp && (
            <PopUp
              animation={!isSmall ? modalAnim : smallModal}
              classModal={styles.popUp}
              data-is-small={isSmall}
              shouldShow={popUp}
              isSmall={isSmall}
              initial="out"
              animate="in"
              exit="out"
              focusTrap
              elementRef={popUpRef}
            >
              <Button
                appearance={ButtonAppearance.BLANK}
                onClick={() => setOpenPopUp(!popUp)}
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
                {`${ukpnIncident?.postCodesAffected?.length} affected postcodes`}
              </Heading>
              <div className={styles.affectedPostcodes}>
                {ukpnIncident?.postCodesAffected?.map((pst, i) => (
                  <p className={styles.postcode} key={i}>
                    {pst}
                  </p>
                ))}
              </div>
            </PopUp>
          )}
        </div>
      ))}
    </div>
  )
}

export default IncidentDetails
