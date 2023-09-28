import { ButtonAppearance, ButtonLayout, LinkAppearance } from '_types/CMS'
import { StormLandingBannerType } from '_types/CMS/nodes/components/UKPN'
import IsPowerOffCard from '_molecules/IsPowerOffCard/IsPowerOffCard'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { upperFirstLocation } from '_utils/upperFirstLocation'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import ContactCard from '_molecules/ContactCard/ContactCard'
import { Breakpoints } from '_types/local/breakpoints'
import styles from './StormLandingBanner.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import { useEffect, useRef, useState } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import { StormMode } from '_types/CMS/nodes'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce'
import Image from 'next/image'
import {
  formattedUpdateTime,
  isPowerCutLocationPage,
  transformString,
} from '_utils/index'
import GraphicLines, {
  LinesColor,
  LinesPosition,
} from '_atoms/GraphicLines/GraphicLines'
import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'
import { useDictionaryItems } from '_context/dictionary-items'

export interface BannerState {
  currentHeight?: number
  isDesktop: boolean
  isReadMore: boolean
}

const StormLandingBanner = ({
  backgroundImage,
  title,
  updatedTime,
  summary,
  powerOffTitle,
  powerOffSubtitle,
  links,
  contactCardLink,
  contactCard,
  disablePulse,
  disableUpdatedTime,
  pulseTitle,
}: StormLandingBannerType) => {
  const dictionary = useDictionaryItems()
  const { query } = useRouter()
  const isPowerCutLocation =
    query.slug &&
    query.slug[1] &&
    isPowerCutLocationPage({
      slug: query.slug,
    })

  const location =
    !!query.slug && !!isPowerCutLocation && upperFirstLocation(query.slug[1])

  const textRef = useRef<HTMLDivElement>(null)
  const globalData = useUkpnGlobalData()

  const [bannerState, setBannerState] = useState<BannerState>({
    isDesktop: false,
    isReadMore: false,
    currentHeight: textRef?.current?.scrollHeight,
  })

  const windowSize = debounce(() => {
    if (window.innerWidth < Breakpoints.LG) {
      globalData?.stormContainerData?.stormMode === StormMode.STORM &&
        setBannerState((prevState) => ({
          ...prevState,
          currenHeight: textRef.current?.scrollHeight,
          isDesktop: false,
        }))
    } else {
      setBannerState((prevState) => ({
        ...prevState,
        isDesktop: true,
      }))
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', windowSize, { passive: true })
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <ComponentLayout
      removeGridPadding={bannerState.isDesktop}
      data-is-storm={
        globalData?.stormContainerData?.stormMode === StormMode.STORM
      }
      innerClass={styles.stormLandingBanner}
      isHero={true}
    >
      <GraphicLines
        className={styles.topLine}
        position={LinesPosition.TOP}
        colour={LinesColor.WHITE}
        topLineLength={636}
        bottomLineLength={104}
      />
      <GraphicLines
        className={styles.bottomLine}
        position={LinesPosition.BOTTOM}
        colour={LinesColor.WHITE}
        topLineLength={104}
        bottomLineLength={636}
      />
      <div
        className={styles.content}
        data-is-storm={
          globalData?.stormContainerData?.stormMode === StormMode.STORM
        }
      >
        {!!backgroundImage && (
          <div className={styles.imageWrapper}>
            <Image
              src={backgroundImage.url}
              alt={backgroundImage.name}
              title={backgroundImage.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className={styles.textWrapper}>
          <div className={styles.liveIndicator}>
            {!disablePulse && (
              <PulsingAnimation
                theme={PulsingAnimationTheme.WHITE}
                text={pulseTitle}
              />
            )}
            {!disablePulse && !disableUpdatedTime && (
              <div className={styles.divider} />
            )}
            {!disableUpdatedTime && (
              <p className={styles.updatedTime}>
                Last updated {formattedUpdateTime(updatedTime)}
              </p>
            )}
          </div>
          {!!title && (
            <Heading level={4} className={styles.title} tabIndex={1}>
              {title}
            </Heading>
          )}
          {!!summary && (
            <>
              <div
                className={styles.richTextWrapper}
                data-show-all={bannerState.isReadMore}
                data-is-storm={
                  globalData?.stormContainerData?.stormMode === StormMode.STORM
                }
                style={{
                  height:
                    globalData?.stormContainerData?.stormMode ===
                      StormMode.STORM &&
                    !bannerState.isReadMore &&
                    !bannerState.isDesktop
                      ? 0
                      : bannerState.currentHeight,
                }}
              >
                <div ref={textRef}>
                  <RichText className={styles.text} text={summary} />
                </div>
              </div>
              <Button
                className={styles.readMoreBtn}
                appearance={ButtonAppearance.SECONDARY}
                type="button"
                onClick={() =>
                  setBannerState((prevState) => ({
                    ...prevState,
                    isReadMore: !bannerState.isReadMore,
                  }))
                }
                icon={IconNames.DOWN_CHEVRON}
                layout={ButtonLayout.RTL}
                data-show-all={bannerState.isReadMore}
                data-is-storm={
                  globalData?.stormContainerData?.stormMode === StormMode.STORM
                }
              >
                {bannerState.isReadMore ? 'Read less' : 'Read more'}
              </Button>
            </>
          )}
          {!!contactCardLink && (
            <Link
              className={styles.contactCardLink}
              appearance={LinkAppearance.PRIMARY}
              url={contactCardLink.url}
              target={contactCardLink.target}
              tabIndex={1}
            >
              {contactCardLink.name}
            </Link>
          )}
        </div>
        <div className={styles.cardWrapper}>
          {(!!powerOffTitle || !!powerOffSubtitle || !!links?.length) && (
            <IsPowerOffCard
              powerOffTitle={
                isPowerCutLocation && location
                  ? transformString(
                      dictionary.powerCutHeader.replace('[place]', location)
                    )
                  : powerOffTitle
              }
              powerOffSubtitle={powerOffSubtitle}
              links={links}
            />
          )}
          {(!!contactCard?.[0].author ||
            !!contactCard?.[0].cardTitle ||
            !!contactCard?.[0].cardSubtitle) && (
            <ContactCard
              author={contactCard?.[0].author}
              cardTitle={contactCard?.[0].cardTitle}
              cardSubtitle={contactCard?.[0].cardSubtitle}
            />
          )}
        </div>
      </div>
    </ComponentLayout>
  )
}

export default StormLandingBanner
