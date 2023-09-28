import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './UsefulLinks.module.scss'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import Icon from '_atoms/Icon/Icon'
import React from 'react'
import { IconNames } from '_types/local'

const UsefulLinks = ({
  whiteBackground,
  usefulLinkItems,
  title,
}: UsefulLinksType) => {
  return (
    <ComponentLayout
      data-is-white-background={whiteBackground}
      containerClass={styles.usefulLinks}
    >
      <div
        className={styles.content}
        data-is-white-background={whiteBackground}
      >
        {!!title && (
          <Heading level={3} className={styles.title}>
            {title}
          </Heading>
        )}
        <ul className={styles.linksContainer}>
          {usefulLinkItems?.map(
            (link, index) =>
              link?.link?.url && (
                <div className={styles.item} key={index}>
                  <Link
                    className={styles.linkItem}
                    appearance={LinkAppearance.BLANK}
                    url={link.link?.url}
                  >
                    <Heading level={6} className={styles.linkTitle}>
                      {link.title}
                    </Heading>
                    <div className={styles.iconWrapper}>
                      <Icon name={IconNames.CIRCLED_LEFT_ARROW} flip />
                    </div>
                  </Link>
                </div>
              )
          )}
        </ul>
      </div>
    </ComponentLayout>
  )
}

export default UsefulLinks
