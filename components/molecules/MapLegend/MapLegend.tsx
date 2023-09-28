import React, { useState, useRef, useEffect, MouseEventHandler } from 'react'
import { useDictionaryItems } from '_context/dictionary-items'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { usePowerCut } from '_context/power-cut'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import styles from './MapLegend.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

const MapLegend = ({ isPanelOpened }: { isPanelOpened: boolean }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isKeyOpen, setIsKeyOpen] = useState(true)
  const infoRef = useRef<HTMLDivElement>(null)
  const keyRef = useRef<HTMLDivElement>(null)
  const infoCurrentHeight = infoRef.current?.scrollHeight
  const keyCurrentHeight = keyRef.current?.scrollHeight
  const dictionary = useDictionaryItems()
  const { mapState, actions } = usePowerCutMap()
  const { powerCutState } = usePowerCut()

  const keyItems = [
    { iconURL: '/images/map/unplanned.svg', text: 'Power cut' },
    { iconURL: '/images/map/planned.svg', text: 'Planned maintenance' },
    { iconURL: '/images/map/restored.svg', text: 'Power back on' },
    { iconURL: '/images/map/multiple.svg', text: 'Multiple Activities' },
  ]

  const onInfoClickHandler = () => {
    setIsInfoOpen(!isInfoOpen)
    setIsKeyOpen(false)
  }

  const onKeyClickHandler = () => {
    setIsKeyOpen(!isKeyOpen)
    setIsInfoOpen(false)
  }

  const onExploreClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    actions.activateExploreMode(e)
    setIsInfoOpen(false)
    setIsKeyOpen(true)
  }

  const shouldHideLedgend = () =>
    isPanelOpened &&
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) <= 767

  useEffect(() => {
    if (mapState.userMode) {
      setIsInfoOpen(true)
    } else {
      setIsInfoOpen(false)
    }
  }, [mapState.userMode])

  return (
    <div className={styles.mapLegend}>
      <button
        className={styles.cta}
        onClick={() => onInfoClickHandler()}
        data-is-open={shouldHideLedgend() ? false : isInfoOpen}
        aria-expanded={shouldHideLedgend() ? false : isInfoOpen}
        aria-controls="map-info_body"
      >
        Info
      </button>
      {!mapState.userMode && (
        <button
          className={styles.cta}
          onClick={() => onKeyClickHandler()}
          data-is-open={shouldHideLedgend() ? false : isKeyOpen}
          aria-expanded={shouldHideLedgend() ? false : isKeyOpen}
          aria-controls="map-key_body"
        >
          Key
        </button>
      )}
      <div
        className={styles.content}
        data-is-open={shouldHideLedgend() ? false : isInfoOpen}
        data-is-menu-open={powerCutState.isMenuOpen}
        aria-hidden={shouldHideLedgend() ? true : !isInfoOpen}
        id="map-info_body"
        ref={infoRef}
        style={{
          height: isInfoOpen && !shouldHideLedgend() ? infoCurrentHeight : 0,
        }}
      >
        {mapState.userMode ? (
          <>
            <RichText
              text={dictionary?.exploreMapMessage}
              className={styles.message}
            />
            <Button
              className={styles.exploreButton}
              appearance={ButtonAppearance.BLANK}
              type="button"
              onClick={onExploreClickHandler}
            >
              Explore map
              <Icon name={IconNames.CTA_ARROW_SHORT} />
            </Button>
          </>
        ) : (
          <RichText
            text={dictionary?.mapInfoMessage}
            className={styles.message}
          />
        )}
      </div>
      {!mapState.userMode && (
        <div
          className={styles.content}
          data-is-open={shouldHideLedgend() ? false : isKeyOpen}
          data-is-menu-open={powerCutState.isMenuOpen}
          aria-hidden={shouldHideLedgend() ? true : !isKeyOpen}
          ref={keyRef}
          id="map-key_body"
          style={{
            height: isKeyOpen && !shouldHideLedgend() ? keyCurrentHeight : 0,
          }}
        >
          <div className={styles.inner}>
            {keyItems.map((item, index) => (
              <div className={styles.keyContentItem} key={index}>
                <span className={styles.iconWrapper}>
                  <Image
                    title={item.text}
                    src={item.iconURL}
                    alt="icon"
                    width={20}
                    height={20}
                    layout="responsive"
                    objectFit="fill"
                  />
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MapLegend
