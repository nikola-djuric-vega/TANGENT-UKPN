import DoubleCtaNavIconImage from '_molecules/DoubleCtaNavIconImage/DoubleCtaNavIconImage'
import PowerCutCurvedBanner from '_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner'
import CtaFullWidthOffset from '_molecules/CtaFullWidthOffset/CtaFullWidthOffset'
import TextWithVideoImage from '_molecules/TextWithVideoImage/TextWithVideoImage'
import DangerousSituation from '_molecules/DangerousSituation/DangerousSituation'
import HomePageHeroBanner from '_organism/HomepageHeroBanner/HomePageHeroBanner'
import StormLandingBanner from '_organism/StormLandingBanner/StormLandingBanner'
import WhatServiceInterim from '_organism/WhatServiceInterim/WhatServiceInterim'
import { ComponentsTypeName, Components, PageTypeNames } from '_types/CMS/base'
import PowerCutContactUs from '_molecules/PowerCutContactUs/PowerCutContactUs'
import PowerCutComponent from '_organism/PowerCutComponent/PowerCutComponent'
import LandingHeroBanner from '_organism/LandingHeroBanner/LandingHeroBanner'
import CtaFullWidthBox from '_molecules/CtaFullWidthBox/CtaFullWidthBox'
import SearchPowerCuts from '_organism/SearchPowerCuts/SearchPowerCuts'
import TextBoxWithCTA from '_molecules/TextBoxWithCTA/TextBoxWithCTA'
import ProcessGraphic from '_molecules/ProcessGraphic/ProcessGraphic'
import RelatedContent from '_molecules/RelatedContent/RelatedContent'
import PowerCutBanner from '_organism/PowerCutBanner/PowerCutBanner'
import HelpAndContact from '_organism/HelpAndContact/HelpAndContact'
import SafeSpaceWidget from '_atoms/SafeSpaceWidget/SafeSpaceWidget'
import AnchorComponent from '_atoms/AnchorComponent/AnchorComponent'
import SimpleContent from '_molecules/SimpleContent/SimpleContent'
import { HelpAndContactProvider } from '_context/help-and-contact'
import SubNavigation from '_molecules/SubNavigation/SubNavigation'
import QuickLinkCard from '_molecules/QuickLinkCard/QuickLinkCard'
import IsPowerOffCta from '_molecules/IsPowerOffCta/IsPowerOffCta'
import ImageCarousel from '_molecules/ImageCarousel/ImageCarousel'
import StormLiveFeed from '_organism/StormLiveFeed/StormLiveFeed'
import HelpAndAdvice from '_organism/HelpAndAdvice/HelpAndAdvice'
import TabbedContent from '_organism/TabbedContent/TabbedContent'
import BannerCurved from '_molecules/BannerCurved/BannerCurved'
import Notification from '_molecules/Notification/Notification'
import NewsAndViews from '_organism/NewsAndViews/NewsAndViews'
import SocialLinks from '_molecules/SocialLinks/SocialLinks'
import UsefulLinks from '_molecules/UsefulLinks/UsefulLinks'
import AreaChecker from '_molecules/AreaChecker/AreaChecker'
import Buttons5Max from '_molecules/Buttons5Max/Buttons5Max'
import FeedbackCTA from '_molecules/FeedbackCTA/FeedbackCTA'
import WhatsMyMpan from '_organism/WhatsMyMpan/WhatsMyMpan'
import WhatService from '_organism/WhatService/WhatService'
import AlertError from '_molecules/AlertError/AlertError'
import MediaTiles from '_organism/MediaTiles/MediaTiles'
import ImageGrid from '_molecules/ImageGrid/ImageGrid'
import ContactUs from '_molecules/ContactUs/ContactUs'
import Checklist from '_molecules/Checklist/Checklist'
import DoubleCTA from '_molecules/DoubleCTA/DoubleCTA'
import TextBoxes from '_molecules/TextBoxes/TextBoxes'
import Accordion from '_organism/Accordion/Accordion'
import StormBody from '_organism/StormBody/StormBody'
import NavIcons from '_molecules/NavIcons/NavIcons'
import RawHtml from '_atoms/RawHtml/RawHtml'
import InterimHomepageBanner from '_molecules/InterimHomepageBanner/InterimHomepageBanner'
import Table from '_molecules/Table/Table'
import dynamic from 'next/dynamic'

interface RenderComponentProps {
  data: Components
  id: number
  pageContainer?: PageTypeNames
  location?: string
}

const DynamicMediaTiles = dynamic(
  () => import('_organism/MediaTiles/MediaTiles')
) as typeof MediaTiles

const DynamicUsefulLinks = dynamic(
  () => import('_molecules/UsefulLinks/UsefulLinks')
) as typeof UsefulLinks

