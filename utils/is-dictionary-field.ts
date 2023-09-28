import { FieldType, FormCustomFields, FormField } from '_types/CMS'
import { checkDefaultValue } from './check-default-value'

export const isDictionaryField = (field: FormField) => {
  const fields: string[] = Object.values(FormCustomFields)
  const defaultVal =
    field.settings?.defaultValue || field.settings?.DefaultValue

  return (
    field.type === FieldType.HIDDEN &&
    !fields.includes(defaultVal) &&
    !checkDefaultValue(defaultVal)
  )
}
