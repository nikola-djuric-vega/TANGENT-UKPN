import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
    }
    profile: {
      id: stirng
      name: string
      email: string
      given_name: string
      family_name: string
      company: string
      agreedToTerms: boolean
      subscribedToDownloadDocuments: boolean
      subscribedToAllDocuments: boolean
      subscribedToAlertsAndBulletins: boolean
      'signInNames.emailAddress'?: string
    }
  }

  interface Account {
    provider: string
    type: string
    providerAccountId: string
    access_token: string
    id_token: string
    token_type: string
    not_before: number
    expires_at: number
    expires_on: number
    resource: string
    id_token_expires_in: number
    profile_info: string
    scope: string
    refresh_token: string
    refresh_token_expires_in: number
  }

  interface Profile {
    exp: number
    nbf: number
    ver: string
    iss: string
    sub: string
    aud: string
    iat: number
    auth_time: number
    oid: string
    family_name: string
    given_name: string
    name: string
    'signInNames.emailAddress'?: string
    extension_Company: string
    extension_AgreedToTermsAndConditions: boolean
    extension_SubscribedToDownloadedDocuments: boolean
    extension_SubscribedToAllDocuments: boolean
    extension_SubscribedToAlertsAndBulletins: boolean
    emails: string[]
    tfp: string
    at_hash: string
    user: null
  }

  interface User {
    id: string
    name: string
    email: string
    image: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    name: string
    email: string
    picture?: string
    sub: string
    company: string
    agreedToTerms: boolean
    subscribedToDownloadDocuments: boolean
    subscribedToAllDocuments: boolean
    subscribedToAlertsAndBulletins: boolean
    iat: number
    exp: number
    given_name: string
    family_name: string
  }
}
