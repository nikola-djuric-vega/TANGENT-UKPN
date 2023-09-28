import { createApolloClient } from '_lib/create-apollo-client'
import { CmsContentPage, PageTypeNames } from '_types/CMS'
import { getContentQuery } from '_utils/get-content-query'
import { NextApiRequest, NextApiResponse } from 'next'

const CANONICAL_URL = process.env.CANONICAL_URL

const disallow = `User-agent: *
Disallow: /
Sitemap: ${CANONICAL_URL}/sitemap.xml`

const allow = `User-agent: *
Allow: /

Sitemap: ${CANONICAL_URL}/sitemap.xml
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apolloClient = createApolloClient()
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME as string
  const isProd = (process.env.CANONICAL_URL as string).includes(
    'ukpowernetworks.co.uk'
  )

  if (isProd && siteName === 'G81') {
    const { data } = await apolloClient.query<CmsContentPage>({
      query: getContentQuery({
        searchProperty: 'url',
        searchValue: `/${siteName.toLowerCase()}`,
        type: PageTypeNames.UKPN_HOMEPAGE,
        preview: false,
        locale: 'en',
      }),
    })

    if (!data.content.hideFromSearchEngines) {
      res.send(allow)
    } else {
      res.send(disallow)
    }
  } else if (isProd) {
    res.send(allow)
  } else {
    res.send(disallow)
  }
}
