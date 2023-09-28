import { ComponentsTypeName, Media } from '_types/CMS'

export interface InterimHomepageBannerType {
  __typename: ComponentsTypeName.INTERIM_HOMEPAGE_BANNER
  headerText?: string
  backgroundImage?: Media
}
