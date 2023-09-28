import { DNO } from '_types/local'
import { Media } from '../media'
import { CTAButton } from './components/UKPN/buttons/base'
import { Link } from '../link'

export interface UkpnGlobalDataQuery {
  allUkpnHomepage: { items: UkpnGlobalItem[] }
  allUkpnSiteSettings: { items: SiteSettingsData[] }
  allGlobalHeader: GlobalHeader
  allPowerSharing: { items: PowerSharingData[] }
}

export interface UkpnGlobalData {
  allSiteSettings: UkpnGlobalSiteSettingsData
}

export enum StormMode {
  STORM = 'Storm',
  NORMAL = 'Normal',
  PREPARE = 'Prepare',
  INCIDENT = 'Incident',
}

export interface PowerSharingData {
  powerSharingEnabled: boolean
  powerSharingPopUpButtons: CTAButton[]
  powerSharingPopUpIcon: string
  powerSharingPopUpMessage: string
  powerSharingPopUpTitle: string
  __typename: GlobalChildrenItemsName.POWERSHARING
}

export interface StormContainer {
  stormMode: StormMode
  stormTracker: boolean
}

export interface SiteSettingsData {
  click4AssistanceId?: string
  enableNewWebChat: boolean
  reportPowerCutLink: Link
  threePostcodesSearchPanelToggle: boolean
  twoCallsPanelToggle: boolean
  stormMode?: StormMode
  mobileLogo?: Media
  stormModeLogo?: Media
  desktopLogo?: Media
  children?: GlobalChildrenItemsObject
}

export interface UkpnGlobalSiteSettingsData {
  click4AssistanceId?: string
  enableNewWebChat: boolean
  reportPowerCutLink: Link
  threePostcodesSearchPanelToggle: boolean
  twoCallsPanelToggle: boolean
  stormMode?: StormMode
  mobileLogo?: Media
  desktopLogo?: Media
  stormModeLogo?: Media
  GlobalHeader?: GlobalHeader
  GlobalFooter?: GlobalFooter
  MainNavigation?: UkpnMainNavigation
  RightHandMenuNavigation?: UkpnRightHandMenuNavigation
  DNOs?: DNOs
  powerSharingData?: PowerSharingData
}

export enum GlobalChildrenItemsName {
  HEADER = 'GlobalHeader',
  FOOTER = 'GlobalFooter',
  MAINNAVIGATION = 'MainNavigation',
  RIGHTHANDMENUNAVIGATION = 'RightHandMenuNavigation',
  POWERSHARING = 'PowerSharing',
  DNOs = 'DNOs',
}

export interface GlobalChildrenItemsObject {
  GlobalHeader?: GlobalHeader
  GlobalFooter?: GlobalFooter
  MainNavigation?: UkpnMainNavigation
  RightHandMenuNavigation?: UkpnRightHandMenuNavigation
  DNOs?: DNOs
}

export interface GlobalChildrenItemsArray {
  items: (
    | GlobalHeader
    | GlobalFooter
    | UkpnMainNavigation
    | UkpnRightHandMenuNavigation
    | DNOs
  )[]
}

export interface GlobalHeader {
  __typename: GlobalChildrenItemsName.HEADER
  secondaryNavigationLinks: Link[]
}

export interface GlobalFooter {
  __typename: GlobalChildrenItemsName.FOOTER
  footerLogo?: FooterLogo
  generalLinks?: Link[]
  informationLinks?: Link[]
  serviceLinks?: Link[]
  languageSelector?: LanguageSelectorItem[]
  socialMediaItems?: SocialMediaItem[]
}

export interface UkpnRightHandMenuNavigation {
  __typename: GlobalChildrenItemsName.RIGHTHANDMENUNAVIGATION
  menuLinks?: Link[]
}
export interface UkpnMainNavigation {
  __typename: GlobalChildrenItemsName.MAINNAVIGATION
  children: { items: NavigationItem[] }
}

export interface NavigationItem {
  name?: string
  navigationMenu?: NavigationMenu[]
  promoBoxes?: PromoBox[]
  showInStormMode?: boolean
}

export interface NavigationMenu {
  title?: string
  navigationLinks?: Link[]
}

export interface PromoBox {
  __typename: string
  promoBoxType?: string
  title?: string
  largeText?: string
  body: string
  cTA?: Link
}

export interface UkpnGlobalItem {
  allSiteSettings: SiteSettingsData
}
export interface FooterLogo {
  url: string
}

export interface LanguageSelectorItem {
  label: string
  link: Link
}

export interface SocialMediaItem {
  icon: string
  url: string
}

export interface DNOs {
  __typename: GlobalChildrenItemsName.DNOs
  children: {
    items: DnosEntity[]
  }
}

export interface DnosEntity {
  dnoPhoneNumber: string
  websiteURL: string
  dnoLogo: Media
  name: DNO
}
