import { ComponentsTypeName, Link, AuthorType } from '_types/CMS'

export interface PowerCutContactUsType {
  __typename: ComponentsTypeName.POWER_CUT_CONTACT_US
  powerCutContactUsAuthor?: AuthorType
  title?: string
  text?: string
  telephone?: string
  facebook?: Link
  twitter?: Link
  powerCutContactUsWhatsApp?: Link
}
