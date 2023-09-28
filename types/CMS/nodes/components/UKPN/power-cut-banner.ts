import { ComponentsTypeName } from '_types/CMS/base'

export interface PowerCutBannerType {
  __typename: ComponentsTypeName.POWER_CUT_BANNER
  isLive?: boolean
  title?: string
  location?: string
}
