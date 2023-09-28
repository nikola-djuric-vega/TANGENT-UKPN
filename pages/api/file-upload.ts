import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.ATTACHMENT_ENDPOINT) {
    return res.status(400).end('ATTACHMENT_ENDPOINT is not set')
  }

  if (req.method === 'GET') {
    try {
      const { data } = await axios.get(process.env.ATTACHMENT_ENDPOINT, {
        headers: {
          'x-functions-key': process.env.DOCUMENTS_SEARCH_KEY as string,
        },
      })

      res.status(200).json(data)
    } catch (error: any | AxiosError) {
      res
        .status(error?.response?.status || 500)
        .send(error?.response?.statusText)
    }
  } else if (req.method === 'DELETE') {
    try {
      const { data } = await axios.delete(
        `${process.env.ATTACHMENT_ENDPOINT}/deletefile?sessionId=${req.query.sessionId}&fileID=-1`,
        {
          headers: {
            'x-functions-key': process.env.DOCUMENTS_SEARCH_KEY as string,
          },
        }
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
