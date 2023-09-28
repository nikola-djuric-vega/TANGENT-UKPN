import { gql } from '@apollo/client'

export const link = `
  target
  type
  name
  udi
  url
`

export const media = `
  url
  name
`

export const mediaFragment = `
  ...on Image {
    umbracoHeight
    umbracoWidth
    name
    url
  }
`

export const imageWithFocalPoint = `
  name
  ... on Image {
    umbracoFile {
      url: cropUrl(width: 1600, height: 900, preferFocalPoint:true, upscale:true, cropMode:CROP)
    }
  }
`

export const curvedBannerImageFocalPoint = `
  name
  ... on Image {
    umbracoFile {
      url: cropUrl(width: 500, height: 400, preferFocalPoint:true, upscale:true, cropMode:CROP)
    }
  }
`

export const buttons = `
  ...on PrimaryButton {
    cTAType
    uRL {
      ${link}
    }
  }
  ... on SecondaryButton {
    cTAType
    uRL {
      ${link}
    }
  }
  ...on TertiaryButton {
    cTAType
    uRL {
      ${link}
    }
  }
  ...on Download {
    cTAType
    uRL {
      ${link}
    }
  }
`

export const Author = gql`
  fragment Author on Author {
    authorName
    image {
      ${media}
    }
    department
  }
`

export const DoubleCTA = gql`
  fragment DoubleCTA on DoubleCTA {
    leftCTATitle
    leftCTAText
    leftCTAs {
      ${buttons}
    }
    rightCTATitle
    rightCTAText
    rightCTAs {
      ${buttons}
    }
    removeBottomMargin
  }
`
export const LandingHeroBanner = gql`
  fragment LandingHeroBanner on LandingHeroBanner {
    headering
    subHeading
    image {
      name
      url
    }
    anchorPanelTitle
    anchorLinks {
      ${link}
    }
    actionPanelTitle
    actionPanelLinks {
      ${buttons}
    }
    connectionsBox
    amendBackgroundIcon
    removeBottomMargin
  }
`

const ContactUsItem = `
  ... on ContactUsItem {
    icon
    title
    text
    telephone1
    telephone2
    email {
      ${link}
    }
    emailHeader
    twitter{
      ${link}
    }
    facebook {
      ${link}
    }
    linkedIn {
      ${link}
    }
  }
`

const UsefullLinksItem = `
  ...on UsefulLinkItem {
    link {
      ${link}
    }
    title
    changeAppearance
  }
`

export const ContactUs = gql`
  fragment ContactUs on ContactUs {
    contactUsItems {
      ${ContactUsItem}
    }
    removeBottomMargin
    contactUsBorder
  }
`

export const CtaFullWidthOffset = gql`
  fragment CTAFullWidthOffset on CTAFullWidthOffset {
    icon
    title
    text
    cTA {
      ${buttons}
    }
    image {
      ${mediaFragment}
    }
    removeBottomMargin
  }
`

export const SocialLinks = gql`
  fragment SocialLinks on SocialLinks {
    label
    subTitle
    title
  }
`

export const UsefulLinks = gql`
  fragment UsefulLinks on UsefulLinks {
    title
    whiteBackground
    usefulLinkItems {
      ${UsefullLinksItem}
    }
  }
`

const ProcessItem = `
  ...on ProcessItem {
    icon
    heading
    subheading
  }
`

export const ProcessGraphic = gql`
  fragment ProcessGraphic on ProcessGraphic {
    title
    subTitle
    processItems {
      ${ProcessItem}
    }
    removeBottomMargin
  }
`

const ImageGridItem = `
  ...on ImageGridItem {
    logo {
      ${media}
    }
  }
`

export const ImageGrid = gql`
  fragment ImageGrid on ImageGrid {
    title
    gridItems {
      ${ImageGridItem}
    }
  }
`

export const RawHtml = gql`
  fragment RawHtml on RawHtml {
    rawHtml
    scriptUrl
  }
`

