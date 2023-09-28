import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { aiTrackEvent } from '_utils/app-insights-track-event'
import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import styles from './PowerCutAddressModal.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { transformUrl } from '_utils/transform-url'
import { usePowerCut } from '_context/power-cut'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Address, IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'

const PowerCutAddressModal = ({}) => {
  const { setMapState } = usePowerCutMap()
  const { powerCutState, fetchRpcToggle } = usePowerCut()
  const dictionary = useDictionaryItems()
  const { push } = useRouter()
  const globalData = useUkpnGlobalData()

  const powerCutLinkUrl =
    globalData?.allSiteSettings?.reportPowerCutLink?.url || '/'

  const handleAddress = (address: Address) => {
    aiTrackEvent({
      name: 'handleAddress set searchedAddress',
      properties: {
        address,
      },
    })

    localStorage.setItem('searchedAddress', JSON.stringify(address))

    push(transformUrl(powerCutLinkUrl))
  }

  useEffect(() => {
    fetchRpcToggle()
  }, [])

  return (
    <div className={styles.modal}>
      <Button
        className={styles.modalCloseButton}
        type="button"
        appearance={ButtonAppearance.BLANK}
        onClick={() =>
          setMapState((prevState) => ({
            ...prevState,
            isAddressModalVisible: false,
          }))
        }
      >
        <Icon name={IconNames.ICON_CLOSE_TWO} size="xs" />
        <span className={styles.closeButtonText}>Close</span>
      </Button>
      <div className={styles.modalInner}>
        <Heading level={3} className={styles.modalHeading}>
          <RichText text={dictionary['powerCutModalTitle']} />
        </Heading>
        <div className={styles.modalText}>
          <RichText text={dictionary['powerCutModalMessage']} />
        </div>
        <div className={styles.addressLookupWrapper}>
          <AddressLookUpPowerCut
            placeholder={'Enter a postcode here'}
            {...(!powerCutState.disableRPCButton && {
              addressNotFound: dictionary.addressNotFoundMap,
            })}
            id={'MapPagePowerCut'}
            clickHandler={handleAddress}
            isPowerCutModalComponent
          />
        </div>
      </div>
    </div>
  )
}

export default PowerCutAddressModal
