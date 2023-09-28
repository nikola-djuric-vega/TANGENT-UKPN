import { ParsedUrlQuery } from 'querystring'

export const paramsToUrl = (params: ParsedUrlQuery) => {
  const { slug, ...query } = params
  let url = '/'

  if (Array.isArray(slug)) {
    url = `/${slug.join('/')}`
  } else if (typeof slug === 'string') {
    url = `/${slug}`
  }

  return {
    url,
    query,
  }
}
