import type { NextApiRequest, NextApiResponse } from 'next'
import { createApolloClient } from '_lib'
import { gql } from '@apollo/client'
import { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apolloClient = createApolloClient()

  try {
    const { data } = await apolloClient.query({
      query: gql`
        query {
          stormContainer(
            id: "${process.env.CMS_STORM_CONTAINER_ID}"
            culture: "en"
            preview: ${!!req.preview}
          ) {
            ... on StormContainer {
              stormMode
              stormTracker
            }
          }
        }
      `,
    })

    res.status(200).json(data.stormContainer)
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
