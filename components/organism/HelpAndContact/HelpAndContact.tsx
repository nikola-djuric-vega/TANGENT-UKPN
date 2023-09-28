import HelpAndContactInnerTabContent from '_molecules/HelpAndContactInnerTabContent/HelpAndContactInnerTabContent'
import HelpAndContactContentPanel from '_molecules/HelpAndContactContentPanel/HelpAndContactContentPanel'
import HelpAndContactTabItem from '_molecules/HelpAndContactTabItem/HelpAndContactTabItem'
import { HelpAndContactType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { useHelpAndContact } from '_context/help-and-contact'
import React, { useEffect, useRef, useState } from 'react'
import styles from './HelpAndContact.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

const HelpAndContact = ({
  mainTitle,
  subTitle,
  firstFramePromptText,
  helpAndContactTabs,
}: HelpAndContactType) => {
  const [isTabOpened, setIsTabOpened] = useState(false)
  const [isInnerContentOpen, setIsInnerContentOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(-1)
  const [activeInnerTab, setActiveInnerTab] = useState(-1)
  const [closedTabNumber, setClosedTabNumber] = useState(0)
  const [activeButtonFocusIndex, setActiveButtonFocusIndex] =
    useState<number>(0)
  const { currentContentHeight } = useHelpAndContact()
  const openActiveTab = (number: number) => {
    setIsInnerContentOpen(false)
    setActiveTab(number)
    setIsTabOpened(true)
    setActiveButtonFocusIndex(number)
  }

  const closeActiveTab = (number: number) => {
    setIsTabOpened(!isTabOpened)
    setActiveTab(-1)
    setClosedTabNumber(number)
    setActiveButtonFocusIndex(number)
  }

  const openInnerActiveTab = (number: number) => {
    setActiveInnerTab(number)
    setIsInnerContentOpen(!isInnerContentOpen)
  }

  const closeInnerActiveTab = () => {
    setIsInnerContentOpen(!isInnerContentOpen)
    setActiveInnerTab(-1)
  }
  const tabsRef = useRef<HTMLDivElement>(null)
  const { setTabsHeight } = useHelpAndContact()

  useEffect(() => {
    if (tabsRef.current) {
      const height = tabsRef.current.offsetHeight
      setTabsHeight(height)
    }
  }, [isTabOpened, activeTab, isInnerContentOpen])

  return (
    <ComponentLayout innerClass={styles.helpAndContact}>
      {!!mainTitle && <h3 className={styles.mainTitle}>{mainTitle}</h3>}
      {!!subTitle && <p className={styles.subTitle}>{subTitle}</p>}
      <div className={styles.content} data-tab-is-open={isTabOpened}>
        <div
          className={styles.helpAndContactContainer}
          data-is-open={isTabOpened}
          {...(isTabOpened && {
            style: {
              height: currentContentHeight,
            },
          })}
        >
          {/* {tab's buttons} */}
          <div
            className={styles.tabsContainer}
            data-is-open={isTabOpened}
            role="tablist"
            ref={tabsRef}
          >
            {!!helpAndContactTabs?.length &&
              helpAndContactTabs.map((tab, index) => (
                <HelpAndContactTabItem
                  key={index}
                  tabIndex={index}
                  openActiveTab={openActiveTab}
                  isTabOpened={isTabOpened}
                  activeTab={activeTab}
                  tab={tab}
                  closedTabNumber={closedTabNumber}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp') {
                      e.preventDefault()
                      if (activeButtonFocusIndex > 0) {
                        setActiveButtonFocusIndex(activeButtonFocusIndex - 1)
                      }
                    }
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      if (activeButtonFocusIndex < helpAndContactTabs.length) {
                        setActiveButtonFocusIndex(activeButtonFocusIndex + 1)
                      }
                    }
                  }}
                  activeButtonFocusIndex={activeButtonFocusIndex}
                />
              ))}
            <div
              className={styles.frameBackground}
              data-is-visible={!isTabOpened}
            >
              <div className={styles.frameContentWrapper}>
                {!!firstFramePromptText && (
                  <h1 className={styles.frameBackgroundText}>
                    {firstFramePromptText}
                  </h1>
                )}
                <div className={styles.frameBackgroundIconWrapper}>
                  <Icon name={IconNames.ICON_QUESTION} />
                </div>
              </div>
            </div>
          </div>
          {/* {tab's content} */}
          <div
            className={styles.borderWrapper}
            {...(isTabOpened && {
              style: {
                height: currentContentHeight,
              },
            })}
            role="tabpanel"
          >
            <div
              className={styles.desktopFrameBackground}
              data-is-visible={!isTabOpened}
            >
              <div className={styles.frameContentWrapper}>
                {!!firstFramePromptText && (
                  <h1 className={styles.frameBackgroundText}>
                    {firstFramePromptText}
                  </h1>
                )}
                <div className={styles.frameBackgroundIconWrapper}>
                  <Icon name={IconNames.ICON_QUESTION} />
                </div>
              </div>
            </div>
            <div
              className={styles.tabContent}
              data-is-open={isTabOpened}
              aria-hidden={!isTabOpened}
            >
              {!!helpAndContactTabs?.length &&
                helpAndContactTabs.map((tab, index) => (
                  <HelpAndContactContentPanel
                    key={index}
                    isTabOpened={isTabOpened}
                    activeTab={activeTab}
                    index={index}
                    tab={tab}
                    closeActiveTab={closeActiveTab}
                    openInnerActiveTab={openInnerActiveTab}
                    isInnerContentOpen={isInnerContentOpen}
                  />
                ))}
            </div>
            {/*tab's inner content */}
            <div
              className={styles.innerTabContent}
              data-is-open={isInnerContentOpen}
            >
              {!!helpAndContactTabs?.length &&
                helpAndContactTabs.map((tab, tabIndex) => {
                  return (
                    <React.Fragment key={tabIndex}>
                      {tab.helpAndContactLinkSet?.map(
                        (innerTab, innerTabIndex) => (
                          <HelpAndContactInnerTabContent
                            key={innerTabIndex}
                            activeTab={activeTab}
                            activeInnerTab={activeInnerTab}
                            isInnerContentOpen={isInnerContentOpen}
                            innerTab={innerTab}
                            tabIndex={tabIndex}
                            innerTabIndex={innerTabIndex}
                            closeInnerActiveTab={closeInnerActiveTab}
                          />
                        )
                      )}
                    </React.Fragment>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}

export default HelpAndContact
