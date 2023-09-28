import { motion, AnimatePresence, Variants, MotionProps } from 'framer-motion'
import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { ModalState, toggleModal } from '_utils'
import styles from './PopUp.module.scss'
import FocusTrap from 'focus-trap-react'
import { RefObject, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { getElementPopupPosition } from '_utils/get-element-popup-position'
import React from 'react'

export interface PopUpProps extends MotionProps {
  children: React.ReactNode | JSX.Element
  shouldShow: boolean
  animation: Variants
  classModal: string
  focusTrap?: boolean
  isSmall?: boolean
  elementRef?: RefObject<HTMLDivElement>
  handleEscape?: (action: boolean) => void
}

const PopUp = ({
  shouldShow,
  classModal,
  animation,
  children,
  focusTrap,
  handleEscape,
  isSmall = false,
  elementRef,
  ...props
}: PopUpProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setContainer(document?.getElementById('modal-root'))
  }, [])

  useEffect(() => {
    if (!!shouldShow && !isSmall) {
      toggleModal(ModalState.OPEN)
    }

    return () => toggleModal(ModalState.CLOSE)
  }, [shouldShow])

  const elemPosition =
    elementRef?.current && getElementPopupPosition(elementRef.current)

  return (
    container &&
    ReactDOM.createPortal(
      <AnimatePresence exitBeforeEnter>
        {!!shouldShow && (
          <motion.div
            className={styles.popUp}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            data-is-small={isSmall}
            exit={{ opacity: 0 }}
            style={{
              top: elemPosition?.top,
              left: elemPosition?.left,
            }}
          >
            <ConditionalWrapper
              condition={focusTrap as boolean}
              wrapper={(children) => (
                <FocusTrap
                  active={shouldShow}
                  focusTrapOptions={{
                    allowOutsideClick: true,
                    initialFocus: false,
                    onDeactivate() {
                      handleEscape?.(false)
                    },
                    tabbableOptions: {
                      displayCheck: 'none',
                    },
                  }}
                >
                  {children}
                </FocusTrap>
              )}
            >
              <motion.div
                className={classModal}
                variants={animation}
                role="dialog"
                key="modal"
                {...props}
              >
                {children}
              </motion.div>
            </ConditionalWrapper>
          </motion.div>
        )}
      </AnimatePresence>,
      container
    )
  )
}

export default PopUp
