import styles from './TitleAndDescription.module.scss'
import Heading from '../Heading/Heading'
import React from 'react'

export interface TitleAndDescriptionProps {
  title?: string
  description?: string
}

const TitleAndDescription = ({
  title,
  description,
}: TitleAndDescriptionProps) => {
  return (
    <>
      {title && (
        <Heading className={styles.heading} level={4} tabIndex={0}>
          {title}
        </Heading>
      )}
      {description && (
        <p tabIndex={0} className={styles.description}>
          {description}
        </p>
      )}
    </>
  )
}

export default TitleAndDescription
