import { createMockClient } from '@apollo/client/testing'
import { fetchRoutes, getUKPNRoutes } from '_utils'

const mockItem = { id: '1', url: '/foo/bar' }

const mockApolloClient = createMockClient(
  {
    allUkpnHomepage: {
      items: [mockItem],
    },
    allGenericPage: {
      items: [mockItem],
    },
    allPowerCutFormPage: {
      items: [mockItem],
    },
    allPowerCutList: {
      items: [mockItem],
    },
    allPowerCutThankYouPage: {
      items: [mockItem],
    },
    allTextUpdatesPage: {
      items: [mockItem],
    },
    allConfirmationSuccess: {
      items: [mockItem],
    },
    allConfirmationFailure: {
      items: [mockItem],
    },
    allEmailFormPage: {
      items: [mockItem],
    },
    allEmailFormThankYouPage: {
      items: [mockItem],
    },
    allCatAFormPage: {
      items: [mockItem],
    },
    allCatAThankYouPage: {
      items: [mockItem],
    },
    allPSRFormPage: {
      items: [mockItem],
    },
    allPSRFormThankYouPage: {
      items: [mockItem],
    },
    allErrorPage: {
      items: [mockItem],
    },
    allT2LandingPage: {
      items: [mockItem],
    },
    allT3ContactUs: {
      items: [mockItem],
    },
    allT4PSRLanding: {
      items: [mockItem],
    },
    allT5InstallersLanding: {
      items: [mockItem],
    },
    allT6SSContentOverview: {
      items: [mockItem],
    },
    allT7ProjectsContentOverview: {
      items: [mockItem],
    },
    allT8SSCalculator: {
      items: [mockItem],
    },
    allT9ApplicationStartOverview: {
      items: [mockItem],
    },
    allMapPage: {
      items: [mockItem],
    },
    allStreetFurnitureFormPage: {
      items: [mockItem],
    },
    allStreetFurnitureFormThankYouPage: {
      items: [mockItem],
    },
    allMeteredConnectionFormPage: {
      items: [mockItem],
    },
    allMeteredConnectionFormThankYouPage: {
      items: [mockItem],
    },
    allUnMeteredConnectionFormPage: {
      items: [mockItem],
    },
    allUnMeteredConnectionFormThankYouPage: {
      items: [mockItem],
    },
    allLandingICE: {
      items: [mockItem],
    },
  },
  getUKPNRoutes({
    locale: 'en',
    preview: false,
  })
)

describe('fetchRoutes utility function', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }

    process.env.NEXT_PUBLIC_SITE_NAME = 'UKPN'
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  it('should return correct data', async () => {
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient, locale: 'en' })
    ).toEqual([
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
      mockItem,
    ])
  })
})