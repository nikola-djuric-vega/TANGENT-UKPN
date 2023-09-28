import type { NextApiRequest, NextApiResponse } from 'next'
import { CmsContentPage } from '_types/CMS'
import { createApolloClient } from '_lib'
import { transformUrl } from '_utils'
import { gql } from '@apollo/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Security measure, check the route exists in the CMS
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<CmsContentPage>({
    query: gql`
      query {
        content(culture: "en", preview: true, url: "${req.query.path}") {
          id
          url
        }
      }
    `,
  })

  if (data.content) {
    res.setPreviewData({})

    // Redirect using the CMS url data to prevent redirect vulnerability from user input
    res.redirect(transformUrl(data.content?.url))
    return
  }

  res.status(404).json({ message: 'No route found' })
}
