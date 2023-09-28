import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.WHAT3WORDS_API_KEY
  let data
  if (req.query.words !== undefined) {
    await fetch(
      `https://api.what3words.com/v3/convert-to-coordinates?words=${req.query.words}&key=${apiKey}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        if (res.status == 200) {
          return res.json()
        }
      })
      .then((res) => {
        if (res !== undefined) {
          data = res.coordinates
        } else {
          data = { message: 'Please enter a valid what3words location' }
        }
      })
  } else if (req.query.lat !== undefined && req.query.lng !== undefined) {
    const lat = parseFloat(parseFloat(req.query.lat as string).toFixed(6))
    const lng = parseFloat(parseFloat(req.query.lng as string).toFixed(6))
    await fetch(
      `https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat}%2C${lng}&key=${apiKey}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        if (res.status == 200) {
          return res.json()
        }
      })
      .then((res) => {
        data = res
      })
  }

  return res.json(data)
}
