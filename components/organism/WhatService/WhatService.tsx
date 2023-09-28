import WhatServicePanel from '_molecules/WhatServicePanel/WhatServicePanel'
import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import { WhatServiceType } from '_types/CMS/nodes/components/UKPN'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useDictionaryItems } from '_context/dictionary-items'
import { aiTrackEvent } from '_utils/app-insights-track-event'
import { AnimatePresence, motion } from 'framer-motion'
import { Address } from '_types/local/address-lookup'
import Button from '_atoms/Button&Link/Button/Button'
import { useState, useRef, useEffect } from 'react'
import { transformUrl } from '_utils/transform-url'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './WhatService.module.scss'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'
export interface WhatServiceState {
  panelNumber: number | null
  initialHeight: number
  panelHeight: number
}

const WhatService = ({
  whatServiceItems,
  moduleServiceTitle,
  removeBottomMargin,
  moduleTitle,
  powerCutBox,
}: WhatServiceType) => {
  const [whatService, setWhatService] = useState<WhatServiceState>({
    initialHeight: 0,
    panelNumber: null,
    panelHeight: 0,
  })
  const initial = useRef<HTMLDivElement | null>(null)
  const panel = useRef<HTMLDivElement | null>(null)

  const dictionary = useDictionaryItems()
  const {
    registerForTextUpdatesLink,
    registerForTextUpdatesText,
    viewPowerCutMapButtonText,
    phoneNumberHeader,
    powerCutMapLink,
    powerCutImage,
    phoneNumber,
    header,
    title,
  } = powerCutBox[0]

  const router = useRouter()
  const setState = (newState: any) => {
    setWhatService((prev) => ({ ...prev, ...newState }))
  }

  const resizePanel = debounce(() => {
    setState({ panelNumber: null })
  }, 500)

  useEffect(() => {
    if (initial.current) {
      setState({ initialHeight: initial.current.offsetHeight })
    }
    window.addEventListener('resize', resizePanel, { passive: true })
    return () => window.removeEventListener('resize', resizePanel)
  }, [])

  useEffect(() => {
    if (panel.current && whatService.panelNumber !== null) {
      setState({ panelHeight: panel.current.offsetHeight })
    } else {
      setState({ panelHeight: null })
    }
  }, [whatService.panelNumber])

  const handleAddressPicker = (address: Address) => {
    aiTrackEvent({
      name: 'handleAddressPicker set searchedAddress',
      properties: {
        address,
      },
    })

    localStorage.setItem('searchedAddress', JSON.stringify(address))
    router.push(transformUrl(powerCutMapLink.url))
  }

  const anim = {
    out: {
      x: '0%',
      opacity: !(whatService.panelNumber !== null) ? 1 : 0,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
    in: {
      x: '-100%',
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  }

  return (
    <section
      className={styles.WhatService}
      data-remove-bottom-margin={removeBottomMargin}
    >
      <div className={styles.inner}>
        <div className={styles.PowerCutBox}>
          <div className={styles.iconWrapper}>
            <div className={styles.iconCircle}>
              <Icon name={IconNames.FORTY_PX_POWER_CUT} size="full" />
            </div>
          </div>
          <Heading
            level={3}
            className={styles.PowerCutBoxTitle}
            role="heading"
            tabIndex={0}
          >
            {title}
          </Heading>
          <p className={styles.PowerCutBoxParagraph} role="text" tabIndex={0}>
            {header}
          </p>
          <AddressLookUpPowerCut
            addressNotFound={dictionary.addressNotFoundCheckMap}
            clickHandler={handleAddressPicker}
            placeholder="Enter a postcode"
            isHomepageLookup={true}
            shouldTrack={true}
            id="PowerCutBox"
          />
          {!!viewPowerCutMapButtonText && (
            <Link
              className={styles.viewPowerCutMapButton}
              appearance={LinkAppearance.SECONDARY}
              color={ButtonColors.WHITE}
              url={powerCutMapLink.url}
            >
              {viewPowerCutMapButtonText}
            </Link>
          )}
          <div className={styles.PowerCutAlert}>
            <Image
              title={powerCutImage.name}
              alt={powerCutImage.name}
              src={powerCutImage.url}
              layout="intrinsic"
              height={111}
              width={111}
            />
            <div className={styles.PowerCutText}>
              <p className={styles.PowerCutStrapline}>{phoneNumberHeader}</p>
              <a
                className={styles.PowerCutPhoneNumber}
                href={'tel:' + phoneNumber}
              >
                {phoneNumber}
              </a>
            </div>
          </div>
          {!!registerForTextUpdatesLink && (
            <div className={styles.registerForTextUpdates}>
              <Icon name={IconNames.EIGHTY_PX_MOBILE} size="sm" />
              <Link
                className={styles.registerForTextUpdatesLink}
                url={registerForTextUpdatesLink.url}
                appearance={LinkAppearance.BLANK}
              >
                {registerForTextUpdatesText}
              </Link>
            </div>
          )}
        </div>
        <div
          className={styles.whatServiceBox}
          style={{
            height: whatService.panelHeight || whatService.initialHeight,
          }}
        >
          <motion.div
            animate={whatService.panelNumber !== null ? 'in' : 'out'}
            className={styles.whatServiceInitial}
            ref={initial}
            variants={anim}
            initial="out"
            exit="out"
          >
            <Heading
              className={styles.whatServicetitle}
              role="heading"
              level={3}
            >
              {moduleTitle}
            </Heading>
            {whatServiceItems.map((service, i) => (
              <Button
                onClick={() => setState({ panelNumber: i })}
                appearance={ButtonAppearance.BLANK}
                className={styles.service}
                key={i}
              >
                {service.linkText}
              </Button>
            ))}
          </motion.div>
          <AnimatePresence>
            {whatService.panelNumber !== null && (
              <WhatServicePanel
                backClick={() => setState({ panelNumber: null })}
                {...whatServiceItems[whatService.panelNumber]}
                ref={panel}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default WhatService
