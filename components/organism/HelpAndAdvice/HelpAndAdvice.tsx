import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import HelpAndAdviceItem from '_molecules/HelpAndAdviceItem/HelpAndAdviceItem'
import { HelpAndAdviceType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { transformUrl } from '_utils/transform-url'
import React, { useEffect, useState } from 'react'
import styles from './HelpAndAdvice.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

export interface HelpAndAdviceProps extends HelpAndAdviceType {
  isPanel?: boolean
}

const HelpAndAdvice = ({
  helpAndAdviceTitle,
  helpAndAdviceItems,
  helpAndAdviceEnableAlwaysOpen,
  removeBottomMargin,
  isPanel = false,
  viewMore,
}: HelpAndAdviceProps) => {
  const [isModalOpen, setIsModalOpen] = useState('')
  const [openedItems, setOpenedItems] = useState<number[]>([])

  const openHelpAndAdviceItem = (index: number) => {
    if (helpAndAdviceEnableAlwaysOpen) {
      if (openedItems.includes(index)) {
        setOpenedItems(openedItems.filter((item) => item !== index))
      } else {
        setOpenedItems([...openedItems, index])
      }
    } else {
      if (openedItems.includes(index)) {
        setOpenedItems([])
      } else {
        setOpenedItems([index])
      }
    }
  }

  useEffect(() => {
    if (!isModalOpen) {
      document.body.classList.remove('modal-open')
    }
  }, [isModalOpen])

  return (
    <ComponentLayout
      innerClass={styles.helpAndAdvice}
      removeBottomMargin={removeBottomMargin}
      removeGridPadding={isPanel}
    >
      {isModalOpen && (
        <LightBoxVideoPlayer url={isModalOpen} setState={setIsModalOpen} />
      )}
      <div className={styles.content} data-is-panel={isPanel}>
        {!!helpAndAdviceTitle && (
          <Heading level={3} className={styles.title} data-is-panel={isPanel}>
            {helpAndAdviceTitle}
          </Heading>
        )}
        <dl className={styles.items} role="presentation">
          {helpAndAdviceItems?.map?.((item, index) => (
            <HelpAndAdviceItem
              key={index}
              helpAndAdviceItem={item}
              index={index}
              setIsModalOpen={setIsModalOpen}
              openHelpAndAdviceItem={openHelpAndAdviceItem}
              isItemOpen={openedItems.includes(index)}
              isPanel={isPanel}
            />
          ))}
        </dl>
        {!!viewMore && (
          <div className={styles.viewMoreLinkWrapper}>
            <Link
              className={styles.viewMoreLink}
              url={transformUrl(viewMore.url)}
              appearance={LinkAppearance.BLANK}
            >
              {viewMore.name}
              <Icon name={IconNames.ARROW_ICON} size="xs" />
            </Link>
          </div>
        )}
      </div>
    </ComponentLayout>
  )
}

export default HelpAndAdvice
