import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.API_7_ENDPOINT) {
    return res.status(400).end('API_7_ENDPOINT is not set')
  }

  if (req.method === 'POST') {
    try {
      const { data } = await axios.get(
        `${process.env.API_7_ENDPOINT}/SmartMeter/isSmart?mpan=${encodeURI(
          req.body.mpan as string
        )}`
      )
      delete data.status
      res.status(200).json(data)
    } catch (error: any | AxiosError) {
      res
        .status(error?.response?.status || 500)
        .send(error?.response?.statusText)
    }
  } else {
    return res.status(405).end('Method not supported')
  }
}
