import { handleConditionals } from './handle-conditionals'
import { FormCustomFields, FormField } from '_types/CMS'
import FormikControls from '_lib/formik-controls'
import { FormikValues } from 'formik'

export const checkAddressPicker = (
  valuesObj: FormikValues,
  fields: FormField[],
  isMultiple: boolean = false
) => {
  const addressPickers = [
    FormCustomFields.ADDRESS_CARD,
    FormCustomFields.POSTCODE_LOOKUP,
    FormCustomFields.POSTCODE_LOOKUP_ALLOW,
    FormCustomFields.POSTCODE_LOOKUP_MANUAL,
    FormCustomFields.POSTCODE_LOOKUP_MANUAL_DNO,
  ]

  const checkDefaultValue = (fld: FormField) => {
    const defaultVal = fld.settings.defaultValue || fld.settings.DefaultValue
    return addressPickers.includes(defaultVal as FormCustomFields)
  }

  if (isMultiple) {
    const findAddress = fields.filter((fld) =>
      checkDefaultValue(fld)
    ) as FormField[]
    const keys = Object.keys(valuesObj).filter((key) => {
      return findAddress.find(
        (fld) =>
          fld?.alias === key &&
          handleConditionals(valuesObj, true, fld?.condition)
      )
    })

    return keys.map((k) => {
      const current = findAddress.find((adr) => adr.alias === k)
      return {
        question: current?.caption,
        Address: FormikControls.formatAddressObject(valuesObj[k]),
      }
    })
  } else {
    const findAddress = fields.find((fld) => checkDefaultValue(fld))
    const key = Object.keys(valuesObj).find((key) => {
      return (
        findAddress?.alias === key &&
        handleConditionals(valuesObj, true, findAddress?.condition)
      )
    })

    return FormikControls.formatAddressObject(valuesObj[key as string])
  }
}