export const Checklist = gql`
  fragment Checklist on Checklist {
    title
    checklistItems
  }
`

export const NavIconItem = gql`
  fragment NavIconItem on NavIconItem {
    leftTitle
    leftText
    leftImage {
      ${media}
    }
    leftIcon
    leftButtonLink {
      ${link}
    }
    rightTitle
    rightText
    rightImage {
      ${media}
    }
    rightIcon
    rightButtonLink {
      ${link}
    }
    removeBottomMargin
    doubleCtaWithImgTitle
    doubleCtaWithImgSubTitle

  }
`

const NavigationIcon = `
... on NavigationIcon {
  icon
  link {
    ${link}
  }
  subtitle
  title
}
`

export const NavigationIconContainer = gql`
  fragment NavigationIconContainer on NavigationIconContainer {
    title
    items {
      ${NavigationIcon}
    }
  }
`

const RelatedContentItem = `
  ...on RelatedContentItem {
    serviceTitle
    serviceCopyText
    cTAButton {
      ${buttons}
    }
  }
`

export const RelatedContent = gql` 
  fragment RelatedContent on RelatedContent {
      moduleTitle
      moduleColor
      links {
        ${RelatedContentItem}
      }
}`

export const BannerCurved = gql`
  fragment BannerCurved on BannerCurved {
    tag
    header
    subHeader
    removeBottomMargin
    backgroundColour
    desktopImage {
      ${curvedBannerImageFocalPoint}
    }
    bannerCurvedCTA: cTA {
      ${link}
    }
  }
`

export const TextBox = `
...on TextBox {
  title
  text
  icon
  backgroundStyle
  textBoxCTA: cTA {
    ${link}
  }
}
`

export const TextBoxes = gql`
  fragment TextBoxes on TextBoxes {
    textBoxes {
      ${TextBox}
    }
    removeBottomMargin
  }`

const cTAFullWidthItem = `
  ...on CTAFullWidthItem {
    title
    text
    cTAFullWidthItemCTA : cTA {
      ${buttons}
    }
  }
`

export const CTAFullWidthBox = gql`
  fragment CTAFullWidthBox on CTAFullWidthBox {
    cTAItems {
      ${cTAFullWidthItem}
    }
    removeBottomMargin
  }
`

export const TextWithVideoImage = gql`
  fragment TextWithVideoImage on TextWithVideoImage {
    heading
    mainText
    image {
      ${mediaFragment}
    }
    video
    imageStyle
    imageOverlayText
    imageOverlayIcon
    imageOverlayLink {
      ${link}
    }
    mediaPlacement
    cTAs {
      ${buttons}
    }
    warningMessage
    removeBottomMargin
    backgroundColor
  }
`

const HelpAndAdviceItem = `
  ... on HelpAndAdviceItem {
    helpAndAdviceDescription
    helpAndAdviceItemTitle
    helpAndAdviceTitleIcon
    helpAndAdviceImage {
      ${imageWithFocalPoint}
    }
    helpAndAdviceImageOverlay
    helpAndAdviceImageOverlayIcon
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
`

export const HelpAndAdvice = gql`
  fragment HelpAndAdvice on HelpAndAdvice {
      helpAndAdviceEnableAlwaysOpen
      helpAndAdviceTitle
      helpAndAdviceItems {
       ${HelpAndAdviceItem}
      }
      removeBottomMargin
      viewMore {
        ${link}
      }
  }
`

const AccordionLinkItem = `
  ... on LinkSet {
    linkSetTitle
    linkSetLinks {
     ${buttons}
    }
  }
`

const AccordionItem = `
  ...on AccordionItem {
    accordionItemTitle
    accordionDescription
    accordionImage {
      ... on Image {
        url
        name
        umbracoHeight
        umbracoWidth
      }
    }
    accordionImageOverlay
    accordionImageOverlayIcon
    accordionVideoID
    accordionVideoPlayText
    accordionLinkItems {
      ${AccordionLinkItem}
    }
    categories {
      ... on AccordionCategory {
        name
        icon
      }
    }
  }
`

