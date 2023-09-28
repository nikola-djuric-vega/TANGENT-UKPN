import { PageTypeNames } from '_types/CMS'
import { gql } from '@apollo/client'

import {
  AllComponentsFragments,
  PowerCutCurvedBanner,
  CtaFullWidthOffset,
  TextWithVideoImage,
  HomePageHeroBanner,
  DangerousSituation,
  StormLandingBanner,
  WhatServiceInterim,
  PowerCutComponent,
  PowerCutContactUs,
  LandingHeroBanner,
  SearchPowerCuts,
  CTAFullWidthBox,
  AnchorComponent,
  TextBoxWithCTA,
  ProcessGraphic,
  RelatedContent,
  PowerCutBanner,
  HelpAndAdvice,
  TabbedContent,
  SimpleContent,
  SubNavigation,
  mediaFragment,
  AllComponents,
  QuickLinkCard,
  StormLiveFeed,
  Notification,
  NewsAndViews,
  NavIconItem,
  WhatService,
  UsefulLinks,
  AlertError,
  SafeSpaces,
  ContactUs,
  Accordion,
  DoubleCTA,
  RawHtml,
  Table,
  link,
  InterimHomepageBanner,
} from './components'

export interface GetRoutesProps {
  preview: boolean
  locale: string
}

export const getUKPNRoutes = ({ preview, locale }: GetRoutesProps) => gql`
  query {
    allUkpnHomepage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allGenericPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allPowerCut(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allPowerCutFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allPowerCutList(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allPowerCutThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allRegisterTextUpdatesPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allUnsubscribeTextUpdatesPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allConfirmationSuccess(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allConfirmationFailure(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allEmailFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allEmailFormThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allCatAFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allCatAThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allPSRFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allPSRFormThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allErrorPage(culture: "${locale}", preview: ${preview}, where: {url_starts_with: "/ukpn"}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allNewsListing(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allNewsArticle(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT2LandingPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT3ContactUs(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT4PSRLanding(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT5InstallersLanding(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT6SSContentOverview(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT7ProjectsContentOverview(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT8SSCalculator(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allT9ApplicationStartOverview(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allMapPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allStreetFurnitureFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allStreetFurnitureFormThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allMeteredConnectionFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allMeteredConnectionFormThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allUnMeteredConnectionFormPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allUnMeteredConnectionFormThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allLandingICE(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allSearchResults(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allStormPrepare(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
    allIncidentPage(culture: "${locale}", preview: ${preview}) {
      items {
        hideFromSearchEngines
        updateDate
        id
        url
      }
    }
  }
`

export const pageMetadataProperties = `
  seoTitle
  seoDescription
  hideFromSearchEngines
`

export const pageBreadcrumbs = `
  ancestors {
    items {
      __typename
      id
      url
      name
      ... on PageBase {
        breadcrumb
      }
    }
  }
`

export const pageBaseProperties = `
  pageTitle
  url
  breadcrumb
`

export const siteSettingsProperties = `
  siteName
`

export const formPageProperties = `
  formDetails {
    ... on Form {
      umbracoForm
    }
    ... on FormByID {
      formID
    }
  }
  descendants {
    items {
      id
      url
    }
  }
  includeReference
  thankYouPageId
`

export const streetFormPageProperties = `
  formDetails {
    ... on Form {
      umbracoForm
    }
    ... on FormByID {
      formID
    }
  }
  assetFormRepeater 
  descendants {
    items {
      id
      url
    }
  }
  includeReference
  thankYouPageId
`

export const meteredUnMeteredConnectionFormPageProperties = `
  formDetails {
    ... on Form {
      umbracoForm
    }
    ... on FormByID {
      formID
    }
  }
  representativeFormRepeater
  assetFormRepeater 
  descendants {
    items {
      id
      url
    }
  }
  includeReference
  thankYouPageId
`

