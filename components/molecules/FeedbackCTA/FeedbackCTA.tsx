import { FeedbackCTAType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './FeedbackCTA.module.scss'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'

const FeedbackCTA = ({ feedbackCTAs }: FeedbackCTAType) => {
  return (
    <ComponentLayout
      containerClass={styles.FeedbackCTA}
      innerClass={styles.inner}
    >
      <div className={styles.feedbacksWrapper}>
        {feedbackCTAs.map((feedback, i) => (
          <div className={styles.feedback} key={i}>
            <Heading level={6} className={styles.feedbackTitle}>
              {feedback.title}
            </Heading>
            <p className={styles.feedbackText}>{feedback.text}</p>
            <Link
              appearance={LinkAppearance.BLUE_ARROW}
              target={feedback.cTALink.target}
              url={feedback.cTALink.url}
            >
              {feedback.cTALink.name}
            </Link>
          </div>
        ))}
      </div>
    </ComponentLayout>
  )
}

export default FeedbackCTA
