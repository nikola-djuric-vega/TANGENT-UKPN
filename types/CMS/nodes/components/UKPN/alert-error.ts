import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface AlertErrorType {
  __typename: ComponentsTypeName.ALERT_ERROR
  alertErrorIcon?: IconNames
  alertErrorTitle?: string
  alertErrorDescription?: string
}
