import { IndividualIncidentContent, PowerCutType } from '_types/local/incidents'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.API_1_ENDPOINT) {
    return res.status(400).end('API_1_ENDPOINT is not set')
  }

  if (req.method !== 'GET') {
    return res.status(405).end('Method not supported')
  }

  const ts = !!req.query.ts ? `?ts=${req.query.ts}` : ''

  try {
    const incident = await axios.get<IndividualIncidentContent>(
      `${process.env.API_1_ENDPOINT}/Incidents/IncidentId/${req.query.id}${ts}`,
      req.body
    )
    // If cognitive search returns null because it's recreating the store then we need to try again
    if (
      !incident.data.result.incidentReference &&
      incident.data.result.powerCutType !== PowerCutType.MULTIPLE_INCIDENT
    ) {
      const { data } = await axios.get<IndividualIncidentContent>(
        `${process.env.API_1_ENDPOINT}/Incidents/IncidentId/${req.query.id}${ts}`,
        req.body
      )
      res.status(200).json(data)
    } else {
      res.status(200).json(incident.data)
    }
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
