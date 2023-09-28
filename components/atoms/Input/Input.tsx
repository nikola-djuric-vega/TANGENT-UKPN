import styles from './Input.module.scss'
import React from 'react'
export interface InputComponentProps {
  hasError?: boolean
}
export type InputProps = InputComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ hasError, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className={styles.textInput}
      data-error={hasError}
      {...props}
    />
  )
}

export default Input
