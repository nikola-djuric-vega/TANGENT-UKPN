import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { getUKPNRoutes } from '_utils'
import { CmsRoute } from '_types/CMS'

interface FetchRoutsArgs {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale: string
}

export async function fetchRoutes({
  apolloClient,
  preview = false,
  locale,
}: FetchRoutsArgs) {
  const getQuery = () => getUKPNRoutes({ locale, preview })

  const { data } = await apolloClient.query<CmsRoute>({
    query: getQuery(),
  })

  const routes = Object.values(data)
    .map((page) => page.items)
    .flat()

  return routes
}
