import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { Link as LinkType, LinkAppearance, ButtonColors } from '_types/CMS'
import ReadMoreRichText from '_atoms/ReadMoreRichText/ReadMoreRichText'
import { MediaPostType } from '_types/CMS/nodes/components/UKPN'
import Author, { AuthorLayout } from '_atoms/Author/Author'
import Link from '_atoms/Button&Link/Link/Link'
import { formattedUpdateTime } from '_utils'
import styles from './MediaPost.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

export interface MediaPostProps extends MediaPostType {
  isPinned?: boolean
  displayed?: number
  componentKey?: number
}

const MediaPost = ({
  isPinned = false,
  publishDate,
  summary,
  isVideo,
  author,
  title,
  image,
  link,
  displayed,
  componentKey,
}: MediaPostProps) => {
  return (
    <article
      className={styles.StormFeedCard}
      data-is-pinned={isPinned}
      aria-setsize={displayed}
      aria-posinset={componentKey}
    >
      <span className={styles.timelinePin}></span>
      <ConditionalWrapper
        condition={!!link && !!link.url && !isVideo}
        wrapper={(children) => (
          <Link
            target={(link as LinkType).target}
            appearance={LinkAppearance.BLANK}
            className={styles.cardWrapper}
            url={(link as LinkType).url}
            color={ButtonColors.DARK}
          >
            {children}
          </Link>
        )}
        elseWrapper={(children) => (
          <div className={styles.cardWrapper}>{children}</div>
        )}
      >
        <>
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
          <div className={styles.cardContent}>
            {image && (
              <div className={styles.postImage}>
                <Image
                  objectPosition="center center"
                  alt={image.name}
                  src={image.url}
                  objectFit="cover"
                  layout="fill"
                />
                {isVideo && link && link.url && (
                  <Link
                    appearance={LinkAppearance.BLANK}
                    className={styles.videoButton}
                    aria-label="play video"
                    target="_blank"
                    url={link.url}
                  >
                    <Icon name={IconNames.ICON_VIDEO} />
                  </Link>
                )}
              </div>
            )}
            <div className={styles.postText}>
              {title && (
                <p className={styles.postTitle}>
                  {title}
                  {!!link && !!link.url && <Icon name={IconNames.REDIRECT} />}
                </p>
              )}
              {summary && (
                <ReadMoreRichText
                  className={styles.summary}
                  isPinned={isPinned}
                  text={summary}
                />
              )}
            </div>
          </div>
        </>
      </ConditionalWrapper>
    </article>
  )
}

export default MediaPost
