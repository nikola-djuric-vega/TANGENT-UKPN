import { CustomFieldsPage, FormCustomFields, FormField } from '_types/CMS'
import { checkDefaultValue } from './check-default-value'
import camelCase from 'lodash/camelCase'

import {
  RadioButtonsWithImages,
  RadioButtonsWithMainImage,
} from '_types/CMS/pages'

export const findFormikReference = (
  field: FormField,
  customElements?: CustomFieldsPage,
  defaultValue: string = field.alias,
  shouldFormat: boolean = true
) => {
  const defaultVal =
    field.settings?.defaultValue || field.settings?.DefaultValue
  const isPageCustomField = checkDefaultValue(defaultVal)
  let ref

  if (!!isPageCustomField && !!customElements) {
    switch (field.alias) {
      case FormCustomFields.RADIO_BUTTONS_WITH_IMAGES:
        ref = (
          customElements[
            FormCustomFields.RADIO_BUTTONS_WITH_IMAGES
          ] as RadioButtonsWithImages
        ).radioButtonQuestion
        return shouldFormat ? camelCase(ref) : ref
      case FormCustomFields.RADIO_BUTTONS_WITH_MAIN_IMAGE:
        ref = (
          customElements[
            FormCustomFields.RADIO_BUTTONS_WITH_MAIN_IMAGE
          ] as RadioButtonsWithMainImage
        ).radioButtonWithImageText
        return shouldFormat ? camelCase(ref) : ref
      default:
        return defaultValue
    }
  } else {
    return defaultValue
  }
}
