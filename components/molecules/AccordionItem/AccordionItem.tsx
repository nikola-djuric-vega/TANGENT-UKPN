import { ButtonAppearance, ButtonColors, TextSizes } from '_types/CMS'
import { AccordionItemType } from '_types/CMS/nodes/components/UKPN'
import React, { useEffect, useRef, useState } from 'react'
import { ModalState, toggleModal } from '_utils/index'
import Button from '_atoms/Button&Link/Button/Button'
import CtaRender from '_hoc/CtaRender/CtaRender'
import styles from './AccordionItem.module.scss'
import RichText from '_atoms/RichText/RichText'
import Figure from '_atoms/Figure/Figure'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'

export interface AccordionItemProps {
  index: number
  isItemOpen: boolean
  accordionItem: AccordionItemType
  setIsModalOpen: React.Dispatch<React.SetStateAction<string>>
  openAccordionItem: (index: number) => void
}

const AccordionItem = ({
  index,
  isItemOpen,
  accordionItem,
  setIsModalOpen,
  openAccordionItem,
}: AccordionItemProps) => {
  const mobileRef = useRef<HTMLDivElement>(null)
  const desktopRef = useRef<HTMLDivElement>(null)

  const [currentHeight, setCurrentHeight] = useState(
    mobileRef.current?.scrollHeight
  )

  const windowSize = debounce(() => {
    if (window.innerWidth < 350) {
      setCurrentHeight(mobileRef.current?.scrollHeight)
    } else {
      if (!!desktopRef?.current) {
        setCurrentHeight(desktopRef.current.scrollHeight)
      }
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', windowSize, { passive: true })
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [isItemOpen])

  return (
    <div className={styles.accordionItem} data-is-item-open={isItemOpen}>
      <dt className={styles.buttonWrapper} role="heading" aria-level={3}>
        <Button
          className={styles.itemButton}
          appearance={ButtonAppearance.BLANK}
          type="button"
          onClick={() => openAccordionItem(index)}
          data-is-item-open={isItemOpen}
          tabIndex={0}
          aria-expanded={isItemOpen}
        >
          <div className={styles.titleWrapper} data-is-item-open={isItemOpen}>
            {!!accordionItem?.accordionItemTitle && (
              <p className={styles.itemTitle}>
                {accordionItem.accordionItemTitle}
              </p>
            )}
          </div>
          <div className={styles.iconWrapperExpand}>
            {isItemOpen ? (
              <Icon name={IconNames.CTA_COLLAPSE} />
            ) : (
              <Icon name={IconNames.CTA_EXPAND} />
            )}
          </div>
        </Button>
      </dt>
      <dd
        className={styles.answer}
        ref={mobileRef}
        data-show-answer={isItemOpen}
        style={{
          height: isItemOpen ? currentHeight : 0,
        }}
        tabIndex={-1}
      >
        <div ref={desktopRef} tabIndex={-1}>
          {!!accordionItem?.accordionImage &&
            !!accordionItem?.accordionImage?.name &&
            !!accordionItem?.accordionImage?.url && (
              <div className={styles.imageDesktopWrapper}>
                <Figure
                  src={accordionItem.accordionImage.url}
                  width={parseInt(accordionItem.accordionImage.umbracoWidth)}
                  height={parseInt(accordionItem.accordionImage.umbracoHeight)}
                  alt={accordionItem.accordionImage.name}
                  link={''}
                  caption={accordionItem.accordionImageOverlay}
                  hasIcon={accordionItem.accordionImageOverlayIcon}
                  objectFit="cover"
                  tabIndex={isItemOpen ? 0 : -1}
                />
              </div>
            )}
          {!!accordionItem?.accordionImage &&
            !!accordionItem?.accordionImage?.name &&
            !!accordionItem?.accordionImage?.url && (
              <div className={styles.imageMobileWrapper}>
                <Figure
                  src={accordionItem.accordionImage.url}
                  width={parseInt(accordionItem.accordionImage.umbracoWidth)}
                  height={parseInt(accordionItem.accordionImage.umbracoHeight)}
                  alt={accordionItem.accordionImage.name}
                  link={''}
                  caption={accordionItem.accordionImageOverlay}
                  hasIcon={accordionItem.accordionImageOverlayIcon}
                  objectFit="cover"
                />
              </div>
            )}
          {!!accordionItem?.accordionDescription && (
            <div className={styles.richTextWrapper}>
              <RichText
                className={styles.accordionDescription}
                text={accordionItem.accordionDescription}
                size={TextSizes.TEXT_BODY_3}
                tabIndex={isItemOpen ? 0 : -1}
              />
            </div>
          )}

          {!!accordionItem?.accordionVideoID &&
            !!accordionItem?.accordionVideoPlayText && (
              <Button
                className={styles.videoButton}
                appearance={ButtonAppearance.VIDEO}
                color={ButtonColors.DARK}
                type="button"
                onClick={() => {
                  toggleModal(ModalState.OPEN)
                  setIsModalOpen(
                    `https://youtube.com/watch?v=${accordionItem.accordionVideoID}`
                  )
                }}
                tabIndex={isItemOpen ? 0 : -1}
              >
                {accordionItem.accordionVideoPlayText}
              </Button>
            )}
          {!!accordionItem?.accordionLinkItems && (
            <>
              {accordionItem.accordionLinkItems.map((item, index) => (
                <div key={index} className={styles.ctaWrapper}>
                  {!!item?.linkSetTitle && (
                    <div
                      className={styles.linkSetTitle}
                      tabIndex={isItemOpen ? 0 : -1}
                    >
                      {item.linkSetTitle}
                    </div>
                  )}
                  <div>
                    {item?.linkSetLinks?.map((item, index) => (
                      <div key={index} className={styles.ctaItem}>
                        <CtaRender
                          cta={item}
                          tabIndex={isItemOpen ? 0 : -1}
                          color={item.cTAType}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </dd>
    </div>
  )
}

export default AccordionItem
