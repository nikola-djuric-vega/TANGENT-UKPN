import type { NextApiRequest, NextApiResponse } from 'next'
import Geocode from 'react-geocode'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY as string
  let data
  Geocode.setRegion('UK')
  Geocode.setApiKey(apiKey)
  if (req.query.postcode !== undefined) {
    await Geocode.fromAddress(req.query.postcode as string)
      .then((res) => {
        if (res.status === 'OK') {
          return res.results
        }
      })
      .then((results) => {
        data = results[0].geometry.location
      })
      .catch((err) => {
        data = { message: 'Please enter a valid UK postcode' }
      })
  }

  return res.json(data)
}
