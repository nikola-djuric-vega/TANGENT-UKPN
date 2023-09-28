import { getPageFragment, getContentQuery } from '_utils'
import { PageTypeNames } from '_types/CMS'
import { gql } from '@apollo/client'

const url = '/test'
const types = [PageTypeNames.UKPN_HOMEPAGE]

describe('fetchRoutes utility function', () => {
  it.each(types)('should return correct data', async (type) => {
    const gqlData = getContentQuery({
      searchProperty: 'url',
      searchValue: url,
      type,
    })

    expect(gqlData).toEqual(gql`
      ${getPageFragment(type)}

      query {
        content(url: "${url}", culture: "en", preview: false) {
          name
          url

          ...${type}
        }
      }
    `)
  })
})
