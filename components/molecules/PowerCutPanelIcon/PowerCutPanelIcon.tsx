import styles from './PowerCutPanelIcon.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

export interface PowerCutPanelIconProps {
  className: string
  iconName: IconNames
}

const PowerCutPanelIcon = ({ iconName, className }: PowerCutPanelIconProps) => {
  return (
    <div className={styles.iconWrapper}>
      <Icon name={iconName} baseColour />
    </div>
  )
}

export default PowerCutPanelIcon
