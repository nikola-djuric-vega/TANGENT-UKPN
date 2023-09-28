import styles from './TextArea.module.scss'
import React from 'react'

export interface TextAreaComponentProps {
  hasError?: boolean
}
export type TextAreaProps = TextAreaComponentProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({ hasError, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={styles.textArea}
      data-error={hasError}
    ></textarea>
  )
}

export default TextArea
