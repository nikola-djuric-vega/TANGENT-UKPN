import { ButtonAppearance, ButtonColors, ButtonLayout } from '_types/CMS'
import { StormSummaryType } from '_types/CMS/nodes/components/UKPN'
import { Breakpoints } from '_types/local/breakpoints'
import Button from '_atoms/Button&Link/Button/Button'
import { useState, useEffect, useRef } from 'react'
import styles from './StormSummary.module.scss'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'

export interface SummaryState {
  currentHeight?: number
  icon: IconNames
  label: string
  show: boolean
}

const StormSummary = ({
  summaryData,
  description,
  title,
}: StormSummaryType) => {
  const summaryRef = useRef<HTMLDivElement>(null)
  const [{ currentHeight, label, show, icon }, setSummaryState] =
    useState<SummaryState>({
      icon: IconNames.DOWN_CHEVRON,
      label: 'Read more',
      show: false,
    })
  const windowSize = debounce(() => {
    if (window.innerWidth < Breakpoints.MD) {
      setSummaryState((prev) => ({
        ...prev,
        currentHeight: summaryRef.current?.scrollHeight,
      }))
    } else {
      setSummaryState((prev) => ({
        ...prev,
        show: true,
      }))
    }
  }, 200)

  const toggleShow = () => {
    setSummaryState((prevState) => ({
      icon: prevState.show ? IconNames.DOWN_CHEVRON : IconNames.ICO_BACK_TO_TOP,
      label: `Read ${!prevState.show ? 'less' : 'more'}`,
      show: !prevState.show,
    }))
  }

  useEffect(() => {
    window.addEventListener('resize', windowSize, { passive: true })
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <div className={styles.stormSummary}>
      {title && (
        <Heading level={6} className={styles.stormSummaryTitle}>
          {title}
        </Heading>
      )}
      {description && (
        <RichText
          className={styles.stormSummaryDescription}
          text={description}
          role="textbox"
        />
      )}
      {summaryData?.length && (
        <dl
          className={styles.summaryWrapper}
          role="presentation"
          style={{
            height: show ? currentHeight : 0,
          }}
        >
          <dt className={styles.tablesSummary} ref={summaryRef}>
            {summaryData.map(({ region, countyData }, i) => (
              <div className={styles.summary} key={i}>
                {region && <p className={styles.tableRegion}>{region.name}</p>}
                {countyData?.length && (
                  <table className={styles.stormTable}>
                    {countyData.map(({ county, customersAffected }, i) => (
                      <tr className={styles.county} key={i}>
                        <td className={styles.customersAffected}>
                          {customersAffected}
                        </td>
                        <td className={styles.countyName}>{county?.name}</td>
                      </tr>
                    ))}
                  </table>
                )}
              </div>
            ))}
          </dt>
        </dl>
      )}
      <Button
        appearance={ButtonAppearance.SECONDARY}
        className={styles.toggleButton}
        layout={ButtonLayout.RTL}
        color={ButtonColors.DARK}
        onClick={toggleShow}
        aria-label={label}
        icon={icon}
      >
        {label}
      </Button>
    </div>
  )
}

export default StormSummary
