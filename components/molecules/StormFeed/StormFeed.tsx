import StakeHolderPost from '_molecules/StakeHolderPost/StakeHolderPost'
import { Storm, Post, PostType } from '_types/CMS/nodes/components/UKPN'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import MediaPost from '_molecules/MediaPost/MediaPost'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './StormFeed.module.scss'
import Heading from '_atoms/Heading/Heading'
import { useState } from 'react'

import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'

export interface StormFeedState {
  displayed: number
  posts: Post[]
}

const StormFeed = ({ stormName, descendants, pinnedPost }: Storm) => {
  const sortedFeed = descendants.items
    .sort((a, b) =>
      a.publishDate > b.publishDate ? -1 : a.publishDate < b.publishDate ? 1 : 0
    )
    .sort((c, d) =>
      c.id === pinnedPost?.id ? -1 : c.id !== pinnedPost?.id ? 1 : 0
    )

  const [{ posts, displayed }, setPosts] = useState<StormFeedState>({
    posts: sortedFeed.slice(0, 4),
    displayed: 4,
  })

  const renderPost = (post: Post, key: number) => {
    switch (post.__typename) {
      case PostType.MEDIA_POST:
        return (
          <MediaPost
            {...post}
            isPinned={post.id === pinnedPost?.id}
            displayed={displayed}
            componentKey={key}
            key={key}
          />
        )
      case PostType.STAKE_HOLDER_POST:
        return (
          <StakeHolderPost
            {...post}
            isPinned={post.id === pinnedPost?.id}
            displayed={displayed}
            componentKey={key}
            key={key}
          />
        )
      default:
        return null
    }
  }

  const loadMorePosts = () => {
    setPosts((prev) => ({
      posts: sortedFeed.slice(0, prev.displayed + 4),
      displayed: prev.displayed + 4,
    }))
  }

  return (
    <div className={styles.StormFeed}>
      <div className={styles.stormHeader}>
        <PulsingAnimation theme={PulsingAnimationTheme.ORANGE} text="LIVE" />
        <Heading level={5} className={styles.stormTitle}>
          {stormName}
        </Heading>
      </div>
      {!!descendants?.items.length && (
        <div className={styles.posts} role="feed">
          {posts.map((post, i) => renderPost(post, i))}
        </div>
      )}
      {sortedFeed.length !== posts.length && (
        <Button
          appearance={ButtonAppearance.PRIMARY}
          className={styles.loadMoreButton}
          aria-label="View more news"
          color={ButtonColors.DARK}
          onClick={loadMorePosts}
          role="button"
        >
          View more news
        </Button>
      )}
    </div>
  )
}

export default StormFeed
