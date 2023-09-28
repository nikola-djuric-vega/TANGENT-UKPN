import { ImageCarouselType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Button from '_atoms/Button&Link/Button/Button'
import SwiperCore, { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ImageCarousel.module.scss'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { useState, useEffect } from 'react'
import { IconNames } from '_types/local'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/swiper.min.css'
import Image from 'next/image'

const ImageCarousel = ({
  carosuelSubtitle,
  carosuelImages,
  carosuelTitle,
}: ImageCarouselType) => {
  const [isMobile, setMobile] = useState<boolean>(false)
  const randomID = uuidv4().replace(/-/g, '').substring(0, 10).toUpperCase()
  SwiperCore.use([Navigation, A11y])
  useEffect(() => {
    const windowSize = () => {
      setMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', debounce(windowSize, 500), {
      passive: true,
    })
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <ComponentLayout innerClass={styles.carosuelNoPadding}>
      {!!carosuelTitle && (
        <Heading level={4} className={styles.carosuelTitle}>
          {carosuelTitle}
        </Heading>
      )}
      {!!carosuelSubtitle && (
        <RichText className={styles.carosuelSubtitle} text={carosuelSubtitle} />
      )}
      {!!carosuelImages?.length && (
        <>
          <Button
            id={`prev_${randomID}`}
            className={`button-reset ${styles.prevButton}`}
            appearance={ButtonAppearance.BLANK}
          >
            <Icon name={IconNames.ICON_CHEVRON_RIGHT} size="sm" />
          </Button>
          <Button
            id={`next_${randomID}`}
            className={`button-reset ${styles.nextButton}`}
            appearance={ButtonAppearance.BLANK}
          >
            <Icon name={IconNames.ICON_CHEVRON_RIGHT} size="sm" />
          </Button>
          <div className={styles.carosuelImages}>
            <Swiper
              navigation={{
                prevEl: `#prev_${randomID}`,
                nextEl: `#next_${randomID}`,
              }}
              centeredSlides={true}
              slidesPerView={isMobile ? 1.2 : 3.2}
              spaceBetween={isMobile ? 12 : 24}
              loop={true}
            >
              {carosuelImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.carouselImage} key={i}>
                    <Image
                      height={img.umbracoHeight}
                      width={img.umbracoWidth}
                      layout="responsive"
                      title={img.name}
                      alt={img.name}
                      src={img.url}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </ComponentLayout>
  )
}

export default ImageCarousel
