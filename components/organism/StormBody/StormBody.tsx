import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { StormBodyType } from '_types/CMS/nodes/components/UKPN'
import { useDictionaryItems } from '_context/dictionary-items'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { transformUrl } from '_utils/transform-url'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import styles from './StormBody.module.scss'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'

const StormBody = ({
  powerCutBoxRegisterForTextsLink,
  powerCutBoxFacebookLink,
  powerCutBoxTwitterLink,
  powerCutBoxTitle,
  powerCutBoxIcon,
  stormBodyTitle,
  stormBodyText,
}: StormBodyType) => {
  const dictionary = useDictionaryItems()
  const { push } = useRouter()
  return (
    <ComponentLayout
      containerClass={styles.stormBody}
      innerClass={styles.inner}
    >
      <RichText className={styles.body} text={stormBodyText} />
      <div className={styles.stormBodyPowerCut}>
        <div className={styles.stormBodyPowerCutTitle}>
          {!!powerCutBoxIcon && (
            <div className={styles.IconWrapper}>
              <Icon name={powerCutBoxIcon} />
            </div>
          )}
          <Heading level={4} className={styles.powerBoxTitle}>
            {powerCutBoxTitle}
          </Heading>
        </div>
        {stormBodyTitle && (
          <p className={styles.powerBoxSubTitle}>{stormBodyTitle}</p>
        )}
        <AddressLookUpPowerCut
          clickHandler={() => {
            if (powerCutBoxRegisterForTextsLink) {
              push(transformUrl(powerCutBoxRegisterForTextsLink.url))
            }
          }}
          isStormBody
          addressNotFound={dictionary['stormBodyAddressNotFound']}
          placeholder="Enter a postcode here"
          id="stormBodyPowerCut"
        />
        {(powerCutBoxTwitterLink || powerCutBoxFacebookLink) && (
          <div className={styles.stormBodySocials}>
            {powerCutBoxTwitterLink && (
              <Link
                target={powerCutBoxTwitterLink.target}
                appearance={LinkAppearance.BLANK}
                url={powerCutBoxTwitterLink.url}
                className={styles.socialLink}
              >
                <Icon name={IconNames.FORTY_PX_TWITTER} />
                {powerCutBoxTwitterLink.name}
              </Link>
            )}
            {powerCutBoxFacebookLink && (
              <Link
                target={powerCutBoxFacebookLink.target}
                appearance={LinkAppearance.BLANK}
                url={powerCutBoxFacebookLink.url}
                className={styles.socialLink}
              >
                <Icon name={IconNames.FORTY_PX_FACEBOOK} />
                {powerCutBoxFacebookLink.name}
              </Link>
            )}
          </div>
        )}
      </div>
    </ComponentLayout>
  )
}

export default StormBody
