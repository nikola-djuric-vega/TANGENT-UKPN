import { SearchResults } from '_types/CMS/pages/'
import { PageTypeNames } from '_types/CMS'

export const SearchResultsMockData: SearchResults = {
  __typename: PageTypeNames.SEARCH_RESULTS_PAGE,
  contentTypeAlias: '',
  name: 'Search Results story',
  id: 'yureyruer',
  url: '',
  breadcrumb: 'breadcrumb',
  ancestors: {
    items: [
      {
        id: '',
        __typename: PageTypeNames.SEARCH_RESULTS_PAGE,
        name: 'Search',
        url: '/',
      },
    ],
  },
}
