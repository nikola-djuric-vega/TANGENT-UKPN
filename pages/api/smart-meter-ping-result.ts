import { createAxiosInstance } from '_utils/create-axios-instance'
import type { NextApiRequest, NextApiResponse } from 'next'
import { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.API_7_ENDPOINT) {
    return res.status(400).end('API_7_ENDPOINT is not set')
  }

  const smartMeterPingInstance = createAxiosInstance({
    baseURL: `${process.env.API_7_ENDPOINT}/SmartMeter`,
  })

  if (req.method === 'POST') {
    try {
      const { data } = await smartMeterPingInstance.get(
        `PingResult/${req.body.correlationID}`
      )
      res.status(200).json(data)
    } catch (error: any | AxiosError) {
      res.status(error?.response?.status || 500).send(error?.response?.status)
    }
  } else {
    return res.status(405).end('Method not supported')
  }
}
