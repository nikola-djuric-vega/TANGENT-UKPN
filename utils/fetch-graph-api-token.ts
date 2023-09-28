export interface GraphToken {
  token_type: string
  expires_in: number
  ext_expires_in: number
  access_token: string
}

export const fetchGraphApiToken = async (): Promise<string | undefined> => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/x-www-form-urlencoded')

  const body = new URLSearchParams()
  body.append(
    'client_id',
    process.env.AZURE_AD_B2C_GRAPH_API_CLIENT_ID as string
  )
  body.append('scope', '.default')
  body.append('grant_type', 'client_credentials')
  body.append(
    'client_secret',
    process.env.AZURE_AD_B2C_GRAPH_API_CLIENT_SECRET as string
  )

  const requestOptions = {
    method: 'POST',
    headers,
    body,
  }

  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_B2C_TENANT_ID}.onmicrosoft.com/oauth2/v2.0/token`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log('error', error))

  return tokenResponse?.access_token
}
