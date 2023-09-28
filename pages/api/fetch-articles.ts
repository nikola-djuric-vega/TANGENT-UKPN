// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchArticles } from '_utils/fetch-articles'
import { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let articles = await fetchArticles(parseInt(req.query.page as string, 10))

    res.status(200).json(articles.data)
  } catch (error: any | AxiosError) {
    res.status(error?.response?.status || 500).send(error?.response?.statusText)
  }
}
