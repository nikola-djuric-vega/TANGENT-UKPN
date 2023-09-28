import { CorePageProperties, PageTypeNames } from '../base'
import { PowerCutPanelItem } from './map-page'

import {
  TextWithVideoImageType,
  PowerCutContactUsType,
  QuickLinkCardType,
  HelpAndAdviceType,
} from '../nodes/components/UKPN'

export type IncidentPageComponents =
  | TextWithVideoImageType
  | PowerCutContactUsType
  | QuickLinkCardType
  | HelpAndAdviceType

export interface IncidentPageType extends CorePageProperties {
  __typename: PageTypeNames.INCIDENT_PAGE
  components: IncidentPageComponents[]
  descendants: {
    items: PowerCutPanelItem[]
  }
}
