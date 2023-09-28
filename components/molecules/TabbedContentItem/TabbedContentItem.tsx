import { TabbedContentItemType } from '_types/CMS/nodes/components/UKPN'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import React, { useRef, useEffect, useState } from 'react'
import { Breakpoints } from '_types/local/breakpoints'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './TabbedContentItem.module.scss'
import CtaRender from '_hoc/CtaRender/CtaRender'
import RichText from '_atoms/RichText/RichText'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

export interface TabbedContentItemProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<string>>
  setActiveItem: React.Dispatch<React.SetStateAction<number | undefined>>
  tabbedContentItem: TabbedContentItemType
  activeItem?: number
  index: number
}
export interface TabbedCItemState {
  isDesktop: boolean
  currentHeight?: number
}

const TabbedContentItem = ({
  tabbedContentItem,
  setIsModalOpen,
  setActiveItem,
  activeItem,
  index,
}: TabbedContentItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [itemState, setItemState] = useState<TabbedCItemState>({
    isDesktop: false,
    currentHeight: contentRef.current?.scrollHeight,
  })

  const windowSize = debounce(() => {
    window.innerWidth < Breakpoints.LG
      ? setItemState((prevState) => ({
          ...prevState,
          isDesktop: false,
        }))
      : setItemState((prevState) => ({
          ...prevState,
          isDesktop: true,
        }))
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', windowSize, { passive: true })
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  const openTabbedContentItem = (index: number) => {
    if (!itemState.isDesktop) {
      if (index === activeItem) {
        setActiveItem(undefined)
      } else setActiveItem(index)
    } else {
      setActiveItem(index)
    }
  }

  return (
    <div
      className={styles.tabbedContentItem}
      data-is-item-opened={activeItem === index}
    >
      <Button
        onClick={() => openTabbedContentItem(index)}
        data-is-item-opened={activeItem === index}
        appearance={ButtonAppearance.BLANK}
        className={styles.itemButton}
        type="button"
        key={index}
      >
        <div className={styles.iconTitle}>
          {!!tabbedContentItem.titleIcon && (
            <div className={styles.titleIconWrapper}>
              <Icon name={tabbedContentItem.titleIcon} />
            </div>
          )}
          {!!tabbedContentItem.title && (
            <p className={styles.itemTitle}>{tabbedContentItem.title}</p>
          )}
        </div>
        <div className={styles.desktopItemIcon}>
          <Icon name={IconNames.CIRCLED_LEFT_ARROW} />
        </div>
        <span className={styles.expandIconWrapper}>
          {activeItem !== index ? (
            <Icon name={IconNames.ICON_EXPAND} />
          ) : (
            <Icon name={IconNames.ICON_COLLAPSE} />
          )}
        </span>
      </Button>
      <div
        className={styles.contentWrapper}
        ref={contentRef}
        style={{
          height:
            activeItem === index && itemState.isDesktop
              ? '100%'
              : activeItem === index
              ? itemState.currentHeight
              : 0,
        }}
      >
        <div
          className={styles.imageWrapper}
          data-hide-mobile-bg={
            !itemState.isDesktop && !tabbedContentItem?.rightMobileImage
          }
          data-hide-tablet-bg={
            !itemState.isDesktop && !tabbedContentItem?.rightTabletImage
          }
        >
          {!!tabbedContentItem?.rightMobileImage?.url && (
            <div className={styles.mobileImage}>
              <Image
                title={tabbedContentItem.rightMobileImage.name}
                alt={tabbedContentItem.rightMobileImage.name}
                src={tabbedContentItem.rightMobileImage.url}
                objectPosition="top center"
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {!!tabbedContentItem?.rightTabletImage?.url && (
            <div className={styles.tabletImage}>
              <Image
                title={tabbedContentItem.rightTabletImage.name}
                alt={tabbedContentItem.rightTabletImage.name}
                src={tabbedContentItem.rightTabletImage.url}
                objectPosition="top center"
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {!!tabbedContentItem?.rightDesktopImage?.url && (
            <div className={styles.desktopImage}>
              <Image
                title={tabbedContentItem.rightDesktopImage.name}
                alt={tabbedContentItem.rightDesktopImage.name}
                src={tabbedContentItem.rightDesktopImage.url}
                objectPosition="top center"
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
        </div>
        <div className={styles.textWrapper}>
          {!!tabbedContentItem?.rightTitle && (
            <RichText
              className={styles.rightTitle}
              text={tabbedContentItem.rightTitle}
            />
          )}
          {!!tabbedContentItem?.rightText && (
            <RichText
              text={tabbedContentItem.rightText}
              className={styles.rightText}
            />
          )}
          {!!tabbedContentItem.videoID && (
            <Button
              tabIndex={activeItem === index ? 0 : 1}
              appearance={ButtonAppearance.VIDEO}
              className={styles.videoButton}
              type="button"
              color={
                !itemState.isDesktop ? ButtonColors.DARK : ButtonColors.WHITE
              }
              onClick={() => {
                document.body.classList.add('modal-open')
                setIsModalOpen(
                  `http://youtube.com/watch?v=${tabbedContentItem.videoID}`
                )
              }}
            >
              {tabbedContentItem.videoText}
            </Button>
          )}
          {!!tabbedContentItem?.buttons?.length && !tabbedContentItem.videoID && (
            <div className={styles.buttons}>
              {tabbedContentItem.buttons.map((button, index) => (
                <CtaRender
                  key={index}
                  cta={button}
                  color={
                    !itemState.isDesktop
                      ? ButtonColors.DARK
                      : ButtonColors.LIGHT
                  }
                  className={styles.cta}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TabbedContentItem
