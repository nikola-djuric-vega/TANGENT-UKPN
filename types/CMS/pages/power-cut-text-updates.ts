import { CorePageProperties, PageTypeNames, Media, Link } from '..'
import { IconNames } from '_types/local'
export interface PowerCutTextUpdates extends CorePageProperties {
  __typename:
    | PageTypeNames.POWER_CUT_UNSUBSCRIBE_TEXT_UPDATES
    | PageTypeNames.POWER_CUT_REGISTER_TEXT_UPDATES
  children: {
    items?: Link[]
  }
  name: string
  url: string
}

export interface PowerCutRegisterTextUpdates extends PowerCutTextUpdates {
  futureTitle: string
  futureSubtitle?: string
  futureGdpr?: string
  futureTerms?: string[]
}

export interface PowerCutUnsubscribeTextUpdates extends PowerCutTextUpdates {
  unsubscribeForTextUpdatesTitle: string
  unsubscribeForTextUpdatesIcon: IconNames
  unsubscribeForTextUpdatesGdpr?: string
  unsubscribeForTextUpdatesBackButton?: boolean
}
