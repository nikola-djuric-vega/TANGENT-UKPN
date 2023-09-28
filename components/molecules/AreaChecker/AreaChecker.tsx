import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { transformDnoMessage } from '_utils/transform-dno-message'
import { AreaCheckerType } from '_types/CMS/nodes/components/UKPN'
import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import { useDictionaryItems } from '_context/dictionary-items'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import { Address, DNO, IconNames } from '_types/local'
import Button from '_atoms/Button&Link/Button/Button'
import React, { useRef, useEffect } from 'react'
import RichText from '_atoms/RichText/RichText'
import styles from './AreaChecker.module.scss'
import Heading from '_atoms/Heading/Heading'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'
export interface AreaCheck {
  address: Address | null
  isSuccessful: boolean
  notInTheArea: boolean
  incorrectAddress: boolean
}

const AreaChecker = ({
  title,
  text,
  desktopImage,
  mobileImage,
  successTitle,
  successText,
  errorAreaTitle,
  errorAddressTitle,
  errorAddressText,
  removeBottomMargin,
}: AreaCheckerType) => {
  const dictionary = useDictionaryItems()
  const ref = useRef<HTMLDivElement>(null)
  const [areaCheck, setAreaCheck] = React.useState<AreaCheck>({
    incorrectAddress: false,
    isSuccessful: false,
    notInTheArea: false,
    address: null,
  })

  const setAddress = (address: Address) => {
    setAreaCheck((prev) => ({
      ...prev,
      notInTheArea: prev.incorrectAddress || !address,
      incorrectAddress: prev.incorrectAddress || !address,
      isSuccessful: false,
      address,
    }))
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }
  }, [areaCheck.isSuccessful, areaCheck.incorrectAddress])

  const handleAddressCheck = () => {
    setAreaCheck((prev) => ({
      ...prev,
      notInTheArea: !areaCheck.address?.isInUkpnDno,
      isSuccessful: !!areaCheck.address?.isInUkpnDno,
      incorrectAddress: false,
    }))
  }

  return (
    <ComponentLayout
      removeBottomMargin={removeBottomMargin}
      containerClass={styles.AreaChecker}
      innerClass={styles.inner}
    >
      <div className={styles.form}>
        <Heading className={styles.areaCheckerTitle} level={3}>
          {title}
        </Heading>
        <RichText className={styles.areaCheckerText} text={text} />
        <AddressLookUp
          addressNotFound={dictionary['addressNotFoundAreaChecker']}
          placeholder="Enter a postcode here"
          clickHandler={setAddress}
          clearHandler={() => {
            setAreaCheck({
              incorrectAddress: false,
              isSuccessful: false,
              notInTheArea: false,
              address: null,
            })
          }}
          shouldShowDno={false}
          isAreaChecker={true}
          id="AreaChecker"
        />
        <Button
          appearance={ButtonAppearance.PRIMARY}
          className={styles.areaCheckerButton}
          disabled={!areaCheck.address}
          onClick={handleAddressCheck}
          color={ButtonColors.DARK}
        >
          Submit
        </Button>
      </div>
      <div
        className={styles.background}
        data-is-successful={areaCheck.isSuccessful}
      ></div>

      {!areaCheck.isSuccessful && !areaCheck.notInTheArea && (
        <>
          <div className={styles.imageWrapper} data-is-desktop>
            <Image
              className={styles.imageWrapper}
              objectPosition="center bottom"
              title={desktopImage.name}
              alt={desktopImage.name}
              src={desktopImage.url}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles.imageWrapper} data-is-mobile>
            <Image
              className={styles.imageWrapper}
              title={desktopImage.name}
              alt={mobileImage.name}
              src={mobileImage.url}
              layout="responsive"
              height={mobileImage.umbracoHeight}
              width={mobileImage.umbracoWidth}
            />
          </div>
        </>
      )}
      {areaCheck.isSuccessful && (
        <div
          className={styles.response}
          data-is-successful={areaCheck.isSuccessful}
          ref={ref}
        >
          <div className={styles.text}>
            <Icon name={IconNames.FORTY_PX_POWER_ON} />
            <p className={styles.title}>{successTitle}</p>
            <div
              className={styles.sub}
              dangerouslySetInnerHTML={{
                __html: successText,
              }}
            ></div>
          </div>
        </div>
      )}
      {areaCheck.notInTheArea && (
        <div
          className={styles.response}
          data-is-successful={areaCheck.isSuccessful}
          ref={ref}
        >
          <div className={styles.text}>
            <Icon name={IconNames.ICON_NOT_FOUND} />
            <p className={styles.title}>
              {!areaCheck.incorrectAddress ? errorAreaTitle : errorAddressTitle}
            </p>
            <div
              className={styles.sub}
              dangerouslySetInnerHTML={{
                __html:
                  !areaCheck.incorrectAddress && areaCheck.address
                    ? transformDnoMessage(
                        dictionary[Object.values(DNO)[areaCheck.address?.dno]],
                        areaCheck.address.postCode
                      )
                    : errorAddressText,
              }}
            ></div>
          </div>
        </div>
      )}
    </ComponentLayout>
  )
}

export default AreaChecker
