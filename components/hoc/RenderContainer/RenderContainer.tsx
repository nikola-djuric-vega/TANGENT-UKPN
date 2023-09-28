import { T9ApplicationStartOverviewConnectionPage } from '_containers/T9ApplicationStartOverviewConnectionPage/T9ApplicationStartOverviewConnectionPage'
import { UnMeteredConnectionFormThankYouPage } from '_containers/UnMeteredConnectionFormThankYouPage/UnMeteredConnectionFormThankYouPage'
import { PowerCutTextUpdatesUnsubscribePage } from '_containers/PowerCutTextUpdatesUnsubscribePage/PowerCutTextUpdatesUnsubscribePage'
import { MeteredConnectionFormThankYouPage } from '_containers/MeteredConnectionFormThankYouPage/MeteredConnectionFormThankYouPage'
import { PowerCutTextUpdatesSubscribePage } from '_containers/PowerCutTextUpdatesSubscribePage/PowerCutTextUpdatesSubscribePage'
import { UnMeteredConnectionFormPage } from '_containers/UnMeteredConnectionFormPage/UnMeteredConnectionFormPage'
import { MeteredConnectionFormPage } from '_containers/MeteredConnectionFormPage/MeteredConnectionFormPage'
import { StreetFormThankYouPage } from '_containers/StreetFormThankYouPage/StreetFormThankYouPage'
import { SubmissionSuccessPage } from '_containers/SubmissionSuccessPage/SubmissionSuccessPage'
import { SubmissionFailurePage } from '_containers/SubmissionFailurePage/SubmissionFailurePage'
import { EmailFormThankYouPage } from '_containers/EmailFormThankYouPage/EmailFormThankYouPage'
import { PowerCutThankYouPage } from '_containers/PowerCutThankYouPage/PowerCutThankYouPage'
import { PSRFormThankYouPage } from '_containers/PSRFormThankYouPage/PSRFormThankYouPage'
import { PowerCutListPageContainer } from '_containers/PowerCutListPage/PowerCutListPage'
import { PowerCutFormPage } from '_containers/PowerCutFormPage/PowerCutFormPage'
import { CatAThankYouPage } from '_containers/CatAThankYouPage/CatAThankYouPage'
import { StreetFormPage } from '_containers/StreetFormPage/StreetFormPage'
import { SearchResults } from '_containers/SearchResults/SearchResults'
import { EmailFormPage } from '_containers/EmailFormPage/EmailFormPage'
import ICELandingPage from '_containers/ICELandingPage/ICELandingPage'
import { CatAFormPage } from '_containers/CatAFormPage/CatAFormPage'
import { IncidentPage } from '_containers/IncidentPage/IncidentPage'
import { UkpnHomepage } from '_containers/UkpnHomepage/UkpnHomepage'
import { StormPrepare } from '_containers/StormPrepare/StormPrepare'
import { PSRFormPage } from '_containers/PSRFormPage/PSRFormPage'
import { NewsListing } from '_containers/NewsListing/NewsListing'
import { NewsArticle } from '_containers/NewsArticle/NewsArticle'
import { GenericPage } from '_containers/GenericPage/GenericPage'
import { MapPageContainer } from '_containers/MapPage/MapPage'
import { PowerCut } from '_containers/PowerCut/PowerCut'
import { PageProps, PageTypeNames } from '_types/CMS'
import dynamic from 'next/dynamic'
import ErrorPage from '_pages/404'

import {
  PowerCutUnsubscribeTextUpdates as PowerCutUnsubscribeTextUpdatesType,
  PowerCutRegisterTextUpdates as PowerCutRegisterTextUpdatesType,
  ConfirmationFailure as ConfirmationFailureType,
  ConfirmationSuccess as ConfirmationSuccessType,
  PowerCutListPage as PowerCutListPageType,
  SearchResults as SearchResultsPageType,
  ICELandingPage as ICELandingPageType,
  UkpnHomepage as UkpnHomepageType,
  PowerCutPage as PowerCutPageType,
  GenericPage as GenericPageType,
  ErrorPage as ErrorPageType,
  StormPrepareType,
  IncidentPageType,
  MapPage,
} from '_types/CMS/pages'

