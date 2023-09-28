import { WhatServiceInterimPanelType } from '_types/CMS/nodes/components/UKPN'
import styles from './WhatServiceInterimPanel.module.scss'
import { LinkAppearance, ButtonColors } from '_types/CMS'
import Link from '_atoms/Button&Link/Link/Link'
import { IconNames } from '_types/local'
import { motion } from 'framer-motion'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

const WhatServiceInterimPanel = ({ services }: WhatServiceInterimPanelType) => {
  const animTransiton = (delay: number) => ({
    ease: 'easeInOut',
    delay: delay / 10,
    type: 'tween',
    duration: 0.2,
  })

  const anim = {
    start: {
      opacity: 0,
      x: '20%',
    },
    middle: {
      opacity: 1,
      x: '0%',
    },
    end: {
      opacity: 0,
      x: '-20%',
    },
  }

  return (
    <div className={styles.whatServicePanel} role="list">
      {!!services &&
        services.map(({ image, title, subtitle, link }, i) => (
          <motion.div
            transition={animTransiton(i)}
            className={styles.service}
            animate="middle"
            variants={anim}
            initial="start"
            role="listitem"
            exit="end"
            key={i}
          >
            {!!image && !!image.url && (
              <div className={styles.serviceImage}>
                <Image
                  objectPosition="center"
                  title={image.name}
                  objectFit="cover"
                  alt={image.name}
                  src={image.url}
                  layout="fill"
                />
              </div>
            )}
            {(!!title || !!subtitle || (!!link && !!link.url)) && (
              <div className={styles.serviceContent}>
                {!!title && <p className={styles.serviceTitle}>{title}</p>}
                {!!subtitle && (
                  <p className={styles.serviceSubtitle}>{subtitle}</p>
                )}
                {!!link && !!link.url && (
                  <Link
                    appearance={LinkAppearance.PRIMARY}
                    icon={IconNames.CTA_ARROW_SHORT}
                    className={styles.serviceLink}
                    color={ButtonColors.DARK}
                    url={link.url}
                  >
                    <Icon name={IconNames.CTA_ARROW_SHORT} />
                  </Link>
                )}
              </div>
            )}
          </motion.div>
        ))}
    </div>
  )
}

export default WhatServiceInterimPanel
