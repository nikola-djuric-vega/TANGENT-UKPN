import { PlainLinkType } from '_types/CMS/nodes/components/UKPN'
import styles from './PowerCutPanelLink.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import { LinkAppearance } from '_types/CMS'

const PowerCutPanelLink = ({ title, link }: PlainLinkType) => {
  return link?.url ? (
    <div className={styles.linkWrapper}>
      <Link
        appearance={LinkAppearance.BLANK}
        url={link?.url}
        target={link?.target}
        className={styles.powerCutPanelLink}
      >
        {title}
      </Link>
    </div>
  ) : null
}

export default PowerCutPanelLink
