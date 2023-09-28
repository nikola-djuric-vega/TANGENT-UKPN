// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, text } = req.query

  try {
    const { data } = await axios.get(
      `${process.env.MAIN_SITE_SEARCH_ENDPOINT}/MainSiteSearch` as string,
      {
        params: {
          page: page,
          ...(text && { search: text }),
        },
        headers: {
          'x-functions-key': process.env.MAIN_SITE_SEARCH_KEY as string,
        },
      }
    )

    res.status(200).json({
      docs: data.data,
      documentsCount: data.documentsCount,
      pageCount: data.pageCount,
    })
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
