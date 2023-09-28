import FormError from '_atoms/ErrorMessage/FormError'
import styles from './PasswordValidation.module.scss'
import { IconNames } from '_types/local'
import React, { useState } from 'react'
import Icon from '_atoms/Icon/Icon'

export interface PasswordValidationComponentProps {
  isError?: boolean
  isValidation?: boolean
}
export type PasswordValidationProps = PasswordValidationComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

const Password = ({
  isError,
  isValidation,
  ...props
}: PasswordValidationProps) => {
  const [is8char, setIs8Char] = useState(false)
  const [is1LowerCase, setIs1LowerCase] = useState(false)
  const [is1UpperCase, setIs1UpperCase] = useState(false)
  const [is1Number, setIs1Number] = useState(false)
  const [is1Symbol, setIs1Symbol] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [isConfirmError, setIsConfirmError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    let currentInput = e.target.value

    if (currentInput.length >= 8) {
      setIs8Char(true)
    } else {
      setIs8Char(false)
    }

    if (currentInput.match(/[A-Z]/)) {
      setIs1UpperCase(true)
    } else {
      setIs1UpperCase(false)
    }

    if (currentInput.match(/[a-z]/)) {
      setIs1LowerCase(true)
    } else {
      setIs1LowerCase(false)
    }

    if (currentInput.match(/[0-9]/)) {
      setIs1Number(true)
    } else {
      setIs1Number(false)
    }

    if (currentInput.match(/[^A-Z a-z0-9]/)) {
      setIs1Symbol(true)
    } else {
      setIs1Symbol(false)
    }
  }

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (password === e.target.value) {
      setIsConfirmError(false)
    } else {
      setIsConfirmError(true)
    }
  }

  return (
    <>
      <div className={styles.inputField}>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          className={styles.textInput}
          data-error={isError}
          onChange={handleChange}
          {...props}
          role="input"
        />
        {isValidation && (
          <button
            className={styles.icon}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
          >
            {isPasswordVisible ? (
              <Icon name={IconNames.EYE_SHOW} size="xs" />
            ) : (
              <Icon name={IconNames.EYE_HIDE} size="xs" />
            )}
          </button>
        )}
      </div>
      {isValidation && (
        <div>
          <div className={styles.validation}>
            <div
              className={styles.validationItem}
              data-char={is8char}
              data-error={isError}
            >
              {is8char ? (
                <span>
                  <Icon name={IconNames.ICON_TICK_CIRCLE} size="xs" />
                </span>
              ) : (
                <span className={styles.circle} />
              )}
              At least 8 characters
            </div>
            <div
              className={styles.validationItem}
              data-char={is1LowerCase}
              data-error={isError}
            >
              {is1LowerCase ? (
                <span>
                  <Icon name={IconNames.ICON_TICK_CIRCLE} size="xs" />
                </span>
              ) : (
                <span className={styles.circle} />
              )}
              At least 1 lower case letter
            </div>
            <div
              className={styles.validationItem}
              data-char={is1UpperCase}
              data-error={isError}
            >
              {is1UpperCase ? (
                <span>
                  <Icon name={IconNames.ICON_TICK_CIRCLE} size="xs" />
                </span>
              ) : (
                <span className={styles.circle} />
              )}
              At least one upper case letter
            </div>
            <div
              className={styles.validationItem}
              data-char={is1Number}
              data-error={isError}
            >
              {is1Number ? (
                <span>
                  <Icon name={IconNames.ICON_TICK_CIRCLE} size="xs" />
                </span>
              ) : (
                <span className={styles.circle} />
              )}
              At least one number
            </div>
            <div
              className={styles.validationItem}
              data-char={is1Symbol}
              data-error={isError}
            >
              {is1Symbol ? (
                <span>
                  <Icon name={IconNames.ICON_TICK_CIRCLE} size="xs" />
                </span>
              ) : (
                <span className={styles.circle} />
              )}
              At least one symbol $ £ # - , . @ : ? ! = + *
            </div>
          </div>
          <div className={styles.inputField}>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className={styles.textInput}
              data-error={isConfirmError}
              onChange={handleConfirmChange}
              {...props}
              role="input"
            />
            <button
              className={styles.icon}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              type="button"
            >
              {isPasswordVisible ? (
                <Icon name={IconNames.EYE_SHOW} size="xs" />
              ) : (
                <Icon name={IconNames.EYE_HIDE} size="xs" />
              )}
            </button>
          </div>
          {isConfirmError && (
            <div className={styles.error} data-testid="error-msg">
              <FormError errorMessage="The passwords do not match" />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Password