const DynamicDoubleCTA = dynamic(
  () => import('_molecules/DoubleCTA/DoubleCTA')
) as typeof DoubleCTA

const DynamicCtaFullWidthOffset = dynamic(
  () => import('_molecules/CtaFullWidthOffset/CtaFullWidthOffset')
) as typeof CtaFullWidthOffset

const DynamicTextBoxes = dynamic(
  () => import('_molecules/TextBoxes/TextBoxes')
) as typeof TextBoxes

const DynamicAccordion = dynamic(
  () => import('_organism/Accordion/Accordion')
) as typeof Accordion

const DynamicSimpleContent = dynamic(
  () => import('_molecules/SimpleContent/SimpleContent')
) as typeof SimpleContent

const DynamicNavIcons = dynamic(
  () => import('_molecules/NavIcons/NavIcons')
) as typeof NavIcons

const DynamicRelatedContent = dynamic(
  () => import('_molecules/RelatedContent/RelatedContent')
) as typeof RelatedContent

const DynamicCtaFullWidthBox = dynamic(
  () => import('_molecules/CtaFullWidthBox/CtaFullWidthBox')
) as typeof CtaFullWidthBox

const DynamicSocialLinks = dynamic(
  () => import('_molecules/SocialLinks/SocialLinks')
) as typeof SocialLinks

const DynamicChecklist = dynamic(
  () => import('_molecules/Checklist/Checklist')
) as typeof Checklist

const DynamicImageGrid = dynamic(
  () => import('_molecules/ImageGrid/ImageGrid')
) as typeof ImageGrid

const DynamicContactUs = dynamic(
  () => import('_molecules/ContactUs/ContactUs')
) as typeof ContactUs

const DynamicDoubleCtaNavIconImage = dynamic(
  () => import('_molecules/DoubleCtaNavIconImage/DoubleCtaNavIconImage')
) as typeof DoubleCtaNavIconImage

const DynamicLandingHeroBanner = dynamic(
  () => import('_organism/LandingHeroBanner/LandingHeroBanner')
) as typeof LandingHeroBanner

const DynamicBannerCurved = dynamic(
  () => import('_molecules/BannerCurved/BannerCurved')
) as typeof BannerCurved

const DynamicRawHtml = dynamic(
  () => import('_atoms/RawHtml/RawHtml')
) as typeof RawHtml

const DynamicProcessGraphic = dynamic(
  () => import('_molecules/ProcessGraphic/ProcessGraphic')
) as typeof ProcessGraphic

const DynamicTextWithVideoImage = dynamic(
  () => import('_molecules/TextWithVideoImage/TextWithVideoImage')
) as typeof TextWithVideoImage

const DynamicHelpAndAdvice = dynamic(
  () => import('_organism/HelpAndAdvice/HelpAndAdvice')
) as typeof HelpAndAdvice

const DynamicNotification = dynamic(
  () => import('_molecules/Notification/Notification')
) as typeof Notification

const DynamicTabbedContent = dynamic(
  () => import('_organism/TabbedContent/TabbedContent')
) as typeof TabbedContent

const DynamicPowerCutCurvedBanner = dynamic(
  () => import('_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner')
) as typeof PowerCutCurvedBanner

const DynamicWhatsMyMpan = dynamic(
  () => import('_organism/WhatsMyMpan/WhatsMyMpan')
) as typeof WhatsMyMpan

const DynamicAreaChecker = dynamic(
  () => import('_molecules/AreaChecker/AreaChecker')
) as typeof AreaChecker

const DynamicHelpAndContact = dynamic(
  () => import('_organism/HelpAndContact/HelpAndContact')
) as typeof HelpAndContact

const DynamicDangerousSituation = dynamic(
  () => import('_molecules/DangerousSituation/DangerousSituation')
) as typeof DangerousSituation

const DynamicIsPowerOffCta = dynamic(
  () => import('_molecules/IsPowerOffCta/IsPowerOffCta')
) as typeof IsPowerOffCta

const DynamicTable = dynamic(
  () => import('_molecules/Table/Table')
) as typeof Table

const DynamicSubNavigation = dynamic(
  () => import('_molecules/SubNavigation/SubNavigation')
) as typeof SubNavigation

const DynamicFeedbackCTA = dynamic(
  () => import('_molecules/FeedbackCTA/FeedbackCTA')
) as typeof FeedbackCTA

const DynamicAnchorComponent = dynamic(
  () => import('_atoms/AnchorComponent/AnchorComponent')
) as typeof AnchorComponent

const DynamicNewsAndViews = dynamic(
  () => import('_organism/NewsAndViews/NewsAndViews')
) as typeof NewsAndViews

