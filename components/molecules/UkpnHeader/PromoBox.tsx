import { PromoBox as PromoBoxType } from '_types/CMS/nodes'
import { LinkAppearance, TextSizes } from '_types/CMS'
import RichText from '_atoms/RichText/RichText'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './UkpnHeader.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

interface PromoBoxProps {
  promoBox: PromoBoxType
  isOnePromoBox?: boolean
  isSubMenuOpen: boolean
}

const PromoBox = ({
  promoBox,
  isOnePromoBox,
  isSubMenuOpen,
}: PromoBoxProps) => {
  return (
    <div
      className={styles.promoBox}
      data-is-one-promo-box={isOnePromoBox}
      aria-hidden={!isSubMenuOpen}
    >
      {!!promoBox?.promoBoxType && (
        <div className={styles.promoBoxIcon}>
          <Icon
            name={
              `${
                promoBox.promoBoxType === 'warning'
                  ? IconNames.ICON_WARNING
                  : IconNames.ICON_QUESTION
              }` as IconNames
            }
          />
        </div>
      )}
      {!!promoBox?.title && (
        <p className={styles.promoBoxTitle}>{promoBox.title}</p>
      )}
      {!!promoBox?.largeText && (
        <p className={styles.promoBoxLargeText}>{promoBox.largeText}</p>
      )}
      {!!promoBox?.body && isSubMenuOpen && (
        <RichText text={promoBox.body} size={TextSizes.TEXT_BODY_3} />
      )}
      {!!promoBox?.cTA && isSubMenuOpen && (
        <Link
          className={styles.promoBoxLink}
          appearance={LinkAppearance.SECONDARY}
          url={promoBox.cTA.url}
          data-is-submenu-open={isSubMenuOpen}
          tabIndex={!isSubMenuOpen ? -1 : 0}
          target={promoBox.cTA.target}
        >
          {promoBox.cTA.name}
        </Link>
      )}
    </div>
  )
}

export default PromoBox
