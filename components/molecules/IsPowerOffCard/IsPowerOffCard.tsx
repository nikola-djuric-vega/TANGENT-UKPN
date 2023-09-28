import { IsPowerOffCardType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import CardList from '_molecules/CardList/CardList'
import styles from './IsPowerOffCard.module.scss'
import Heading from '_atoms/Heading/Heading'
import { useRouter } from 'next/router'
import { useDictionaryItems } from '_context/dictionary-items'

const IsPowerOffCard = ({
  powerOffTitle,
  powerOffSubtitle,
  links,
}: IsPowerOffCardType) => {
  const dictionary = useDictionaryItems()
  const router = useRouter()
  const handleAddress = () => router.push('/power-cut/map')

  return (
    <ComponentLayout
      innerClass={styles.isPowerOffCard}
      removeGridPadding
      removeBottomMargin
    >
      <div className={styles.content}>
        {!!powerOffTitle && (
          <Heading level={3} className={styles.heading}>
            {powerOffTitle}
          </Heading>
        )}
        {!!powerOffSubtitle && (
          <p className={styles.subTitle}>{powerOffSubtitle}</p>
        )}
        <AddressLookUpPowerCut
          addressNotFound={dictionary.addressNotFoundCheckMap}
          placeholder="Enter a postcode here"
          clickHandler={handleAddress}
          shouldTrack={true}
          isPowerCutComponent
          id="IsPowerOff"
        />
      </div>
      {!!links?.length && <CardList items={links} />}
    </ComponentLayout>
  )
}

export default IsPowerOffCard
