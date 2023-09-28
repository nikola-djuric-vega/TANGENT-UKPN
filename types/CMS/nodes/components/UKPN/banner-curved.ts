import { ComponentsTypeName, Link } from '_types/CMS'

export interface BannerCurvedType {
  __typename: ComponentsTypeName.BANNER_CURVED
  tag?: string
  header: string
  subHeader?: string
  desktopImage: { umbracoFile: UmbracoFile }
  bannerCurvedCTA?: Link
  removeBottomMargin?: boolean
  backgroundColour?: boolean
}

export interface UmbracoFile {
  url: string
}
