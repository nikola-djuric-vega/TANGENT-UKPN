import ReadMoreRichText from '_atoms/ReadMoreRichText/ReadMoreRichText'
import { StakeHolderPostType } from '_types/CMS/nodes/components/UKPN'
import Author, { AuthorLayout } from '_atoms/Author/Author'
import styles from './StakeHolderPost.module.scss'
import { formattedUpdateTime } from '_utils'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

export interface StakeHolderPostProps extends StakeHolderPostType {
  isPinned?: boolean
  displayed?: number
  componentKey?: number
}

const StakeHolderPost = ({
  isPinned = false,
  readMoreText,
  publishDate,
  summary,
  author,
  displayed,
  componentKey,
}: StakeHolderPostProps) => {
  return (
    <article
      className={styles.StormFeedCard}
      data-is-pinned={isPinned}
      aria-setsize={displayed}
      aria-posinset={componentKey}
    >
      <span className={styles.timelinePin}></span>
      <div className={styles.cardWrapper}>
        {(!!author || !!publishDate) && (
          <div className={styles.cardHeader}>
            {!!author && <Author {...author} layout={AuthorLayout.COLUMN} />}
            {publishDate && (
              <p className={styles.timeStamp}>
                <Icon name={IconNames.TIME} />
                {formattedUpdateTime(publishDate)}
              </p>
            )}
          </div>
        )}
        {summary && (
          <div className={styles.cardContent}>
            <div className={styles.postText}>
              <ReadMoreRichText
                className={styles.postMessage}
                readMoreText={readMoreText}
                isPinned={isPinned}
                text={summary}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default StakeHolderPost
