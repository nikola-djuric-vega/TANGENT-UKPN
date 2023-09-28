import { IncidentReason as IncidentReasontype } from '_types/local/incidents'
import styles from './IncidentReason.module.scss'
import RichText from '_atoms/RichText/RichText'

const IncidentReason = ({ title, reason }: IncidentReasontype) => {
  return (
    <div className={styles.incidentReason}>
      {!!title && (
        <RichText className={styles.incidentReasonTitle} text={title} />
      )}
      {!!reason && (
        <RichText className={styles.incidentReasonDescription} text={reason} />
      )}
    </div>
  )
}

export default IncidentReason
