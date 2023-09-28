import { NotificationType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './Notification.module.scss'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import React from 'react'
import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'
import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'

const Notification = ({
  secondaryCallToAction,
  notificationMessage,
  removeBottomMargin,
  enableLivePulse,
  pulseTitle,
  link,
}: NotificationType) => {
  return (
    <ComponentLayout
      removeBottomMargin={removeBottomMargin}
      containerClass={styles.notification}
      isHero={true}
    >
      <div className={styles.content}>
        <ConditionalWrapper
          condition={!!link?.url && !!link?.name}
          wrapper={(children) => (
            <Link
              className={styles.container}
              appearance={LinkAppearance.BLANK}
              url={link!.url}
            >
              {children}
            </Link>
          )}
          elseWrapper={(children) => (
            <div className={styles.container}>{children}</div>
          )}
        >
          <div
            className={styles.contentWrapper}
            data-has-link={!!link?.url && !!link?.name}
          >
            {!!enableLivePulse && !!pulseTitle && (
              <div className={styles.pulsingAnimationWrapper}>
                <PulsingAnimation
                  theme={PulsingAnimationTheme.WHITE}
                  text={pulseTitle}
                />
              </div>
            )}

            {!!notificationMessage && (
              <Heading
                className={styles.notificationMessage}
                level={6}
                data-full-width={!secondaryCallToAction}
              >
                {notificationMessage}
              </Heading>
            )}
            {!!secondaryCallToAction && !!link?.url && !!link?.name && (
              <div className={styles.ctaMore}>
                <p className={styles.secondaryCTAText}>
                  {secondaryCallToAction}
                </p>
              </div>
            )}
          </div>
        </ConditionalWrapper>
      </div>
    </ComponentLayout>
  )
}

export default Notification
