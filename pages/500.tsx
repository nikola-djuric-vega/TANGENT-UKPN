import { fetchDictionaryData } from '_utils/fetch-dictionary-data'
import { createApolloClient } from '_lib/create-apollo-client'
import CoreMetadata from '_atoms/CoreMetadata/CoreMetadata'
import { CmsContentPage, PageTypeNames } from '_types/CMS'
import { getContentQuery } from '_utils/get-content-query'
import UKPNErrorPage from '_organism/UKPN404/UKPN404'
import { ErrorPage } from '_types/CMS/pages'
import { GetStaticPropsContext } from 'next'
import { PageProps } from '_types/CMS/'
import { fetchUkpnGlobalData } from '_utils/fetch-ukpn-global-data'

const Error500 = ({ data }: PageProps) => {
  return (
    <div>
      <CoreMetadata data={data} />
      <UKPNErrorPage data={data as ErrorPage} />
    </div>
  )
}

export async function getStaticProps({
  locale = 'en',
  preview,
}: GetStaticPropsContext) {
  const apolloClient = createApolloClient()
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

  let pageData

  // If we have a route, get all of the data for that route so we can render the page
  if (process.env.ERROR_PAGE_500_ID) {
    const { data, error } = await apolloClient.query<CmsContentPage>({
      query: getContentQuery({
        searchProperty: 'id',
        searchValue: process.env.ERROR_PAGE_500_ID,
        type: PageTypeNames.ERROR_PAGE,
        preview,
        locale,
      }),
    })
    pageData = data.content
  }

  return {
    props: {
      data: pageData,
      dictionaryItems,
      locale,
      globalData,
    },
  }
}

export default Error500
