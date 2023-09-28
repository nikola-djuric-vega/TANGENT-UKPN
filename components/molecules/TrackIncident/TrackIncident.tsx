import { IncidentReason as IncidentReasonType } from '_types/local/incidents'
import { formattedUpdateTime } from '_utils/formatted-update-time'
import IncidentReason from '_atoms/IncidentReason/IncidentReason'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import { Breakpoints } from '_types/local/breakpoints'
import Button from '_atoms/Button&Link/Button/Button'
import { Step, StepName } from '_types/local/step'
import styles from './TrackIncident.module.scss'
import RichText from '_atoms/RichText/RichText'
import { useEffect, useState } from 'react'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'
import PopUp from '_hoc/PopUp/PopUp'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'
import { sortIncidentSteps } from '_utils/sort-incident-steps'

export interface TrackIncidentProps {
  incidentReason?: IncidentReasonType
  steps?: Step[] | null
}
export interface TrackIncidentState {
  isMobile: boolean
  sideBar: boolean
}

const TrackIncident = ({ incidentReason, steps }: TrackIncidentProps) => {
  const [{ sideBar, isMobile }, setSidebar] = useState<TrackIncidentState>({
    isMobile: window.innerWidth < Breakpoints.MD,
    sideBar: false,
  })

  const defineStage = (name: StepName) => {
    switch (name) {
      case StepName.POWER_CUT_REPORTED:
        return { theme: PulsingAnimationTheme.RED, stage: 1 }
      case StepName.ENGINEERS_ON_THEIR_WAY:
        return { theme: PulsingAnimationTheme.BLUE, stage: 2 }
      case StepName.ENGINEERS_INVESTIGATING_AND_FIXING:
        return { theme: PulsingAnimationTheme.PURPLE, stage: 3 }
      default:
        return { theme: PulsingAnimationTheme.GREEN, stage: 4 }
    }
  }

  useEffect(() => {
    const resize = debounce(() => {
      setSidebar((preState) => ({
        ...preState,
        isMobile: window.innerWidth < Breakpoints.MD,
      }))
    }, 500)
    window.addEventListener('resize', resize)
    return window.removeEventListener('resize', resize)
  }, [])

  const handleSideBar = () => {
    setSidebar((preState) => ({ ...preState, sideBar: !preState.sideBar }))
  }

  const sideBarAnim = (isMobile: boolean) => ({
    out: {
      ...(!isMobile ? { x: '20%' } : { y: '20%' }),
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      ...(!isMobile ? { x: '0%' } : { y: '0%' }),
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: 0.25,
      },
    },
  })

  const { lastUpdated, sortedSteps } = sortIncidentSteps(steps)

  return (
    <>
      <Button
        appearance={ButtonAppearance.BLANK}
        className={styles.trackIncident}
        data-testid='Track-power-cut'
        onClick={handleSideBar}
      >
        {!!lastUpdated && (
          <>
            {lastUpdated.name && (
              <PulsingAnimation
                theme={defineStage(lastUpdated.name).theme}
                text={lastUpdated.name}
              />
            )}
            {lastUpdated.date && (
              <p className={styles.lastUpdated}>
                Last updated {formattedUpdateTime(lastUpdated.date)}
              </p>
            )}
            {lastUpdated.name && (
              <div className={styles.incidentTracker}>
                <div
                  data-stage={defineStage(lastUpdated.name).stage}
                  className={styles.timeline}
                >
                  <div className={styles.van}>
                    <Image
                      alt={lastUpdated.name as StepName}
                      src="/images/Van.png"
                      height={32}
                      width={56}
                    />
                  </div>
                </div>
                <p className={styles.trackPoweCutButton}>Track power cut</p>
              </div>
            )}
          </>
        )}
        <IncidentReason {...incidentReason} />
      </Button>
      <PopUp
        animation={sideBarAnim(isMobile)}
        classModal={styles.sideBar}
        shouldShow={sideBar}
        initial="out"
        animate="in"
        exit="out"
      >
        <>
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.closeButton}
            onClick={handleSideBar}
            aria-label="close"
          >
            <Icon name={IconNames.CTA_CLOSE_ONE} />
          </Button>
          <div className={styles.updates} role="feed">
            {sortedSteps?.map((stp, i) => (
              <article
                aria-setsize={sortedSteps.length}
                className={styles.singleUpdate}
                aria-posinset={i}
                key={stp.name}
              >
                <span className={styles.timelinePin}>
                  <PulsingAnimation
                    theme={defineStage(stp.name as StepName).theme}
                    text={stp.name as StepName}
                    isStatic
                  />
                </span>
                <div className={styles.cardWrapper}>
                  <PulsingAnimation
                    theme={defineStage(stp.name as StepName).theme}
                    text={stp.name as StepName}
                    showAnim={false}
                  />
                  {stp.date && (
                    <p className={styles.timeStamp}>
                      <Icon name={IconNames.TIME} />
                      {formattedUpdateTime(stp.date as string)}
                    </p>
                  )}
                  {stp.message && (
                    <>
                      <div className={styles.author}>
                        <p className={styles.authorName}>Ben H</p>
                        <p className={styles.authorDept}>Customer Care</p>
                      </div>
                      <RichText
                        className={styles.updateMessage}
                        text={stp.message}
                      />
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      </PopUp>
    </>
  )
}

export default TrackIncident
