import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import { WhatServiceItem } from '_types/CMS/nodes/components/UKPN'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './WhatServicePanel.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export interface WhatServicePanelProps extends WhatServiceItem {
  backClick: () => void
}

const WhatServicePanel = forwardRef<HTMLDivElement, WhatServicePanelProps>(
  (
    {
      title,
      subTitle,
      copyText,
      backClick,
      whatServiceItemLinks,
    }: WhatServicePanelProps,
    ref
  ) => {
    const anim = {
      out: {
        x: '0%',
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      },
      in: {
        opacity: 1,
        x: '-100%',
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      },
    }
    return (
      <motion.div
        className={styles.whatServicePanel}
        variants={anim}
        initial="out"
        animate="in"
        exit="out"
        ref={ref}
      >
        {title && (
          <Heading
            className={styles.whatServicePanelTitle}
            tabIndex={0}
            level={4}
          >
            {title}
          </Heading>
        )}
        {subTitle && (
          <Heading
            className={styles.whatServicePanelSubtitle}
            tabIndex={0}
            level={5}
          >
            {subTitle}
          </Heading>
        )}
        {copyText && (
          <p className={styles.whatServicePanelCopy} tabIndex={0}>
            {copyText}
          </p>
        )}
        {whatServiceItemLinks.map((link, i) => (
          <Link
            appearance={LinkAppearance.BLANK}
            className={styles.service}
            target={link.target}
            url={link.url}
            key={i}
          >
            {link.name}
          </Link>
        ))}
        <Button
          appearance={ButtonAppearance.BACK}
          color={ButtonColors.DARK}
          onClick={backClick}
        >
          Back
        </Button>
      </motion.div>
    )
  }
)

WhatServicePanel.displayName = 'WhatServicePanel'

export default WhatServicePanel
