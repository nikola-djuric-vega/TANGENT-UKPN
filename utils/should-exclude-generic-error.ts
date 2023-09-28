import { FormCustomFields } from '_types/CMS'

export const shouldExcludeGenericErrors = (fieldType: FormCustomFields) => {
  const excludeErrorMessage = [
    FormCustomFields.ADDRESS_CARD,
    FormCustomFields.APPOINTMENT_PICKER,
    FormCustomFields.NOT_AVAILABLE,
    FormCustomFields.POSTCODE_LOOKUP,
    FormCustomFields.POSTCODE_LOOKUP_ALLOW,
    FormCustomFields.POSTCODE_LOOKUP_MANUAL,
    FormCustomFields.POSTCODE_LOOKUP_MANUAL_DNO,
    FormCustomFields.LOCATION_FIELDS,
    FormCustomFields.FORM_REPEATER,
    FormCustomFields.REPRESENTATIVE_FORM_REPEATER,
    FormCustomFields.STREET_FORM_REPEATER,
    FormCustomFields.UNMETERED_FORM_REPEATER,
  ]

  return excludeErrorMessage.includes(fieldType)
}
