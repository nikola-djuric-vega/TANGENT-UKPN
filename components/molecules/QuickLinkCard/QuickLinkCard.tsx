import React, { useEffect } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import Icon from '_atoms/Icon/Icon'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { StormMode } from '_types/CMS/nodes'
import { LinkAppearance } from '_types/CMS'
import { QuickLinkCardItemType } from '_types/CMS/nodes/components/UKPN'
import { IconNames } from '_types/local'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import styles from './QuickLinkCard.module.scss'

export interface QuickLinkCardProps {
  quickCardLinks: QuickLinkCardItemType[]
  enable4ColumnLayout?: boolean
}

const QuickLinkCard = ({
  quickCardLinks,
  enable4ColumnLayout,
}: QuickLinkCardProps) => {
  const validItems = quickCardLinks?.filter((item) => !!item.linkURL)

  const globalData = useUkpnGlobalData()

  return !!validItems?.length ? (
    <ComponentLayout
      innerClass={styles.inner}
      data-is-storm={
        globalData?.stormContainerData?.stormMode === StormMode.STORM
      }
    >
      <div
        className={styles.container}
        data-is-four-cols={enable4ColumnLayout}
        data-is-storm={
          globalData?.stormContainerData?.stormMode === StormMode.STORM
        }
      >
        {validItems.map((item, index) => (
          <React.Fragment key={index}>
            {!!item.linkURL?.url && (
              <Link
                url={item.linkURL.url}
                target={item.linkURL?.target}
                className={styles.quickLinkCard}
                appearance={LinkAppearance.BLANK}
              >
                <div className={styles.quickLinkItem} key={index}>
                  <div className={styles.quickLinkItemIcon}>
                    <Icon name={item.linkIcon || IconNames.LINK} baseColour />
                  </div>
                  <div
                    className={styles.quickLinkItemName}
                    data-is-large-text={!enable4ColumnLayout}
                  >
                    {item.linkURL.name}
                  </div>
                  <div className={styles.quickLinkItemArrow}>
                    <Icon name={IconNames.ARROW_ICON} />
                  </div>
                </div>
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </ComponentLayout>
  ) : null
}

export default QuickLinkCard
