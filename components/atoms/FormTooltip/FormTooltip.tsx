import styles from './FormTooltip.module.scss'
import { IconNames } from '_types/local'
import React, { useState } from 'react'
import Icon from '../Icon/Icon'
export interface FormTooltipProps {
  defaultTitle: string
  tooltipTitle: string
  showTooltip: boolean
  tooltipMessage: string
}

const FormTooltip = ({
  defaultTitle,
  tooltipTitle,
  tooltipMessage,
  ...props
}: FormTooltipProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.tooltip}>
      <button
        className={`${styles.tooltipButton} button-reset`}
        type="button"
        onClick={() => setVisible(!visible)}
      >
        {!visible ? (
          <>
            <Icon name={IconNames.ICO_HELP_BLUE} />
            <span>{defaultTitle}</span>
          </>
        ) : (
          <>
            <Icon name={IconNames.ICO_CLOSE_SMALL} />
            <span>{tooltipTitle}</span>
          </>
        )}
      </button>
      {visible && (
        <div
          className={styles.tooltipContainer}
          aria-hidden={!visible}
          role="tooltip"
        >
          <div className={styles.containerMessage}>
            <button
              className={`${styles.containerClose} button-reset`}
              onClick={() => setVisible(!visible)}
              type="button"
              data-testid="close"
            >
              <Icon name={IconNames.CTA_CLOSE_TWO} />
            </button>
            <div className={styles.tooltipMessage} tabIndex={0}>
              {tooltipMessage}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormTooltip
