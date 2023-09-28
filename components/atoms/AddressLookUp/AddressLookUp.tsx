import { mapContainerStyle, mapOptions } from '_organism/MapPage/map-options'
import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { createAxiosInstance } from '_utils/create-axios-instance'
import { checkRLDIncidentByPostcode } from '_utils/check-rld-incident'
import { transformDnoMessage } from '_utils/transform-dno-message'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { Address, IconNames } from '_types/local'
import styles from './AddressLookUp.module.scss'
import { usePowerCut } from '_context/power-cut'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import { DnosEntity } from '_types/CMS/nodes'
import { useRouter } from 'next/router'
import { toNormalised } from 'postcode'
import debounce from 'lodash/debounce'
import { motion } from 'framer-motion'
import isArray from 'lodash/isArray'
import PopUp from '_hoc/PopUp/PopUp'
import Icon from '../Icon/Icon'
import Image from 'next/image'

import {
  PostcodeService,
  getDnoContent,
  toggleModal,
  ModalState,
  transformUrl,
} from '_utils'
export interface Geolocation {
  lat: number
  lng: number
}
export interface AddressLookUpProps {
  isMpan?: boolean
  name?: string
  isAreaChecker?: boolean
  isPostcodeForm?: boolean
  isPostcodeSearch?: boolean
  setInputPostcodeSearchValue?: (input: string) => void
  placeholder: string
  shouldShowDno?: boolean
  shouldTrack?: boolean
  addressNotFound?: string
  defaultValue?: Address
  loadOnMount?: string
  onInvalid?: (err: boolean) => void
  id: string
  clickHandler?: (
    address: Address,
    input: React.RefObject<HTMLInputElement> | null
  ) => void
  clearHandler?: () => void
  scrollRef?: React.RefObject<HTMLButtonElement> | null
  children?: React.ReactNode
}

export interface LookUpState {
  addresses: Address[] | null
  shouldValidate: boolean
  inputValue: string
  isLoading: boolean
  isDno: boolean | number
  dnoData?: DnosEntity
  isError: boolean
  popUpOpen: boolean
  showMap: boolean
  pinLocation?: Geolocation
  recentSearches?: Address[]
  initial: boolean
  map?: GoogleMap
}

const AddressLookUp = ({
  isPostcodeForm = false,
  isAreaChecker = false,
  shouldShowDno = true,
  shouldTrack = false,
  isPostcodeSearch = false,
  setInputPostcodeSearchValue,
  addressNotFound,
  isMpan = false,
  defaultValue,
  clickHandler,
  clearHandler,
  placeholder,
  loadOnMount,
  onInvalid,
  children,
  id,
  scrollRef = null,
  ...props
}: AddressLookUpProps) => {
  const [selectedAddress, setSelectedAddress] = useState<Address>({} as Address)
  const { powerCutState, setPowerCutState, fetchRpcToggle } = usePowerCut()
  const postcodeInput = useRef<HTMLInputElement>(null)
  const displayInput = useRef<HTMLInputElement>(null)
  const postcodeList = useRef<HTMLDivElement>(null)
  const { mapState, setMapState } = usePowerCutMap()
  const DEBOUNCE_POSTCODE_KEYPRESS = 1500
  const globalData = useUkpnGlobalData()
  const router = useRouter()

  const executeScrollToTop = () => scrollRef?.current?.scrollIntoView()

  const [inputState, setState] = useState<LookUpState>({
    shouldValidate: true,
    addresses: null,
    popUpOpen: false,
    isLoading: false,
    isError: false,
    inputValue: '',
    showMap: false,
    initial: true,
    isDno: false,
  })

  useEffect(() => {
    if (inputState.isLoading) {
      fetchRpcToggle()
    }
  }, [inputState.isLoading])

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  //   channel: 'EXTERNAL_SCVIEW',
  //   id: 'google-map-script',
  // })

  const addressReq = createAxiosInstance({
    baseURL: '/api',
  })

  const mapCenter = {
    lat: 51.507602,
    lng: -0.127816,
  }

  const modalAnim = {
    out: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: 0.25,
      },
    },
  }

  const moveUpAnim = {
    start: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    middle: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    end: {
      opacity: 0,
      y: '-20%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }

  const moveSideAnim = {
    start: {
      x: '50%',
      opacity: 0,
      transition: {
        txpe: 'tween',
        duration: 0.25,
      },
    },
    middle: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    end: {
      opacity: 0,
      x: '-50%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }

  const getAddresses = async (postcode: string) => {
    return await addressReq.get(`/get-addresses?postcode=${postcode}`)
  }

  const submitAddress = (address: Address) => {
    PostcodeService.storerRecentSearch(address)
    handleReset(true)

    if (isAreaChecker || isMpan || isPostcodeForm) {
      handleServiceChecker(address)
    } else {
      PostcodeService.setAddress(address, '', true)

      setMapState((prevState) => ({
        ...prevState,
        searchedAddress: address,
      }))
    }

    if (displayInput.current) {
      displayInput.current.value = PostcodeService.formatAddress(address)
    }

    handlePopUp(false)

    checkRLDIncidentByPostcode(address.postCode, address)
      .then((response) => {
        if (response.redirect) {
          router.push(
            `${process.env.NEXT_PUBLIC_RLD_REDIRECT_LINK}/${response?.scheduleBlocks}/`
          )
        } else {
          clickHandler?.(address, postcodeInput)
          document.body.style.overflow = ''

          if (shouldTrack) {
            addressReq.post('/postcode-search', {
              mpan: address.mpan.toString(),
              postcode: address.postCode,
            })
          }
        }
      })
      .catch(console.error)
  }

  const handleReset = (closeModal?: boolean) => {
    clearHandler?.()

    onInvalid?.(false)
    if (postcodeInput && postcodeInput.current) {
      postcodeInput.current.value = ''
    }
    if (displayInput && displayInput.current) {
      displayInput.current.value = ''
    }

    setState((prevState) => {
      return {
        ...prevState,
        ...(closeModal && { popUpOpen: false }),
        dnoData: undefined,
        addresses: null,
        isLoading: false,
        inputValue: '',
        isError: false,
        showMap: false,
        isDno: false,
        initial: true,
      }
    })
  }

  const handlePostcode = async (postcode: string, preventFocus = false) => {
    if (PostcodeService.validatePostcode(postcode)) {
      onInvalid?.(false)
      setState((prevState) => {
        return {
          ...prevState,
          // Don't show loading state for isPostcodeForm
          isLoading: isPostcodeForm ? false : true,
          inputValue: postcode,
          isError: false,
          initial: false,
          isDno: false,
        }
      })

      await getAddresses(postcode).then((res) => {
        localStorage.removeItem('searchedAddress')

        setMapState((prevState) => {
          return {
            ...prevState,
            searchedAddress: null,
          }
        })

        if (isPostcodeForm && clickHandler && isArray(res?.data) && res?.data) {
          const hasOutOfArea = res.data.some(
            (addr: Address) => !addr.isInUkpnDno
          )

          if (!hasOutOfArea) {
            clickHandler(res.data as any, postcodeInput)

            return
          }
        }

        if (!res?.data && isAreaChecker) {
          clickHandler?.(res?.data, postcodeInput)
        }
        setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            isError: false,
            addresses: res?.data ? res?.data : [],
          }
        })
      })

      if (postcodeInput && postcodeInput.current) {
        postcodeInput.current.blur()
      }
      if (postcodeList && postcodeList.current && !preventFocus) {
        postcodeList.current.focus()
      }
    } else {
      onInvalid?.(true)
      setState((prevState) => {
        return { ...prevState, isLoading: false, isError: true, isDno: false }
      })
    }
  }

  const handleServiceChecker = (address: Address) => {
    if (postcodeInput && postcodeInput.current) {
      postcodeInput.current.value = PostcodeService.formatAddress(address)
    }
  }

  const handleInputChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const postcode = (e.target as HTMLInputElement).value
      if (postcode === '') {
        handleReset()
      } else {
        handlePostcode(postcode)
      }
    },
    DEBOUNCE_POSTCODE_KEYPRESS
  )

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const postcode = (e.target as HTMLInputElement).value
    if (e.key === 'Enter' && postcode !== '') {
      e.preventDefault()
      handlePostcode(postcode)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      handleReset()
    }
  }

  const handleFocusSearch = (elm: React.RefObject<HTMLInputElement>) => {
    if (elm && elm.current) {
      elm.current.focus()
    }
  }

  const handleStateAfterInteraction = (address: Address) => {
    if (!address.isInUkpnDno && !isAreaChecker && shouldShowDno) {
      setState((prevState) => {
        return {
          ...prevState,
          isDno: address.dno,
          dnoData: getDnoContent(
            address?.dno,
            globalData?.allSiteSettings?.DNOs?.children?.items
          ),
          addresses: null,
        }
      })
    } else {
      submitAddress(address)
    }
  }

  const handleInteraction = (address: Address) => {
    setSelectedAddress(address)
    handleStateAfterInteraction(address)
  }

  useEffect(() => {
    return () => {
      setState((prevState) => prevState) // This worked for me
    }
  })

  useEffect(() => {
    if (powerCutState.isSearchOpen) {
      postcodeInput.current?.focus({ preventScroll: true })
    }
  }, [powerCutState.isSearchOpen])

  useEffect(() => {
    if (!!loadOnMount && mapState.isCurrentThankYouPanelOpen) {
      const postcode = toNormalised(loadOnMount)
      handlePostcode(loadOnMount, true)

      const init = async () => {
        if (postcode) {
          await handlePopUp(true)
          handlePostcode(postcode, true)

          if (postcodeInput.current) {
            postcodeInput.current.value = postcode
          }
        }
      }

      init()
    } else if (
      defaultValue &&
      mapState.isCurrentThankYouPanelOpen &&
      displayInput.current
    ) {
      displayInput.current.value = PostcodeService.formatAddress(defaultValue)
    }
  }, [mapState.isCurrentThankYouPanelOpen])

  const handlePopUp = async (
    state: boolean,
    e?: React.FocusEvent<HTMLInputElement>
  ) => {
    let recentSearches: Address[] | null
    if (!!e) {
      e.target?.blur()
    }

    if (state) {
      recentSearches = getRecentSearches()
    }

    setState((prevState) => ({
      ...prevState,
      ...(recentSearches?.length && { recentSearches: recentSearches }),
      popUpOpen: state,
      isLoading: false,
      addresses: null,
      showMap: false,
    }))
  }

  const handleMapToggle = (state: boolean) => {
    let userLocation: Geolocation

    if (state && 'geolocation' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition((pos) => {
            userLocation = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }
          })
        }
      })
    }

    setState((prevState) => ({
      ...prevState,
      pinLocation: userLocation,
      showMap: state,
    }))
  }

  const getRecentSearches = () => {
    const jsonRecentSearches = localStorage.getItem('recentSearches')
    return jsonRecentSearches
      ? JSON.parse(jsonRecentSearches).splice(0, 2)
      : null
  }

  const onPinDrag = (event: google.maps.MapMouseEvent) => {
    setState((prevState) => ({
      ...prevState,
      pinLocation: {
        lat: event.latLng?.lat() as number,
        lng: event.latLng?.lng() as number,
      },
    }))
  }

  const onLoad = useCallback((map) => {
    setState((prevState) => ({
      ...prevState,
      map: map,
    }))
  }, [])

  const onUnmount = useCallback((map) => {
    setState((prevState) => ({
      ...prevState,
      map: undefined,
    }))
  }, [])

  useEffect(() => {
    if (isPostcodeSearch) {
      setInputPostcodeSearchValue?.(displayInput.current?.value || '')
    }
  }, [displayInput.current?.value])

  return (
    <>
      <div className={styles.addressSearchBar}>
        {!!displayInput.current?.value && isPostcodeSearch && (
          <Button
            onClick={() => handleFocusSearch(postcodeInput)}
            appearance={ButtonAppearance.BLANK}
            className={styles.searchButtonPostcodeSearch}
            aria-label="search"
            type="button"
            tabIndex={0}
          >
            <Icon name={IconNames.ICON_SEARCH} />
          </Button>
        )}
        <input
          aria-controls="postcode-search_open"
          aria-expanded={inputState.popUpOpen}
          onFocus={(e) => {
            scrollRef && executeScrollToTop()
            handlePopUp(true, e)
          }}
          aria-owns="postcode-search_open"
          placeholder={placeholder}
          aria-labelledby={id}
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          role="combobox"
          type="text"
          {...props}
          id={id}
          ref={displayInput}
          className={styles.addressSearchBarInput}
        />
        {!!displayInput.current?.value && isPostcodeSearch ? (
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.closeButtonPostcodeSearch}
            onClick={() => handleReset()}
            aria-label="reset search"
            type="button"
          >
            <Icon name={IconNames.ICO_CLOSE} />
          </Button>
        ) : (
          <Button
            appearance={ButtonAppearance.PRIMARY}
            onClick={(e) => handlePopUp(true)}
            className={styles.lensButton}
            aria-label="search"
            type="button"
          >
            <span className={styles.lensButtonText}>Search</span>
            <Icon name={IconNames.ICON_SEARCH} />
          </Button>
        )}
      </div>
      <PopUp
        classModal={styles.addressPopUpModal}
        shouldShow={inputState.popUpOpen}
        aria-label="Address search"
        animation={modalAnim}
        initial="out"
        animate="in"
        exit="out"
      >
        <div className={styles.modalControls}>
          {(inputState.showMap ||
            (inputState.addresses &&
              !!inputState.addresses.length &&
              !inputState.initial)) && (
            <Button
              appearance={ButtonAppearance.BLANK}
              className={styles.backButton}
              onClick={() => handleReset()}
              aria-label="back"
              type="button"
            >
              <Icon name={IconNames.LEFT_ARROW} />
            </Button>
          )}
          <Button
            appearance={ButtonAppearance.BLANK}
            onClick={(e) => handlePopUp(false)}
            className={styles.closeModal}
            aria-label="close"
            type="button"
          >
            <Icon name={IconNames.ICO_CLOSE} />
          </Button>
        </div>
        {/* INPUT FIELDS */}
        {!inputState.showMap && (
          <motion.div
            data-error={inputState.isError}
            className={styles.inputField}
            variants={moveSideAnim}
            key="input-field"
          >
            <Button
              onClick={() => handleFocusSearch(postcodeInput)}
              appearance={ButtonAppearance.BLANK}
              className={styles.searchButton}
              aria-label="search"
              type="button"
              tabIndex={0}
            >
              <Icon name={IconNames.ICON_SEARCH} />
            </Button>
            <input
              placeholder={'Enter a postcode here'}
              onChange={(e) => handleInputChange(e)}
              onKeyDown={(e) => handleKeyEnter(e)}
              aria-labelledby={id}
              ref={postcodeInput}
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              autoFocus
              type="text"
              {...props}
            />
            {!!postcodeInput.current?.value && (
              <Button
                appearance={ButtonAppearance.BLANK}
                className={styles.closeButton}
                onClick={() => handleReset()}
                aria-label="reset search"
                type="button"
              >
                <Icon name={IconNames.ICO_CLOSE} />
              </Button>
            )}
            {inputState.isError && (
              <p
                className={styles.inputFieldError}
                aria-label="Address error"
                tabIndex={0}
                role="group"
              >
                Please enter a full, valid postcode
              </p>
            )}
          </motion.div>
        )}
        {/* RECENT SEARCHES */}
        {inputState.initial &&
          !inputState.isLoading &&
          !inputState.showMap &&
          !inputState.isDno &&
          inputState.recentSearches && (
            <motion.div
              className={styles.recentSearch}
              variants={moveSideAnim}
              key="recent-searches"
              animate="middle"
              initial="end"
              exit="end"
            >
              <p className={styles.recentResultLabel}>Your recent result</p>
              <div className={styles.recentSearchItems}>
                {inputState.recentSearches.map((address, i) => (
                  <Button
                    aria-selected={selectedAddress.mpan === address.mpan}
                    onClick={() => handleInteraction(address)}
                    appearance={ButtonAppearance.BLANK}
                    className={styles.addressOption}
                    key={address.mpan}
                    data-index={i}
                    role="option"
                    type="button"
                    tabIndex={0}
                  >
                    <span>{PostcodeService.formatAddress(address)}</span>
                    <Icon name={IconNames.ICON_CHEVRON_RIGHT} />
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        {/* LOADING STATE */}
        {inputState.isLoading && (
          <motion.p
            aria-valuetext="Searching for addresses"
            className={styles.loader}
            variants={moveUpAnim}
            role="progressbar"
            aria-busy="true"
            animate="middle"
            initial="start"
            key="loader"
            exit="end"
          >
            Searching for addresses
            <span>.</span>
          </motion.p>
        )}
        {/* RESULTS */}
        {inputState.addresses &&
          !!inputState.addresses.length &&
          !inputState.isLoading &&
          !inputState.isError &&
          !inputState.isDno && (
            <motion.div
              className={styles.addressLookUpResults}
              variants={moveSideAnim}
              key="search-results"
              ref={postcodeList}
              animate="middle"
              initial="start"
              tabIndex={0}
              role="list"
              exit="end"
            >
              {inputState.addresses.map((address, i) => (
                <Button
                  aria-selected={selectedAddress.mpan === address.mpan}
                  onClick={() => handleInteraction(address)}
                  appearance={ButtonAppearance.BLANK}
                  className={styles.addressOption}
                  data-postcode={address.postCode}
                  data-mpan={address.mpan}
                  data-index={i}
                  role="option"
                  type="button"
                  tabIndex={0}
                  key={i}
                >
                  <span>{PostcodeService.formatAddress(address)}</span>
                  <Icon name={IconNames.ICON_CHEVRON_RIGHT} />
                </Button>
              ))}
            </motion.div>
          )}
        {/* NOT FOUND BOX */}
        {/* TODO: Below button is not needed for initial release, add it at a later date */}
        {inputState.addresses &&
          !inputState.isLoading &&
          !inputState.showMap &&
          !inputState.isDno &&
          (addressNotFound || children) && (
            <motion.div
              className={styles.addressNotFound}
              variants={moveSideAnim}
              key="address-not-found"
              animate="middle"
              initial="end"
              exit="end"
            >
              {addressNotFound && (
                <RichText
                  className={styles.addressNotFoundText}
                  text={addressNotFound}
                />
              )}
              {children && (
                <div className={styles.addressLookUpFooter} tabIndex={0}>
                  {children}
                </div>
              )}
            </motion.div>
          )}
        {/* DNO BOX */}
        {inputState.isDno && (
          <motion.div
            className={styles.dnoMessage}
            variants={moveUpAnim}
            key="dno-message"
            animate="middle"
            aria-label="dno"
            initial="start"
            exit="end"
          >
            <Icon name={IconNames.FORTY_PX_NOT_FOUND} baseColour={true} />
            <RichText
              className={styles.titleDno}
              text={`<p>Unfortunately we’re not the local electricity distributor for this postcode '${selectedAddress?.postCode}'</p>`}
            />
            <p className={styles.contactDno}>
              You should contact your distributor:
            </p>

            {inputState.dnoData?.dnoLogo && (
              <div className={styles.dnoImage}>
                <Image
                  height={inputState.dnoData.dnoLogo.umbracoHeight}
                  width={inputState.dnoData.dnoLogo.umbracoWidth}
                  src={inputState.dnoData.dnoLogo.url}
                  layout="responsive"
                  alt="dno - logo"
                />
              </div>
            )}
            {inputState.dnoData?.dnoPhoneNumber && (
              <Link
                url={'tel:' + inputState.dnoData?.dnoPhoneNumber}
                appearance={LinkAppearance.SECONDARY}
                onClick={() => handleMapToggle(true)}
                className={styles.phoneDno}
                icon={IconNames.TELEPHONE}
                color={ButtonColors.DARK}
              >
                {inputState.dnoData?.dnoPhoneNumber}
              </Link>
            )}
            {inputState.dnoData?.websiteURL && (
              <Link
                appearance={LinkAppearance.SECONDARY}
                onClick={() => handleMapToggle(true)}
                url={inputState.dnoData?.websiteURL}
                className={styles.linkDno}
                color={ButtonColors.DARK}
                icon={IconNames.WEB}
              >
                {inputState.dnoData?.websiteURL}
              </Link>
            )}
          </motion.div>
        )}
      </PopUp>
    </>
  )
}

export default AddressLookUp
