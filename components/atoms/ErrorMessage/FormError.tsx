import styles from './FormError.module.scss'
import { IconNames } from '_types/local'
import Icon from '../Icon/Icon'
import React from 'react'

export interface FormErrorProps {
  errorMessage: string
  isVariant?: boolean
}

const FormError = ({ errorMessage, isVariant, ...props }: FormErrorProps) => {
  return (
    <div
      className={styles.errorMessage}
      data-is-variant={isVariant}
      {...props}
      role="group"
      aria-label="Form field error"
    >
      {isVariant ? (
        <Icon name={IconNames.ICO_INVALID_INPUT_WHITE} size="xs" />
      ) : (
        <Icon name={IconNames.ICO_INVALID_INPUT_WHITE} size="xs" />
      )}
      <span className={styles.message} data-is-variant={isVariant} tabIndex={0}>
        {errorMessage}
      </span>
    </div>
  )
}

export default FormError
