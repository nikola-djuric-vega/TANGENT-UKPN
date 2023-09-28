import { SocialLinksType } from '_types/CMS/nodes/components/UKPN'
import styles from './SocialLinks.module.scss'
import Heading from '_atoms/Heading/Heading'
import React, { useEffect } from 'react'
import Script from 'next/script'
import Icon from '_atoms/Icon/Icon'
import { IconNames } from '_types/local'

declare global {
  interface Window {
    addthis: any
  }
}

const SocialLinks = ({ title, pageContainer }: SocialLinksType) => {
  useEffect(() => {
    // We need to refresh this layers from the script together with the script to get it work, icons won't show again after page reload if layers don't update as well.
    window?.addthis?.layers?.refresh?.()
  }, [])

  return (
    <>
      <Script
        src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${process.env.NEXT_PUBLIC_ADD_THIS_ID}`}
      />
      <section
        className={styles.socialLinks}
        data-is-page-container={!!pageContainer}
      >
        <div className={styles.content}>
          <div className={styles.shareIcon}>
            <Icon name={IconNames.SHARE} baseColour={true} />
          </div>
          {!!title && (
            <Heading className={styles.title} level={3}>
              {title}
            </Heading>
          )}
        </div>
        <div className={styles.iconsWrapper}>
          <div className="addthis_inline_share_toolbox" />
        </div>
      </section>
    </>
  )
}

export default SocialLinks
