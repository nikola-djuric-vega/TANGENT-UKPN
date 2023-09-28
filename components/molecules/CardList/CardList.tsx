import { CardListItem } from '_types/CMS/nodes/components/UKPN'
import Link from '_atoms/Button&Link/Link/Link'
import { LinkAppearance } from '_types/CMS'
import styles from './CardList.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

export interface CardListProps {
  items: CardListItem[]
}

const CardList = ({ items }: { items: CardListItem[] }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {!!item.linkURL?.url && (
            <Link
              url={item.linkURL.url}
              target={item.linkURL?.target}
              className={styles.listItem}
              appearance={LinkAppearance.BLANK}
            >
              <div className={styles.listItemIcon}>
                <Icon name={item.linkIcon || IconNames.LINK} baseColour />
              </div>
              <div className={styles.listItemName}>{item.linkURL.name}</div>
              <div className={styles.listItemArrow}>
                <Icon name={IconNames.ARROW_ICON} baseColour />
              </div>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default CardList
