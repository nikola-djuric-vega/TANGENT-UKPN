import { CtaFullWidthBoxType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './CtaFullWidthBox.module.scss'
import CtaRender from '_hoc/CtaRender/CtaRender'
import React from 'react'
import Heading from '_atoms/Heading/Heading'

const CtaFullWidthBox = ({
  cTAItems,
  removeBottomMargin,
}: CtaFullWidthBoxType) => {
  return (
    <ComponentLayout
      containerClass={styles.ctaFullWidthBox}
      removeBottomMargin={removeBottomMargin}
      innerClass={styles.innerWrapper}
      data-is-one-column={cTAItems && cTAItems.length < 2}
    >
      {!!cTAItems?.length &&
        cTAItems.map((item, index) => (
          <div key={index} className={styles.ctaItem}>
            <div className={styles.textWrapper}>
              {item.title && (
                <Heading level={3} className={styles.title}>
                  {item.title}
                </Heading>
              )}
              {item.text && <p className={styles.text}>{item.text}</p>}
            </div>
            {!!item.cTAFullWidthItemCTA?.length && (
              <div className={styles.ctasWrapper}>
                {item.cTAFullWidthItemCTA.map((cta, index) => (
                  <CtaRender
                    cta={cta}
                    key={index}
                    color={cta.cTAType}
                    className={styles.cta}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
    </ComponentLayout>
  )
}

export default CtaFullWidthBox
