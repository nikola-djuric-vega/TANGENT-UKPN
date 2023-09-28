import { PageTypeNames } from '_types/CMS'
import { generateRoute } from '_utils'

describe('generateRoute utility function', () => {
  it('should return the correct slug without localisation', () => {
    const params = {
      route: {
        id: '1',
        url: '/foo/bar',
        __typename: PageTypeNames.GENERIC_PAGE,
      },
    }

    expect(generateRoute(params)).toEqual({
      params: {
        slug: ['foo', 'bar'],
      },
    })
  })

  it('should return the locale property', () => {
    const params = {
      route: {
        id: '1',
        url: '/foo/bar',
        __typename: PageTypeNames.GENERIC_PAGE,
      },
      locale: 'en',
    }

    expect(generateRoute(params)).toEqual({
      params: {
        slug: ['foo', 'bar'],
      },
      locale: 'en',
    })
  })

  it('should return the correct object for the root-most route', () => {
    const params = {
      route: { id: '1', url: '/', __typename: PageTypeNames.UKPN_HOMEPAGE },
    }

    expect(generateRoute(params)).toEqual({
      params: {
        slug: false,
      },
    })
  })
})
