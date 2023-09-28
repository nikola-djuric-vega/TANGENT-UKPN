import Button from '../Button&Link/Button/Button'
import styles from './InputPassword.module.scss'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import React, { useState } from 'react'
import Icon from '../Icon/Icon'
export interface InputComponentProps {
  hasError?: boolean
}
export type InputPasswordProps = InputComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ hasError, ...props }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.inputField}>
      <input
        type={showPassword ? 'text' : 'password'}
        className={styles.textInput}
        data-error={hasError}
        {...props}
        role="input"
      />
      <Button
        type="button"
        appearance={ButtonAppearance.BLANK}
        onClick={() => setShowPassword(!showPassword)}
        aria-label="toggle password visibility"
      >
        {showPassword ? (
          <Icon name={IconNames.EYE_SHOW} size="xs" />
        ) : (
          <Icon name={IconNames.EYE_HIDE} size="xs" />
        )}
      </Button>
    </div>
  )
}

export default Input
