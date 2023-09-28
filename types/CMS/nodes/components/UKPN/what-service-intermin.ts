import { ComponentsTypeName } from '_types/CMS/base'
import { Media, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface WhatServiceInterimType {
  __typename: ComponentsTypeName.WHAT_SERVICE_INTERIM
  tabs?: WhatServiceInterimPanelType[]
  title?: string
}

export interface WhatServiceInterimPanelType {
  services?: Service[]
  icon?: IconNames
  title?: string
}

export interface Service {
  subtitle?: string
  image?: Media
  title?: string
  link?: Link
}
