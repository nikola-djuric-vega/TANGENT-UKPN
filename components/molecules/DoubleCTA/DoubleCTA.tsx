import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { DoubleCTAType } from '_types/CMS/nodes/components/UKPN'
import CtaRender from '_hoc/CtaRender/CtaRender'
import styles from './DoubleCTA.module.scss'
import React from 'react'
import Heading from '_atoms/Heading/Heading'

const DoubleCTA = ({
  leftCTATitle,
  leftCTAText,
  leftCTAs,
  rightCTATitle,
  rightCTAText,
  rightCTAs,
  removeBottomMargin,
}: DoubleCTAType) => {
  return (
    <ComponentLayout
      containerClass={styles.doubleCTA}
      removeBottomMargin={removeBottomMargin}
    >
      <div className={styles.doubleCtaBox}>
        <div className={styles.doubleCtaBoxItem}>
          {!!leftCTATitle && (
            <Heading level={4} className={styles.title}>
              {leftCTATitle}
            </Heading>
          )}
          {!!leftCTAText && <p className={styles.text}>{leftCTAText}</p>}
          <div className={styles.doubleCtaBoxLinks}>
            {!!leftCTAs?.length &&
              leftCTAs.map((cta, index) => (
                <React.Fragment key={index}>
                  {cta.uRL && cta.uRL.name && cta.uRL.url && (
                    <CtaRender
                      cta={cta}
                      color={cta.cTAType}
                      className={styles.cta}
                    />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
        <div className={styles.doubleCtaBoxItem}>
          {!!rightCTATitle && (
            <Heading level={4} className={styles.title}>
              {rightCTATitle}
            </Heading>
          )}
          {!!rightCTAText && <p className={styles.text}>{rightCTAText}</p>}

          <div className={styles.doubleCtaBoxLinks}>
            {!!rightCTAs?.length &&
              rightCTAs.map((cta, index) => (
                <React.Fragment key={index}>
                  {cta.uRL && cta.uRL.name && cta.uRL.url && (
                    <CtaRender
                      cta={cta}
                      color={cta.cTAType}
                      className={styles.cta}
                    />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}

export default DoubleCTA