export const FRAGMENT_UKPN_HOMEPAGE = gql`
  ${CtaFullWidthOffset}
  ${WhatServiceInterim}
  ${SearchPowerCuts}
  ${TextBoxWithCTA}
  ${SimpleContent}
  ${Notification}
  ${NavIconItem}
  ${WhatService}
  ${SafeSpaces}
  ${RawHtml}
  ${InterimHomepageBanner}
  ${StormLandingBanner}
  ${PowerCutContactUs}
  ${QuickLinkCard}
  ${AlertError}

  fragment UkpnHomepage on UkpnHomepage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${siteSettingsProperties}
    ${HomePageHeroBanner}
    id

    components {
      ...CTAFullWidthOffset
      ...WhatServiceInterim
      ...SearchPowerCuts
      ...TextBoxWithCTA
      ...SimpleContent
      ...Notification
      ...NavIconItem
      ...WhatService
      ...SafeSpaces
      ...RawHtml
      ...InterimHomepageBanner
    }

    stormModeComponents{
      __typename
      ...StormLandingBanner
      ...PowerCutContactUs
      ...QuickLinkCard
      ...AlertError
    }
  }
`

export const FRAGMENT_ERROR_PAGE = gql`
  fragment ErrorPage on ErrorPage {
    id
    pageText
    errorPageButtonLink {
      url
      name
      target
    }
    ${pageMetadataProperties}
    ${pageBaseProperties}
  }
`

export const FRAGMENT_GENERIC_PAGE = gql`
  fragment GenericPage on GenericPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${siteSettingsProperties}
    ${pageBreadcrumbs}

    id
    components {
      ... on FormByID {
        formID
      }
    }
  }
`

export const FRAGMENT_POWER_CUT = gql`
  ${StormLandingBanner}
  ${PowerCutComponent}
  ${PowerCutContactUs}
  ${StormLiveFeed}
  ${PowerCutBanner}
  ${HelpAndAdvice}
  ${QuickLinkCard}
  ${Notification}
  ${Accordion}


  fragment PowerCut on PowerCut {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    id
    stormComponents {
      __typename
      ...StormLandingBanner
      ...PowerCutContactUs
      ...StormLiveFeed
      ...QuickLinkCard
      ...HelpAndAdvice
      ...Accordion
    }
    components {
      __typename
      ...PowerCutComponent
      ...PowerCutContactUs
      ...PowerCutBanner
      ...QuickLinkCard
      ...HelpAndAdvice
      ...Notification
      ...Accordion
    }
  }
`

export const FRAGMENT_POWER_CUT_LIST_PAGE = gql`
  fragment PowerCutList on PowerCutList {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    id
    contactUsItems {
      __typename
      ... on PowerCutContactUs {
        powerCutContactUsAuthor {
          ... on Author {
            authorName
            department
            image {
             url
             name
            }
          }
        }
        title
        telephone
        text
        facebook {
          ${link}
        }
        twitter {
          ${link}
        }
        powerCutContactUsWhatsApp {
          ${link}
        }
      }
    }
  }
`

export const FRAGMENT_POWER_CUT_FORM_PAGE = gql`
  ${PowerCutCurvedBanner}
  ${DangerousSituation}

  fragment PowerCutFormPage on PowerCutFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${formPageProperties}

    id
    intro
    title
    text
    telephoneNumber1
    telephoneNumber2

    smartMeterIcon
    smartMeterTitle
    smartMeterSubtitle
    smartMeterBodyText

    components {
      ...PowerCutCurvedBanner
      ...DangerousSituationComponent
    }
  }
`

export const FRAGMENT_POWER_CUT_THANK_YOU_PAGE = gql`
  ${Accordion}
  
  fragment PowerCutThankYouPage on PowerCutThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    
    id
    components {
      ...Accordion
    }
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`

