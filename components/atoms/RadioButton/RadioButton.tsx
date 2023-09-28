import styles from './RadioButton.module.scss'
import React, { useRef } from 'react'

export interface RadioButtonComponentProps {
  hasError?: boolean
  value: string
  id?: string
  setOption: React.Dispatch<React.SetStateAction<string>>
  name: string
}

export type RadioButtonProps = RadioButtonComponentProps &
  React.InputHTMLAttributes<HTMLInputElement | HTMLLabelElement>

const RadioButton = ({
  hasError,
  value,
  id,
  name,
  setOption,
  checked,
  ...props
}: RadioButtonProps) => {
  const input = useRef<HTMLInputElement>(null)
  return (
    <label
      className={styles.label}
      htmlFor={id}
      data-error={hasError}
      data-check={input.current?.checked || checked}
    >
      <input
        {...props}
        className={styles.radioButton}
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        ref={input}
        onChange={(e) => {
          setOption(e.target.value)
        }}
        role="input"
      />
      <p className={styles.radioText}>{value}</p>
    </label>
  )
}

export default RadioButton
