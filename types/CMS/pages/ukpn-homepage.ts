import { Components, CorePageProperties, PageTypeNames } from '..'
import { StormMode } from '../nodes/ukpnglobaldata'
import {
  HomePageHeroBannerSlideImageType,
  HomePageHeroSlideParallaxType,
  StormLandingBannerType,
  QuickLinkCardType,
} from '../nodes/components/UKPN'

export type HomepageStormComponents = StormLandingBannerType | QuickLinkCardType
export interface UkpnHomepage extends CorePageProperties {
  __typename: PageTypeNames.UKPN_HOMEPAGE
  components: Components[]
  slides: Array<
    HomePageHeroBannerSlideImageType | HomePageHeroSlideParallaxType
  >
  name: string
  url: string
  stormModeComponents: HomepageStormComponents[]
  stormTracker: boolean
  stormMode: StormMode
}
