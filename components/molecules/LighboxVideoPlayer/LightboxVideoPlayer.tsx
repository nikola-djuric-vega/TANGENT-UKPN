import { ModalState, toggleModal } from '_utils/toggle-modal'
import styles from './LightboxVideoPlayer.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import React, { useEffect, useRef, useState } from 'react'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import ReactPlayer from 'react-player'
import Icon from '_atoms/Icon/Icon'
import dynamic from 'next/dynamic'
import ReactDOM from 'react-dom'

export interface LightBoxVideoPlayerProps {
  setState: React.Dispatch<React.SetStateAction<string>>
  url?: string
}

const DynamicReactPlayer = dynamic(
  () => import('react-player')
) as typeof ReactPlayer

const LightBoxVideoPlayer = ({ url, setState }: LightBoxVideoPlayerProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (closeRef.current) {
      closeRef.current.focus()
    }

    setContainer(document?.getElementById('modal-root'))
  }, [])

  const closeRef = useRef<HTMLButtonElement | null>(null)

  const closeModal = () => {
    setState('')
    toggleModal(ModalState.CLOSE)
  }

  return (
    container &&
    ReactDOM.createPortal(
      <div className={styles.LightBoxVideoPlayer}>
        <div className={styles.wrapper}>
          <Button
            className={styles.closeButton}
            appearance={ButtonAppearance.BLANK}
            onClick={closeModal}
            ref={closeRef}
          >
            <span className={styles.closeButtonText}>Close</span>
            <Icon name={IconNames.ICO_CLOSE} size="xs" />
          </Button>
          <div className={styles.playerWrapper}>
            <DynamicReactPlayer
              className={styles.reactPlayer}
              url={url}
              controls
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </div>,
      container
    )
  )
}

export default LightBoxVideoPlayer
