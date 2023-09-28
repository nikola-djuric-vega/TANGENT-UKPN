import { IconNames } from '_types/local'
import Author, { AuthorLayout } from '_atoms/Author/Author'
import { StormMode } from '_types/CMS/nodes'
import Heading from '_atoms/Heading/Heading'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import styles from './PowerCutContactUs.module.scss'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { PowerCutContactUsType } from '_types/CMS/nodes/components/UKPN'
import { useEffect } from 'react'

export interface PowerCutContactUsProps extends PowerCutContactUsType {
  forceMobileLayout?: boolean
}

const PowerCutContactUs = ({
  powerCutContactUsAuthor,
  title,
  text,
  telephone,
  facebook,
  twitter,
  powerCutContactUsWhatsApp,
  forceMobileLayout = false,
}: PowerCutContactUsProps) => {
  const globalData = useUkpnGlobalData()

  return (
    <ComponentLayout removeGridPadding={forceMobileLayout}>
      <div
        className={styles.powerCutContactUs}
        data-is-storm={
          globalData?.stormContainerData?.stormMode === StormMode.STORM
        }
        data-is-mobile-layout={forceMobileLayout}
      >
        <div className={styles.inner}>
          {!!powerCutContactUsAuthor && (
            <Author
              authorName={powerCutContactUsAuthor.authorName}
              department={powerCutContactUsAuthor.department}
              layout={AuthorLayout.COLUMN}
            />
          )}
          <Heading level={6} className={styles.title}>
            {title}
          </Heading>
          <div className={styles.messageWrapper}>
            {!!text && <RichText text={text} className={styles.text} />}
            {!!telephone && (
              <Link
                className={styles.telephone}
                appearance={LinkAppearance.SECONDARY}
                color={ButtonColors.DARK}
                url={`tel:${telephone}`}
                skipUrlTransform
                icon={IconNames.TELEPHONE}
              >
                {telephone}
              </Link>
            )}
          </div>
          <div className={styles.linksWrapper}>
            {twitter?.name && twitter?.url && (
              <Link
                className={styles.socialLink}
                appearance={LinkAppearance.SECONDARY}
                color={ButtonColors.DARK}
                url={twitter.url}
                target={twitter.target}
                icon={IconNames.ICO_TWITTER}
              >
                {twitter.name}
              </Link>
            )}
            {facebook?.name && facebook?.url && (
              <Link
                className={styles.socialLink}
                appearance={LinkAppearance.SECONDARY}
                color={ButtonColors.DARK}
                url={facebook.url}
                target={facebook.target}
                icon={IconNames.ICON_FACEBOOK}
              >
                {facebook.name}
              </Link>
            )}
            {powerCutContactUsWhatsApp?.name && powerCutContactUsWhatsApp?.url && (
              <Link
                className={styles.socialLink}
                appearance={LinkAppearance.SECONDARY}
                color={ButtonColors.DARK}
                url={powerCutContactUsWhatsApp.url}
                target={powerCutContactUsWhatsApp.target}
                icon={IconNames.WHATSAPP}
              >
                {powerCutContactUsWhatsApp.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}

export default PowerCutContactUs
