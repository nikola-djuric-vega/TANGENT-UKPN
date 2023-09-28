import { FilterbyTextSearch } from '_types/local'

export const filterbyText: FilterbyTextSearch = (searchValue, router, slug) => {
  const isSearchPage = slug?.includes('search')
  router.push({
    pathname: !isSearchPage ? '/search' : router.asPath.split('?')[0],
    query: {
      ...(searchValue && { phrase: searchValue }),
      page: 1,
    },
  })
}
