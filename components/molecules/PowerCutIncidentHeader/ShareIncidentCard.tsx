import { ButtonAppearance, ComponentsTypeName } from '_types/CMS'
import SocialLinks from '_molecules/SocialLinks/SocialLinks'
import { Dispatch, SetStateAction, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Breakpoints } from '_types/local/breakpoints'
import Button from '_atoms/Button&Link/Button/Button'
import useOnClickOutside from '_hooks/onClickOutside'
import styles from './ShareIncidentCard.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

export interface ShareIncidentCardProps {
  setIsSharePopupOpen: Dispatch<SetStateAction<boolean>>
  isSharePopupOpen: boolean
}

const ShareIncidentCard = ({
  setIsSharePopupOpen,
  isSharePopupOpen,
}: ShareIncidentCardProps) => {
  const contentRef = useRef(null)

  useOnClickOutside(contentRef, () => {
    setIsSharePopupOpen(false)
  })

  const mobileAnim = {
    opacity: 1,
    y: '0%',
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  }

  const desktopAnim = {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  }

  const initialAnim =
    window.innerWidth < Breakpoints.MD ? { opacity: 0, y: '100%' } : ''

  const exitAnim =
    window.innerWidth < Breakpoints.MD
      ? {
          opacity: 1,
          y: '100%',
          transition: {
            type: 'tween',
            duration: 0.25,
          },
        }
      : ''

  return (
    <AnimatePresence exitBeforeEnter>
      {!!isSharePopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.card}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.cardContent}
            initial={initialAnim}
            ref={contentRef}
            exit={exitAnim}
            animate={
              window.innerWidth < Breakpoints.MD ? mobileAnim : desktopAnim
            }
            data-testid="shareCard"
          >
            <Button
              appearance={ButtonAppearance.BLANK}
              onClick={() => setIsSharePopupOpen(false)}
              className={styles.closeBtn}
              aria-label="close"
              type="button"
            >
              <Icon name={IconNames.ICO_CLOSE} />
            </Button>
            <SocialLinks
              __typename={ComponentsTypeName.SOCIAL_LINKS}
              title="Share incident"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ShareIncidentCard
