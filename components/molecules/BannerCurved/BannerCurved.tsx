import { BannerCurvedType } from '_types/CMS/nodes/components/UKPN'
import { LinkAppearance, ButtonColors, LinkType } from '_types/CMS'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './BannerCurved.module.scss'
import Heading from '_atoms/Heading/Heading'
import Image from 'next/image'

import GraphicLines, {
  LinesPosition,
  LinesColor,
} from '_atoms/GraphicLines/GraphicLines'

const BannerCurved = ({
  tag,
  header,
  subHeader,
  desktopImage,
  bannerCurvedCTA,
  removeBottomMargin,
  backgroundColour,
}: BannerCurvedType) => {
  let bannerImage = ''

  // When in CMS fallback mode, we don't get the width and height values
  // so we need to manually add them for the focus point to work
  if (desktopImage && desktopImage.umbracoFile?.url.includes('{width}')) {
    bannerImage = desktopImage.umbracoFile.url
      .replace('{width}', '500')
      .replace('{height}', '400')
  } else {
    bannerImage = desktopImage?.umbracoFile?.url
  }

  return (
    <ComponentLayout
      removeBottomMargin={removeBottomMargin}
      innerClass={styles.inner}
      isHero={true}
    >
      {!!bannerImage && (
        <div className={styles.image}>
          <Image
            objectPosition="top right"
            src={bannerImage}
            objectFit="cover"
            layout="fill"
            alt={header}
          />
        </div>
      )}
      <div className={styles.bannerCopy} data-is-dark-blue={backgroundColour}>
        {!!tag && <p className={styles.tag}>{tag}</p>}
        <Heading className={styles.title} level={1}>
          {header}
        </Heading>
        <p className={styles.subHeader}>{subHeader}</p>
        {!!bannerCurvedCTA && (
          <Link
            appearance={LinkAppearance.SECONDARY}
            color={ButtonColors.WHITE}
            className={styles.cTA}
            target={bannerCurvedCTA.target}
            url={bannerCurvedCTA.url}
            download={bannerCurvedCTA.type === LinkType.MEDIA}
          >
            {bannerCurvedCTA?.name}
          </Link>
        )}
      </div>
      <GraphicLines
        colour={!backgroundColour ? LinesColor.WHITE : LinesColor.BLUE}
        position={LinesPosition.TOP}
        className={styles.topLine}
        bottomLineLength={104}
        topLineLength={748}
      />
      <GraphicLines
        colour={!backgroundColour ? LinesColor.WHITE : LinesColor.BLUE}
        position={LinesPosition.BOTTOM}
        className={styles.bottomLine}
        bottomLineLength={748}
        topLineLength={104}
      />
    </ComponentLayout>
  )
}

export default BannerCurved
