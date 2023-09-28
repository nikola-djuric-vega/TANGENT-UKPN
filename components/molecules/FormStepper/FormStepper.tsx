import styles from './FormStepper.module.scss'
import { FormPage } from '_types/CMS/form'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

export interface FormStepperProps {
  completedPages: number[]
  activePage: number
  pages: FormPage[]
}

const FormStepper = ({
  pages,
  activePage,
  completedPages,
}: FormStepperProps) => {
  const isStepComplete = (i: number) => completedPages.includes(i + 1)
  return (
    <div className={styles.formStepper}>
      <div className={styles.formSteps}>
        {pages?.map((page, index) => (
          <div
            className={styles.formStep}
            data-is-complete={isStepComplete(index)}
            data-is-active={index === activePage ? true : false}
            key={index}
          >
            <div className={styles.formStepIndicator}>
              <span>
                {isStepComplete(index) ? (
                  <Icon name={IconNames.ICO_CHECK_TWO} size="xxs" />
                ) : (
                  index + 1
                )}
              </span>
            </div>
            <p
              tabIndex={0}
              aria-selected={index === activePage ? true : false}
              role="option"
            >
              {page.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FormStepper
