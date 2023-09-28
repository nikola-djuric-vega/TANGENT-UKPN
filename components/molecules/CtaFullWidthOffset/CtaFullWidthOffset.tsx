import { CtaFullWidthOffsetType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './CtaFullWidthOffset.module.scss'
import CtaRender from '_hoc/CtaRender/CtaRender'
import Heading from '_atoms/Heading/Heading'
import Image from 'next/image'
import React from 'react'

const CtaFullWidthOffset = ({
  removeBottomMargin,
  image,
  title,
  text,
  cTA,
}: CtaFullWidthOffsetType) => {
  return (
    <ComponentLayout
      data-remove-bottom-margin={removeBottomMargin}
      innerClass={styles.innerCtaFullWidthOffset}
      containerClass={styles.ctaFullWidthOffset}
      data-has-image={!!image}
      outsideGridElementsUp={
        <div className={styles.offgridElems}>
          <div className={styles.image}>
            {!!image?.url && (
              <Image
                alt="image"
                src={image.url}
                title={image.name}
                width={image.umbracoWidth}
                height={image.umbracoHeight}
                layout="responsive"
                objectFit="fill"
              />
            )}
          </div>
        </div>
      }
    >
      <div className={styles.text} data-has-image={!!image}>
        {!!title && (
          <Heading level={4} className={styles.title}>
            {title}
          </Heading>
        )}
        {!!text && <p className={styles.body}>{text}</p>}
        {!!cTA?.[0] && !!cTA[0].uRL?.url && !!cTA[0].uRL?.name && (
          <CtaRender
            cta={cTA[0]}
            color={cTA[0].cTAType}
            className={styles.linkButton}
          />
        )}
      </div>
    </ComponentLayout>
  )
}

export default CtaFullWidthOffset
