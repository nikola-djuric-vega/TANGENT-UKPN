import { SearchPowerCutsType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useDictionaryItems } from '_context/dictionary-items'
import { aiTrackEvent } from '_utils/app-insights-track-event'
import { Address } from '_types/local/address-lookup'
import CardButton from '_atoms/CardButton/CardButton'
import { transformUrl } from '_utils/transform-url'
import styles from './SearchPowerCuts.module.scss'
import Heading from '_atoms/Heading/Heading'
import { useRouter } from 'next/router'
import Image from 'next/image'

const SearchPowerCuts = ({
  searchPowerCutsMapLink,
  searchPowerCutsImage,
  searchPowerCutsItems,
  searchPowerCutsHeader,
  searchPowerCutsTitle,
}: SearchPowerCutsType) => {
  const dictionary = useDictionaryItems()
  const router = useRouter()

  const handleAddressPicker = (address: Address) => {
    aiTrackEvent({
      name: 'handleAddressPicker set searchedAddress',
      properties: {
        address,
      },
    })

    localStorage.setItem('searchedAddress', JSON.stringify(address))
    router.push(transformUrl(searchPowerCutsMapLink.url))
  }

  return (
    <ComponentLayout innerClass={styles.inner}>
      <div className={styles.search}>
        {!!searchPowerCutsImage && !!searchPowerCutsImage.url && (
          <div className={styles.image}>
            <Image
              height={searchPowerCutsImage.umbracoHeight}
              width={searchPowerCutsImage.umbracoWidth}
              title={searchPowerCutsImage.name}
              alt={searchPowerCutsImage.name}
              src={searchPowerCutsImage.url}
              layout="responsive"
            />
          </div>
        )}
        {!!searchPowerCutsHeader && !!searchPowerCutsTitle && (
          <div className={styles.text}>
            {!!searchPowerCutsHeader && (
              <Heading className={styles.title} level={4}>
                {searchPowerCutsTitle}
              </Heading>
            )}
            {!!searchPowerCutsTitle && (
              <p className={styles.header}>{searchPowerCutsHeader}</p>
            )}
          </div>
        )}
        <div className={styles.addressLookup}>
          <AddressLookUpPowerCut
            addressNotFound={dictionary.addressNotFoundCheckMap}
            clickHandler={handleAddressPicker}
            placeholder="Enter a postcode"
            isHomepageLookup={true}
            shouldTrack={true}
            id="PowerCutBox"
          />
        </div>
      </div>
      {!!searchPowerCutsItems?.length && (
        <div className={styles.powerCutItems}>
          {searchPowerCutsItems.map(({ icon, link }, i) => {
            return (
              !!link &&
              !!link.url && <CardButton key={i} link={link} icon={icon} />
            )
          })}
        </div>
      )}
    </ComponentLayout>
  )
}

export default SearchPowerCuts
