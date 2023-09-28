import { DangerousSituationType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './DangerousSituation.module.scss'
import SwiperCore, { Navigation, A11y } from 'swiper'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import camelCase from 'lodash/camelCase'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'
import 'swiper/swiper.min.css'
import Image from 'next/image'

const DangerousSituation = ({
  dangerousSituationSecondaryButtonText,
  dangerousSituationPrimaryButtonText,
  dangerousSituationDescription,
  dangerousInformationHelpText,
  dangerousInformationTitle,
  dangerousSituationImages,
  dangerousSituationTitle,
  emergencyBoxDescription,
  callBoxDescription,
  emergencyBoxTitle,
  callBoxTitle,
  setShowForm,
}: DangerousSituationType) => {
  const [isDangerous, setIsDangerous] = useState<boolean>(false)
  const [isMobile, setMobile] = useState<boolean>(false)
  const isDangerousMsg = useRef<HTMLDivElement>(null)
  SwiperCore.use([Navigation, A11y])

  useEffect(() => {
    if (!!isDangerousMsg.current) {
      isDangerousMsg.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }
  }, [isDangerous])

  useEffect(() => {
    const windowSize = () => {
      setMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', debounce(windowSize, 500))
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <ComponentLayout
      containerClass={styles.dangerousSituation}
      innerClass={styles.inner}
      data-is-dangerous={isDangerous}
    >
      <div className={styles.textBox}>
        <Heading level={3} className={styles.title}>
          {dangerousSituationTitle}
        </Heading>
        <RichText
          className={styles.subTitle}
          text={dangerousSituationDescription}
        />
      </div>
      <div className={styles.dangerousSituationImage}>
        {isMobile && (
          <>
            <Button
              id={`prev_${camelCase(dangerousSituationTitle)}`}
              className={`button-reset ${styles.prevButton}`}
              appearance={ButtonAppearance.BLANK}
            >
              <Icon name={IconNames.ICON_CHEVRON_RIGHT} size="sm" />
            </Button>
            <Button
              id={`next_${camelCase(dangerousSituationTitle)}`}
              className={`button-reset ${styles.nextButton}`}
              appearance={ButtonAppearance.BLANK}
            >
              <Icon name={IconNames.ICON_CHEVRON_RIGHT} size="sm" />
            </Button>
          </>
        )}
        {!isMobile ? (
          dangerousSituationImages.map((img, i) => (
            <div className={styles.incidentImage} key={i}>
              <Image
                height={img.umbracoHeight}
                width={img.umbracoWidth}
                layout="responsive"
                title={img.name}
                alt={img.name}
                src={img.url}
              />
            </div>
          ))
        ) : (
          <Swiper
            navigation={{
              prevEl: `#prev_${camelCase(dangerousSituationTitle)}`,
              nextEl: `#next_${camelCase(dangerousSituationTitle)}`,
            }}
            centeredSlides={true}
            slidesPerView={1.3}
            spaceBetween={24}
            loop={true}
          >
            {dangerousSituationImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className={styles.incidentImage} key={i}>
                  <Image
                    height={img.umbracoHeight}
                    width={img.umbracoWidth}
                    layout="intrinsic"
                    title={img.name}
                    alt={img.name}
                    src={img.url}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className={styles.actionButtons}>
        <Button
          appearance={ButtonAppearance.PRIMARY}
          onClick={() => setShowForm(true)}
        >
          {dangerousSituationPrimaryButtonText}
        </Button>
        <Button
          appearance={ButtonAppearance.SECONDARY}
          onClick={() => setIsDangerous(true)}
          color={ButtonColors.DARK}
        >
          {dangerousSituationSecondaryButtonText}
        </Button>
      </div>
      {isDangerous && (
        <div className={styles.emergencyNotice} ref={isDangerousMsg}>
          <p className={styles.messageTitle}>{dangerousInformationTitle}</p>
          <div className={styles.messageContact}>
            <p className={styles.messageTag}>{callBoxTitle}</p>
            <RichText
              text={callBoxDescription}
              className={styles.messageBody}
            />
          </div>
          <div className={styles.messageContact}>
            <p className={styles.messageTag}>{emergencyBoxTitle}</p>
            <RichText
              text={emergencyBoxDescription}
              className={styles.messageBody}
            />
          </div>
          <p className={styles.legend}>{dangerousInformationHelpText}</p>
        </div>
      )}
    </ComponentLayout>
  )
}

export default DangerousSituation
