import { Link as LinkType, LinkAppearance } from '_types/CMS'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './CardButton.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

export interface CardButtonProps {
  link: LinkType
  icon?: IconNames
}

const CardButton = ({ link, icon }: CardButtonProps) => (
  <Link
    appearance={LinkAppearance.BLANK}
    className={styles.powerCutItem}
    url={link?.url}
  >
    <span>{!!icon && <Icon name={icon} baseColour />}</span>
    {link.name}
  </Link>
)

export default CardButton
