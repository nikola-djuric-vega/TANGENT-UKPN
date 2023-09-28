import styles from './HomePageHeroBannerSlideParallax.module.scss'
import { LinkAppearance, Media } from '_types/CMS'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { motion } from 'framer-motion'
import Image from 'next/image'

import {
  HomePageHeroSlideParallaxType,
  Viewports,
} from '_types/CMS/nodes/components/UKPN'

export interface HomePageHeroBannerSlideParallaxProps
  extends HomePageHeroSlideParallaxType {
  viewport: Viewports
}

export interface SlideImage {
  background: Media
  foreground: Media
  icon: Media
  height?: number
  width?: number
}

export interface SlideImages {
  [Viewports.DESKTOP]: SlideImage
  [Viewports.TABLET]: SlideImage
  [Viewports.MOBILE]: SlideImage
}

const HomePageHeroBannerSlideParallax = ({
  foregroundDesktopImage,
  foregroundTabletImage,
  foregroundMobileImage,
  backgroudDesktopImage,
  backgroudTabletImage,
  backgroundMobileImage,
  iconDesktopImage,
  iconTabletImage,
  iconMobileImage,
  lighting,
  viewport,
  text,
  title,
  link,
}: HomePageHeroBannerSlideParallaxProps) => {
  const isMobile = viewport !== Viewports.DESKTOP
  const images: SlideImages = {
    [Viewports.DESKTOP]: {
      background: backgroudDesktopImage,
      foreground: foregroundDesktopImage,
      icon: iconDesktopImage,
    },
    [Viewports.TABLET]: {
      height: parseInt(foregroundTabletImage.umbracoHeight as string),
      width: parseInt(foregroundTabletImage.umbracoWidth as string),
      background: backgroudTabletImage,
      foreground: foregroundTabletImage,
      icon: iconTabletImage,
    },
    [Viewports.MOBILE]: {
      height: parseInt(foregroundMobileImage.umbracoHeight as string),
      width: parseInt(foregroundMobileImage.umbracoWidth as string),
      background: backgroundMobileImage,
      foreground: foregroundMobileImage,
      icon: iconMobileImage,
    },
  }
  const variants = {
    enter: isMobile
      ? {
          y: '10%',
        }
      : {
          x: '10%',
        },
    center: {
      x: 0,
      y: 0,
    },
    exit: isMobile
      ? {
          y: '-10%',
        }
      : {
          x: '-10%',
        },
  }

  const imagesAnim = {
    enter: (custom: any) => ({
      ...custom.enterAnim,
    }),
    center: (custom: any) => ({
      ...custom.centerAnim,
    }),
    exit: (custom: any) => ({
      ...custom.exitAnim,
    }),
  }

  const backgroundCustom = {
    enterAnim: { x: '10%', y: '0' },
    centerAnim: { x: '0', y: '40%' },
    exitAnim: { x: '-20%', y: '45%' },
  }

  const foregroundCustom = {
    enterAnim: { x: '3%' },
    centerAnim: { x: '0' },
    exitAnim: { x: '-3%' },
  }

  const iconCustom = {
    enterAnim: { x: '-3%' },
    centerAnim: { x: '0' },
    exitAnim: { x: '3%' },
  }

  const transition = (delay: number) => {
    return {
      x: { type: 'tween', duration: 0.5, delay: delay, ease: 'easeInOut' },
      opacity: { duration: 0.5, delay: delay, ease: 'easeInOut' },
    }
  }

  return (
    <motion.div
      className={styles.HomePageHeroSlide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-theme={lighting}
    >
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <motion.div
            transition={transition(0)}
            custom={backgroundCustom}
            className={styles.Image}
            variants={imagesAnim}
            animate="center"
            initial="enter"
            exit="exit"
          >
            <Image
              layout={isMobile ? 'responsive' : 'fill'}
              {...(!isMobile && { objectFit: 'cover' })}
              {...(isMobile && {
                height: images[viewport].height,
                width: images[viewport].width,
              })}
              title={images[viewport].background.name || ''}
              alt={images[viewport].background.name || ''}
              src={images[viewport].background.url}
              objectFit="cover"
              priority={true}
            />
          </motion.div>
          <motion.div
            transition={transition(0)}
            className={styles.Image}
            variants={imagesAnim}
            custom={iconCustom}
            animate="center"
            initial="enter"
            exit="exit"
          >
            <Image
              layout={isMobile ? 'responsive' : 'fill'}
              {...(!isMobile && { objectFit: 'cover' })}
              {...(isMobile && {
                height: images[viewport].height,
                width: images[viewport].width,
              })}
              title={images[viewport].icon.name || ''}
              alt={images[viewport].icon.name || ''}
              src={images[viewport].icon.url}
              objectFit="cover"
              priority={true}
            />
          </motion.div>
          <motion.div
            transition={transition(0)}
            custom={foregroundCustom}
            className={styles.Image}
            variants={imagesAnim}
            animate="center"
            initial="enter"
            exit="exit"
          >
            <Image
              {...(!isMobile && { objectFit: 'cover' })}
              {...(isMobile && {
                height: images[viewport].height,
                width: images[viewport].width,
              })}
              layout={isMobile ? 'responsive' : 'fill'}
              title={images[viewport].foreground.name || ''}
              alt={images[viewport].foreground.name || ''}
              src={images[viewport].foreground.url}
              priority={true}
            />
          </motion.div>
        </div>
        <motion.div
          className={styles.slideText}
          transition={transition(0.05)}
          variants={variants}
          animate="center"
          initial="enter"
          exit="exit"
        >
          <Heading className={styles.slideHeading} level={1}>
            {title}
          </Heading>
          <p className={styles.slideSubTitle}>{text}</p>
          {!!link && (
            <Link
              appearance={LinkAppearance.PRIMARY}
              target={link.target}
              url={link.url}
            >
              {link.name}
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomePageHeroBannerSlideParallax
