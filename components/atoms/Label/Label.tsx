import styles from './Label.module.scss'
import React from 'react'

export interface LabelProps {
  text: string
  isRequired?: boolean
}

const Label = ({
  text,
  isRequired,
  className,
  ...props
}: LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={`${styles.label} ${className}`} {...props}>
      {text}
      {isRequired && <span className={styles.asterisk}> *</span>}
    </label>
  )
}

export default Label
