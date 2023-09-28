import React from 'react'
import RichText from '_atoms/RichText/RichText'
import styles from './InterimHomepageBanner.module.scss'
import Image from 'next/image'
import { InterimHomepageBannerType } from '_types/CMS/nodes/components/UKPN'

const InterimHomepageBanner = ({
  backgroundImage,
  headerText,
}: InterimHomepageBannerType) => {
  return (
    <section className={styles.base}>
      <div className={styles.linesContainer}>
        <div className={styles.linesContainerFirst}></div>
        <div className={styles.linesContainerSecond}></div>
      </div>
      {!!headerText && (
        <div className={styles.headerTextContainer}>
          <RichText text={headerText} className={styles.headerText} />
        </div>
      )}
      {!!backgroundImage && !!backgroundImage.url && (
        <div className={styles.backgroundImageContainer}>
          <div className={styles.backgroundImageholder}>
            <Image
              height={backgroundImage.umbracoHeight}
              width={backgroundImage.umbracoWidth}
              src={backgroundImage.url}
              alt="Interim Homepage Image"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default InterimHomepageBanner
