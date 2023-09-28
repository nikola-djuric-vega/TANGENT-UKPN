import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    !process.env.POWER_CUT_INCIDENTS_ENDPOINT ||
    !process.env.POWER_CUT_INCIDENTS_KEY
  ) {
    res.status(400).json({
      error: 'Missing environment variables. Check configuration.',
    })

    return
  }

  try {
    const incidents = await axios.get(
      process.env.POWER_CUT_INCIDENTS_ENDPOINT,
      {
        headers: {
          'x-functions-key': process.env.POWER_CUT_INCIDENTS_KEY as string,
        },
      }
    )
    res.json(incidents.data)
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
}
