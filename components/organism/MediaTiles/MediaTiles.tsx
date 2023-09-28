import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { MediaTilesType } from '_types/CMS/nodes/components/UKPN'
import MediaTile from '_molecules/MediaTile/MediaTile'
import Button from '_atoms/Button&Link/Button/Button'
import SwiperCore, { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './MediaTiles.module.scss'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { useEffect, useState } from 'react'
import { IconNames } from '_types/local'
import camelCase from 'lodash/camelCase'
import debounce from 'lodash/debounce'
import 'swiper/swiper-bundle.min.css'
import Icon from '_atoms/Icon/Icon'
import 'swiper/swiper.min.css'

const MediaTiles = ({
  title,
  mediaTiles,
  layout,
  removeBottomMargin,
}: MediaTilesType) => {
  const [isMobile, setMobile] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<string>('')
  SwiperCore.use([Navigation, A11y])

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

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

  const isMixed =
    mediaTiles.some((tile) => tile.video) &&
    mediaTiles.some((tile) => tile.image)

  return (
    <ComponentLayout
      containerClass={styles.MediaTiles}
      innerClass={styles.inner}
      removeBottomMargin={removeBottomMargin}
    >
      <Heading className={styles.title} level={3}>
        {title}
      </Heading>
      <div className={styles.tilesContainer} data-layout={layout}>
        {!isMobile ? (
          mediaTiles.map((tile, i) => (
            <MediaTile
              {...tile}
              isMixed={isMixed}
              isOpen={isOpen as string}
              setOpen={setIsOpen}
              layout={layout}
              key={i}
            />
          ))
        ) : (
          <Swiper
            navigation={{
              prevEl: `#prev_${camelCase(title)}`,
              nextEl: `#next_${camelCase(title)}`,
            }}
            spaceBetween={24}
            slidesPerView={1}
          >
            {mediaTiles.map((tile, i) => (
              <SwiperSlide key={i}>
                <MediaTile
                  {...tile}
                  isMixed={isMixed}
                  layout={layout}
                  setOpen={setIsOpen}
                  isOpen={isOpen as string}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {isMobile && (
        <div className={styles.swiperNavigation}>
          <Button
            className={`button-reset ${styles.prevButton}`}
            appearance={ButtonAppearance.BLANK}
            id={`prev_${camelCase(title)}`}
          >
            <Icon name={IconNames.CIRCLED_LEFT_ARROW} />
          </Button>
          <Button
            className={`button-reset ${styles.nextButton}`}
            appearance={ButtonAppearance.BLANK}
            id={`next_${camelCase(title)}`}
          >
            <Icon name={IconNames.CTA_ARROW_LONG} />
          </Button>
        </div>
      )}
      {isOpen && (
        <LightBoxVideoPlayer
          url={`https://youtube.com/watch?v=${isOpen}`}
          setState={setIsOpen}
        />
      )}
    </ComponentLayout>
  )
}

export default MediaTiles
