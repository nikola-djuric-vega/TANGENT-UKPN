import styles from './RotaLoadDisconnectionsPopUp.module.scss'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import React, { useEffect, useRef, useState } from 'react'
import Button from '_atoms/Button&Link/Button/Button'
import useOnClickOutside from '_hooks/onClickOutside'
import { PowerSharingData } from '_types/CMS/nodes'
import CtaRender from '_hoc/CtaRender/CtaRender'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import debounce from 'lodash/debounce'
import PopUp from '_hoc/PopUp/PopUp'
import Icon from '_atoms/Icon/Icon'

export interface PoopUpState {
  popUpOpen: boolean
  showContent: boolean
}

export interface RotaLoadDisconnectionsPopUpProps {
  data?: PowerSharingData
}

const RotaLoadDisconnectionsPopUp = ({
  data,
}: RotaLoadDisconnectionsPopUpProps) => {
  const [inputState, setState] = useState<PoopUpState>({
    popUpOpen: false,
    showContent: false,
  })

  const popUpRef = useRef(null)

  const { query } = useRouter()

  const modalAnim = {
    out: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: 0.25,
      },
    },
  }

  const moveSideAnim = {
    start: {
      x: '50%',
      opacity: 0,
      transition: {
        txpe: 'tween',
        duration: 0.25,
      },
    },
    middle: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    end: {
      opacity: 0,
      x: '-50%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }

  useOnClickOutside(popUpRef, () => {
    handlePopUp(false)
  })

  const handlePopUp = (state: boolean) => {
    document.body.style.overflow = state ? 'hidden' : 'auto'

    setState((prevState) => ({
      ...prevState,
      popUpOpen: state,
      showContent: false,
    }))

    if (state) {
      const sessionStorageObj = { mounted: true }
      sessionStorage.setItem(`RLDPopUp`, JSON.stringify(sessionStorageObj))
    }
  }

  useEffect(() => {
    return () => {
      setState((prevState) => prevState) // This worked for me
    }
  })

  useEffect(() => {
    const mountPopUp = debounce(() => {
      const sessionPopUp = JSON.parse(sessionStorage.getItem(`RLDPopUp`)!)

      if (!sessionPopUp?.mounted) {
        handlePopUp(true)
      }
    }, 1000)
    mountPopUp()
  }, [])

  return (
    <>
      <PopUp
        aria-label="Rota Load Disconnections PopUp"
        classModal={styles.addressPopUpModal}
        shouldShow={inputState.popUpOpen}
        animation={modalAnim}
        initial="out"
        animate="in"
        exit="out"
        focusTrap
        handleEscape={() => handlePopUp}
      >
        <div ref={popUpRef}>
          <div className={styles.modalControls}>
            <Button
              appearance={ButtonAppearance.BLANK}
              onClick={(e) => handlePopUp(false)}
              className={styles.closeModal}
              aria-label="close"
              type="button"
              tabIndex={0}
            >
              <Icon name={IconNames.CTA_CLOSE_ONE} />
            </Button>
          </div>
          {/* Main PopUp Content*/}
          {!inputState.showContent && (
            <motion.div
              className={styles.mainPopUpContainer}
              variants={moveSideAnim}
              key="main-content"
            >
              <Icon name={IconNames.PLANNED_PC} baseColour />
              <Heading
                level={4}
                className={styles.mainPopUpHeading}
                tabIndex={0}
              >
                {data?.powerSharingPopUpTitle}
              </Heading>
              <RichText
                text={data?.powerSharingPopUpMessage as string}
                className={styles.mainPopUpBody}
                tabIndex={0}
              />
              {!!data?.powerSharingPopUpButtons[0] &&
                !!data?.powerSharingPopUpButtons[0].uRL?.url &&
                !!data?.powerSharingPopUpButtons[0].uRL?.name && (
                  <div className={styles.mainPopUpScheduleLink}>
                    <CtaRender
                      cta={data?.powerSharingPopUpButtons[0]}
                      color={data?.powerSharingPopUpButtons[0].cTAType}
                      tabIndex={0}
                    />
                  </div>
                )}
              {!!data?.powerSharingPopUpButtons[1] &&
              !!data?.powerSharingPopUpButtons[1].uRL?.url &&
              !!data?.powerSharingPopUpButtons[1].uRL?.name ? (
                <>
                  {query?.slug ? (
                    <div
                      className={styles.mainPopUpReturnLink}
                      onClick={(e) => handlePopUp(false)}
                    >
                      <CtaRender
                        cta={data?.powerSharingPopUpButtons[1]}
                        color={data?.powerSharingPopUpButtons[1].cTAType}
                        tabIndex={0}
                      />
                    </div>
                  ) : (
                    <div className={styles.mainPopUpReturnButton}>
                      <Button
                        appearance={
                          data?.powerSharingPopUpButtons[1]
                            .__typename as ButtonAppearance
                        }
                        color={
                          data?.powerSharingPopUpButtons[1]
                            .cTAType as ButtonColors
                        }
                        className={styles.mainPopUpReturnButtonInner}
                        onClick={(e) => handlePopUp(false)}
                        aria-label="close-modal"
                        type="button"
                        tabIndex={0}
                      >
                        {data?.powerSharingPopUpButtons[1].uRL?.name}
                      </Button>
                    </div>
                  )}
                </>
              ) : null}
            </motion.div>
          )}
        </div>
      </PopUp>
    </>
  )
}

export default RotaLoadDisconnectionsPopUp
