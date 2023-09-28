import { CorePageProperties, PageTypeNames } from '..'
import { StormMode } from '../nodes/ukpnglobaldata'
import {
  StormLandingBannerType,
  PowerCutContactUsType,
  PowerCutComponentType,
  QuickLinkCardType,
  NotificationType,
  AccordionType,
  StormLiveFeedType,
} from '../nodes/components/UKPN'

export type PowerCutComponents =
  | PowerCutComponentType
  | NotificationType
  | AccordionType

export type PowerCutStormComponents =
  | StormLandingBannerType
  | PowerCutContactUsType
  | StormLiveFeedType
  | QuickLinkCardType
  | AccordionType

export interface PowerCutPage extends CorePageProperties {
  stormComponents: PowerCutStormComponents[]
  __typename: PageTypeNames.POWER_CUT
  components: PowerCutComponents[]
  stormTracker: boolean
  stormMode: StormMode
  location?: string
  name: string
  url: string
}
