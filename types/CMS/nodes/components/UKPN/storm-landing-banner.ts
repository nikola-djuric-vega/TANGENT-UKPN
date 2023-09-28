import { ComponentsTypeName, Link, Media } from '_types/CMS'
import { ContactCardType } from './contact-card'
import { CardListItem } from './card-list-item'

export interface StormLandingBannerType {
  __typename: ComponentsTypeName.STORM_LANDING_BANNER
  contactCard?: ContactCardType[]
  disableUpdatedTime?: boolean
  powerOffSubtitle?: string
  backgroundImage?: Media
  contactCardLink?: Link
  powerOffTitle?: string
  disablePulse?: boolean
  links?: CardListItem[]
  updatedTime?: string
  pulseTitle?: string
  summary?: string
  title?: string
}
