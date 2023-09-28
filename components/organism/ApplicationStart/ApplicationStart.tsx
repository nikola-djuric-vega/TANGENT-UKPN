import ApplicationStartChecklist from '_molecules/ApplicationStartChecklist/ApplicationStartChecklist'
import PostcodeForm from '_molecules/PostcodeForm/PostcodeForm'
import styles from './ApplicationStart.module.scss'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import { Link } from '_types/CMS'

export interface ApplicationStartProps {
  title?: string
  subTitle?: string
  checkListTitle?: string
  checklistItems?: string[]
  footer?: string
  formTitle?: string
  formDestination?: Link
  pDFDownloadLink?: Link
}

const ApplicationStart = ({
  title,
  subTitle,
  checkListTitle,
  checklistItems,
  footer,
  formTitle,
  formDestination,
  pDFDownloadLink,
}: ApplicationStartProps) => {
  return (
    <section className={styles.applicationStart}>
      <div className={styles.content}>
        <div className={styles.header}>
          {!!title && (
            <Heading level={2} className={styles.headerTitle} tabIndex={0}>
              {title}
            </Heading>
          )}
          {!!subTitle && (
            <div className={styles.headerSubtitle} tabIndex={0}>
              {subTitle}
            </div>
          )}
        </div>
        <div className={styles.formHeader}>
          <span className={styles.iconWrapper}>
            <Icon name={IconNames.ICON_TIMER} />
          </span>
          {!!formTitle && <div className={styles.formTitle}>{formTitle}</div>}
        </div>
        <div
          className={styles.textWrapper}
          data-has-footer-only={!checkListTitle && !checklistItems && !!footer}
        >
          {!!checkListTitle && !!checklistItems && (
            <ApplicationStartChecklist
              checkListTitle={checkListTitle}
              checklistItems={checklistItems}
            />
          )}
          {!!footer && (
            <RichText
              text={footer}
              className={styles.footerText}
              data-has-top-border={!checklistItems}
              tabIndex={0}
            />
          )}
        </div>
        <div className={styles.postcodeFormWrapper}>
          <PostcodeForm
            formDestination={formDestination}
            pDFDownloadLink={pDFDownloadLink}
          />
          <div className={styles.backgroundRings} />
        </div>
      </div>
    </section>
  )
}

export default ApplicationStart