export const FRAGMENT_TEXT_UPDATES = gql`
  fragment RegisterTextUpdatesPage on RegisterTextUpdatesPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    futureTitle
    futureSubtitle
    futureGdpr
    futureTerms
    children {
      items {
        __typename
        url
        ... on ConfirmationSuccess {
          title
          icon
          copy
          cTA {
            name
            url
            target
          }
          backButton
          id
        }
        ... on ConfirmationFailure {
          title
          icon
          copy
          cTA {
            name
            url
            target
          }
          backButton
          id
        }
      }
    }
    id
  }
`

export const FRAGMENT_STORM_PREPARE = gql`
  ${StormLandingBanner}
  ${TextWithVideoImage}
  ${PowerCutContactUs}
  ${HelpAndAdvice}
  ${QuickLinkCard}
  ${Accordion}

  fragment StormPrepare on StormPrepare {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    informationCard {
      ...on InformationCard {
        informationCardColour
        informationCardTitle
        informationCardIcon
        informationCardText
			}
    }
    stormPrepareBody
    stormChecklist {
      ...on StormChecklist {
        stormChecklistSubtitle
        stormChecklistTitle
        stormChecklistLinks {
          ... on LinkItem {
            linkIcon
            linkURL {
              target
              name
              url
            }
          }
        }
      }
    }
    stormBanner {
      ...StormLandingBanner
    }
    components {
      ...TextWithVideoImage
      ...PowerCutContactUs
      ...HelpAndAdvice
      ...QuickLinkCard
      ...Accordion
    }
  }
`

export const FRAGMENT_TEXT_UPDATES_UNSUBSCRIBE = gql`
  fragment UnsubscribeTextUpdatesPage on UnsubscribeTextUpdatesPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    noAddressFoundTitle
    noAddressFoundSubtitle
    noAddressFoundTerms
    noAddressFoundBackgroundImage {
      url
      name
    }
    unsubscribeForTextUpdatesTitle
    unsubscribeForTextUpdatesIcon
    unsubscribeForTextUpdatesGdpr
    unsubscribeForTextUpdatesBackButton
    children {
      items {
        __typename
        url
      }
    }
    id
  }
`

export const FRAGMENT_CONFIRMATION_SUCCESS = gql`
  fragment ConfirmationSuccess on ConfirmationSuccess {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    title
    icon
    copy
    cTA {
      name
      url
      target
    }
    backButton
    id
  }
`

export const FRAGMENT_CONFIRMATION_FAILURE = gql`
  fragment ConfirmationFailure on ConfirmationFailure {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    title
    icon
    copy
    cTA {
      name
      url
      target
    }
    backButton
    id
  }
`

export const FRAGMENT_EMAIL_FORM_PAGE = gql`
  fragment EmailFormPage on EmailFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${formPageProperties}

    id
  }
`

export const FRAGMENT_EMAIL_FORM_THANK_YOU_PAGE = gql`
  fragment EmailFormThankYouPage on EmailFormThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`
export const FRAGMENT_STREET_FORM_PAGE = gql`
  fragment StreetFurnitureFormPage on StreetFurnitureFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${streetFormPageProperties}

    id
  }
`
export const FRAGMENT_STREET_FORM_THANK_YOU_PAGE = gql`
  fragment StreetFurnitureFormThankYouPage on StreetFurnitureFormThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`
export const FRAGMENT_METERED_CONNECTION_FORM_PAGE = gql`
  fragment MeteredConnectionFormPage on MeteredConnectionFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${meteredUnMeteredConnectionFormPageProperties}

    id
  }
`
export const FRAGMENT_METERED_CONNECTION_FORM_THANK_YOU_PAGE = gql`
  fragment MeteredConnectionFormThankYouPage on MeteredConnectionFormThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`
export const FRAGMENT_UNMETERED_CONNECTION_FORM_PAGE = gql`
  fragment UnMeteredConnectionFormPage on UnMeteredConnectionFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${meteredUnMeteredConnectionFormPageProperties}

    id
  }
`
export const FRAGMENT_UNMETERED_CONNECTION_FORM_THANK_YOU_PAGE = gql`
  fragment UnMeteredConnectionFormThankYouPage on UnMeteredConnectionFormThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`

