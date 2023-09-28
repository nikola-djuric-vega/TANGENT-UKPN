import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.GOOGLE_RECAPTCHA_SECRET) {
    const details: { [key: string]: string } = {
      secret: process.env.GOOGLE_RECAPTCHA_SECRET,
      response: req.body.token as string,
    }

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(details[key])
      )
      .join('&')

    const recaptchaRequest = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    const recaptchaResponse = await recaptchaRequest.json()

    res.json(recaptchaResponse)
  } else {
    res.status(500).end()
  }
}
