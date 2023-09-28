import { PowerCutComponentType } from '_types/CMS/nodes/components/UKPN'
import { isPowerCutLocation } from '_utils/is-power-cut-location'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useDictionaryItems } from '_context/dictionary-items'
import { upperFirstLocation } from '_utils/upperFirstLocation'
import { transformString } from '_utils/tranform-string'
import styles from './PowerCutComponent.module.scss'
import { transformUrl } from '_utils/transform-url'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

const PowerCutComponent = ({
  addressNotFound,
  postcodePlaceholderText,
  image,
  listLink,
  mapLink,
  cTAText,
  subtitle,
  title,
}: PowerCutComponentType) => {
  const dictionary = useDictionaryItems()
  const { push, query } = useRouter()

  if (query.slug && query.slug[1]) {
    let location = upperFirstLocation(query.slug[1])
    title = isPowerCutLocation(query.slug[1])
      ? transformString(dictionary.powerCutHeader.replace('[place]', location))
      : title
  }

  const handleAddress = () => push(transformUrl(mapLink.url))

  return (
    <section className={styles.powerCut}>
      {image && (
        <Image
          objectPosition="center bottom"
          title={image.name}
          alt={image.name}
          src={image.url}
          objectFit="cover"
          layout="fill"
        />
      )}
      <div className={styles.inner}>
        <div className={styles.powerCutLinks}>
          {cTAText && (
            <p className={styles.ctaTitle}>{transformString(cTAText)}</p>
          )}
          <Link
            appearance={LinkAppearance.BLANK}
            className={styles.mapsLink}
            target={mapLink.target}
            url={mapLink.url}
          >
            <Icon name={IconNames.ICO_MARKER} />
            Map
          </Link>
          <Link
            appearance={LinkAppearance.BLANK}
            className={styles.listLink}
            target={listLink.target}
            url={listLink.url}
          >
            <Icon name={IconNames.ICO_LIST} />
            List
          </Link>
        </div>
        <div className={styles.textPowerCut}>
          <Heading level={1} className={styles.title}>
            {title}
          </Heading>
          {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
          <div className={styles.addressLookUpWrapper}>
            <AddressLookUpPowerCut
              addressNotFound={dictionary.addressNotFoundCheckMap}
              placeholder={postcodePlaceholderText}
              clickHandler={handleAddress}
              id="PostcodePowerCut"
              isPowerCutComponent
              shouldTrack={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerCutComponent
