import { createApolloClient } from '_lib/create-apollo-client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { transformUrl } from '_utils/transform-url'
import { fetchRoutes } from '_utils/fetch-routes'
import { DateTime } from 'luxon'

const CANONICAL_URL = process.env.CANONICAL_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apolloClient = createApolloClient()
  const routes = await fetchRoutes({
    locale: 'en',
    apolloClient,
  })
  /*
  - Filter routes that have been set to not index as they shouldn't be crawled
  */
  const xmlroutes = routes
    .filter((route) => !route.hideFromSearchEngines)
    .map((route) => {
      return `<url>
        <loc>${CANONICAL_URL}${transformUrl(route.url)}</loc>
        <lastmod>${DateTime.fromISO(route.updateDate as string).toFormat(
          'yyyy-MM-dd'
        )}</lastmod>
      </url>`
    })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${xmlroutes.join('')}
  </urlset>`

  res.setHeader('content-type', 'application/xml')
  res.send(xml)
}
