import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'
import { isValid as isValidPostcode } from 'postcode'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchTerm = req.query.value as string

  if (!process.env.ADDRESS_SERVICE_ENDPOINT) {
    return res.status(400).end('ADDRESS_SERVICE_ENDPOINT is not set')
  }

  if (req.method !== 'GET') {
    return res.status(405).end('Method not supported')
  }

  try {
    if (isValidPostcode(searchTerm)) {
      const { data } = await axios.get(
        `${process.env.ADDRESS_SERVICE_ENDPOINT}/address/${searchTerm}`
      )

      res.status(200).json(data)
    } else {
      const { data } = await axios.get(
        `${process.env.ADDRESS_SERVICE_ENDPOINT}/address/search?searchQuery=${searchTerm}`
      )

      res.status(200).json(data)
    }
  } catch (error: any | AxiosError) {
    res.status(200).send(error?.response?.statusText)
  }
}
