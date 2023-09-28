import { SlideOutPanelItems } from '_context/slideout-panel-context'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './SlideOutPannel.module.scss'
import { ButtonAppearance } from '_types/CMS'
import { useState, useEffect } from 'react'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

const SlideOutPannel = () => {
  const { setSlideOutPanelContent, slideOutPanelContent } = SlideOutPanelItems()
  const [isClose, setIsClosed] = useState(false)

  const closePanel = () => {
    setIsClosed(true)
    setTimeout(() => {
      setIsClosed(false)
      setSlideOutPanelContent?.('')
    }, 500)
  }

  useEffect(() => {
    if (slideOutPanelContent) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
      window.addEventListener('keydown', handleEscapeKeyDown, { passive: true })
    } else {
      window.removeEventListener('keydown', handleEscapeKeyDown)
      document.body.classList.remove('modal-open')
      document.body.style.overflow = 'scroll'
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown)
    }
  }, [slideOutPanelContent])

  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    e.key === 'Escape' ? closePanel() : null
  }

  if (slideOutPanelContent) {
    return (
      <aside className={styles.slideOutPannel} data-closed={isClose}>
        <div className={styles.slideOutPannelWrapper}>
          <Button
            className={styles.slideOutPannelClose}
            appearance={ButtonAppearance.BLANK}
            onClick={closePanel}
          >
            <Icon name={IconNames.CTA_CLOSE_ONE} size="xs" />
          </Button>
          <div className={styles.slideOutPannelContent}>
            <div
              dangerouslySetInnerHTML={{ __html: slideOutPanelContent }}
            ></div>
          </div>
        </div>
      </aside>
    )
  } else {
    return null
  }
}

export default SlideOutPannel
