import { StormLiveFeedType } from '_types/CMS/nodes/components/UKPN'
import { getMediaPostsMetadata } from '_utils/get-media-posts-metadata'
import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import renderContainer from '_hoc/RenderContainer/RenderContainer'
import { getValidData } from '_utils/get-valid-data'
import { fetchRoute } from '_utils/fetch-route'
import { fetchBlob } from '_utils/fetch-blob'
import { createApolloClient } from '_lib'

import {
  getPowerCutAdditionalContent,
  isPowerCutLocationPage,
  fetchDictionaryData,
  fetchUkpnGlobalData,
  getContentQuery,
  generateRoute,
  fetchArticles,
  fetchFormData,
  fetchRoutes,
  paramsToUrl,
} from '_utils'

import {
  ComponentsTypeName,
  CmsContentPage,
  PageTypeNames,
  CmsRouteItem,
  PageProps,
} from '_types/CMS'

export default function Page(props: PageProps) {
  return renderContainer(props)
}

export async function getStaticPaths({
  locales = [],
  defaultLocale = 'en',
}: GetStaticPathsContext) {
  const apolloClient = createApolloClient()
  const allCmsRoutes = await fetchRoutes({
    locale: defaultLocale,
    apolloClient,
  })

  const paths = locales
    .map((locale) => {
      return allCmsRoutes?.map((route) => {
        return generateRoute({ route, locale })
      })
    })
    .flat()

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  locale = 'en',
  params,
  preview,
}: GetStaticPropsContext) {
  const apolloClient = createApolloClient()
  const requestedRoute = params && paramsToUrl(params)
  const dictionaryItems = await fetchDictionaryData({
    apolloClient,
    preview,
    locale,
  })

  const globalData = await fetchUkpnGlobalData({
    apolloClient,
    preview,
    locale,
  })

  let pageRoute: CmsRouteItem
  let pageData
  let formData
  let initialArticles
  let location

  if (isPowerCutLocationPage(params)) {
    pageRoute = {
      __typename: PageTypeNames.POWER_CUT,
      id: process.env.CMS_POWER_CUT_PAGE_ID as string,
      url: '/ukpn/power-cut',
    }
    location = params?.slug?.[1]
  } else {
    pageRoute = await fetchRoute({
      apolloClient,
      preview,
      locale,
      requestedUrl: requestedRoute?.url,
    })
  }

  // If we have a route, get all of the data for that route so we can render the page
  // Don't fetch data for routes that are "ContentFolders" in the CMS (they just house other pages)
  if (
    requestedRoute &&
    pageRoute &&
    pageRoute.__typename !== PageTypeNames.FOLDER
  ) {
    let cmsData
    let fetchError

    if (process.env.CMS_FALLBACK_MODE === 'true') {
      cmsData = await fetchBlob(requestedRoute.url)
    } else {
      const { data, error } = await apolloClient.query<CmsContentPage>({
        query: getContentQuery({
          searchProperty: 'id',
          searchValue: pageRoute.id,
          type: pageRoute?.__typename,
          preview,
          locale,
        }),
      })

      cmsData = data
      fetchError = error
    }

    const validData: CmsContentPage = getValidData(cmsData)

    if (validData.content.__typename === PageTypeNames.NEWS_LISTING) {
      initialArticles = await fetchArticles(1)
    }

    if (!fetchError && validData.content) {
      let additionalContent
      if (isPowerCutLocationPage(params)) {
        additionalContent = getPowerCutAdditionalContent(
          location as string,
          dictionaryItems
        )
        additionalContent = { ...additionalContent, location }
      }

      if (validData.content.__typename === PageTypeNames.POWER_CUT) {
        const stormFeedComponent = validData.content.stormComponents.find(
          (comp) => comp.__typename === ComponentsTypeName.STORM_LIVE_FEED
        ) as StormLiveFeedType

        if (stormFeedComponent && stormFeedComponent.storm) {
          const posts = stormFeedComponent.storm.descendants.items
          const newposts = await getMediaPostsMetadata(posts)
          stormFeedComponent.storm.descendants.items = newposts
        }
      }

      pageData = {
        ...validData.content,
        ...additionalContent,
        ...(!!initialArticles && { articles: initialArticles }),
      }
      formData = await fetchFormData(pageData)
    }
  }

  return {
    props: {
      data: pageData,
      ...(!!formData?.form?.pages && { formData: formData.form }),
      ...(!!formData?.customFieldsData && {
        customFieldsData: formData.customFieldsData,
      }),
      dictionaryItems,
      locale,
      globalData,
    },
    notFound: !pageData,
  }
}