export const FRAGMENT_CAT_A_FORM_PAGE = gql`
  fragment CatAFormPage on CatAFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${formPageProperties}

    id
  }
`
export const FRAGMENT_CAT_A_THANK_YOU_PAGE = gql`
  fragment CatAThankYouPage on CatAThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`
export const FRAGMENT_PSR_FORM_THANK_YOU_PAGE = gql`
  fragment PSRFormThankYouPage on PSRFormThankYouPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    thankYouText
    buttonLink {
      name
      target
      url
    }
  }
`

export const FRAGMENT_PSR_FORM_PAGE = gql`
  fragment PSRFormPage on PSRFormPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${formPageProperties}
    mandatorySection
    id
  }
`
export const FRAGMENT_SEARCH_PAGE = gql`
  fragment SearchPage on SearchPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
  }
`
export const FRAGMENT_SEARCH_RESULTS = gql`
  fragment SearchResults on SearchResults {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}
    
    id
  }
`
export const FRAGMENT_SUCCESS_PAGE = gql`
  fragment SuccessPage on SuccessPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

      pageBody
      cTAButton {
        url
        name
      }
      
    id
  }
`

export const FRAGMENT_ICE_LANDING_PAGE = gql`
  fragment LandingICE on LandingICE {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    links {
      url
      target
      name
    }
    mandatoryText
    selectLabel
    id
  }
`

export const FRAGMENT_NEWS_ARTICLE = gql`
  ${LandingHeroBanner}
  ${TextWithVideoImage}
  ${ContactUs}
  ${Table}

  fragment NewsArticle on NewsArticle {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    mobileImage {
      ${mediaFragment}
    }
    tabletImage {
      ${mediaFragment}
    }
    desktopImage {
      ${mediaFragment}
    }
    publishedDate
    pageSubtitle
    pageTitle
    subhead
    image {
      ${mediaFragment}
    }
    video
    components {
      ...LandingHeroBanner
      ...TextWithVideoImage
      ...ContactUs
      ...TableContainer
    }
  }
`

export const FRAGMENT_NEWS_LISTING = gql`
  ${FRAGMENT_NEWS_ARTICLE}
  ${LandingHeroBanner}
  ${SubNavigation}
  ${NewsAndViews}
  ${RelatedContent}
  ${ContactUs}

  fragment NewsListing on NewsListing {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    components {
      ...LandingHeroBanner
      ...ContactUs
      ...RelatedContent
      ...NewsAndViewsComponent
      ...SubNavigationComponent
    }
    id
  }
`

export const FRAGMENT_T2_LANDING_PAGE = gql`
  ${AllComponentsFragments}

  fragment T2LandingPage on T2LandingPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    applyPowerCutNavigation
    
    components {
      ${AllComponents}
      
      ... on SocialLinks {
        title
        subTitle
        label
      }
    }
    id
  }
`

export const FRAGMENT_T3_CONTACT_US = gql`
  ${AllComponentsFragments}

  fragment T3ContactUs on T3ContactUs {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    applyPowerCutNavigation

    components {
      ${AllComponents}
    }

    id
  }
`

export const FRAGMENT_T4_PSR_LANDING = gql`
  ${AllComponentsFragments}

  fragment T4PSRLanding on T4PSRLanding {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    components {
      ${AllComponents}
    }
    
    id
  }
`

export const FRAGMENT_T5_INSTALLERS_LANDING = gql`
  ${AllComponentsFragments}

  fragment T5InstallersLanding on T5InstallersLanding {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    components {
      ${AllComponents}
    }

    id
  }
`

