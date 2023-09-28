import { FieldType } from '_types/CMS'

export const shouldExcludeFieldLabel = (fieldType: FieldType) => {
  const excludeLabelFromFields = [
    FieldType.CHECKBOX_LIST,
    FieldType.CHECKBOX,
    FieldType.DATA_CONSENT,
    FieldType.TITLE_AND_DESCRIPTION,
    FieldType.HIDDEN,
    FieldType.RECAPTCHA,
  ]

  return excludeLabelFromFields.includes(fieldType)
}
