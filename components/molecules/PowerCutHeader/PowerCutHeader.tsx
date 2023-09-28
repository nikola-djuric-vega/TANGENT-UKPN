import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { ButtonAppearance, LinkAppearance } from '_types/CMS'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import useOnClickOutside from '_hooks/onClickOutside'
import styles from './PowerCutHeader.module.scss'
import { Address, IconNames } from '_types/local'
import { usePowerCut } from '_context/power-cut'
import Link from '_atoms/Button&Link/Link/Link'
import { useEffect, useRef } from 'react'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

export interface AreaCheck {
  address: Address | null
  isSuccessful: boolean
  notInTheArea: boolean
  incorrectAddress: boolean
}

export interface PowerCutHeaderProps {
  hasSearch?: boolean
}

const PowerCutHeader = ({ hasSearch = false }) => {
  const dictionary = useDictionaryItems()
  const { mapState, setMapState, actions } = usePowerCutMap()
  const { powerCutState, setPowerCutState, fetchRpcToggle } = usePowerCut()
  const globalData = useUkpnGlobalData()
  const powerCutHeader = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    fetchRpcToggle()
  }, [])

  useEffect(() => {
    if (
      !powerCutState.isMenuOpen &&
      menuButtonRef.current &&
      powerCutState.wasMenuOpen
    ) {
      menuButtonRef.current.focus()
    }
  }, [powerCutState.wasMenuOpen, powerCutState.isMenuOpen])

  useOnClickOutside(powerCutHeader, () => {
    if (!!powerCutState.isSearchOpen) {
      setPowerCutState((prevState) => ({ ...prevState, isSearchOpen: false }))
    }
  })

  const handleAddress = async (
    address: Address,
    postcodeInput: React.RefObject<HTMLInputElement> | null
  ) => {
    setPowerCutState((prevState) => ({ ...prevState, isSearchOpen: false }))

    await actions.loadIncidentFromSearch(address, mapState.incidents)

    if (postcodeInput?.current) {
      postcodeInput.current.value = ''
    }
  }

  return (
    <div className={styles.header} ref={powerCutHeader}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link
            className={styles.mobileLogoLink}
            appearance={LinkAppearance.BLANK}
            url="/"
            aria-label="logo"
          >
            {globalData?.allSiteSettings?.mobileLogo?.url && (
              <Image
                src={globalData.allSiteSettings.mobileLogo.url}
                title="UK Power Network"
                width={98}
                height={32}
                alt="logo"
              />
            )}
          </Link>
          <Link
            className={styles.desktopLogoLink}
            appearance={LinkAppearance.BLANK}
            url="/"
            aria-label="logo"
          >
            {globalData?.allSiteSettings?.mobileLogo?.url && (
              <Image
                src={globalData.allSiteSettings.mobileLogo.url}
                title="UK Power Network"
                layout="responsive"
                width={146}
                height={48}
                alt="logo"
              />
            )}
          </Link>
        </div>
        {hasSearch && (
          <div
            className={styles.searchContainer}
            data-is-menu-open={powerCutState.isMenuOpen}
          >
            <div className={styles.searchContainerInner}>
              <AddressLookUpPowerCut
                {...(!powerCutState.disableRPCButton && {
                  addressNotFound: dictionary.addressNotFoundMap,
                })}
                placeholder="Enter postcode to search for live power cuts"
                clickHandler={handleAddress}
                isPowerCutHeader={true}
                shouldTrack={hasSearch}
                id="power-cut-map-search"
              />
            </div>
          </div>
        )}
        <div
          className={styles.menuIconContainer}
          onClick={() =>
            setPowerCutState((prevState) => ({
              ...prevState,
              isMenuOpen: !powerCutState.isMenuOpen,
            }))
          }
          data-is-menu-open={powerCutState.isMenuOpen}
        >
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.menuButton}
            data-is-menu-open={powerCutState.isMenuOpen}
            aria-expanded={powerCutState.isMenuOpen}
            aria-controls="menu"
            id="menu-open"
            ref={menuButtonRef}
            tabIndex={0}
          >
            Menu
            <span className={styles.menuIcon}>
              <span className={styles.menuIconBar}></span>
              <span className={styles.menuIconBar}></span>
              <span className={styles.menuIconBar}></span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PowerCutHeader