export const FRAGMENT_T6_SS_CONTENT_OVERVIEW = gql`
  ${Accordion}
  ${AnchorComponent}
  ${ContactUs}
  ${CTAFullWidthBox}
  ${CtaFullWidthOffset}
  ${HelpAndAdvice}
  ${LandingHeroBanner}
  ${ProcessGraphic}
  ${TabbedContent}
  ${TextWithVideoImage}

  fragment T6SSContentOverview on T6SSContentOverview {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    components {
      ...Accordion
      ...AnchorComponent
      ...ContactUs
      ...CTAFullWidthBox
      ...CTAFullWidthOffset
      ...HelpAndAdvice
      ...LandingHeroBanner
      ...ProcessGraphic
      ...TabbedContent
      ...TextWithVideoImage
    }

    id
  }
`

export const FRAGMENT_T7_PROJECTS_CONTENT_OVERVIEW = gql`
  ${Accordion}
  ${AnchorComponent}
  ${ContactUs}
  ${CTAFullWidthBox}
  ${CtaFullWidthOffset}
  ${DoubleCTA}
  ${HelpAndAdvice}
  ${LandingHeroBanner}
  ${ProcessGraphic}
  ${RelatedContent}
  ${SimpleContent}
  ${TabbedContent}
  ${TextWithVideoImage}
  ${UsefulLinks}

  fragment T7ProjectsContentOverview on T7ProjectsContentOverview {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    components {
      ...Accordion
      ...AnchorComponent
      ...ContactUs
      ...CTAFullWidthBox
      ...CTAFullWidthOffset
      ...DoubleCTA
      ...HelpAndAdvice
      ...LandingHeroBanner
      ...ProcessGraphic
      ...SimpleContent
      ...RelatedContent
      ...TabbedContent
      ...TextWithVideoImage
      ...UsefulLinks
    }

    id
  }
`

export const FRAGMENT_T8_SS_CALCULATOR = gql`
  ${AllComponentsFragments}

  fragment T8SSCalculator on T8SSCalculator {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}

    components {
      ${AllComponents}
    }

    id
  }
`

export const FRAGMENT_T9_APPLICATION_START_OVERVIEW = gql`
  fragment T9ApplicationStartOverview on T9ApplicationStartOverview {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${pageBreadcrumbs}
    
    id
    pageSubtitle
    title
    checklistItems
    footer
    postcodeFormTitle
    postcodeFormDestination {
      ${link}
    }
    postcodePDFDownloadLink {
     ${link}
    }
  }
`

const panelComponents = `
  components {
    ... on HelpAndAdvice {
      helpAndAdviceTitle
      viewMore {
        ${link}
      }
      helpAndAdviceEnableAlwaysOpen
      helpAndAdviceItems {
        ... on HelpAndAdviceItem {
          helpAndAdviceImage {
            name
            url
          }
          helpAndAdviceImageOverlay
          helpAndAdviceImageOverlayIcon
          helpAndAdviceItemTitle
          helpAndAdviceTitleIcon
          helpAndAdviceDescription
          helpAndAdviceVideo
          helpAndAdviceVideoPlayText
        }
        ... on ExistingHelpAndAdviceItem {
          item {
            ... on HelpAndAdviceContainerItem {
              helpAndAdviceImage {
                name
                url
              }
              helpAndAdviceImageOverlay
              helpAndAdviceImageOverlayIcon
              helpAndAdviceItemTitle
              helpAndAdviceTitleIcon
              helpAndAdviceDescription
              helpAndAdviceVideo
              helpAndAdviceVideoPlayText
            }
          }
        }
      }
    }
    ... on PowerCutContactUs {
      powerCutContactUsAuthor {
        ... on Author {
          authorName
          department
          image {
           url
           name
          }
        }
      }
      title
      telephone
      text
      facebook {
        ${link}
      }
      twitter {
        ${link}
      }
      powerCutContactUsWhatsApp {
        ${link}
      }
    }
    ... on SocialLinks {
      title
      subTitle
      label
    }
    ... on PlainLink {
      link {
        ${link}
      }
      title
    }
  }
`

