const appInsights = require('applicationinsights')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const axios = require('axios')
const azureidentity = require('@azure/identity')
const { promises, existsSync } = require('fs')
const powerCutLocData = require('./lib/loc.json')
const isArray = require('lodash/isArray')
const {
  ServiceBusClient,
  ServiceBusAdministrationClient,
} = require('@azure/service-bus')

const powerCutPaths = powerCutLocData.locs.map((loc) => {
  const locToSlug = loc.loc.toLowerCase().replace(/ /g, '-')

  return `/power-cut/${locToSlug}`
})

powerCutPaths.unshift('/power-cut')

if (
  process.env.NODE_ENV === 'production' &&
  process.env.APPINSIGHTS_INSTRUMENTATIONKEY
) {
  appInsights.setup().start()
} else {
  console.log('Application Insights not enabled')
}

const PORT = process.env.PORT || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log(
  `Cache purging ${
    process.env.AZURE_PRODUCTION_SLOT === 'true' ? 'enabled' : 'not enabled'
  }`
)

const initServiceBusSubscriptions = async () => {
  // Azure subscriptions can't have more than 50 characters in length for names
  const subscriptionName = process.env.WEBSITE_INSTANCE_ID.substring(0, 50)

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME

  const serviceBusAdministrationClient = new ServiceBusAdministrationClient(
    process.env.AZURE_FULLY_QUALIFIED_NAMESPACE
  )

  try {
    await serviceBusAdministrationClient.createSubscription(
      process.env.AZURE_PUBLISH_PURGE_CDN_TOPIC,
      subscriptionName
    )
  } catch (error) {
    appInsights.defaultClient.trackException({
      exception: error,
    })
    appInsights.defaultClient.flush()
  }

  try {
    await serviceBusAdministrationClient.createSubscription(
      process.env.AZURE_REMOVE_PURGE_CDN_TOPIC,
      subscriptionName
    )
  } catch (error) {
    appInsights.defaultClient.trackException({
      exception: error,
    })
    appInsights.defaultClient.flush()
  }

  const fullPurgePaths = [
    `/${siteName.toLowerCase()}/settings`,
    `/${siteName.toLowerCase()}/dictionary`,
    `/${siteName.toLowerCase()}/repository`,
  ]

  const shouldPurgeAll = (pathname) => {
    return fullPurgePaths.some((path) => pathname?.startsWith(path))
  }

  const fullyQualifiedNamespace = process.env.AZURE_FULLY_QUALIFIED_NAMESPACE
  const serviceBusClient = new ServiceBusClient(fullyQualifiedNamespace)

  const purgePublishTopicName = process.env.AZURE_PUBLISH_PURGE_CDN_TOPIC
  const purgePublishSubscriptionName = subscriptionName

  const purgePublishReceiver = serviceBusClient.createReceiver(
    purgePublishTopicName,
    purgePublishSubscriptionName
  )

  /* Purge Remove Message Handler is a special case because we don't have url
    So we need to query the search index for it with id providied */
  const purgeRemoveMessageHandler = async (message) => {
    console.log('-------------------')
    console.log(`Purge remove request found`)

    if (!message || !message.body) {
      console.log('Purge unsuccessful - Empty message')

      return
    }

    if (message.body.Path && shouldPurgeAll(message.body.Path)) {
      purgeAllNextJsCacheFs()

      console.log('Asking the Azure API to clear the CDN Cache')

      clearCdnCache(['/*'])
    } else if (message.body.Path) {
      try {
        console.log(`Attempting Next.js purge of ${message.body.Path}`)

        const enPurgeSuccess = await purgeNextCacheAPI(message.body.Path, true)

        if (enPurgeSuccess) {
          console.log('Asking the Azure API to clear the CDN Cache')

          clearCdnCache([message.body.Path])
        }
      } catch (err) {
        console.log(
          `Error when retrieving document via ID - likely already been deleted from index. ID: ${message.body._id}`
        )
        console.log(err)
      }
    } else {
      console.log('Error: no path provided for the page to be purged')
    }
  }

  const purgeMessageHandler = async (message) => {
    console.log('-------------------')
    console.log('Purge request found')

    if (!message || !message.body) {
      console.log('Purge unsuccessful - Empty message')

      return
    }

    if (message.body._url && shouldPurgeAll(message.body._url)) {
      purgeAllNextJsCacheFs()

      console.log('Asking the Azure API to clear the CDN Cache')

      clearCdnCache(['/*'])
    } else if (message.body._url.includes('/power-cut/map')) {
      console.log(`Attempting Next.js purge of /ukpn/power-cut/map`)

      await purgeNextCacheAPI('/ukpn/power-cut/map')
      await purgeNextCacheAPI('/ukpn/power-cut/list')

      console.log('Asking the Azure API to clear the CDN Cache')
      await clearCdnCache(['/ukpn/power-cut/map', '/ukpn/power-cut/list'])
    } else if (message.body._url) {
      console.log(`Attempting Next.js purge of ${message.body._url}`)

      const purgeSuccess = await purgeNextCacheAPI(message.body._url)

      if (purgeSuccess) {
        console.log('Asking the Azure API to clear the CDN Cache')
        await clearCdnCache([message.body._url])
      }
    } else {
      console.log('Error: no url provided for the page to be purged')
    }
  }

  const purgeErrorHandler = async (args) => {
    console.log(
      `Error occurred with ${args.entityPath} within ${args.fullyQualifiedNamespace}: `,
      args.error
    )
  }

  purgePublishReceiver.subscribe({
    processMessage: purgeMessageHandler,
    processError: purgeErrorHandler,
  })

  const purgeDeleteTopicName = process.env.AZURE_REMOVE_PURGE_CDN_TOPIC
  const purgeDeleteSubscriptionName = subscriptionName

  const purgeDeleteReceiver = serviceBusClient.createReceiver(
    purgeDeleteTopicName,
    purgeDeleteSubscriptionName
  )

  purgeDeleteReceiver.subscribe({
    processMessage: purgeRemoveMessageHandler,
    processError: purgeErrorHandler,
  })
}

