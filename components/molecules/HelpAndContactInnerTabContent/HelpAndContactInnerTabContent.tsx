import SimpleContent from '_molecules/SimpleContent/SimpleContent'
import styles from './HelpAndContactInnerTabContent.module.scss'
import { useHelpAndContact } from '_context/help-and-contact'
import ContactUs from '_molecules/ContactUs/ContactUs'
import Button from '_atoms/Button&Link/Button/Button'
import React, { useRef, useEffect } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

import {
  ComponentsTypeName,
  ButtonAppearance,
  LinkAppearance,
} from '_types/CMS'

import {
  HelpAndContactLinkSetLink,
  HelpAndContactLinkType,
  SimpleContentType,
  LinkSetItem,
} from '_types/CMS/nodes/components/UKPN'

export interface HelpAndContactInnerTabContentProps {
  isInnerContentOpen: boolean
  activeInnerTab: number
  activeTab: number
  tabIndex: number
  innerTabIndex: number
  closeInnerActiveTab: () => void
  innerTab: LinkSetItem | HelpAndContactLinkSetLink | SimpleContentType
}

const HelpAndContactInnerTabContent = ({
  isInnerContentOpen,
  activeInnerTab,
  activeTab,
  tabIndex,
  innerTabIndex,
  closeInnerActiveTab,
  innerTab,
}: HelpAndContactInnerTabContentProps) => {
  const innerTabRef = useRef<HTMLDivElement>(null)
  const { setHeight, currentTabsHeight } = useHelpAndContact()
  const backButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (
      backButtonRef.current &&
      isInnerContentOpen &&
      activeTab === tabIndex &&
      activeInnerTab === innerTabIndex
    ) {
      backButtonRef.current.focus({ preventScroll: true })
    }
    if (
      innerTabRef.current &&
      isInnerContentOpen &&
      activeTab === tabIndex &&
      activeInnerTab === innerTabIndex
    ) {
      const height = innerTabRef.current.offsetHeight
      if (height >= currentTabsHeight) {
        setHeight(height + 2)
      } else {
        setHeight(currentTabsHeight)
      }
    }
  }, [isInnerContentOpen, activeInnerTab])

  return (
    <div
      key={innerTabIndex}
      className={styles.innerTabContent}
      data-is-open={
        isInnerContentOpen &&
        activeTab === tabIndex &&
        activeInnerTab === innerTabIndex
      }
      ref={innerTabRef}
    >
      <Button
        className={styles.backButton}
        appearance={ButtonAppearance.BLANK}
        type="button"
        onClick={() => closeInnerActiveTab()}
        data-is-button-active={isInnerContentOpen}
        aria-expanded={isInnerContentOpen && activeInnerTab === innerTabIndex}
        aria-hidden={!isInnerContentOpen || activeInnerTab != innerTabIndex}
        tabIndex={
          isInnerContentOpen && activeInnerTab === innerTabIndex ? 0 : -1
        }
        ref={backButtonRef}
      >
        <span className={styles.backIconWrapper}>
          <Icon name={IconNames.ICON_CHEVRON_RIGHT} />
        </span>
        Back
      </Button>
      {innerTab.__typename ===
        HelpAndContactLinkType.HELP_AND_CONTACT_LINK_SET_LINK ||
      innerTab.__typename === ComponentsTypeName.SIMPLE_CONTENT ? null : (
        <div key={innerTabIndex}>
          {!!innerTab?.title && (
            <Heading className={styles.tabHeading} level={4}>
              {innerTab.title}
            </Heading>
          )}
          {!!innerTab?.subtitle && (
            <RichText text={innerTab.subtitle} className={styles.subTitle} />
          )}
          {innerTab.components?.map((component, index) => {
            if (
              component.__typename === LinkAppearance.PRIMARY &&
              component.uRL
            ) {
              return (
                <Link
                  data-is-link-active={isInnerContentOpen}
                  appearance={LinkAppearance.PRIMARY}
                  className={styles.componentLink}
                  color={component.cTAType}
                  url={component.uRL.url}
                  key={index}
                >
                  {component.uRL.name}
                </Link>
              )
            } else if (component.__typename === ComponentsTypeName.CONTACT_US) {
              return (
                <ContactUs
                  __typename={ComponentsTypeName.CONTACT_US}
                  contactUsItems={component.contactUsItems}
                  isHelpAndContact={true}
                  key={index}
                />
              )
            } else if (
              component.__typename === ComponentsTypeName.SIMPLE_CONTENT
            ) {
              return (
                <SimpleContent
                  __typename={component.__typename}
                  isHelpAndContact={true}
                  text={component.text}
                  key={index}
                />
              )
            }
          })}
        </div>
      )}
    </div>
  )
}

export default HelpAndContactInnerTabContent
