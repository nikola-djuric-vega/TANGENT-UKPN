import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import Image, { ImageProps } from 'next/image'
import Link from '../Button&Link/Link/Link'
import { LinkAppearance } from '_types/CMS'
import styles from './Figure.module.scss'
import { IconNames } from '_types/local'
import Icon from '../Icon/Icon'
import React from 'react'

export interface FigureProps extends ImageProps {
  caption?: string
  hasIcon?: IconNames
  width: number
  height: number
  alt: string
  link: string
}

const Figure = ({
  caption,
  hasIcon,
  width = 300,
  height = 300,
  alt,
  link,

  ...props
}: FigureProps & ImageProps) => {
  return (
    <ConditionalWrapper
      condition={link ? true : false}
      wrapper={(children) => (
        <Link url={link} appearance={LinkAppearance.BLANK}>
          {children}
        </Link>
      )}
    >
      <figure className={styles.Figure}>
        <Image
          layout="responsive"
          height={height}
          width={width}
          title={alt}
          alt={alt}
          {...props}
        />
        {caption && (
          <figcaption>
            {hasIcon && <Icon name={hasIcon} />}
            <p>{caption}</p>
          </figcaption>
        )}
      </figure>
    </ConditionalWrapper>
  )
}

export default Figure
