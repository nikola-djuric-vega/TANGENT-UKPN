import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import { IncidentListItem, PowerCutType } from '_types/local/incidents'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './PowerCutListItem.module.scss'
import { useState, useEffect, useRef } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'

const PowerCutListItem = ({
  customersAffected,
  affectedPostcodes,
  extraProperty,
  reference,
  moreInfo,
  itemKey,
  type,
  icon,
}: IncidentListItem & { itemKey: number }) => {
  const accordionItemRef = useRef<HTMLDivElement>(null)
  const currentHeight = accordionItemRef.current?.scrollHeight
  const [isMobile, setMobile] = useState<boolean>(false)
  const affectedRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const initialHeight = () => {
    if (affectedRef.current) {
      return 100 + affectedRef.current?.scrollHeight
    }
  }

  const handleResize = debounce(() => {
    setMobile(window.innerWidth < 980)
  }, 150)

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true })
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const itemStrapline = (type: PowerCutType) => {
    switch (type) {
      case PowerCutType.UNPLANNED_INCIDENT:
        return 'Power cut'
      case PowerCutType.PLANNED_INCIDENT:
        return 'Planned work'
      case PowerCutType.RESTORED_INCIDENT:
        return 'Restored'
      case PowerCutType.REPORTED_INCIDENT:
        return 'Power cut'
      default:
        return ''
    }
  }

  return (
    <div
      className={styles.powerCutListItem}
      key={itemKey}
      data-is-active={isOpen}
    >
      <ConditionalWrapper
        condition={isMobile}
        wrapper={(children) => (
          <div
            className={styles.mobileAccordion}
            role="listItem"
            ref={accordionItemRef}
            data-show-answer={isOpen}
            style={{
              height: isOpen ? currentHeight : initialHeight(),
              transition: 'all .25s',
            }}
          >
            {children}
          </div>
        )}
        elseWrapper={(children) => (
          <Link
            className={styles.mobileAccordion}
            url={'power-cut/incident?incidentid=' + reference}
            role="listItem"
            appearance={LinkAppearance.BLANK}
            data-show-answer={isOpen}
          >
            {children}
          </Link>
        )}
      >
        <>
          <div className={styles.powerCutTypeWrapper}>
            <div className={styles.powerCutType}>
              <div className={styles.fieldType} data-type={type}>
                <Icon name={icon} />
                <p className={styles.strapLine}>{itemStrapline(type)}</p>
              </div>
              <Button
                appearance={ButtonAppearance.BLANK}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.toggleButton}
                data-is-active={isOpen}
                type="button"
              >
                {isOpen ? (
                  <Icon name={IconNames.CTA_COLLAPSE} />
                ) : (
                  <Icon name={IconNames.EXPAND} />
                )}
              </Button>
            </div>
            <p className={styles.reference}>Reference: {reference}</p>
          </div>
          <div className={styles.powerCutPostcodes} ref={affectedRef}>
            <p className={styles.fieldLabel}>
              <Icon name={IconNames.ICON_LOCATION} />
              Affected postcodes
            </p>
            {affectedPostcodes.join(', ').toUpperCase()}
          </div>
          <div className={styles.moreInfoLabel}>
            <p className={styles.moreInfoLabelInner}>
              <Icon name={IconNames.INFORMATION} />
              More information
            </p>
          </div>
          <div className={styles.headlineWrapper}>
            <p className={styles.fieldLabelHeadline}>
              {moreInfo.headline.substring(
                0,
                moreInfo.headline.indexOf(':') + 1
              )}
              <span className={styles.fielLabelHeadlineTime}>
                {moreInfo.headline.substring(
                  moreInfo.headline.indexOf(':') + 1
                )}
              </span>
            </p>
            {!!moreInfo.info && (
              <p className={styles.fieldLabelInfo}>{moreInfo.info}</p>
            )}
            <p className={styles.fieldLabelExtraInfo}>
              {extraProperty?.friendlyDescription}
            </p>
          </div>
          <div className={styles.fieldLabelExtraInfo}>
            <p className={styles.timeReported}>
              <Icon name={IconNames.TIME} />
              {type === PowerCutType.PLANNED_INCIDENT
                ? 'Power switched off at:'
                : 'Time reported:'}
            </p>
            <p className={styles.day}>
              <span className={styles.dayPart}>
                {moreInfo.receivedDate.substring(
                  0,
                  moreInfo.receivedDate.length - 5
                )}
              </span>
              <span className={styles.time}>
                {moreInfo.receivedDate.substring(
                  moreInfo.receivedDate.length - 5
                )}
              </span>
            </p>
          </div>
          <div className={styles.fieldLabelExtraInfo}>
            <div className={styles.custAffecWrapper}>
              <p className={styles.customersAffected}>
                <Icon name={IconNames.ICON_SPECIALIST_TEAM} />
                Customers affected:
              </p>
              <p className={styles.customersAffectedNumber}>
                {customersAffected}
              </p>
            </div>
          </div>
          {isMobile && (
            <Link
              appearance={LinkAppearance.SECONDARY}
              color={ButtonColors.DARK}
              url={'power-cut/incident?incidentid=' + reference}
              className={styles.viewOnMap}
            >
              View Incident
            </Link>
          )}
        </>
      </ConditionalWrapper>
    </div>
  )
}

export default PowerCutListItem