import {
  UnMeteredConnectionFormThankYouPage as UnMeteredConnectionFormThankYouPageType,
  MeteredConnectionFormThankYouPage as MeteredConnectionFormThankYouPageType,
  UnMeteredConnectionFormPage as UnMeteredConnectionFormPageType,
  MeteredConnectionFormPage as MeteredConnectionFormPageType,
  StreetFormThankYouPage as StreetFormThankYouPageType,
  EmailFormThankYouPage as EmailFormThankYouPageType,
  PowerCutThankYouPage as PowerCutThankYouPageType,
  PSRFormThankYouPage as PSRFormThankYouPageType,
  PowerCutFormPage as PowerCutFormPageType,
  CatAThankYouPage as CatAThankYouPageType,
  StreetFormPage as StreetFormPageType,
  EmailFormPage as EmailFormPageType,
  CatAFormPage as CatAFormPageType,
  PSRFormPage as PSRFormPageType,
} from '_types/CMS/pages/form-pages'

import {
  T9ApplicationStartOverview as T9ApplicationStartOverviewType,
  NewsListing as NewsListingType,
  NewsArticle as NewsArticleType,
} from '_types/CMS/pages/main-site-pages'

const DynamicUkpnHomepage = dynamic(() =>
  import('_containers/UkpnHomepage/UkpnHomepage').then(
    ({ UkpnHomepage }) => UkpnHomepage as any
  )
) as typeof UkpnHomepage

const DynamicMapPageContainer = dynamic(() =>
  import('_containers/MapPage/MapPage').then(
    ({ MapPageContainer }) => MapPageContainer as any
  )
) as typeof MapPageContainer

const DynamicEmailFormPage = dynamic(() =>
  import('_containers/EmailFormPage/EmailFormPage').then(
    ({ EmailFormPage }) => EmailFormPage as any
  )
) as typeof EmailFormPage

const DynamicPowerCutFormPage = dynamic(() =>
  import('_containers/PowerCutFormPage/PowerCutFormPage').then(
    ({ PowerCutFormPage }) => PowerCutFormPage as any
  )
) as typeof PowerCutFormPage

const DynamicPSRFormPage = dynamic(() =>
  import('_containers/PSRFormPage/PSRFormPage').then(
    ({ PSRFormPage }) => PSRFormPage as any
  )
) as typeof PSRFormPage

const DynamicStreetFormPage = dynamic(() =>
  import('_containers/StreetFormPage/StreetFormPage').then(
    ({ StreetFormPage }) => StreetFormPage as any
  )
) as typeof StreetFormPage

const DynamicCatAFormPage = dynamic(() =>
  import('_containers/CatAFormPage/CatAFormPage').then(
    ({ CatAFormPage }) => CatAFormPage as any
  )
) as typeof CatAFormPage

const DynamicGenericPage = dynamic(() =>
  import('_containers/GenericPage/GenericPage').then(
    ({ GenericPage }) => GenericPage as any
  )
) as typeof GenericPage

const DynamicSearchResults = dynamic(() =>
  import('_containers/SearchResults/SearchResults').then(
    ({ SearchResults }) => SearchResults as any
  )
) as typeof SearchResults

const DynamicMeteredConnectionFormPage = dynamic(() =>
  import(
    '_containers/MeteredConnectionFormPage/MeteredConnectionFormPage'
  ).then(({ MeteredConnectionFormPage }) => MeteredConnectionFormPage as any)
) as typeof MeteredConnectionFormPage

const DynamicUnMeteredConnectionFormPage = dynamic(() =>
  import(
    '_containers/UnMeteredConnectionFormPage/UnMeteredConnectionFormPage'
  ).then(
    ({ UnMeteredConnectionFormPage }) => UnMeteredConnectionFormPage as any
  )
) as typeof UnMeteredConnectionFormPage

const DynamicPowerCut = dynamic(() =>
  import('_containers/PowerCut/PowerCut').then(
    ({ PowerCut }) => PowerCut as any
  )
) as typeof PowerCut

const DynamicPowerCutListPageContainer = dynamic(() =>
  import('_containers/PowerCutListPage/PowerCutListPage').then(
    ({ PowerCutListPageContainer }) => PowerCutListPageContainer as any
  )
) as typeof PowerCutListPageContainer