export const Accordion = gql`
  fragment Accordion on Accordion {
    accordionTitle
    accordionEnableAlwaysOpen
    accordionItems {
      ${AccordionItem}
    }
    viewMore {
      ${link}
    }
  }
`

export const Notification = gql`
  fragment Notification on Notification {
    secondaryCallToAction
    notificationMessage
    removeBottomMargin
    enableLivePulse
    pulseTitle
    link {
      ${link}
    }
  }
`

export const AlertError = gql`
  fragment AlertError on AlertError {
    alertErrorIcon
    alertErrorTitle
    alertErrorDescription
  }
`

export const MediaTile = `
  ...on MediaTile {
    video
    text
    image {
      ${mediaFragment}
    }
  }
`

export const MediaTiles = gql`
  fragment MediaTiles on MediaTiles {
    title
    layout
    mediaTiles {
      ${MediaTile}
    }
    removeBottomMargin
    icon
  }
`

const TabbedContentItem = `
  ... on TabbedContentItem {
    title
    titleIcon
    rightTitle
    rightText
    rightMobileImage {
      ${media}
    }
    rightTabletImage{
      ${media}
    }
    rightDesktopImage{
      ${media}
    }
    backgroundIcon
    videoID
    videoText
    buttons {
      ${buttons}
    }
  }
`

export const TabbedContent = gql`
  fragment TabbedContent on TabbedContent {
    moduleTitle
    tabbedContentItems {
      ${TabbedContentItem}
    }
    removeBottomMargin
  }
`

export const AreaChecker = gql`
  fragment AreaChecker on AreaChecker {
    title
    text
    desktopImage {
      ${media}
    }
    mobileImage {
      ${mediaFragment}
    }
    successTitle
    successText
    errorAreaTitle
    errorAreaText
    errorAddressTitle
    errorAddressText
    removeBottomMargin
  }
`
export const SimpleContent = gql`
  fragment SimpleContent on SimpleContent {
    text
  }
`

export const HelpAndContactLinkSetLink = `
  ...on HelpAndContactLinkSetLink {
    link {
      ${link}
    }
  }
`

export const LinkSetItem = `
  ...on LinkSetItem {
    title
    subtitle
    components {
      ${buttons} || ${SimpleContent} || ${ContactUs}
    }
    
  }
`

export const HelpAndContactTab = `
  ...on HelpAndContactTab {
    tabTitle
    icon
    tabComponents {
      ... on PrimaryButton {
        cTAType
        uRL {
          ${link}
        }
      }
      ... on SimpleContent {
        text
      }
      ... on ContactUs {
        title
        contactUsItems {
          ${ContactUsItem}
        }
      }
    }
    helpAndContactLinkSet {
      ...on LinkSetItem {
        title
        subtitle
        components {
          ... on PrimaryButton {
            cTAType
            uRL {
              ${link}
            }
          }
          ... on SimpleContent {
            text
          }
          ... on ContactUs {
            title
            contactUsItems {
              ${ContactUsItem}
            }
          }
        }
        
      } 
      ...on HelpAndContactLinkSetLink {
        link {
          ${link}
        }
      }
      ...on SimpleContent {
        text
      }
    }
  }
`

export const ColumnNumericInput = `
  ...on ColumnNumericInput {
    columnNumber
  }
`

export const RowNumericInput = `
  ...on RowNumericInput {
    rowNumber
  }
`

export const TableRow = `
  ...on TableRow {
    cellContent
  }
`

export const TableColumn = `
  ...on TableColumn {
    rows {
      ${TableRow}
    }
  }
`

export const HelpAndContact = gql`
  fragment HelpAndContact on HelpAndContact {
    mainTitle
    subTitle
    firstFramePromptText
    helpAndContactTabs {
      ${HelpAndContactTab}
    }
  }
`

