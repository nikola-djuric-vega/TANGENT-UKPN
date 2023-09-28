import { SubNavigationType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'

export const hasSecondaryMenu = (dataComponents: any) => {
  return dataComponents?.find(
    (Comp: any) => Comp?.__typename === ComponentsTypeName.SUB_NAVIGATION
  ) as SubNavigationType
}