if (process.env.AZURE_PRODUCTION_SLOT === 'true') {
  initServiceBusSubscriptions()
}

const transformPath = (routeUrl) => {
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

const clearCdnCache = async (paths) => {
  if (
    process.env.AZURE_SUBSCRIPTION_ID &&
    process.env.AZURE_FRONTDOOR_NAME &&
    process.env.AZURE_API_VERSION
  ) {
    if (!isArray(paths)) {
      console.log(`Frontdoor cache not cleared. 'paths' is not of type Array`)
    }
    let urlPaths = paths

    if (urlPaths.length && urlPaths[0] !== '/*') {
      urlPaths = paths.map((url) => {
        const transformedUrl = transformPath(url)

        return transformedUrl === '' ? '/' : transformedUrl
      })
    }

    let pathsString = urlPaths.join('\r\n')

    const credential = new azureidentity.DefaultAzureCredential({
      managedIdentityClientId: process.env.AZURE_FRONTDOOR_CLIENT_ID,
    })

    const tokenResponse = await credential.getToken(
      'https://management.core.windows.net'
    )

    if (urlPaths.length > 50) {
      pathsString = `${urlPaths.length} urls`
    }

    console.log(`Frontdoor cache will clear:\r\n${pathsString}\r\n`)

    await fetch(
      `https://management.azure.com/subscriptions/${process.env.AZURE_SUBSCRIPTION_ID}/resourceGroups/${process.env.AZURE_RESOURCE_GROUP_NAME}/providers/Microsoft.Network/frontDoors/${process.env.AZURE_FRONTDOOR_NAME}/purge?api-version=${process.env.AZURE_API_VERSION}`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + tokenResponse.token,
        }),
        body: JSON.stringify({
          contentPaths: urlPaths,
        }),
      }
    )
      .then((response) => response)
      .then((data) => {
        if (data.status == 200 || data.status == 202) {
          console.log(
            `Successfully cleared frontdoor cache of:\r\n${pathsString}\r\n`
          )
        } else {
          console.log(
            `Error while attempting to clear frontdoor cache of:\r\n${pathsString}\r\n`,
            data
          )
        }
      })
  }
}

