import { PowerCutCurvedBannerType } from '_types/CMS/nodes/components/UKPN'
import styles from './PowerCutCurvedBanner.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'

const PowerCutCurvedBanner = ({
  backButton = true,
  subTitle,
  tagLine,
  status,
  title,
  icon,
}: PowerCutCurvedBannerType) => {
  const { back, asPath, push } = useRouter()

  const handleClick = () => {
    if (asPath === '/power-cut/list') {
      push('/power-cut')
    } else if (asPath === '/power-cut/text-updates/submission-failure') {
      push('/')
    } else {
      back()
    }
  }

  return (
    <section className={styles.powerCutCurvedBanner}>
      <div className={styles.inner}>
        <div className={styles.bannerContent}>
          {!!backButton && (
            <Button
              appearance={ButtonAppearance.BLANK}
              className={styles.backButton}
              onClick={handleClick}
              data-is-back-button-visible={backButton}
            >
              <Icon name={IconNames.LEFT_ARROW} size="xs" /> Back
            </Button>
          )}
          {!!icon && (
            <div className={styles.iconWrapper}>
              <Icon name={icon} baseColour />
              <p className={styles.tagLine}>{tagLine}</p>
            </div>
          )}
          {!!title && (
            <Heading level={1} className={styles.powerCutCurvedBannerTitle}>
              {title}
            </Heading>
          )}
          {!!subTitle && (
            <RichText
              text={subTitle}
              className={styles.powerCutCurvedBannerSubTitle}
            />
          )}
          {!!status && (
            <p className={styles.powerCutCurvedBannerStatus}>{status}</p>
          )}
        </div>
      </div>
      <svg className={styles.svgMask}>
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="curvedBottomBorder">
            <path d="M 0,1 L 0,0 L 1,0 L 1,.9 C .65 1, .3 1, 0 .9 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default PowerCutCurvedBanner