export const Table = gql`
  fragment TableContainer on TableContainer {
    columnHighlights {
        ${ColumnNumericInput}
    }
    rowHighlights {
      ${RowNumericInput}
    }
    columns {
      ${TableColumn}
    }
    removeBottomMargin
  }
`
export const SubNavigation = gql`
  fragment SubNavigationComponent on SubNavigationComponent {
    subNavigationLinks {
      ${link}
    }
  }`

export const SearchPowerCuts = gql`
  fragment SearchPowerCuts on SearchPowerCuts {
    ... on SearchPowerCuts {
      searchPowerCutsItems {
        ... on SearchPowerCutItem {
          icon
          link {
            ${link}
          }
        }
      }
      searchPowerCutsMapLink {
        ${link}
      }
      searchPowerCutsImage {
        ${mediaFragment}
      }
      searchPowerCutsTitle
      searchPowerCutsHeader
    }
  }
`

export const PowerCutBox = `
  ... on PowerCutBox {
    registerForTextUpdatesText
    registerForTextUpdatesLink {
      ${link}
    }
    viewPowerCutMapButtonText
    phoneNumberHeader
    powerCutImage {
      ${media}
    }
    phoneNumber
    header
    title
    powerCutMapLink {
      ${link}
    }
  }
`

export const WhatServiceItem = `
  ... on WhatServiceItem {
    subTitle
    copyText
    linkText
    title
    whatServiceItemLinks {
      ${link}
    }
  }
`

export const WhatService = gql`
  fragment WhatService on WhatService {
    removeBottomMargin
    moduleServiceTitle
    moduleTitle
    moduleCopyText
    whatServiceItems {
      ${WhatServiceItem}
    }
    powerCutBox {
      ${PowerCutBox}
    }
    removeBottomMargin
  }
`

export const WhatServiceInterim = gql`
  fragment WhatServiceInterim on WhatServiceInterim {
    title
    tabs {
      ... on WhatServiceTab {
        icon
        title
        services {
          ... on Service {
            subtitle
            title
            link {
              ${link}
            }
            image {
             ${mediaFragment}
            }
          }
        }
      }
    }
  }
`

export const WhatsMyMpan = gql`
  fragment MpanChecker on MpanChecker {
    removeBottomMargin
    rightDesktopImage {
      ${mediaFragment}
    }
    rightMobileImage {
      ${mediaFragment}
    }
    successfulBlurb
    successfulTitle
    checkboxText
    errorBlurb
    errorTitle
    leftBlurb
    leftTitle
  }
`

export const DangerousSituation = gql`
  fragment DangerousSituationComponent on DangerousSituationComponent {
    dangerousSituationSecondaryButtonText
    dangerousSituationPrimaryButtonText
    dangerousSituationDescription
    dangerousSituationImages {
      ...on Image {
        ${mediaFragment}
      }
    }
    dangerousInformationHelpText
    dangerousInformationTitle
    dangerousSituationTitle
    emergencyBoxDescription
    callBoxDescription
    emergencyBoxTitle
    callBoxTitle
  }
`
export const FeedbackCTA = gql`
  fragment FeedbackCTA on FeedbackCTA {
    feedbackCTAs {
      ... on FeedbackCtaItem {
        title
        text
        cTALink {
          ${link}
        }
      }
    }
  }
`

export const PostcodeForm = gql`
  fragment PostcodeForm on PostcodeForm {
    leftTitle
    leftText
    formTitle
    formDestination {      
      ${link}
    }
    cTAText
    mapLink {
      ${link}
    }
    image {
      ${media}
    }
    title
  }
`

export const IsPowerOffCTA = gql`
  fragment IsPowerOffCTA on IsPowerOffCTA {
    title
    icon
    body
    link {
      ${link}
    }
  }
`
export const AnchorComponent = gql`
  fragment AnchorComponent on AnchorComponent {
    anchorName
  }
`

