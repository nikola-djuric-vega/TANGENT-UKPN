const cspHeader = require('./csp-header')

const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      })
    : (x) => x

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    domains: [
      'media.umbraco.io',
      'img.youtube.com',
      'prod3si.click4assistance.co.uk',
    ],
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'no-cache',
          },
        ],
      },
      {
        source: '/api/fetch-rpc-toggle',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=5',
          },
        ],
      },
      {
        source: '/api/fetch-power-sharing',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=5',
          },
        ],
      },
      {
        source: '/api/fetch-storm-container',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=5',
          },
        ],
      },
      {
        source: '/api/power-cut/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=30',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'cache-control',
            value: 'no-cache',
          },
        ],
      },
      {
        source: '/images/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/icons/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/sprite.svg',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/images/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/icons/:slug*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/sprite.svg',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/:slug*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Xss-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },
  async redirects() {
    return [
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
    ]
  },
})
