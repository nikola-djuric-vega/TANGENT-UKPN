import { MediaTileType, TilesLayout } from '_types/CMS/compositions/media-tiles'
import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { transformString } from '_utils/tranform-string'
import styles from './MediaTile.module.scss'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import { useEffect } from 'react'
import Image from 'next/image'

export interface MediaTileProps extends MediaTileType {
  setOpen: React.Dispatch<React.SetStateAction<string>>
  isMixed: boolean
  layout: TilesLayout
  isOpen: string
}

const MediaTile = ({
  text,
  image,
  isMixed,
  video,
  setOpen,
  isOpen,
  layout,
}: MediaTileProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])

  return (
    <div className={styles.MediaTile}>
      <ConditionalWrapper
        condition={!!video}
        wrapper={(children) => (
          <button
            className={`button-reset ${styles.assetWrapper}`}
            data-is-shorter={isMixed || video}
            data-layout={layout}
            onClick={() => {
              document.body.classList.add('modal-open')
              setOpen(video as string)
            }}
            tabIndex={-1}
          >
            {children}
          </button>
        )}
        elseWrapper={(children) => (
          <div
            className={styles.assetWrapper}
            data-is-shorter={isMixed || video}
            data-layout={layout}
          >
            {children}
          </div>
        )}
      >
        <>
          <Image
            layout="responsive"
            width={image.umbracoWidth}
            height={image.umbracoHeight}
            src={image.url}
            title={transformString(text)}
            alt={transformString(text)}
            tabIndex={0}
          />
          {video && (
            <div className={styles.icon}>
              <Icon name={IconNames.PLAY} />
            </div>
          )}
        </>
      </ConditionalWrapper>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  )
}

export default MediaTile
