import { DoubleCtaNavIconImageType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './DoubleCtaNavIconImage.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

const DoubleCtaNavIconImage = ({
  leftTitle,
  leftText,
  leftImage,
  leftButtonLink,
  leftIcon,
  rightTitle,
  rightText,
  rightImage,
  rightIcon,
  rightButtonLink,
  removeBottomMargin,
  doubleCtaWithImgTitle,
  doubleCtaWithImgSubTitle,
}: DoubleCtaNavIconImageType) => {
  return (
    <ComponentLayout
      containerClass={styles.doubleCtaNavIcon}
      removeBottomMargin={removeBottomMargin}
    >
      {(!!doubleCtaWithImgTitle || !!doubleCtaWithImgSubTitle) && (
        <div className={styles.header}>
          <Heading level={3} className={styles.headerTitle}>
            {doubleCtaWithImgTitle}
          </Heading>
          <p className={styles.headerSubtitle}>{doubleCtaWithImgSubTitle}</p>
        </div>
      )}
      <ul className={styles.ctaContainer}>
        <li className={styles.ctaItem}>
          {!!leftButtonLink?.url && (
            <Link
              appearance={LinkAppearance.BLANK}
              url={leftButtonLink.url}
              className={leftImage ? styles.imageWrapper : styles.icon}
              aria-label={leftImage ? `${leftImage.name}` : `${leftIcon}`}
            >
              {!!leftImage?.url && (
                <Image
                  src={leftImage.url}
                  layout="fill"
                  objectFit="contain"
                  alt={leftButtonLink?.name}
                  title={leftButtonLink?.name}
                />
              )}
              {!!leftIcon && !leftImage?.url && (
                <Icon baseColour name={leftIcon} />
              )}
            </Link>
          )}

          {!leftButtonLink?.url && !!leftImage?.url && (
            <div className={styles.imageWrapper}>
              <Image
                src={leftImage.url}
                layout="fill"
                objectFit="contain"
                alt={leftButtonLink?.name}
                title={leftButtonLink?.name}
              />
            </div>
          )}
          {!leftButtonLink?.url && !leftImage?.url && leftIcon && (
            <div className={styles.icon} data-testid="leftIcon">
              <Icon baseColour name={leftIcon} />
            </div>
          )}

          {!!leftTitle && (
            <Heading
              level={4}
              className={styles.title}
              data-has-image={!!leftImage?.url}
              data-has-icon={!!leftIcon}
            >
              {leftTitle}
            </Heading>
          )}
          {!!leftText && <p className={styles.text}>{leftText}</p>}
          {!!leftButtonLink?.url && leftButtonLink?.name && (
            <Link
              className={styles.link}
              appearance={LinkAppearance.PRIMARY}
              url={leftButtonLink.url}
            >
              {leftButtonLink.name}
            </Link>
          )}
        </li>
        <li className={styles.ctaItem}>
          {!!rightButtonLink?.url && (
            <Link
              appearance={LinkAppearance.BLANK}
              url={rightButtonLink.url}
              className={rightImage ? styles.imageWrapper : styles.icon}
              aria-label={rightImage ? `${rightImage.name}` : `${rightIcon}`}
            >
              {!!rightImage?.url && (
                <Image
                  title={rightButtonLink.name}
                  alt={rightButtonLink.name}
                  src={rightImage.url}
                  layout="fill"
                  objectFit="contain"
                />
              )}
              {!!rightIcon && !rightImage?.url && (
                <Icon baseColour name={rightIcon} />
              )}
            </Link>
          )}

          {!rightButtonLink?.url && !!rightImage?.url && (
            <div className={styles.imageWrapper}>
              <Image
                src={rightImage.url}
                layout="fill"
                objectFit="contain"
                title={leftButtonLink?.name}
                alt={leftButtonLink?.name}
              />
            </div>
          )}
          {!rightButtonLink?.url && !rightImage?.url && rightIcon && (
            <div className={styles.icon} data-testid="rightIcon">
              <Icon baseColour name={rightIcon} />
            </div>
          )}

          {!!rightTitle && (
            <Heading
              level={4}
              className={styles.title}
              data-has-image={!!rightImage?.url}
              data-has-icon={!!rightIcon}
            >
              {rightTitle}
            </Heading>
          )}
          {!!rightText && <p className={styles.text}>{rightText}</p>}
          {!!rightButtonLink?.url && !!rightButtonLink?.name && (
            <Link
              className={styles.link}
              appearance={LinkAppearance.PRIMARY}
              url={rightButtonLink.url}
            >
              {rightButtonLink.name}
            </Link>
          )}
        </li>
      </ul>
    </ComponentLayout>
  )
}

export default DoubleCtaNavIconImage
