import { createAxiosInstance } from '_utils/create-axios-instance'
import type { NextApiRequest, NextApiResponse } from 'next'
import { SmartMeterPingResponse } from '_types/local'
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

  if (req.method === 'GET') {
    try {
      const { data } = await smartMeterPingInstance.get<SmartMeterPingResponse>(
        `/PingSmart/${req.query.correlationID}?mpan=${encodeURI(
          req.query.mpan as string
        )}`
      )

      const isPinged = data.statusMessage.includes(
        'has already been pinged in the last hour'
      )

      if (!data.pingAllowed && !isPinged) {
        res.status(202).send({ isDb: true })
      } else if (isPinged && !data.pingAllowed) {
        res.status(202).send({ isDb: false })
      } else {
        res.status(200).json(data)
      }
    } catch (error: any | AxiosError) {
      res
        .status(error?.response?.status || 500)
        .send(error?.response?.statusMessage)
    }
  } else {
    return res.status(405).end('Method not supported')
  }
}
