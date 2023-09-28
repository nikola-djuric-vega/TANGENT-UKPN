import { AnchorComponentType } from '_types/CMS/nodes/components/UKPN'
import styles from './AnchorComponent.module.scss'

const AnchorComponent = ({ anchorName }: AnchorComponentType) => (
  <span
    data-testid="spanTestID"
    id={anchorName}
    className={styles.anchor}
  ></span>
)

export default AnchorComponent
