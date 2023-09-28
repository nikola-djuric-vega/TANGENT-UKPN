import { DateTime } from 'luxon'

export const customDatePickerValidation = (value: string) => {
  if (value) {
    const parsedValue = DateTime.fromFormat(value, 'dd/MM/yyyy')
    const isValid =
      parsedValue > DateTime.now().plus({ days: 11 }) &&
      parsedValue < DateTime.now().plus({ months: 3 })
    return isValid
  } else {
    return true
  }
}
