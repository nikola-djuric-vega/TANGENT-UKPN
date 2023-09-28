import React, { useEffect, useState } from 'react'
import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { LinkAppearance, TextSizes } from '_types/CMS'
import { transformUrl } from '_utils/transform-url'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import { SelectStyles } from './select-styles'
import { Link as LinkType } from '_types/CMS'
import styles from './UkpnFooter.module.scss'
import { IconNames } from '_types/local'
import CustomSelect from 'react-select'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'
import Image from 'next/image'
import debounce from 'lodash/debounce'

interface optionProps {
  label: string
  value: LinkType
}

interface Language {
  label: string
  value: LinkType
}

const RenderSocialIcon = (type: string) => {
  switch (type) {
    case 'facebook':
      return IconNames.ICON_FACEBOOK
    case 'instagram':
      return IconNames.ICON_INSTAGRAM
    case 'twitter':
      return IconNames.ICON_TWITTER
    case 'youtube':
      return IconNames.ICON_YOUTUBE
    case 'linkedin':
      return IconNames.ICON_LINKEDIN
    default:
      return null
  }
}

const UkpnFooter = () => {
  const globalData = useUkpnGlobalData()
  const dictionary = useDictionaryItems()
  const router = useRouter()

  const handleSelectSubmit = (option: optionProps) => {
    {
      option?.value?.url && router.push(transformUrl(option.value.url))
    }
  }

  // Check if the device is mobile or tablet
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false)
  useEffect(() => {
    const windowSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 980)
    }
    window.addEventListener('resize', debounce(windowSize, 500))
    windowSize()

    return () => {
      window.removeEventListener('resize', windowSize)
    }
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.linksContainer}>
          <div className={styles.logoContainer}>
            {globalData?.allSiteSettings?.GlobalFooter?.footerLogo?.url && (
              <div className={styles.logoWrapper} data-is-desktop>
                <Link appearance={LinkAppearance.BLANK} url="/">
                  <Image
                    title="UK Power Network"
                    className={styles.logoImage}
                    src={
                      globalData?.allSiteSettings?.GlobalFooter?.footerLogo?.url
                    }
                    alt="logo"
                    width={136.23}
                    height={42.23}
                    layout="fixed"
                  />
                </Link>
              </div>
            )}
          </div>
          <ul className={styles.generalLinksContainer}>
            {globalData?.allSiteSettings?.GlobalFooter?.generalLinks?.map?.(
              (link, index) => (
                <li className={styles.listItem} key={index}>
                  <Link
                    className={styles.listLink}
                    appearance={LinkAppearance.BLANK}
                    url={link.url}
                    target={link.target}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className={styles.serviceLinksContainer}>
            {globalData?.allSiteSettings?.GlobalFooter?.serviceLinks?.map?.(
              (link, index) => (
                <li className={styles.listItem} key={index}>
                  <Link
                    className={styles.listLink}
                    appearance={LinkAppearance.BLANK}
                    url={link.url}
                    target={link.target}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className={styles.socialMediaContainer}>
            {globalData?.allSiteSettings?.GlobalFooter?.socialMediaItems?.map?.(
              (link, index) => (
                <li key={index}>
                  <Link
                    className={styles.socialLinkIconWrapper}
                    appearance={LinkAppearance.BLANK}
                    aria-label={`icon_${link.icon}`}
                    url={link.url}
                  >
                    <Icon name={RenderSocialIcon(link.icon) as IconNames} />
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className={styles.informationLinksContainer}>
            {globalData?.allSiteSettings?.GlobalFooter?.informationLinks?.map?.(
              (link, index) => (
                <li className={styles.infoLinkListItem} key={index}>
                  <Link
                    className={styles.infoLink}
                    appearance={LinkAppearance.BLANK}
                    url={link.url}
                    target={link.target}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.helpContainer}>
          <div className={styles.helpContainerContent}>
            <RichText
              className={styles.helpContainerText}
              text={dictionary.usingWebsiteMessage}
              size={TextSizes.TEXT_BODY_1}
              tabIndex={0}
            />
            {globalData?.allSiteSettings?.GlobalFooter?.languageSelector && (
              <>
                <RichText
                  className={styles.selectLanguageLabel}
                  text={dictionary.selectLanguageLabel}
                  size={TextSizes.TEXT_BODY_1}
                  tabIndex={0}
                />

                <CustomSelect
                  className={styles.reactSelect}
                  onChange={(language) =>
                    handleSelectSubmit(language as Language)
                  }
                  name="Language selector"
                  styles={SelectStyles}
                  inputId="Language selector"
                  options={globalData?.allSiteSettings?.GlobalFooter?.languageSelector?.map?.(
                    (language) =>
                      ({
                        value: language.link,
                        label: language.label,
                      } as object)
                  )}
                  placeholder="Select your language"
                  aria-label="Language selector"
                  isSearchable={false}
                  menuPlacement={isMobileOrTablet ? 'top' : 'bottom'}
                />
              </>
            )}
            <RichText
              className={styles.accessibility}
              text={dictionary.accessibilityMessage}
              size={TextSizes.TEXT_CAPTION}
              tabIndex={0}
            />
            {globalData?.allSiteSettings?.GlobalFooter?.footerLogo?.url && (
              <div className={styles.logoWrapper} data-is-mobile>
                <Link appearance={LinkAppearance.BLANK} url="/">
                  <Image
                    title="UK Power Network"
                    className={styles.logoImage}
                    src={
                      globalData?.allSiteSettings?.GlobalFooter?.footerLogo?.url
                    }
                    alt="logo"
                    width={136.23}
                    height={42.23}
                    layout="fixed"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default UkpnFooter
