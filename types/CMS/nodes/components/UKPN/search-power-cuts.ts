import { ComponentsTypeName, Media } from '_types/CMS'
import { IconNames } from '_types/local'
import { Link } from '_types/CMS/link'

export interface SearchPowerCutsType {
  __typename: ComponentsTypeName.SEARCH_POWER_CUTS
  searchPowerCutsItems?: PowerCutCtas[]
  searchPowerCutsMapLink: Link
  searchPowerCutsImage?: Media
  searchPowerCutsHeader?: string
  searchPowerCutsTitle?: string
}

export interface PowerCutCtas {
  icon?: IconNames
  link?: Link
}
