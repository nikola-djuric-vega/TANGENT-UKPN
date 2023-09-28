import { AddressSubmit } from '_types/local'
import { isValid } from 'postcode'
import * as Yup from 'yup'

export const postcodeLookupValidation = (req: boolean) => {
  const stringValidation = (max: number) => {
    const minMessage = 'Value should be of a minimum of 2'
    const maxMessage = 'Value should be of a maximum of ' + max
    return Yup.string().min(1, minMessage).max(max, maxMessage)
  }
  const isRequired = (base: Yup.StringSchema) =>
    req ? base.required('Please provide a value') : base

  return Yup.object().shape({
    addressLine1: Yup.mixed().when('manuallyEnteredAddress', {
      is: true,
      then: isRequired(stringValidation(50)),
      otherwise: stringValidation(50),
    }),
    addressLine2: stringValidation(50),
    addressLine3: isRequired(stringValidation(50)),
    addressLine4: stringValidation(30),
    mpan: Yup.string(),
    postcode: req
      ? Yup.string().test(
          'isValid',
          'Please enter a full, valid postcode',
          (value) => isValid(value || '')
        )
      : Yup.string(),
    manuallyEnteredAddress: Yup.boolean(),
  })
}

export const postcodeDefaultValue = (isMannual: boolean) => {
  return {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    addressLine4: '',
    postcode: '',
    mpan: '',
    manuallyEnteredAddress: isMannual,
  } as AddressSubmit
}
