import RichText from '_atoms/RichText/RichText'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './ThankYou.module.scss'
import React from 'react'

import {
  Link as LinkType,
  LinkAppearance,
  ButtonColors,
  TextSizes,
} from '_types/CMS'

export interface ThankYouProps {
  title?: string
  message: string
  referenceMessage: string
  referenceNumber: string
  redirectLink?: LinkType
}

const ThankYou = ({
  title,
  message,
  referenceNumber,
  referenceMessage,
  redirectLink,
}: ThankYouProps) => {
  return (
    <section className={styles.thankYou}>
      <h1 className={styles.title} tabIndex={0}>
        {title}
      </h1>
      <div className={styles.message}>
        <RichText text={message} size={TextSizes.TEXT_BODY_1} tabIndex={0} />
      </div>
      {referenceNumber && (
        <div className={styles.reference}>
          <div className={styles.referenceNumber}>{referenceNumber}</div>
          <div className={styles.referenceMessage}>{referenceMessage}</div>
        </div>
      )}
      {redirectLink && (
        <Link
          appearance={LinkAppearance.PRIMARY}
          className={styles.redirectLink}
          target={redirectLink.target}
          color={ButtonColors.DARK}
          url={redirectLink.url}
        >
          {redirectLink.name}
        </Link>
      )}
    </section>
  )
}

export default ThankYou
