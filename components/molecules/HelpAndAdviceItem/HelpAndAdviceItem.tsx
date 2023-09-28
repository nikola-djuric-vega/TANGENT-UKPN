import { ButtonAppearance, TextSizes } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './HelpAndAdviceItem.module.scss'
import RichText from '_atoms/RichText/RichText'
import Figure from '_atoms/Figure/Figure'
import React, { useRef } from 'react'
import Icon from '_atoms/Icon/Icon'

import {
  WrappedHelpAndAdviceItemType,
  HelpAndAdviceItemType,
} from '_types/CMS/nodes/components/UKPN'
import { IconNames } from '_types/local'

export interface HelpAndAdviceItemProps {
  helpAndAdviceItem: HelpAndAdviceItemType | WrappedHelpAndAdviceItemType
  setIsModalOpen: React.Dispatch<React.SetStateAction<string>>
  openHelpAndAdviceItem: (index: number) => void
  isItemOpen: boolean
  isPanel?: boolean
  index: number
}

const HelpAndAdviceItem = ({
  openHelpAndAdviceItem,
  helpAndAdviceItem,
  isPanel = false,
  setIsModalOpen,
  isItemOpen,
  index,
}: HelpAndAdviceItemProps) => {
  // helpAndAdviceItem can sometimes be wrapped in "item" depending on how it's selected in the CMS
  const item =
    'item' in helpAndAdviceItem
      ? helpAndAdviceItem.item
      : (helpAndAdviceItem as HelpAndAdviceItemType)
  const helpAndAdviceItemRef = useRef<HTMLDivElement>(null)
  const currentHeight = helpAndAdviceItemRef.current?.scrollHeight
  let helpAndAdviceImageUrl = ''

  // When in CMS fallback mode, we don't get the width and height values
  // so we need to manually add them for the focus point to work
  if (item && item.helpAndAdviceImage?.umbracoFile?.url.includes('{width}')) {
    helpAndAdviceImageUrl = item.helpAndAdviceImage.umbracoFile.url
      .replace('{width}', '1600')
      .replace('{height}', '900')
  } else {
    helpAndAdviceImageUrl = item?.helpAndAdviceImage?.umbracoFile?.url || ''
  }

  return (
    <div className={styles.helpAndAdviceItem}>
      <dt
        className={styles.buttonWrapper}
        data-is-panel={isPanel}
        aria-level={3}
        role="heading"
      >
        <Button
          onClick={() => openHelpAndAdviceItem(index)}
          appearance={ButtonAppearance.BLANK}
          data-is-item-open={isItemOpen}
          className={styles.itemButton}
          type="button"
          tabIndex={0}
        >
          <div className={styles.titleWrapper} data-is-item-open={isItemOpen}>
            {!!item?.helpAndAdviceTitleIcon && (
              <span className={styles.titleIcon} data-is-panel={isPanel}>
                <Icon name={item.helpAndAdviceTitleIcon} />
              </span>
            )}
            {!!item?.helpAndAdviceItemTitle && (
              <div className={styles.itemTitle} data-is-panel={isPanel}>
                {item.helpAndAdviceItemTitle}
              </div>
            )}
          </div>
          <span className={styles.iconWrapperExpand} data-icon={isItemOpen}>
            <Icon
              name={IconNames.CTA_EXPAND}
              {...(isPanel && { baseColour: true })}
            />
          </span>
          <span className={styles.iconWrapperCollapse} data-icon={isItemOpen}>
            <Icon
              name={IconNames.CTA_COLLAPSE}
              {...(isPanel && { baseColour: true })}
            />
          </span>
        </Button>
      </dt>
      <dd
        data-show-answer={isItemOpen}
        ref={helpAndAdviceItemRef}
        className={styles.content}
        role="region"
        style={{
          height: isItemOpen ? currentHeight : 0,
        }}
      >
        {!!item?.helpAndAdviceImage &&
          !!item?.helpAndAdviceImage?.name &&
          !!helpAndAdviceImageUrl && (
            <div className={styles.imageDesktopWrapper}>
              <Figure
                src={helpAndAdviceImageUrl}
                hasIcon={item.helpAndAdviceImageOverlayIcon}
                caption={item.helpAndAdviceImageOverlay}
                alt={item.helpAndAdviceImage.name}
                width={16}
                height={9}
                link={''}
              />
            </div>
          )}
        {!!item?.helpAndAdviceDescription && (
          <div className={styles.richTextWrapper} data-is-panel={isPanel}>
            <RichText
              text={item.helpAndAdviceDescription}
              tabIndex={isItemOpen ? 0 : -1}
              size={TextSizes.TEXT_BODY_3}
              aria-hidden={isItemOpen}
              className={styles.text}
            />
          </div>
        )}
        {!!item?.helpAndAdviceImage &&
          !!item?.helpAndAdviceImage?.name &&
          !!helpAndAdviceImageUrl && (
            <div className={styles.imageMobileWrapper}>
              <Figure
                src={helpAndAdviceImageUrl}
                hasIcon={item.helpAndAdviceImageOverlayIcon}
                caption={item.helpAndAdviceImageOverlay}
                alt={item.helpAndAdviceImage.name}
                width={16}
                height={9}
                link={''}
              />
            </div>
          )}
        {!!item?.helpAndAdviceVideo && !!item?.helpAndAdviceVideoPlayText && (
          <Button
            appearance={ButtonAppearance.VIDEO}
            className={styles.videoButton}
            tabIndex={isItemOpen ? 0 : -1}
            type="button"
            onClick={() => {
              document.body.classList.add('modal-open')
              setIsModalOpen(
                `https://youtube.com/watch?v=${item.helpAndAdviceVideo}`
              )
            }}
          >
            {item.helpAndAdviceVideoPlayText}
          </Button>
        )}
      </dd>
    </div>
  )
}

export default HelpAndAdviceItem
