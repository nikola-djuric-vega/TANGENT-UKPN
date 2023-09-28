import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.POWER_CUT_INCIDENTS_LIST_ENDPOINT) {
    res.status(400).json({
      error: 'Missing environment variable. Check configuration.',
    })

    return
  }

  try {
    const incidents = await axios.get(
      process.env.POWER_CUT_INCIDENTS_LIST_ENDPOINT
    )
    res.json(incidents.data)
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
