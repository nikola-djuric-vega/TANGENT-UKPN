import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ButtonAppearance, LinkAppearance } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './TextWithVideoImage.module.scss'
import React, { useEffect, useState } from 'react'
import CtaRender from '_hoc/CtaRender/CtaRender'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'

import {
  TextWithVideoImageType,
  MediaPlacement,
} from '_types/CMS/nodes/components/UKPN'
import { IconNames } from '_types/local'

const TextWithVideoImage = ({
  heading,
  mainText,
  image,
  video,
  imageStyle,
  imageOverlayText,
  imageOverlayIcon,
  imageOverlayLink,
  mediaPlacement,
  cTAs,
  warningMessage,
  removeBottomMargin,
  backgroundColor,
}: TextWithVideoImageType) => {
  const imageLayout =
    mediaPlacement === MediaPlacement.CENTER ? 'intrinsic' : 'responsive'
  const [isModalOpen, setIsModalOpen] = useState('')
  useEffect(() => {
    if (!isModalOpen) {
      document.body.classList.remove('modal-open')
    }
  }, [isModalOpen])

  return (
    <ComponentLayout
      innerClass={styles.textWithVideoImage}
      containerClass={styles.containerClass}
      removeBottomMargin={removeBottomMargin}
      data-bg-color={backgroundColor}
    >
      {isModalOpen && (
        <LightBoxVideoPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          setState={setIsModalOpen}
        />
      )}
      {!!video && (
        <div
          className={styles.media}
          data-is-video={!!video}
          data-media-placement={mediaPlacement}
          data-image-style={imageStyle}
        >
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.videoWrapperButton}
            onClick={() => {
              document.body.classList.add('modal-open')
              setIsModalOpen(`{https://www.youtube.com/watch?v=${video}}`)
            }}
          >
            <Image
              src={image?.url || `https://img.youtube.com/vi/${video}/0.jpg`}
              title={imageOverlayText || image?.name}
              alt={imageOverlayText || image?.name}
              height={image?.umbracoHeight}
              width={image?.umbracoWidth}
              layout="intrinsic"
              className={styles.image}
            />

            <div
              className={styles.youtubeIconWrapper}
              data-media-placement={mediaPlacement}
            >
              <Icon name={IconNames.PLAY} baseColour />
            </div>
          </Button>
        </div>
      )}
      <div
        className={styles.text}
        data-is-image={!!image}
        data-is-video={!!video}
        data-media-placement={mediaPlacement}
        data-image-style={imageStyle}
      >
        {!!heading && <RichText text={heading} className={styles.heading} />}
        {!!mainText && <RichText text={mainText} className={styles.mainText} />}
        {!!warningMessage && (
          <div className={styles.warningMessage}>
            <Icon name={IconNames.WARNING_ICON} />
            <RichText
              className={styles.warningMessageText}
              text={warningMessage}
            />
          </div>
        )}
        {!!cTAs?.length && (
          <div className={styles.buttons}>
            {cTAs?.map((button, index) => (
              <CtaRender key={index} cta={button} color={button.cTAType} />
            ))}
          </div>
        )}
      </div>
      {!!image && !video && (
        <div
          className={styles.media}
          data-is-video={!!video}
          data-is-image={!!image}
          data-media-placement={mediaPlacement}
          data-image-style={imageStyle}
          data-testid="media"
        >
          <div className={styles.imageWrapper}>
            <Image
              title={imageOverlayText || image?.name}
              alt={imageOverlayText || image.name}
              height={image.umbracoHeight}
              width={image.umbracoWidth}
              layout={imageLayout}
              src={image.url}
              className={styles.image}
            />
            {!!imageOverlayText && !imageOverlayLink && (
              <div className={styles.caption}>
                {imageOverlayIcon && (
                  <span className={styles.imageOverlayIconWrapper}>
                    <Icon name={imageOverlayIcon} size="sm" />
                  </span>
                )}
                <span className={styles.imageOverlayText}>
                  {imageOverlayText}
                </span>
              </div>
            )}
            {!!imageOverlayText && !!imageOverlayLink?.url && (
              <Link
                className={styles.caption}
                appearance={LinkAppearance.TERTIARY}
                url={imageOverlayLink?.url}
              >
                {!!imageOverlayIcon && (
                  <span className={styles.imageOverlayIconWrapper}>
                    <Icon name={imageOverlayIcon} size="sm" />
                  </span>
                )}
                {imageOverlayText}
              </Link>
            )}
          </div>
        </div>
      )}
    </ComponentLayout>
  )
}

export default TextWithVideoImage
