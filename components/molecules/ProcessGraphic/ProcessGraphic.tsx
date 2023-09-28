import { ProcessGraphicType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './ProcessGraphic.module.scss'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

const ProcessGraphic = ({
  removeBottomMargin,
  processItems,
  subTitle,
  title,
}: ProcessGraphicType) => {
  return (
    <ComponentLayout
      innerClass={styles.processGraphic}
      removeBottomMargin={removeBottomMargin}
    >
      <div className={styles.content}>
        {!!title && (
          <Heading className={styles.title} level={4}>
            {title}
          </Heading>
        )}
        {!!subTitle && <p className={styles.subtitle}>{subTitle}</p>}
        {!!processItems?.length && (
          <div className={styles.list}>
            {processItems.map(({ icon, heading, subheading }, i) => (
              <div className={styles.listItem} key={i}>
                {!!icon && (
                  <div className={styles.iconsWrapper}>
                    <div className={styles.stepIcon}>
                      <Icon name={icon} baseColour />
                    </div>
                    <div className={styles.horizontalArrow}>
                      <Icon name={IconNames.ICON_ARROW_LONG_HORIZONTAL} />
                    </div>
                  </div>
                )}
                {(!!heading || !!subheading) && (
                  <div className={styles.stepText}>
                    {!!heading && (
                      <p className={styles.stepHeading}>{heading}</p>
                    )}
                    {!!subheading && (
                      <p className={styles.stepSubheading}>{subheading}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </ComponentLayout>
  )
}

export default ProcessGraphic
