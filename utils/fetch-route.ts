import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { CmsRouteContent } from '_types/CMS'

interface FetchRoutsArgs {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale: string
  requestedUrl?: string
}

export async function fetchRoute({
  apolloClient,
  preview = false,
  locale,
  requestedUrl,
}: FetchRoutsArgs) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME

  const { data } = await apolloClient.query<CmsRouteContent>({
    query: gql`
      query {
        content(culture: "${locale}", preview: ${preview}, url: "/${siteName?.toLowerCase()}${requestedUrl}") {
          id
          url
        }
      }
    `,
  })

  return data.content
}