const DynamicPowerCutTextUpdatesSubscribePage = dynamic(() =>
  import(
    '_containers/PowerCutTextUpdatesSubscribePage/PowerCutTextUpdatesSubscribePage'
  ).then(
    ({ PowerCutTextUpdatesSubscribePage }) =>
      PowerCutTextUpdatesSubscribePage as any
  )
) as typeof PowerCutTextUpdatesSubscribePage

const DynamicPowerCutTextUpdatesUnsubscribePage = dynamic(() =>
  import(
    '_containers/PowerCutTextUpdatesUnsubscribePage/PowerCutTextUpdatesUnsubscribePage'
  ).then(
    ({ PowerCutTextUpdatesUnsubscribePage }) =>
      PowerCutTextUpdatesUnsubscribePage as any
  )
) as typeof PowerCutTextUpdatesUnsubscribePage

const DynamicSubmissionFailurePage = dynamic(() =>
  import('_containers/SubmissionFailurePage/SubmissionFailurePage').then(
    ({ SubmissionFailurePage }) => SubmissionFailurePage as any
  )
) as typeof SubmissionFailurePage

const DynamicSubmissionSuccessPage = dynamic(() =>
  import('_containers/SubmissionSuccessPage/SubmissionSuccessPage').then(
    ({ SubmissionSuccessPage }) => SubmissionSuccessPage as any
  )
) as typeof SubmissionSuccessPage

const DynamicNewsAndViewsPage = dynamic(() =>
  import('_containers/NewsListing/NewsListing').then(
    ({ NewsListing }) => NewsListing as any
  )
) as typeof NewsListing

const DynamicStormPrepare = dynamic(() =>
  import('_containers/StormPrepare/StormPrepare').then(
    ({ StormPrepare }) => StormPrepare as any
  )
) as typeof StormPrepare

const DynamicNewsArticlePage = dynamic(() =>
  import('_containers/NewsArticle/NewsArticle').then(
    ({ NewsArticle }) => NewsArticle as any
  )
) as typeof NewsArticle

const DynamicIncidentPage = dynamic(() =>
  import('_containers/IncidentPage/IncidentPage').then(
    ({ IncidentPage }) => IncidentPage as any
  )
) as typeof IncidentPage

const DynamicErrorPage = dynamic(() => import('_pages/404')) as typeof ErrorPage

const DynamicT9ApplicationStartOverviewConnectionPage = dynamic(() =>
  import(
    '_containers/T9ApplicationStartOverviewConnectionPage/T9ApplicationStartOverviewConnectionPage'
  ).then(
    ({ T9ApplicationStartOverviewConnectionPage }) =>
      T9ApplicationStartOverviewConnectionPage as any
  )
) as typeof T9ApplicationStartOverviewConnectionPage

