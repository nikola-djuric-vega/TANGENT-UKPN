import { DoubleCtaNavIconImageData } from '_molecules/DoubleCtaNavIconImage/DoubleCtaNavIconImage.stories'
import { PowerCutCurvedBannerData } from '_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner.stories'
import { TextWithVideoImageData } from '_molecules/TextWithVideoImage/TextWithVideoImage.stories'
import { DangerousSituationData } from '_molecules/DangerousSituation/DangerousSituation.stories'
import { CtaFullWidthOffsetData } from '_molecules/CtaFullWidthOffset/CtaFullWidthOffset.stories'
import { HomePageHeroBannerData } from '_organism/HomepageHeroBanner/HomePageHeroBanner.stories'
import { PowerCutContactUsData } from '_molecules/PowerCutContactUs/PowerCutContactUs.stories'
import { LandingHeroBannerData } from '_organism/LandingHeroBanner/LandingHeroBanner.stories'
import { CtaFullWidthBoxData } from '_molecules/CtaFullWidthBox/CtaFullWidthBox.stories'
import { RelatedContentData } from '_molecules/RelatedContent/RelatedContent.stories'
import { ProcessGraphicData } from '_molecules/ProcessGraphic/ProcessGraphic.stories'
import { HelpAndContactData } from '_organism/HelpAndContact/HelpAndContact.stories'
import { SubNavigationData } from '_molecules/SubNavigation/SubNavigation.stories'
import { SimpleContentData } from '_molecules/SimpleContent/SimpleContent.stories'
import { IsPowerOffCTAData } from '_molecules/IsPowerOffCta/IsPowerOffCta.stories'
import { HelpAndAdviceData } from '_organism/HelpAndAdvice/HelpAndAdvice.stories'
import { TabbedContentData } from '_organism/TabbedContent/TabbedContent.stories'
import { BannerCurvedData } from '_molecules/BannerCurved/BannerCurved.stories'
import { UsefulLinksData } from '_molecules/UsefulLinks/UsefulLinks.stories'
import { SocialLinksData } from '_molecules/SocialLinks/SocialLinks.stories'
import { AreaCheckerData } from '_molecules/AreaChecker/AreaChecker.stories'
import { FeedbackCtaData } from '_molecules/FeedbackCTA/FeedbackCTA.stories'
import { Buttons5MaxData } from '_molecules/Buttons5Max/Buttons5Max.stories'
import { WhatServiceData } from '_organism/WhatService/WhatService.stories'
import { WhatsMyMpanData } from '_organism/WhatsMyMpan/WhatsMyMpan.stories'
import { MediaTilesData } from '_organism/MediaTiles/MediaTiles.stories'
import { ChecklistData } from '_molecules/Checklist/Checklist.stories'
import { ImageGridData } from '_molecules/ImageGrid/ImageGrid.stories'
import { ContactUsData } from '_molecules/ContactUs/ContactUs.stories'
import { AccordionData } from '_organism/Accordion/Accordion.stories'
import { T2LandingPage } from '_types/CMS/pages/main-site-pages'
import { rawHtmlMock } from '_atoms/RawHtml/RawHtml.stories'
import { TableData } from '_molecules/Table/Table.stories'
import { PageTypeNames } from '_types/CMS/base'

export const T2MockData: T2LandingPage = {
  __typename: PageTypeNames.T2_LANDING_PAGE,
  name: 'T2LandingPage story',
  id: 'yureyrue',
  contentTypeAlias: '',
  url: '',
  breadcrumb: 'breadcrumb',
  ancestors: {
    items: [
      {
        id: '',
        __typename: PageTypeNames.FOLDER,
        name: 'Electricity',
      },
      {
        id: '',
        __typename: PageTypeNames.GENERIC_PAGE,
        name: 'Move',
        url: '/',
      },
    ],
  },
  components: [
    HomePageHeroBannerData,
    LandingHeroBannerData.default,
    PowerCutCurvedBannerData,
    AccordionData,
    LandingHeroBannerData.default,
    WhatsMyMpanData,
    rawHtmlMock,
    ChecklistData,
    UsefulLinksData,
    RelatedContentData,
    CtaFullWidthOffsetData,
    CtaFullWidthBoxData,
    MediaTilesData.mockMediaTilesImage,
    SocialLinksData,
    ImageGridData,
    ContactUsData,
    DoubleCtaNavIconImageData,
    DoubleCtaNavIconImageData,
    FeedbackCtaData,
    ProcessGraphicData,
    BannerCurvedData,
    TextWithVideoImageData,
    IsPowerOffCTAData,
    HelpAndAdviceData,
    TabbedContentData,
    AreaCheckerData,
    SimpleContentData,
    HelpAndContactData,
    WhatServiceData,
    TableData,
    SubNavigationData,
    DangerousSituationData,
    Buttons5MaxData,
    PowerCutContactUsData,
  ],
}
