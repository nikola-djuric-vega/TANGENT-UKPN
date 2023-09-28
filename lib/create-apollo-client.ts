import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://graphql.umbraco.io',
      headers: {
        'umb-project-alias': process.env.CMS_PROJECT_ALIAS,
        'api-key': process.env.CMS_API_KEY,
      },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  })
}