function renderContainer({ data, formData, ...props }: PageProps) {
  switch (data?.__typename) {
    case PageTypeNames.UKPN_HOMEPAGE:
      return <DynamicUkpnHomepage data={data as UkpnHomepageType} />

    case PageTypeNames.GENERIC_PAGE:
    case PageTypeNames.T2_LANDING_PAGE:
    case PageTypeNames.T3_CONTACT_US:
    case PageTypeNames.T4_PSR_LANDING:
    case PageTypeNames.T5_INSTALLERS_LANDING:
    case PageTypeNames.T6_SS_CONTENT_OVERVIEW:
    case PageTypeNames.T7_PROJECTS_CONTENT_OVERVIEW:
    case PageTypeNames.T8_SS_CALCULATOR:
      return <DynamicGenericPage data={data as GenericPageType} />

    case PageTypeNames.T9_APPLICATION_START_OVERVIEW:
      return (
        <DynamicT9ApplicationStartOverviewConnectionPage
          data={data as T9ApplicationStartOverviewType}
        />
      )

    case PageTypeNames.MAP_PAGE:
      return <DynamicMapPageContainer data={data as MapPage} />

    case PageTypeNames.POWER_CUT:
      return <DynamicPowerCut data={data as PowerCutPageType} />

    case PageTypeNames.POWER_CUT_LIST_PAGE:
      return (
        <DynamicPowerCutListPageContainer data={data as PowerCutListPageType} />
      )

    case PageTypeNames.POWER_CUT_FORM_PAGE:
      return (
        <DynamicPowerCutFormPage
          data={data as PowerCutFormPageType}
          formData={formData}
        />
      )

    case PageTypeNames.POWER_CUT_THANK_YOU_PAGE:
      return <PowerCutThankYouPage data={data as PowerCutThankYouPageType} />

    case PageTypeNames.POWER_CUT_REGISTER_TEXT_UPDATES:
      return (
        <DynamicPowerCutTextUpdatesSubscribePage
          data={data as PowerCutRegisterTextUpdatesType}
        />
      )

    case PageTypeNames.POWER_CUT_UNSUBSCRIBE_TEXT_UPDATES:
      return (
        <DynamicPowerCutTextUpdatesUnsubscribePage
          data={data as PowerCutUnsubscribeTextUpdatesType}
        />
      )

    case PageTypeNames.CONFIRMATION_SUCCESS:
      return (
        <DynamicSubmissionSuccessPage data={data as ConfirmationSuccessType} />
      )

    case PageTypeNames.CONFIRMATION_FAILURE:
      return (
        <DynamicSubmissionFailurePage data={data as ConfirmationFailureType} />
      )

    case PageTypeNames.NEWS_LISTING:
      return <DynamicNewsAndViewsPage data={data as NewsListingType} />

    case PageTypeNames.NEWS_ARTICLE:
      return <DynamicNewsArticlePage data={data as NewsArticleType} />

    case PageTypeNames.EMAIL_FORM_PAGE:
      return (
        <DynamicEmailFormPage
          data={data as EmailFormPageType}
          formData={formData}
        />
      )

    case PageTypeNames.EMAIL_FORM_THANK_YOU_PAGE:
      return <EmailFormThankYouPage data={data as EmailFormThankYouPageType} />

    case PageTypeNames.CAT_A_FORM_PAGE:
      return (
        <DynamicCatAFormPage
          data={data as CatAFormPageType}
          formData={formData}
        />
      )

    case PageTypeNames.CAT_A_THANK_YOU_PAGE:
      return <CatAThankYouPage data={data as CatAThankYouPageType} />

    case PageTypeNames.PSR_FORM_THANK_YOU_PAGE:
      return <PSRFormThankYouPage data={data as PSRFormThankYouPageType} />

    case PageTypeNames.PSR_FORM_PAGE:
      return (
        <DynamicPSRFormPage
          data={data as PSRFormPageType}
          formData={formData}
        />
      )

    case PageTypeNames.ERROR_PAGE:
      return <DynamicErrorPage data={data as ErrorPageType} {...props} />

    case PageTypeNames.SEARCH_RESULTS_PAGE:
      return <DynamicSearchResults data={data as SearchResultsPageType} />

    case PageTypeNames.STREET_FORM_PAGE:
      return (
        <DynamicStreetFormPage
          data={data as StreetFormPageType}
          formData={formData}
        />
      )
    case PageTypeNames.STREET_FORM_THANK_YOU_PAGE:
      return (
        <StreetFormThankYouPage data={data as StreetFormThankYouPageType} />
      )

    case PageTypeNames.METERED_CONNECTION_FORM_PAGE:
      return (
        <DynamicMeteredConnectionFormPage
          data={data as MeteredConnectionFormPageType}
          formData={formData}
        />
      )
    case PageTypeNames.METERED_CONNECTION_THANK_YOU_PAGE:
      return (
        <MeteredConnectionFormThankYouPage
          data={data as MeteredConnectionFormThankYouPageType}
        />
      )
    case PageTypeNames.UNMETERED_CONNECTION_FORM_PAGE:
      return (
        <DynamicUnMeteredConnectionFormPage
          data={data as UnMeteredConnectionFormPageType}
          formData={formData}
        />
      )
    case PageTypeNames.UNMETERED_CONNECTION_THANK_YOU_PAGE:
      return (
        <UnMeteredConnectionFormThankYouPage
          data={data as UnMeteredConnectionFormThankYouPageType}
        />
      )
    case PageTypeNames.ICE_LANDING_PAGE:
      return <ICELandingPage data={data as ICELandingPageType} />
    case PageTypeNames.STORM_PREPARE:
      return <DynamicStormPrepare data={data as StormPrepareType} />
    case PageTypeNames.INCIDENT_PAGE:
      return <DynamicIncidentPage data={data as IncidentPageType} />
    default:
      return null
  }
}

export default renderContainer
