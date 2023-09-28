import { CmsRouteItem, PageTypeNames } from '_types/CMS'
import { transformUrl } from '_utils'

interface GenerateRouteProps {
  route: CmsRouteItem
  locale?: string
}

export function generateRoute({ route, locale }: GenerateRouteProps) {
  // Check for the homepage by typename to protect against potential url changes on the CMS
  const isRoot = route.__typename === PageTypeNames.UKPN_HOMEPAGE

  if (isRoot) {
    return { params: { slug: false }, ...(locale && { locale }) }
  }

  const url = transformUrl(route.url)

  // Convert 'foo/bar' to ['foo', 'bar']
  const slug = url.split('/').filter((item) => !!item)

  return {
    params: {
      slug,
    },
    ...(locale && { locale }),
  }
}
