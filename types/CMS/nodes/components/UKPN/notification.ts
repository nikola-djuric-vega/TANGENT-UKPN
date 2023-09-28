import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface NotificationType {
  __typename: ComponentsTypeName.NOTIFICATION
  secondaryCallToAction?: string
  removeBottomMargin?: boolean
  notificationMessage?: string
  enableLivePulse?: boolean
  pulseTitle?: string
  link?: Link
}