const DynamicHomePageHeroBanner = dynamic(
  () => import('_organism/HomepageHeroBanner/HomePageHeroBanner')
) as typeof HomePageHeroBanner

const DynamicStormBody = dynamic(
  () => import('_organism/StormBody/StormBody')
) as typeof StormBody

const DynamicPowerCutComponent = dynamic(
  () => import('_organism/PowerCutComponent/PowerCutComponent')
) as typeof PowerCutComponent

const DynamicButtons5Max = dynamic(
  () => import('_molecules/Buttons5Max/Buttons5Max')
) as typeof Buttons5Max

const DynamicPowerCutContactUs = dynamic(
  () => import('_molecules/PowerCutContactUs/PowerCutContactUs')
) as typeof PowerCutContactUs

const DynamicImageCarousel = dynamic(
  () => import('_molecules/ImageCarousel/ImageCarousel')
) as typeof ImageCarousel

const DynamicSafeSpaceWidget = dynamic(
  () => import('_atoms/SafeSpaceWidget/SafeSpaceWidget')
) as typeof SafeSpaceWidget

const DynamicQuickLinkCard = dynamic(
  () => import('_molecules/QuickLinkCard/QuickLinkCard')
) as typeof QuickLinkCard

const DynamicStormLandingBanner = dynamic(
  () => import('_organism/StormLandingBanner/StormLandingBanner')
) as typeof StormLandingBanner

const DynamicPowerCutBanner = dynamic(
  () => import('_organism/PowerCutBanner/PowerCutBanner')
) as typeof PowerCutBanner

const DynamicStormLiveFeed = dynamic(
  () => import('_organism/StormLiveFeed/StormLiveFeed')
) as typeof StormLiveFeed
const DynamicTextBoxWithCTA = dynamic(
  () => import('_molecules/TextBoxWithCTA/TextBoxWithCTA')
) as typeof TextBoxWithCTA

const DynamicWhatServiceInterim = dynamic(
  () => import('_organism/WhatServiceInterim/WhatServiceInterim')
) as typeof WhatServiceInterim

const DynamicWhatService = dynamic(
  () => import('_organism/WhatService/WhatService')
) as typeof WhatService

const DynamicSearchPowerCuts = dynamic(
  () => import('_organism/SearchPowerCuts/SearchPowerCuts')
) as typeof SearchPowerCuts

const DynamicInterimHomepageBanner = dynamic(
  () => import('_molecules/InterimHomepageBanner/InterimHomepageBanner')
) as typeof InterimHomepageBanner

const DynamicAlertError = dynamic(
  () => import('_molecules/AlertError/AlertError')
) as typeof AlertError

