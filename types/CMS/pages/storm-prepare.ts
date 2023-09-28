import { Link as LinkType } from '_types/CMS'
import { IconNames } from '_types/local'
import {
  StormLandingBannerType,
  InformationCardType,
} from '../nodes/components/UKPN'
import {
  CorePageProperties,
  BreadcrumbsItem,
  PageTypeNames,
  Components,
} from '../base'

export interface StormChecklistType {
  stormChecklistSubtitle?: string
  stormChecklistTitle?: string
  stormChecklistLinks?: StormChecklistLinks[]
}

export interface StormChecklistLinks {
  linkURL: LinkType
  linkIcon: IconNames
}

export interface StormPrepareType extends CorePageProperties {
  __typename: PageTypeNames.STORM_PREPARE
  informationCard?: InformationCardType[]
  stormBanner?: StormLandingBannerType[]
  stormChecklist?: StormChecklistType[]
  stormPrepareBody?: string
  components?: Components[]
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
}
