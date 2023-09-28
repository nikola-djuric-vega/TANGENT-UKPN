import { handleConditionals } from './handle-conditionals'
import { FormCustomFields, FormField } from '_types/CMS'
import { FormikValues } from 'formik'

export const checkAppointmentPicker = (
  valuesObj: FormikValues,
  fields: FormField[]
) => {
  const appointmentPicker = [FormCustomFields.APPOINTMENT_PICKER]

  const findKey = Object.keys(valuesObj).find((key) => {
    const findAppointment = fields.find((fld) => {
      const defaultVal = fld.settings.defaultValue || fld.settings.DefaultValue
      return appointmentPicker.includes(defaultVal as FormCustomFields)
    })
    return (
      findAppointment?.alias === key &&
      handleConditionals(valuesObj, true, findAppointment?.condition)
    )
  })

  return valuesObj[findKey as string]
}
