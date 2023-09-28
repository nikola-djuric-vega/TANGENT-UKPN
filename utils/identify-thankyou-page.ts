import { transformUrl } from '.'

export const identifyThankyouPage = (
  pages: Array<{
    id: string
    url: string
  }>,
  thankYouPageId: string
) => {
  const thankYouPage = pages.find((page) => page.id === thankYouPageId)
  if (thankYouPage) {
    return transformUrl(thankYouPage?.url)
  } else {
    return ''
  }
}