export const FRAGMENT_MAP_PAGE = gql`
  fragment MapPage on MapPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    
    id
    children {
      items {
        ... on MultipinPanel {
          title
          previewTitle
          previewDescription
          incidentInYourAreaTitle
          incidentsIntroduction
          plannedPowerCutsTitle
          restoredPowerCutsTitle
          unplannedPowerCutsTitle
          incidentReference
          affectedPostcodes
          showMoreIncidentsDetails
          isIndexed
          ${panelComponents}
        }
        ... on PlannedWorkPanel {
          image
          title
          hidePostcode
          isIndexed
          ${panelComponents}
        }
        ... on AwarePanel {
          title
          description
          disableReportButton
          disableDescription
          hidePostcode
          isIndexed
          ${panelComponents}
        }
        ... on UnplannedPanel {
          title
          image
          isIndexed
          subtitle
          eTRIntroduction
          eTRFooter
          noETRFooter
          informationNotice
          reasonTitle
          stormActionTitle
          stormActionText
          stormReasonTitle
          stormReasonText
          hidePostcode
          thankYouTitle
          articles {
            ... on HelpAndAdviceContainerItem {
              helpAndAdviceImage {
                name
                url
              }
              helpAndAdviceImageOverlay
              helpAndAdviceImageOverlayIcon
              helpAndAdviceItemTitle
              helpAndAdviceTitleIcon
              helpAndAdviceDescription
              helpAndAdviceVideo
              helpAndAdviceVideoPlayText
            }
          }
          ${panelComponents}
        }
        ... on NotAwarePanel {
          image
          title
          isIndexed
          hidePostcode
          components { 
            ... on PowerCutContactUs {
              powerCutContactUsAuthor {
                ... on Author {
                  authorName
                  department
                  image {
                   url
                   name
                  }
                }
              }
              title
              telephone
              text
              facebook {
                ${link}
              }
              twitter {
                ${link}
              }
              powerCutContactUsWhatsApp {
                ${link}
              }
            }
          }
        }
        ... on PowerBackOnPanel {
          title
          image
          isIndexed
          hidePostcode
          ${panelComponents}
        }
        ... on NotInOurAreaPanel {
          title
          image
          isIndexed
          hidePostcode
          ${panelComponents}
        }
      }
    }
  }
`

export const FRAGMENT_INCIDENT_PAGE = gql`
  fragment IncidentPage on IncidentPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    descendants {
      items {
        ... on MultipinPanel {
          title
          previewTitle
          previewDescription
          incidentInYourAreaTitle
          incidentsIntroduction
          plannedPowerCutsTitle
          restoredPowerCutsTitle
          unplannedPowerCutsTitle
          incidentReference
          affectedPostcodes
          showMoreIncidentsDetails
          isIndexed
          ${panelComponents}
        }
        ... on PlannedWorkPanel {
          image
          title
          hidePostcode
          isIndexed
          ${panelComponents}
        }
        ... on AwarePanel {
          title
          description
          disableReportButton
          disableDescription
          hidePostcode
          isIndexed
          ${panelComponents}
        }
        ... on UnplannedPanel {
          title
          image
          isIndexed
          subtitle
          eTRIntroduction
          eTRFooter
          noETRFooter
          informationNotice
          reasonTitle
          stormActionTitle
          stormActionText
          stormReasonTitle
          stormReasonText
          hidePostcode
          thankYouTitle
          articles {
            ... on HelpAndAdviceContainerItem {
              helpAndAdviceImage {
                name
                url
              }
              helpAndAdviceImageOverlay
              helpAndAdviceImageOverlayIcon
              helpAndAdviceItemTitle
              helpAndAdviceTitleIcon
              helpAndAdviceDescription
              helpAndAdviceVideo
              helpAndAdviceVideoPlayText
            }
          }
          ${panelComponents}
        }
        ... on NotAwarePanel {
          image
          title
          isIndexed
          hidePostcode
          components { 
            ... on PowerCutContactUs {
              powerCutContactUsAuthor {
                ... on Author {
                  authorName
                  department
                  image {
                   url
                   name
                  }
                }
              }
              title
              telephone
              text
              facebook {
                ${link}
              }
              twitter {
                ${link}
              }
              powerCutContactUsWhatsApp {
                ${link}
              }
            }
          }
        }
        ... on PowerBackOnPanel {
          title
          image
          isIndexed
          hidePostcode
          ${panelComponents}
        }
        ... on NotInOurAreaPanel {
          title
          image
          isIndexed
          hidePostcode
          ${panelComponents}
        }
      }
    }
  }
`

export const PowerCutChecksSteps = `
  ...on PowerCutStep {
    images {
      ${mediaFragment}
    }
    title
    text
  }
`

export const FRAGMENT_POWER_CUT_CHECKS = `
  fragment PowerCutChecks on PowerCutChecks {
    rightSteps {
      ${PowerCutChecksSteps}
    }
    leftSteps {
      ${PowerCutChecksSteps}
    }
    rightImage {
      ${mediaFragment}
    }
    leftImage {
      ${mediaFragment}
    }
    rightHeading
    leftHeading
    rightCTA
    leftCTA
    title
    overlayLeftTitle
    overlayRightTitle
    smartMeterImage {
      ${mediaFragment}
    }
  }
`

export const FRAGMENT_BUTTONS_WITH_IMAGES = `
  fragment RadioButtonsWithImages on RadioButtonsWithImages {
    radioButtonQuestion
    buttons {
      ...on RadioButtonWithImage {
        radioButtonText
        radioButtonIcon
        radioButtonImage {
          ${mediaFragment}
        }
      }
    }
  }
`

export const FRAGMENT_BUTTONS_WITH_MAIN_IMAGE = `
  fragment RadioButtonsWithMainImage on RadioButtonsWithMainImage {
    radioButtonWithImageText
    radioButtonWithImageOptions
    radioButtonWithImageMainImage {
      ${mediaFragment}
    }
  }
`

