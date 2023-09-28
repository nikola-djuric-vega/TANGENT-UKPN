import styles from './InformationCard.module.scss'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import Icon from '_atoms/Icon/Icon'

import {
  InformationCardColour,
  InformationCardType,
} from '_types/CMS/nodes/components/UKPN'

const InformationCard = ({
  informationCardColour = InformationCardColour.PURPLE,
  informationCardTitle,
  informationCardIcon,
  informationCardText,
}: InformationCardType) => {
  return (
    <div className={styles.InformationCard} data-colour={informationCardColour}>
      {!!informationCardIcon && (
        <div role="graphic">
          <Icon
            name={informationCardIcon}
            className={styles.icon}
            baseColour={true}
          />
        </div>
      )}
      {!!informationCardTitle && (
        <Heading level={6} className={styles.title}>
          {informationCardTitle}
        </Heading>
      )}
      {!!informationCardText && (
        <RichText text={informationCardText} className={styles.text} />
      )}
    </div>
  )
}
export default InformationCard
