import { LandingHeroBannerType } from '_types/CMS/nodes/components/UKPN'
import { SlideOutPanelProvider } from '_context/slideout-panel-context'
import OptionSelector from '_molecules/OptionSelector/OptionSelector'
import SlideOutPannel from '_molecules/SlideOutPannel/SlideOutPannel'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import styles from './LandingHeroBanner.module.scss'
import CtaRender from '_hoc/CtaRender/CtaRender'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import Image from 'next/image'

import GraphicLines, {
  LinesPosition,
  LinesColor,
} from '_atoms/GraphicLines/GraphicLines'

const LandingHeroBanner = ({
  amendBackgroundIcon,
  removeBottomMargin,
  anchorPanelTitle,
  actionPanelTitle,
  actionPanelLinks,
  connectionsBox,
  anchorLinks,
  subHeading,
  headering,
  image,
}: LandingHeroBannerType) => {
  const isHeadlineOnly =
    !anchorLinks?.length && !actionPanelLinks && !connectionsBox && !image

  return (
    <SlideOutPanelProvider>
      <ComponentLayout
        data-has-anchors={
          !!anchorLinks?.length || !!(amendBackgroundIcon && !!image)
        }
        data-remove-bottom-margin={removeBottomMargin}
        containerClass={styles.LandingHeroBanner}
        isLandingHeroBanner={!!connectionsBox}
        innerClass={styles.inner}
        data-has-image={!!image}
        isHero={true}
      >
        {!!actionPanelLinks?.length || connectionsBox ? (
          <div className={styles.sidePannel} data-has-image={!!image}>
            {!!actionPanelLinks?.length && (
              <div className={styles.actionPanel}>
                {actionPanelTitle && (
                  <p className={styles.actionPanelTitle}>{actionPanelTitle}</p>
                )}
                <div className={styles.ctasWrapper}>
                  {actionPanelLinks.map((link, i) => (
                    <CtaRender
                      className={styles.actionPanelButton}
                      color={link.cTAType}
                      cta={link}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            )}
            {connectionsBox && <OptionSelector rawHTML={connectionsBox} />}
          </div>
        ) : (
          <GraphicLines
            className={styles.graphicLines}
            position={LinesPosition.BOTTOM}
            colour={LinesColor.BLUE}
            bottomLineLength={436}
            topLineLength={104}
          />
        )}
        <div className={styles.text} data-is-only-headline={isHeadlineOnly}>
          <Heading level={1} className={styles.headering}>
            {headering}
          </Heading>
          <p className={styles.subHeading}>{subHeading}</p>
        </div>
        {!!anchorLinks?.length && (
          <div className={styles.anchorLinks}>
            {!!anchorPanelTitle && (
              <p className={styles.anchorLinksTitle}>{anchorPanelTitle}</p>
            )}
            {anchorLinks?.map((anchor, i) => (
              <Link
                appearance={LinkAppearance.TERTIARY}
                className={styles.anchorLink}
                color={ButtonColors.DARK}
                url={anchor.url}
                key={i}
              >
                {anchor.name}
              </Link>
            ))}
          </div>
        )}
        {image && (
          <div className={styles.image}>
            <Image
              objectPosition="top center"
              title={image.name}
              objectFit="cover"
              alt={image.name}
              src={image.url}
              priority={true}
              layout="fill"
            />
          </div>
        )}
      </ComponentLayout>
      <SlideOutPannel />
    </SlideOutPanelProvider>
  )
}

export default LandingHeroBanner
