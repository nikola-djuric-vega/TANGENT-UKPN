import { HelpAndContactTabType } from '_types/CMS/nodes/components/UKPN/help-and-contact'
import styles from './HelpAndContactTabItem.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import React, { useEffect, useRef } from 'react'
import { ButtonAppearance } from '_types/CMS'
import Icon from '_atoms/Icon/Icon'

export interface HelpAndContactTabItemProps {
  tabIndex: number
  openActiveTab: (number: number) => void
  isTabOpened: boolean
  activeTab: number
  tab: HelpAndContactTabType
  closedTabNumber: number
  onKeyDown: React.KeyboardEventHandler<HTMLButtonElement>
  activeButtonFocusIndex: number
}

const HelpAndContactTabItem = ({
  tabIndex,
  openActiveTab,
  isTabOpened,
  activeTab,
  tab,
  closedTabNumber,
  onKeyDown,
  activeButtonFocusIndex,
}: HelpAndContactTabItemProps) => {
  const tabItemRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (tabIndex === closedTabNumber) {
      {
        tabItemRef.current && tabItemRef.current.focus({ preventScroll: true })
      }
    }
  }, [closedTabNumber])

  useEffect(() => {
    if (activeButtonFocusIndex === tabIndex && tabItemRef.current) {
      tabItemRef.current.focus({ preventScroll: true })
    }
  }, [activeButtonFocusIndex])

  return (
    <Button
      key={tabIndex}
      className={styles.tabButton}
      appearance={ButtonAppearance.BLANK}
      type="button"
      onClick={() => openActiveTab(tabIndex)}
      data-is-tab-active={isTabOpened && activeTab === tabIndex}
      aria-expanded={isTabOpened && activeTab === tabIndex}
      aria-controls={tabIndex.toString()}
      role="tab"
      tabIndex={0}
      ref={tabItemRef}
      onKeyDown={onKeyDown}
    >
      {!!tab?.icon && (
        <span className={styles.tabIconWrapper}>
          <Icon name={tab.icon} />
        </span>
      )}
      {!!tab?.tabTitle && (
        <span className={styles.tabTitle}>{tab.tabTitle}</span>
      )}
    </Button>
  )
}

export default HelpAndContactTabItem
