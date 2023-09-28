import WhatServiceInterminPanel from '_molecules/WhatServiceInterimPanel/WhatServiceInterimPanel'
import { WhatServiceInterimType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { Breakpoints } from '_types/local/breakpoints'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './WhatServiceInterim.module.scss'
import { AnimatePresence } from 'framer-motion'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { useState, useEffect } from 'react'
import kebabCase from 'lodash/kebabCase'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'

export interface WhatServiceInterimState {
  tab: number
  isMobile: boolean
}

const WhatServiceInterim = ({ title, tabs }: WhatServiceInterimType) => {
  const [{ tab, isMobile }, setPanelNumber] = useState<WhatServiceInterimState>(
    {
      tab: 0,
      isMobile: true,
    }
  )

  const windowSize = debounce(() => {
    setPanelNumber((prev) => ({
      ...prev,
      isMobile: window.innerWidth < Breakpoints.LG,
    }))
  }, 200)

  const handleTabClick = (tab: number) =>
    setPanelNumber((prev) => ({
      ...prev,
      tab: tab,
    }))

  useEffect(() => {
    window.addEventListener('resize', windowSize, { passive: true })
    windowSize()
    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <ComponentLayout innerClass={styles.inner}>
      <div className={styles.navigation}>
        {!!title && (
          <Heading level={2} className={styles.title}>
            {title}
          </Heading>
        )}
        {!!tabs && (
          <div className={styles.tabs} role="tablist">
            {tabs.map(({ icon, title }, i) => (
              <Button
                appearance={ButtonAppearance.BLANK}
                onClick={() => handleTabClick(i)}
                id={kebabCase(tabs[tab].title)}
                className={styles.tabButton}
                data-active={tab === i}
                role="tab"
                key={i}
              >
                {!!icon && (
                  <Icon name={icon} baseColour={!isMobile || tab !== i} />
                )}
                {!!title && title}
              </Button>
            ))}
          </div>
        )}
      </div>
      {!!tabs && (
        <div
          data-aria-labelledby={kebabCase(tabs[tab].title)}
          className={styles.slide}
          role="tabpanel"
        >
          <AnimatePresence exitBeforeEnter>
            <WhatServiceInterminPanel key={tabs[tab].title} {...tabs[tab]} />
          </AnimatePresence>
        </div>
      )}
    </ComponentLayout>
  )
}

export default WhatServiceInterim
