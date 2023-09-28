import { StormLiveFeedType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import StormSummary from '_molecules/StormSummary/StormSummary'
import StormFeed from '_molecules/StormFeed/StormFeed'
import styles from './StormLiveFeed.module.scss'

const StormLiveFeed = ({ storm }: StormLiveFeedType) => {
  return (
    <ComponentLayout
      containerClass={styles.StormLiveFeed}
      innerClass={styles.inner}
    >
      {storm?.descendants && (
        <div
          data-feed-only={!storm?.stormSummary || !!storm?.hideStormSummary}
          className={styles.feed}
        >
          <StormFeed {...storm} />
        </div>
      )}
      {storm?.stormSummary && !storm?.hideStormSummary && (
        <div className={styles.stromExtra}>
          <StormSummary {...storm.stormSummary[0]} />
        </div>
      )}
    </ComponentLayout>
  )
}

export default StormLiveFeed