const purgeNextCacheAPI = async (pathname) => {
  const correctedPathname = transformPath(pathname)

  try {
    await axios.get(
      `${process.env.APP_SERVICE_URL}/api/revalidate?secret=${process.env.NEXT_REVALIDATE_TOKEN}&path=${correctedPathname}`
    )

    console.log(
      `Next.js API cache successfully purged: ${process.env.APP_SERVICE_URL}${correctedPathname}`
    )

    return true
  } catch (err) {
    console.log(`Next.js API cache purge unsuccessful: ${correctedPathname}`)
    console.log(err)

    return true
  }
}

const purgeAllNextJsCacheFs = async (isPowerCutPage) => {
  const paths = Object.entries(
    app.server.incrementalCache.prerenderManifest.routes
  )

  if (!isPowerCutPage) {
    console.log('Attempting full cache purge')

    paths.forEach(async (path) => {
      await purgeNextCacheFs(path[0])
    })
  } else {
    console.log('Attempting power cut landing pages cache purge')

    // Only attempt to purge pages that exist
    const existingLocationPages = paths.filter((path) =>
      powerCutPaths.includes(path[0].replace(/^\/en/, ''))
    )

    existingLocationPages.forEach(async (path) => {
      await purgeNextCacheFs(path[0])
    })
  }

  console.log(`Next.js fs cache completed`)
}

const purgeNextCacheFs = async (pathname) => {
  const fullPathname = `.next/server/pages${pathname}`
  const fullPathHTML = `${fullPathname}.html`
  const fullPathJSON = `${fullPathname}.json`

  try {
    const cachedData = await app.server.incrementalCache.get(pathname)

    const staleTime = new Date().getTime() - 1000

    if (existsSync(fullPathHTML)) {
      await promises.unlink(fullPathHTML)
    }

    if (existsSync(fullPathHTML)) {
      await promises.unlink(fullPathJSON)
    }

    if (cachedData?.value) {
      await app.server.incrementalCache.set(
        pathname,
        {
          ...cachedData.value,
          revalidateAfter: staleTime,
        },
        1
      )
    }

    return true
  } catch (err) {
    console.log(`Next.js fs cache purge unsuccessful: ${fullPathname}`)
    console.log(err)
    return true
  }
}

const checkRedirect = async (url) => {
  const source = axios.CancelToken.source()

  try {
    let response = null

    setTimeout(() => {
      if (response === null) {
        source.cancel()
      }
    }, process.env.REDIRECT_TIMEOUT || 2000)

    response = await axios.post(
      'https://graphql.umbraco.io',
      {
        query: `query {
          allPageRedirect(culture: "en", preview: false, where: { pageURL: "${url}" }) {
            items {
              pageURL
              externalDestination
              destination {
                url
              }
            }
          }
        }
      `,
      },
      {
        headers: {
          'Umb-Project-Alias': process.env.CMS_PROJECT_ALIAS,
          'Api-Key': process.env.CMS_API_KEY,
        },
        cancelToken: source.token,
      }
    )

    const redirect = response.data.data.allPageRedirect.items

    if (redirect && redirect[0]) {
      return redirect[0]
    }
  } catch (e) {
    // Add logging here when app is using Node 16.x.x so we can ignore cancelled requests
  }
}

app.prepare().then(async () => {
  await createServer(async (req, res) => {
    // Avoid any unneccesary redirect attempts by checking for Next.js specific
    // routes and paths ending with file extensions.
    if (
      req.url === '/' ||
      req.url.startsWith('/_next/') ||
      req.url.startsWith('/api/')
    ) {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const url = parse(req.url, true)

      handle(req, res, url)
    } else {
      const redirectUrl = await checkRedirect(req.url, res)

      if (redirectUrl) {
        const { destination, externalDestination } = redirectUrl
        let redirectPath

        if (destination.url) {
          redirectPath = process.env.CANONICAL_URL + transformPath(destination.url)
        } else {
          redirectPath = externalDestination
        }


        console.log(
          `Redirect successful:\r\n`,
          `from ${req.url}\r\n`,
          `to ${redirectPath}\r\n`
        )
        res.writeHead(301, {
          location: `${redirectPath}`,
        })

        res.end()
      } else {
        const url = parse(req.url, true)

        handle(req, res, url)
      }
    }
  }).listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
