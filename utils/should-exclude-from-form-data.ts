import { FormCustomFields } from '_types/CMS'

export const shouldExcludeFromFormData = (fieldType: FormCustomFields) => {
  const excludeLabelFromFields = [
    FormCustomFields.ADDRESS_CARD,
    FormCustomFields.POSTCODE_LOOKUP,
    FormCustomFields.POSTCODE_LOOKUP_ALLOW,
    FormCustomFields.POSTCODE_LOOKUP_MANUAL,
    FormCustomFields.POSTCODE_LOOKUP_MANUAL_DNO,
    FormCustomFields.REPRESENTATIVE_FORM_REPEATER,
    FormCustomFields.FORM_REPEATER,
    FormCustomFields.STREET_FORM_REPEATER,
    FormCustomFields.UNMETERED_FORM_REPEATER,
    FormCustomFields.POWER_CUT_CHECKS,
    FormCustomFields.APPOINTMENT_PICKER,
  ]

  return excludeLabelFromFields.includes(fieldType)
}
