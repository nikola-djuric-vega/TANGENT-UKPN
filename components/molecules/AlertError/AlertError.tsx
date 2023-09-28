import { AlertErrorType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './AlertError.module.scss'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

const AlertError = ({
  alertErrorIcon,
  alertErrorTitle,
  alertErrorDescription,
}: AlertErrorType) => {
  return (
    <ComponentLayout>
      <div className={styles.content}>
        {!!alertErrorIcon && (
          <span className={styles.warningIconWrapper}>
            <Icon name={alertErrorIcon} />
          </span>
        )}
        {!!alertErrorTitle && (
          <p className={styles.alertErrorTitle}>{alertErrorTitle}</p>
        )}
        {!!alertErrorDescription && (
          <p className={styles.alertErrorDescription}>
            {alertErrorDescription}
          </p>
        )}
      </div>
    </ComponentLayout>
  )
}

export default AlertError
