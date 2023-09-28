import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.API_1_ENDPOINT) {
    return res.status(400).end('API_1_ENDPOINT is not set')
  }

  if (req.method !== 'POST') {
    return res.status(405).end('Method not supported')
  }

  try {
    const { data } = await axios.post(
      `${process.env.API_1_ENDPOINT}/PostcodeSearch/Search`,
      req.body
    )

    res.status(200).json(data)
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
