import { StormChecklistType } from '_types/CMS/pages'
import styles from './StormChecklist.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

const StormChecklist = ({
  stormChecklistSubtitle,
  stormChecklistTitle,
  stormChecklistLinks,
}: StormChecklistType) => {
  return (
    <section className={styles.stormChecklist}>
      <div className={styles.text}>
        <Heading level={6} className={styles.checklistTitle}>
          {stormChecklistTitle}
        </Heading>
        <p className={styles.checklistSubtitle}>{stormChecklistSubtitle}</p>
      </div>
      <div className={styles.linksWrapper}>
        {stormChecklistLinks?.map((link, index) => (
          <Link
            appearance={LinkAppearance.BLANK}
            target={link.linkURL.target}
            className={styles.link}
            url={link.linkURL.url}
            key={index}
          >
            <Icon
              name={link.linkIcon}
              baseColour
              className={styles.linkTitleIcon}
            />

            <p className={styles.linkName}>{link.linkURL.name}</p>
            <Icon
              name={IconNames.CIRCLED_SMALL_ARROW}
              className={styles.circledArrow}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default StormChecklist
