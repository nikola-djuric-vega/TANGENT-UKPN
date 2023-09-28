import SimpleContent from '_molecules/SimpleContent/SimpleContent'
import { useHelpAndContact } from '_context/help-and-contact'
import styles from './HelpAndContactContentPanel.module.scss'
import ContactUs from '_molecules/ContactUs/ContactUs'
import Button from '_atoms/Button&Link/Button/Button'
import React, { useRef, useEffect } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

import {
  HelpAndContactLinkType,
  HelpAndContactTabType,
} from '_types/CMS/nodes/components/UKPN'

import {
  ComponentsTypeName,
  ButtonAppearance,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export interface HelpAndContactContentPanelProps {
  isTabOpened: boolean
  activeTab: number
  index: number
  tab: HelpAndContactTabType
  closeActiveTab: (index: number) => void
  openInnerActiveTab: (number: number) => void
  isInnerContentOpen: boolean
}

const HelpAndContactContentPanel = ({
  isTabOpened,
  activeTab,
  index,
  tab,
  closeActiveTab,
  openInnerActiveTab,
  isInnerContentOpen,
}: HelpAndContactContentPanelProps) => {
  const contentPanelRef = useRef<HTMLDivElement>(null)
  const { setHeight, currentTabsHeight } = useHelpAndContact()
  const backButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (
      backButtonRef.current &&
      isTabOpened &&
      activeTab === index &&
      !isInnerContentOpen
    ) {
      backButtonRef.current.focus({ preventScroll: true })
    }
    if (contentPanelRef.current && isTabOpened && activeTab === index) {
      const height = contentPanelRef.current.offsetHeight
      if (height >= currentTabsHeight) {
        setHeight(height + 2)
      } else {
        setHeight(currentTabsHeight)
      }
    }
  }, [isTabOpened, activeTab, isInnerContentOpen, currentTabsHeight])

  return (
    <div
      className={styles.helpAndContentPanel}
      data-is-open={isTabOpened && activeTab === index && !isInnerContentOpen}
      id={`level-2-${index.toString()}`}
      role="region"
      aria-hidden={!isTabOpened || activeTab != index}
      ref={contentPanelRef}
    >
      {!!tab?.icon && (
        <div className={styles.innerTabIconWrapper} tabIndex={-1}>
          <Icon name={tab.icon} />
        </div>
      )}
      <Button
        className={styles.backButton}
        appearance={ButtonAppearance.BLANK}
        type="button"
        onClick={() => closeActiveTab(index)}
        data-is-button-active={isTabOpened}
        aria-hidden={!isTabOpened}
        tabIndex={isTabOpened && activeTab === index ? 0 : -1}
        ref={backButtonRef}
      >
        <span className={styles.backIconWrapper}>
          <Icon name={IconNames.ICON_CHEVRON_RIGHT} />
        </span>
        Back
      </Button>
      {tab?.tabComponents?.map((tabComponent, tabComponentIndex) => {
        if (
          tabComponent.__typename === LinkAppearance.PRIMARY &&
          tabComponent.uRL
        ) {
          return (
            <Link
              key={tabComponentIndex}
              className={styles.componentLink}
              appearance={LinkAppearance.PRIMARY}
              url={tabComponent.uRL.url}
              color={tabComponent.cTAType}
              data-is-link-active={isTabOpened}
              tabIndex={isTabOpened && activeTab === index ? 0 : -1}
            >
              {tabComponent.uRL.name}
            </Link>
          )
        } else if (tabComponent.__typename === ComponentsTypeName.CONTACT_US) {
          return (
            <ContactUs
              __typename={ComponentsTypeName.CONTACT_US}
              contactUsItems={tabComponent.contactUsItems}
              key={tabComponentIndex}
              isHelpAndContact={true}
            />
          )
        } else if (
          tabComponent.__typename === ComponentsTypeName.SIMPLE_CONTENT
        ) {
          return (
            <div
              className={styles.simpleContentWrapper}
              key={tabComponentIndex}
            >
              <SimpleContent
                __typename={tabComponent.__typename}
                text={tabComponent.text}
                isHelpAndContact={true}
              />
            </div>
          )
        }
      })}
      {tab.helpAndContactLinkSet?.map((linkSetItem, linkSetIndex) => {
        if (
          linkSetItem.__typename ===
          HelpAndContactLinkType.HELP_AND_CONTACT_LINK_SET_LINK
        ) {
          return (
            <React.Fragment key={linkSetIndex}>
              {!!linkSetItem?.link?.url && (
                <Link
                  className={styles.link}
                  appearance={LinkAppearance.TERTIARY}
                  color={ButtonColors.DARK}
                  url={linkSetItem.link.url}
                  download={linkSetItem.link.type === LinkType.MEDIA}
                >
                  {linkSetItem.link?.name}
                </Link>
              )}
            </React.Fragment>
          )
        } else if (
          linkSetItem.__typename === ComponentsTypeName.SIMPLE_CONTENT
        ) {
          return (
            <React.Fragment key={linkSetIndex}>
              {!!linkSetItem?.text && (
                <div className={styles.simpleContentWrapper}>
                  <SimpleContent
                    text={linkSetItem.text}
                    __typename={ComponentsTypeName.SIMPLE_CONTENT}
                  />
                </div>
              )}
            </React.Fragment>
          )
        } else {
          return (
            <Button
              onClick={() => openInnerActiveTab(linkSetIndex)}
              appearance={ButtonAppearance.TERTIARY}
              className={styles.linkButton}
              color={ButtonColors.DARK}
              key={linkSetIndex}
              type="button"
            >
              {linkSetItem.title}
            </Button>
          )
        }
      })}
    </div>
  )
}

export default HelpAndContactContentPanel
