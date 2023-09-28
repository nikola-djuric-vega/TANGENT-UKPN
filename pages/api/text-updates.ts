import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.TEXT_UPDATES_ENDPOINT) {
    return res.status(400).end('TEXT_UPDATES_ENDPOINT is not set')
  }

  if (req.method === 'PUT') {
    try {
      const { data } = await axios.put(
        process.env.TEXT_UPDATES_ENDPOINT,
        req.body
      )

      res.status(200).json(data)
    } catch (error: any | AxiosError) {
      res
        .status(error?.response?.status || 500)
        .send(error?.response?.statusText)
    }
  } else if (req.method === 'POST') {
    try {
      const { data } = await axios.post(
        `${process.env.TEXT_UPDATES_ENDPOINT}/optout`,
        req.body
      )
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
