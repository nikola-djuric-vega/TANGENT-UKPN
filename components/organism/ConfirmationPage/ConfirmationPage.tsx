import PowerCutCurvedBanner from '_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner'
import { ConfirmationSuccess, ConfirmationFailure } from '_types/CMS/pages'
import { ComponentsTypeName, LinkAppearance, TextSizes } from '_types/CMS'
import styles from './ConfirmationPage.module.scss'
import RichText from '_atoms/RichText/RichText'
import Link from '_atoms/Button&Link/Link/Link'

const ConfirmationPage = ({
  copy,
  title,
  icon,
  cTA,
  backButton,
}: ConfirmationSuccess | ConfirmationFailure) => {
  return (
    <div className={styles.ConfirmationPage}>
      <PowerCutCurvedBanner
        __typename={ComponentsTypeName.POWER_CUT_CURVED_BANNER}
        title={title}
        icon={icon}
        backButton={backButton}
      />
      <section className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.ConfirmationPageContent}>
            <RichText text={copy} size={TextSizes.TEXT_BODY_2} />
            {cTA && (
              <Link
                appearance={LinkAppearance.PRIMARY}
                target={cTA.target}
                url={cTA.url}
              >
                {cTA.name}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConfirmationPage
