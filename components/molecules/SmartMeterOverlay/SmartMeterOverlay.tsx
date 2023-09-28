import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { SmartMeterOverlayType } from '_types/CMS/form'
import styles from './SmartMeterOverlay.module.scss'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import Icon from '_atoms/Icon/Icon'

const SmartMeterOverlay = ({
  smartMeterSubtitle,
  smartMeterBodyText,
  smartMeterTitle,
  smartMeterIcon,
}: SmartMeterOverlayType) => {
  return (
    <ComponentLayout innerClass={styles.smartMeterInner}>
      {!!smartMeterIcon && (
        <div className={styles.smartMeterIcon}>
          <Icon name={smartMeterIcon} size="full" />
        </div>
      )}
      <Heading level={1} tabIndex={0} className={styles.smartMeterTitle}>
        {smartMeterTitle}
      </Heading>
      {!!smartMeterSubtitle && (
        <p className={styles.smartMeterSubtitle}>{smartMeterSubtitle}</p>
      )}
      {!!smartMeterBodyText && (
        <RichText
          className={styles.smartMeterBodyText}
          text={smartMeterBodyText}
        />
      )}
    </ComponentLayout>
  )
}

export default SmartMeterOverlay