const renderComponent = ({
  data,
  id,
  pageContainer,
  location,
}: RenderComponentProps) => {
  switch (data.__typename) {
    case ComponentsTypeName.MEDIA_TILES:
      return <DynamicMediaTiles key={id} {...data} />
    case ComponentsTypeName.USEFUL_LINKS:
      return <DynamicUsefulLinks key={id} {...data} />
    case ComponentsTypeName.DOUBLE_CTA:
      return <DynamicDoubleCTA key={id} {...data} />
    case ComponentsTypeName.CTA_FULL_WIDTH_OFFSET:
      return <DynamicCtaFullWidthOffset key={id} {...data} />
    case ComponentsTypeName.TEXT_BOXES:
      return <DynamicTextBoxes key={id} {...data} />
    case ComponentsTypeName.ACCORDION:
      return <DynamicAccordion key={id} {...data} />
    case ComponentsTypeName.SIMPLE_CONTENT:
      return <DynamicSimpleContent key={id} {...data} />
    case ComponentsTypeName.NAVIGATION_ICON:
      return <DynamicNavIcons key={id} {...data} />
    case ComponentsTypeName.RELATED_CONTENT:
      return <DynamicRelatedContent key={id} {...data} />
    case ComponentsTypeName.CTA_FULL_WIDTH_BOX:
      return <DynamicCtaFullWidthBox key={id} {...data} />
    case ComponentsTypeName.SOCIAL_LINKS:
      return (
        <DynamicSocialLinks key={id} {...data} pageContainer={pageContainer} />
      )
    case ComponentsTypeName.CHECKLIST:
      return <DynamicChecklist key={id} {...data} />
    case ComponentsTypeName.IMAGE_GRID:
      return <DynamicImageGrid key={id} {...data} />
    case ComponentsTypeName.CONTACT_US:
      return <DynamicContactUs key={id} {...data} />
    case ComponentsTypeName.NAV_ICON_ITEM:
      return <DynamicDoubleCtaNavIconImage key={id} {...data} />
    case ComponentsTypeName.LANDING_HERO_BANNER:
      return <DynamicLandingHeroBanner key={id} {...data} />
    case ComponentsTypeName.BANNER_CURVED:
      return <DynamicBannerCurved key={id} {...data} />
    case ComponentsTypeName.RAW_HTML:
      return <DynamicRawHtml key={id} {...data} />
    case ComponentsTypeName.PROCESS_GRAPHIC:
      return <DynamicProcessGraphic key={id} {...data} />
    case ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE:
      return <DynamicTextWithVideoImage key={id} {...data} />
    case ComponentsTypeName.HELP_AND_ADVICE:
      return <DynamicHelpAndAdvice key={id} {...data} />
    case ComponentsTypeName.NOTIFICATION:
      return <DynamicNotification key={id} {...data} />
    case ComponentsTypeName.TABBED_CONTENT:
      return <DynamicTabbedContent key={id} {...data} />
    case ComponentsTypeName.POWER_CUT_CURVED_BANNER:
      return <DynamicPowerCutCurvedBanner key={id} {...data} />
    case ComponentsTypeName.WHATS_MY_MPAN:
      return <DynamicWhatsMyMpan key={id} {...data} />
    case ComponentsTypeName.AREA_CHECKER:
      return <DynamicAreaChecker key={id} {...data} />
    case ComponentsTypeName.HELP_AND_CONTACT:
      return (
        <HelpAndContactProvider key={id}>
          <DynamicHelpAndContact {...data} />
        </HelpAndContactProvider>
      )
    case ComponentsTypeName.DANGEROUS_SITUATION:
      return <DynamicDangerousSituation key={id} {...data} />

    case ComponentsTypeName.IS_POWER_OFF_CTA:
      return <DynamicIsPowerOffCta key={id} {...data} />
    case ComponentsTypeName.TABLE:
      return <DynamicTable key={id} {...data} />
    case ComponentsTypeName.SUB_NAVIGATION:
      return <DynamicSubNavigation key={id} {...data} />
    case ComponentsTypeName.FEEDBACK_CTA:
      return <DynamicFeedbackCTA key={id} {...data} />
    case ComponentsTypeName.ANCHOR_COMPONENT:
      return <DynamicAnchorComponent key={id} {...data} />
    case ComponentsTypeName.NEWS_AND_VIEWS:
      return <DynamicNewsAndViews key={id} {...data} />
    case ComponentsTypeName.HOME_PAGE_HERO_BANNER:
      return <DynamicHomePageHeroBanner key={id} {...data} />
    case ComponentsTypeName.STORM_BODY:
      return <DynamicStormBody key={id} {...data} />
    case ComponentsTypeName.POWER_CUT_COMPONENT:
      return <DynamicPowerCutComponent key={id} {...data} />
    case ComponentsTypeName.BUTTONS_5_MAX:
      return <DynamicButtons5Max key={id} {...data} />
    case ComponentsTypeName.POWER_CUT_CONTACT_US:
      return <DynamicPowerCutContactUs key={id} {...data} />
    case ComponentsTypeName.IMAGE_CAROUSEL:
      return <DynamicImageCarousel key={id} {...data} />
    case ComponentsTypeName.SAFE_SPACE_WIDGET:
      return <DynamicSafeSpaceWidget key={id} />
    case ComponentsTypeName.QUICK_LINK_CARD:
      return <DynamicQuickLinkCard key={id} {...data} />
    case ComponentsTypeName.STORM_LANDING_BANNER:
      return <DynamicStormLandingBanner key={id} {...data} />
    case ComponentsTypeName.POWER_CUT_BANNER:
      return <DynamicPowerCutBanner key={id} {...data} location={location} />
    case ComponentsTypeName.STORM_LIVE_FEED:
      return <DynamicStormLiveFeed key={id} {...data} />
    case ComponentsTypeName.TEXT_BOX_WITH_CTA:
      return <DynamicTextBoxWithCTA key={id} {...data} />
    case ComponentsTypeName.SEARCH_POWER_CUTS:
      return <DynamicSearchPowerCuts key={id} {...data} />
    case ComponentsTypeName.WHAT_SERVICE_INTERIM:
      return <DynamicWhatServiceInterim key={id} {...data} />
    case ComponentsTypeName.WHAT_SERVICE:
      return <DynamicWhatService key={id} {...data} />
    case ComponentsTypeName.INTERIM_HOMEPAGE_BANNER:
      return <DynamicInterimHomepageBanner key={id} {...data} />
    case ComponentsTypeName.ALERT_ERROR:
      return <DynamicAlertError key={id} {...data} />
    default:
      return null
  }
}

export default renderComponent