export const PowerCutComponent = gql`
  fragment PowerCutComponent on PowerCutComponent {
    postcodePlaceholderText
    useMyLocationText
    addressNotFound
    subtitle
    listLink {
      ${link}
    }
    cTAText
    mapLink {
      ${link}
    }
    image {
      ${media}
    }
    title
  }
`

export const StormLiveFeed = gql`
  ${Author}

  fragment StormLiveFeed on StormLiveFeed {
      storm {
        ... on Storm {
          hideStormSummary
          stormName
          stormSummary {
            ... on StormSummary {
              description
              title
              summaryData {
                ... on RegionSummary {
                  region {
                    name
                  }
                  countyData {
                    ... on CountySummary {
                      customersAffected
                      county {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          descendants {
            items {
              __typename
              updateDate
              id
              ... on MediaPost {
                link {
                  ${link}
                }
                isVideo
                title
                image {
                  ${mediaFragment}
                }
                summary
                author {
                  ...Author
                }
                publishDate
              }
              ... on StakeholderPost {
                publishDate
                summary
                readMoreText
                author {
                  ...Author
                }
              }
            }
          }
          pinnedPost {
            id
          }
        }
      }
    }
`

export const StormBody = gql`
  fragment StormBody on StormBody {
    powerCutBoxTitle
    powerCutBoxIcon
    stormBodyTitle
    stormBodyText
    powerCutBoxRegisterForTextsLink {
      ${link}
    }
    powerCutBoxFacebookLink {
      ${link}
    }
    powerCutBoxTwitterLink {
      ${link}
    }
  }
`

export const HomePageHeroBanner = `
  slides {
    ...on HomePageBannerImageSlide {
      __typename
      desktopImage {
        ${media}
      }
      tabletImage {
        ${mediaFragment}
      }
      mobileImage {
        ${mediaFragment}    
      }
      navigationTitle
      lighting
      title
      text
      icon
      link {
        ${link}
      }
    }
    ...on HomePageBannerParallaxSlide {
      __typename
      foregroundDesktopImage {
        ${media}
      }
      foregroundTabletImage {
        ${mediaFragment}
      }
      foregroundMobileImage {
        ${mediaFragment}
      }
      backgroudDesktopImage {
        ${media}
      }
      backgroudTabletImage {
        ${mediaFragment}
      }
      backgroundMobileImage {
        ${mediaFragment}
      }
      iconDesktopImage {
        ${media}
      }
      iconTabletImage {
        ${mediaFragment}
      }
      iconMobileImage {
        ${mediaFragment}
      }
      navigationTitle
      lighting
      title
      text
      icon
      link {
       ${link}
      }
    }
  }
`

export const NewsAndViews = gql`
  fragment NewsAndViewsComponent on NewsAndViewsComponent {
    featuredArticle {
      ...NewsArticle
      id
    }
    title
  }
`

export const PowerCutCurvedBanner = gql`
  fragment PowerCutCurvedBanner on PowerCutCurvedBanner {
    backButton
    subTitle
    tagLine
    status
    title
    icon
  }
`

export const Buttons5Max = gql`
  fragment Buttons5Max on Buttons5Max {
    buttons {
      ${buttons}
    }
  }
`

export const PowerCutContactUs = gql`
  fragment PowerCutContactUs on PowerCutContactUs {
    ... on PowerCutContactUs {
      powerCutContactUsAuthor {
        ... on Author {
          authorName
          department
          image {
           ${media}
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
`

export const ImageCarousel = gql`
  fragment ImageCarousel on ImageCarousel {
    carosuelTitle
    carosuelSubtitle
    carosuelImages {
      ${mediaFragment}
    }
  }
`

export const SafeSpaces = gql`
  fragment SafeSpaces on SafeSpaces {
    safeSpaceWidget
  }
`

export const QuickLinkCard = gql`
  fragment QuickLinkCard on QuickLinkCard {
    quickCardLinks {
      ... on LinkItem {
        linkURL {
          ${link}
        }
        linkIcon
      }
    }
    enable4ColumnLayout
  }
`

