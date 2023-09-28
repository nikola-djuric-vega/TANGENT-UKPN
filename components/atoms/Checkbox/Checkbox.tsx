import { shouldExcludeFieldLabel } from '_utils'
import styles from './Checkbox.module.scss'
import { FieldType } from '_types/CMS'
import React from 'react'

export interface CheckboxComponentProps {
  tabIndex?: number
  name: string
  text?: string
  id: string
  isVariant?: boolean
  hasError?: boolean
  isRequired?: boolean
  className?: string
  innerClassName?: string
}

export type CheckboxProps = CheckboxComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  tabIndex = 0,
  name,
  text,
  hasError = false,
  id,
  checked,
  isRequired,
  className,
  innerClassName,
  isVariant = false,
  ...props
}: CheckboxProps) => {
  return (
    <div
      className={`${className && className} ${styles.checkbox} `}
      aria-disabled={props.disabled}
      data-is-variant={isVariant}
    >
      <div
        className={`${styles.tickBoxWrapper} ${
          innerClassName && innerClassName
        }`}
      >
        <input
          type="checkbox"
          name={name}
          id={id}
          aria-checked={checked}
          checked={checked}
          role="checkbox"
          tabIndex={0}
          {...props}
        />
        <div
          className={styles.checkboxTick}
          data-error={hasError}
          tabIndex={-1}
        ></div>
      </div>
      {text && (
        <span>
          <label htmlFor={id} className={styles.text}>
            {text}
          </label>
          {isRequired && shouldExcludeFieldLabel(FieldType.CHECKBOX) && (
            <span className={styles.asterisk}>*</span>
          )}
        </span>
      )}
    </div>
  )
}

export default Checkbox
