const { InMemoryCache, ApolloClient, HttpLink, gql } = require('@apollo/client')

const transformUrl = (routeUrl) => {
  const urlRegex = /^\/*(ukpn|g81)\/*/
  let url = routeUrl

  if (url.match(urlRegex)) {
    url = url.replace(urlRegex, '/')
  }

  if (!url.startsWith('/') && !url.startsWith('http')) {
    url = `/${url}`
  }

  if (url !== '/' && url.endsWith('/')) {
    url = url.substring(0, url.length - 1)
  }

  return url
}

const staticRedirects = [
  {
    source: '/unmetered-connection-form',
    destination: '/highway-services-connections',
    permanent: false,
  },
  {
    source: '/metered-connection-form',
    destination: '/highway-services-connections',
    permanent: false,
  },
  {
    source: '/telephone-call-back',
    destination: '/highway-services-connections',
    permanent: false,
  },
  {
    source: '/street-furniture-form-questions',
    destination: '/street-furniture-form',
    permanent: false,
  },
  {
    source: '/ukpn',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ukpn/:slug*',
    destination: '/:slug*',
    permanent: true,
  },
  {
    source: '/g81',
    destination: '/',
    permanent: true,
  },
  {
    source: '/g81/:slug*',
    destination: '/:slug*',
    permanent: true,
  },
]

const generateRedirects = async () => {
  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'https://graphql.umbraco.io',
      headers: {
        'umb-project-alias': process.env.CMS_PROJECT_ALIAS,
        'api-key': process.env.CMS_API_KEY,
      },
    }),
    cache: new InMemoryCache(),
  })

  const query = gql`
    query {
      allPageRedirect(culture: "en", preview: false) {
        items {
          pageURL
          externalDestination
          destination {
            url
          }
        }
      }
    }
  `

  const { data } = await apolloClient.query({
    query: query,
  })

  const dynamicRedirects = data.allPageRedirect.items.map((rdr) => ({
    source: '/' + rdr.pageURL,
    destination: transformUrl(rdr.destination.url) || rdr.externalDestination,
    permanent: false,
  }))

  return [...staticRedirects, ...dynamicRedirects]
}

module.exports = generateRedirects
