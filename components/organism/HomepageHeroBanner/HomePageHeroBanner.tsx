import HomePageHeroBannerSlideParallax from '_molecules/HomePageHeroBannerSlideParallax/HomePageHeroBannerSlideParallax'
import HomePageHeroBannerSlideImage from '_molecules/HomePageHeroBannerSlideImage/HomePageHeroBannerSlideImage'
import { Viewports } from '_types/CMS/nodes/components/UKPN'
import ScrollPromp from '_molecules/ScrollPromp/ScrollPromp'
import { Breakpoints } from '_types/local/breakpoints'
import styles from './HomePageHeroBanner.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ButtonAppearance } from '_types/CMS'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'
import {
  HomePageHeroBannerType,
  HomePageHeroBannerSlideImageType,
  HomePageHeroSlideParallaxType,
  HomePageHeroSlideType,
} from '_types/CMS/nodes/components/UKPN'

const HomePageHeroBanner = ({ slides }: HomePageHeroBannerType) => {
  const [viewport, setViewport] = useState<Viewports>(Viewports.DESKTOP)
  const [slideNumber, setSlideNumber] = useState<number>(0)
  const ref = useRef<HTMLElement>(null)

  const checkWindowSize = debounce(() => {
    switch (true) {
      case window.innerWidth > Breakpoints.LG:
        setViewport(Viewports.DESKTOP)
        break
      case window.innerWidth > Breakpoints.MD:
        setViewport(Viewports.TABLET)
        break
      case window.innerWidth > Breakpoints.SM:
        setViewport(Viewports.MOBILE)
        break
    }
  }, 200)

  const renderSlide = (
    slide: HomePageHeroBannerSlideImageType | HomePageHeroSlideParallaxType
  ) => {
    switch (slide.__typename) {
      case HomePageHeroSlideType.IMAGE:
        return (
          <HomePageHeroBannerSlideImage
            {...(slide as HomePageHeroBannerSlideImageType)}
            viewport={viewport}
            key={slideNumber}
          />
        )
        break
      case HomePageHeroSlideType.PARALLAX:
        return (
          <HomePageHeroBannerSlideParallax
            {...(slide as HomePageHeroSlideParallaxType)}
            viewport={viewport}
            key={slideNumber}
          />
        )
        break
      default:
        break
    }
  }

  useEffect(() => {
    checkWindowSize()
    window.addEventListener('resize', checkWindowSize, { passive: true })
    return () => window.removeEventListener('resize', checkWindowSize)
  }, [])

  const handleScroll = () => {
    const nextSibiling = ref.current?.nextSibling as HTMLElement
    if (!!nextSibiling) {
      nextSibiling.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }
  }

  return (
    <section className={styles.HomePageHeroBanner} ref={ref}>
      <div className={styles.sliderMain}>
        <ScrollPromp callback={handleScroll} />
        <AnimatePresence initial={false} exitBeforeEnter>
          {renderSlide(slides[slideNumber])}
        </AnimatePresence>
      </div>
      <div className={styles.sliderNavigation}>
        <div className={styles.sliderNavigationinner}>
          {slides.map((btn, i) => (
            <Button
              appearance={ButtonAppearance.BLANK}
              onClick={() => setSlideNumber(i)}
              className={styles.slideButton}
              data-active={slideNumber === i}
              key={i}
            >
              <Icon name={btn.icon} />
              <span>{btn.navigationTitle}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePageHeroBanner
