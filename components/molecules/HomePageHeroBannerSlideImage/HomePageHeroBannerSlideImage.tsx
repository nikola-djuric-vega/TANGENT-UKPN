import { HomePageHeroBannerSlideImageType } from '_types/CMS/nodes/components/UKPN'
import styles from './HomePageHeroBannerSlideImage.module.scss'
import { Viewports } from '_types/CMS/nodes/components/UKPN'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface HomePageHeroBannerSlideImageProps
  extends HomePageHeroBannerSlideImageType {
  viewport: Viewports
}

const HomePageHeroBannerSlideImage = ({
  desktopImage,
  tabletImage,
  mobileImage,
  lighting,
  viewport,
  text,
  title,
  link,
}: HomePageHeroBannerSlideImageProps) => {
  const isMobile = viewport !== Viewports.DESKTOP
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
        <motion.div
          className={styles.imageWrapper}
          transition={transition(0)}
          variants={variants}
          animate="center"
          initial="enter"
          exit="exit"
        >
          <div className={styles.imageDesktop}>
            <Image
              objectPosition="center center"
              title={desktopImage.name}
              alt={desktopImage.name}
              src={desktopImage.url}
              objectFit="cover"
              priority={true}
              layout="fill"
            />
          </div>
          <div className={styles.imageTablet}>
            <Image
              height={tabletImage.umbracoHeight}
              width={tabletImage.umbracoWidth}
              objectPosition="center center"
              title={tabletImage.name}
              alt={tabletImage.name}
              src={tabletImage.url}
              layout="responsive"
              priority={true}
            />
          </div>
          <div className={styles.imageMobile}>
            <Image
              height={mobileImage.umbracoHeight}
              width={mobileImage.umbracoWidth}
              title={mobileImage.name}
              alt={mobileImage.name}
              src={mobileImage.url}
              layout="responsive"
              priority={true}
            />
          </div>
        </motion.div>
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

export default HomePageHeroBannerSlideImage