export const getPageFragment = (type: PageTypeNames | string) => {
  switch (type) {
    case PageTypeNames.UKPN_HOMEPAGE:
      return FRAGMENT_UKPN_HOMEPAGE

    case PageTypeNames.GENERIC_PAGE:
      return FRAGMENT_GENERIC_PAGE

    case PageTypeNames.POWER_CUT:
      return FRAGMENT_POWER_CUT

    case PageTypeNames.POWER_CUT_LIST_PAGE:
      return FRAGMENT_POWER_CUT_LIST_PAGE

    case PageTypeNames.POWER_CUT_CHECKS:
      return FRAGMENT_POWER_CUT_CHECKS

    case PageTypeNames.POWER_CUT_FORM_PAGE:
      return FRAGMENT_POWER_CUT_FORM_PAGE

    case PageTypeNames.POWER_CUT_UNSUBSCRIBE_TEXT_UPDATES:
      return FRAGMENT_TEXT_UPDATES_UNSUBSCRIBE

    case PageTypeNames.POWER_CUT_REGISTER_TEXT_UPDATES:
      return FRAGMENT_TEXT_UPDATES

    case PageTypeNames.CONFIRMATION_SUCCESS:
      return FRAGMENT_CONFIRMATION_SUCCESS

    case PageTypeNames.CONFIRMATION_FAILURE:
      return FRAGMENT_CONFIRMATION_FAILURE

    case PageTypeNames.POWER_CUT_THANK_YOU_PAGE:
      return FRAGMENT_POWER_CUT_THANK_YOU_PAGE

    case PageTypeNames.EMAIL_FORM_PAGE:
      return FRAGMENT_EMAIL_FORM_PAGE

    case PageTypeNames.EMAIL_FORM_THANK_YOU_PAGE:
      return FRAGMENT_EMAIL_FORM_THANK_YOU_PAGE

    case PageTypeNames.CAT_A_FORM_PAGE:
      return FRAGMENT_CAT_A_FORM_PAGE

    case PageTypeNames.CAT_A_THANK_YOU_PAGE:
      return FRAGMENT_CAT_A_THANK_YOU_PAGE

    case PageTypeNames.PSR_FORM_THANK_YOU_PAGE:
      return FRAGMENT_PSR_FORM_THANK_YOU_PAGE

    case PageTypeNames.PSR_FORM_PAGE:
      return FRAGMENT_PSR_FORM_PAGE

    case PageTypeNames.SEARCH_PAGE:
      return FRAGMENT_SEARCH_PAGE

    case PageTypeNames.SEARCH_RESULTS_PAGE:
      return FRAGMENT_SEARCH_RESULTS

    case PageTypeNames.ERROR_PAGE:
      return FRAGMENT_ERROR_PAGE

    case PageTypeNames.SUCCESS_PAGE:
      return FRAGMENT_SUCCESS_PAGE

    case PageTypeNames.T2_LANDING_PAGE:
      return FRAGMENT_T2_LANDING_PAGE

    case PageTypeNames.T3_CONTACT_US:
      return FRAGMENT_T3_CONTACT_US

    case PageTypeNames.T4_PSR_LANDING:
      return FRAGMENT_T4_PSR_LANDING

    case PageTypeNames.T5_INSTALLERS_LANDING:
      return FRAGMENT_T5_INSTALLERS_LANDING

    case PageTypeNames.T6_SS_CONTENT_OVERVIEW:
      return FRAGMENT_T6_SS_CONTENT_OVERVIEW

    case PageTypeNames.T7_PROJECTS_CONTENT_OVERVIEW:
      return FRAGMENT_T7_PROJECTS_CONTENT_OVERVIEW

    case PageTypeNames.T8_SS_CALCULATOR:
      return FRAGMENT_T8_SS_CALCULATOR

    case PageTypeNames.T9_APPLICATION_START_OVERVIEW:
      return FRAGMENT_T9_APPLICATION_START_OVERVIEW

    case PageTypeNames.MAP_PAGE:
      return FRAGMENT_MAP_PAGE

    case PageTypeNames.STORM_PREPARE:
      return FRAGMENT_STORM_PREPARE

    case PageTypeNames.INCIDENT_PAGE:
      return FRAGMENT_INCIDENT_PAGE

    case PageTypeNames.STREET_FORM_PAGE:
      return FRAGMENT_STREET_FORM_PAGE

    case PageTypeNames.STREET_FORM_THANK_YOU_PAGE:
      return FRAGMENT_STREET_FORM_THANK_YOU_PAGE

    case PageTypeNames.METERED_CONNECTION_FORM_PAGE:
      return FRAGMENT_METERED_CONNECTION_FORM_PAGE

    case PageTypeNames.METERED_CONNECTION_THANK_YOU_PAGE:
      return FRAGMENT_METERED_CONNECTION_FORM_THANK_YOU_PAGE

    case PageTypeNames.UNMETERED_CONNECTION_FORM_PAGE:
      return FRAGMENT_UNMETERED_CONNECTION_FORM_PAGE

    case PageTypeNames.UNMETERED_CONNECTION_THANK_YOU_PAGE:
      return FRAGMENT_UNMETERED_CONNECTION_FORM_THANK_YOU_PAGE

    case PageTypeNames.ICE_LANDING_PAGE:
      return FRAGMENT_ICE_LANDING_PAGE

    case PageTypeNames.NEWS_LISTING:
      return FRAGMENT_NEWS_LISTING

    case PageTypeNames.NEWS_ARTICLE:
      return FRAGMENT_NEWS_ARTICLE

    default:
      throw new Error(`No page fragment defined for ${type}`)
  }
}
