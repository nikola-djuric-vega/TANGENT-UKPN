import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ImageGridType } from '_types/CMS/nodes/components/UKPN'
import styles from './ImageGrid.module.scss'
import Heading from '_atoms/Heading/Heading'
import React from 'react'

const ImageGrid = ({ title, gridItems }: ImageGridType) => {
  return (
    <ComponentLayout
      innerClass={styles.imageGrid}
      containerClass={styles.containerClass}
    >
      <div className={styles.content}>
        {!!title && (
          <Heading className={styles.title} level={4}>
            {title}
          </Heading>
        )}
        {!!gridItems && !!gridItems.length && (
          <div className={styles.gridItems}>
            {gridItems?.map?.((item, index) => (
              <div key={index} className={styles.gridItem}>
                {item?.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className={styles.gridItemImage}
                    title={item.logo.name}
                    alt={item.logo.name}
                    src={item.logo.url}
                    width={item?.logo?.umbracoWidth}
                    height={item?.logo?.umbracoHeight}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </ComponentLayout>
  )
}

export default ImageGrid
