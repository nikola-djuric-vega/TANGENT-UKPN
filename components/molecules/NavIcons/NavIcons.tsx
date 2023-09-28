import { NavigationIconType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Link from '_atoms/Button&Link/Link/Link'
import { LinkAppearance } from '_types/CMS'
import styles from './NavIcons.module.scss'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

const NavIcons = ({ title, items }: NavigationIconType) => {
  return (
    <ComponentLayout>
      {title && <h3 className={styles.title}>{title}</h3>}
      {items && (
        <ul className={styles.itemsContainer}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item.icon && item.link && (
                <Link
                  appearance={LinkAppearance.BLANK}
                  url={item.link.url}
                  target={item?.link?.target || null!}
                >
                  <div className={styles.icon}>
                    <Icon name={item.icon} baseColour={true} />
                  </div>
                </Link>
              )}
              {item.icon && !item.link && (
                <div className={styles.icon}>
                  <Icon name={item.icon} baseColour={true} />
                </div>
              )}
              <div className={styles.content}>
                {item.title && (
                  <h5 className={styles.contentTitle}>{item.title}</h5>
                )}
                {item.subtitle && (
                  <p className={styles.contentSubtitle}>{item.subtitle}</p>
                )}
                {item.link && (
                  <Link
                    className={styles.link}
                    appearance={LinkAppearance.BLANK}
                    url={item.link.url}
                    target={item?.link?.target || null!}
                  >
                    {item.link.name}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </ComponentLayout>
  )
}

export default NavIcons