export const PowerCutBanner = gql`
  fragment PowerCutBanner on PowerCutBanner {
    isLive
    title
  }
`

export const TextBoxWithCTA = gql`
  fragment TextBoxWithCTA on TextBoxWithCTA {
    ... on TextBoxWithCTA {
      leftTitle
      leftText
      leftButtonLink {
        ${link}
      }
      leftIcon
      leftBackgroundColour
      rightTitle
      rightText
      rightButtonLink {
        ${link}
      }
      rightIcon
      rightBackgroundColour
      removeBottomMargin
    }
  }
`
export const InterimHomepageBanner = gql`
  fragment InterimHomepageBanner on InterimHomepageBanner {
    headerText
    backgroundImage {
      ${mediaFragment}
    }
  }
`

export const StormLandingBanner = gql`
  fragment StormLandingBanner on StormLandingBanner {
    backgroundImage {
      ${media}
    }
    title
    updatedTime
    disableUpdatedTime
    pulseTitle
    disablePulse
    summary
    powerOffTitle
    powerOffSubtitle
    links {
      ... on LinkItem {
        linkIcon
        linkURL {
          ${link}
        }
      }
    }
    contactCardLink {
      ${link}
    }
    contactCard {
      ... on ContactCard {
        author {
          ... on Author {
            authorName
            department
          }
        }
        cardTitle
        cardSubtitle
      }
    }
  }
`
export const AllComponentsFragments = gql`
  ${AnchorComponent}
  ${AreaChecker}
  ${Accordion}
  ${Buttons5Max}
  ${BannerCurved}
  ${Checklist}
  ${ContactUs}
  ${CTAFullWidthBox}
  ${CtaFullWidthOffset}
  ${DoubleCTA}
  ${FeedbackCTA}
  ${HelpAndContact}
  ${HelpAndAdvice}
  ${ImageCarousel}
  ${ImageGrid}
  ${IsPowerOffCTA}
  ${LandingHeroBanner}
  ${MediaTiles}
  ${NavIconItem}
  ${NavigationIconContainer}
  ${Notification}
  ${PowerCutCurvedBanner}
  ${WhatService}
  ${ProcessGraphic}
  ${RelatedContent}
  ${RawHtml}
  ${WhatsMyMpan}
  ${SimpleContent}
  ${SubNavigation}
  ${StormBody}
  ${TabbedContent}
  ${TextBoxes}
  ${TextWithVideoImage}
  ${Table}
  ${UsefulLinks}
  ${PowerCutContactUs}
  ${QuickLinkCard}
  ${InterimHomepageBanner}
  ${StormLandingBanner}
  ${TextBoxWithCTA}
  ${AlertError}
`

export const AllComponents = `
  ...AnchorComponent
  ...AreaChecker
  ...Accordion
  ...BannerCurved
  ...Buttons5Max
  ...Checklist
  ...ContactUs
  ...CTAFullWidthBox
  ...CTAFullWidthOffset
  ...DoubleCTA
  ...FeedbackCTA
  ...HelpAndContact
  ...HelpAndAdvice
  ...ImageCarousel
  ...ImageGrid
  ...IsPowerOffCTA
  ...MediaTiles
  ...MpanChecker
  ...NavIconItem
  ...NavigationIconContainer
  ...Notification
  ...LandingHeroBanner
  ...PowerCutCurvedBanner
  ...ProcessGraphic
  ...RelatedContent
  ...RawHtml
  ...SimpleContent
  ...StormBody
  ...SubNavigationComponent
  ...TabbedContent
  ...TableContainer
  ...TextBoxes
  ...TextWithVideoImage
  ...WhatService
  ...UsefulLinks
  ...PowerCutContactUs
  ...QuickLinkCard
  ...InterimHomepageBanner
  ...StormLandingBanner
  ...TextBoxWithCTA
  ...AlertError
`
