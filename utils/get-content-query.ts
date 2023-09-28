import { PageTypeNames } from '_types/CMS'
import { getPageFragment } from '_utils'
import { gql } from '@apollo/client'

interface GetContentQueryParams {
  searchProperty: string
  searchValue: string
  locale?: string
  type: PageTypeNames
  preview?: boolean
}

export function getContentQuery({
  searchProperty,
  searchValue,
  locale = 'en',
  type,
  preview = false,
}: GetContentQueryParams) {
  return gql`
    ${getPageFragment(type)}

    query {
      content(${searchProperty}: "${searchValue}", culture: "${locale}", preview: ${preview}) {
        name
        url

        ...${type}
      }
    }
  `
}
