import PulsingAnimation from '_atoms/PulsingAnimation/PulsingAnimation'
import { PowerCutBannerType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useDictionaryItems } from '_context/dictionary-items'
import { upperFirstLocation } from '_utils/upperFirstLocation'
import styles from './PowerCutBanner.module.scss'
import Heading from '_atoms/Heading/Heading'
import { useRouter } from 'next/router'
import Image from 'next/image'

import GraphicLines, {
  LinesPosition,
  LinesColor,
} from '_atoms/GraphicLines/GraphicLines'

const PowerCutBanner = ({ title, isLive, location }: PowerCutBannerType) => {
  const dictionary = useDictionaryItems()
  const router = useRouter()
  const handleAddress = () => router.push('/power-cut/map')

  const locationSlug = location && upperFirstLocation(location)

  return (
    <ComponentLayout innerClass={styles.PowerCutBanner} isHero={true}>
      <GraphicLines
        position={LinesPosition.TOP}
        className={styles.linesTop}
        colour={LinesColor.BLUE}
        bottomLineLength={104}
        topLineLength={636}
        role="graphic"
      />
      <GraphicLines
        position={LinesPosition.BOTTOM}
        className={styles.linesBottom}
        colour={LinesColor.BLUE}
        bottomLineLength={636}
        topLineLength={104}
        role="graphic"
      />
      <div className={styles.background}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/report_power_cut_hero.svg"
            objectPosition="center center"
            objectFit="cover"
            title={title}
            layout="fill"
            height={488}
            alt={title}
            width={700}
          />
        </div>
      </div>
      {isLive && (
        <div className={styles.pulsingAnimation}>
          <PulsingAnimation text="LIVE" />
        </div>
      )}
      <div className={styles.bannerContent}>
        {!!title && (
          <Heading className={styles.title} level={1}>
            {title}
            {!!locationSlug && ` in ${locationSlug}`}
          </Heading>
        )}
        <div className={styles.addressLookUpWrapper}>
          <AddressLookUpPowerCut
            placeholder="Enter a postcode here"
            addressNotFound={dictionary.addressNotFoundCheckMap}
            clickHandler={handleAddress}
            shouldTrack={true}
            id="PowerCutBanner"
            isPowerCutComponent
          />
        </div>
      </div>
    </ComponentLayout>
  )
}

export default PowerCutBanner
