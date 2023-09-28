import { isPowerCutLocation } from './is-power-cut-location'
import { ParsedUrlQuery } from 'querystring'

export const isPowerCutLocationPage = (params: ParsedUrlQuery | undefined) => {
  if (
    params?.slug &&
    params.slug[0] === 'power-cut' &&
    params.slug[1] &&
    isPowerCutLocation(params.slug[1])
  ) {
    return true
  }
  return false
}
