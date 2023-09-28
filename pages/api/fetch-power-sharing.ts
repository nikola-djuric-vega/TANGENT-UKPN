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
          powerSharing(
            id: "${process.env.CMS_POWER_SHARING_ID}"
            culture: "en"
            preview: ${!!req.preview}
          ) {
            ... on PowerSharing {
              powerSharingEnabled
            }
          }
        }
      `,
    })

    res.status(200).json(data.powerSharing.powerSharingEnabled)
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
