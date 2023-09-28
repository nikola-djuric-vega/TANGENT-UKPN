import { customDatePickerValidation } from './custom-date-picker-validation'
import { repeatedFieldsValidation } from './repeated-fields-validation'
import { generateTime } from '_utils/generate-time'
import { checkHourSlot } from './check-hour-slot'
import { AddressSubmit } from '_types/local'
import { Form as SubForm } from '_types/CMS'
import { AnyObject } from 'yup/lib/types'
import * as Yup from 'yup'
import {
  postcodeLookupValidation,
  postcodeDefaultValue,
} from './postcode-lookup-validation'

export interface FileFormat {
  ext: string
  type: string
}

export const SUPPORTED_FORMATS: Array<FileFormat> = [
  { ext: '.jpg', type: 'image/jpg' },
  { ext: '.jpeg', type: 'image/jpeg' },
  { ext: '.png', type: 'image/png' },
  { ext: '.gif', type: 'image/gif' },
  { ext: '.pdf', type: 'application/pdf' },
  { ext: '.doc', type: 'application/msword' },
  {
    ext: '.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
  { ext: '.xls', type: 'application/vnd.ms-excel' },
  {
    ext: '.xlsx',
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  { ext: '.ppt', type: 'application/vnd.ms-powerpoint' },
  { ext: '.dng', type: 'image/DNG' },
  { ext: '.dwg', type: 'application/acad' },
]

export type YupStringSchema = Yup.StringSchema<
  string | undefined,
  Record<string, any>,
  string | undefined
>

export type YupNumberSchema = Yup.NumberSchema

export type YupMixedSchema = Yup.BaseSchema<
  Yup.AnySchema<any, any, any>,
  AnyObject,
  any[] | undefined
>

export type YupArraySchema = Yup.ArraySchema<
  Yup.AnySchema<any, any, any>,
  AnyObject,
  any[] | undefined
>

export type defaultValue = {
  [key: string]: string | boolean
}

export type subFieldsType = {
  shouldValidate: boolean
  questionRef?: string
  isIncluded: boolean
  primitiveType?:
    | YupStringSchema
    | YupArraySchema
    | YupNumberSchema
    | Yup.BaseSchema
  customValidation?: (
    msg: string,
    required: boolean,
    fieldId?: string,
    subForm?: SubForm[]
  ) => Yup.AnySchema
  validation: string
  defaultValue?: defaultValue | AddressSubmit | any[] | string | boolean
}

export interface FormFieldDetail {
  [key: string]: {
    shouldValidate?: boolean
    isIncluded?: boolean
    subFields?: { [key: string]: subFieldsType } | null
    validation?: string
    primitiveType?:
      | YupStringSchema
      | YupArraySchema
      | YupNumberSchema
      | Yup.BaseSchema
  }
}

export const FormFieldDetails: FormFieldDetail = {
  radio: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  select: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  checkboxList: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.array(),
    validation: 'array',
  },
  date: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  checkbox: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.array(),
    validation: 'array',
  },
  text: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  dataConsent: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.array(),
    validation: 'array',
  },
  password: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  recaptcha2: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.number().min(0.5).max(1),
    validation: 'number',
  },
  titleAndDescription: {
    shouldValidate: false,
    isIncluded: false,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  textarea: {
    shouldValidate: true,
    isIncluded: true,
    primitiveType: Yup.string(),
    validation: 'string',
  },
  hidden: {
    subFields: {
      text: {
        shouldValidate: false,
        isIncluded: false,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      addressCard: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue(false),
        primitiveType: Yup.mixed(),
      },
      postcodeLookup: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue(false),
        primitiveType: Yup.mixed(),
      },
      postcodeLookupAllow: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue(false),
        primitiveType: Yup.mixed(),
      },
      postcodeLookupManual: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue(false),
        primitiveType: Yup.mixed(),
      },
      postcodeLookupManualDno: {
        shouldValidate: true,
        isIncluded: true,
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          postcodeLookupValidation(required),
        defaultValue: postcodeDefaultValue(false),
        primitiveType: Yup.mixed(),
      },
      fileUpload: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.array(),
        validation: 'array',
      },
      fileUploadMultiple: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.array(),
        validation: 'array',
      },
      appointmentPicker: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.object(),
        customValidation: (msg, required, fieldId) => {
          return Yup.object().shape({
            day: required ? Yup.string().required() : Yup.string(),
            noAccess: Yup.boolean().isFalse(),
            timeFrom: Yup.mixed()
              .when('noAccess', {
                is: false,
                then: Yup.mixed().test('isValid', 'time', (value, ctx) => {
                  return !!value
                  // TODO: Leaving this here uncommented as we need it in future
                  // checkHourSlot(value, ctx.parent.timeUntil)
                }),
              })
              .notRequired(),
            timeUntil: Yup.mixed()
              .when('noAccess', {
                is: false,
                then: Yup.mixed().test('isValid', 'time', (value, ctx) => {
                  return !!value
                  // TODO: Leaving this here uncommented as we need it in future
                  // checkHourSlot(value, ctx.parent.timeFrom)
                }),
              })
              .notRequired(),
          })
        },
        validation: 'mixed',
        defaultValue: {
          day: '',
          noAccess: false,
          timeFrom: generateTime({ amount: 0, addTimeFromMins: 15 }).toFormat(
            'HH:mm'
          ),
          timeUntil: generateTime({ amount: 4, addTimeFromMins: 15 }).toFormat(
            'HH:mm'
          ),
        },
      },
      notAvailable: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.mixed(),
        validation: 'mixed',
        customValidation: (msg, required, fieldId) =>
          Yup.boolean().required(msg).isFalse(),
        defaultValue: false,
      },
      datePicker: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.mixed(),
        customValidation: (msg, required, fieldId) => {
          if (required) {
            return Yup.mixed()
              .test(
                'isValid',
                'Your planned commissioning date must be at least 10 working days from the date of application, but not more than 3 months in advance as our connection offers are only valid for 3 months.',
                (value) => customDatePickerValidation(value)
              )
              .test('isRequired', msg, (value) =>
                Yup.string().required().isValid(value)
              )
          } else {
            return Yup.mixed().test(
              'isValid',
              'Your planned commissioning date must be at least 10 working days from the date of application, but not more than 3 months in advance as our connection offers are only valid for 3 months.',
              (value) => customDatePickerValidation(value)
            )
          }
        },
        validation: 'mixed',
      },
      historicDatePicker: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      datePickerAllowWeekends: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      locationFields: {
        shouldValidate: true,
        isIncluded: true,
        customValidation: (msg, required, fieldId) => {
          return Yup.object().shape({
            city: required
              ? Yup.string()
                  .max(40, 'A maximum of 40 characters allowed')
                  .required('Please provide a value')
              : Yup.string(),
            county: Yup.string().max(50, 'A maximum of 50 characters allowed'),
            postcode: required
              ? Yup.string()
                  .matches(
                    /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/gim,
                    'Please enter a valid UK postcode'
                  )
                  .required('Please provide a value')
              : Yup.string(),
            easting: required
              ? Yup.string()
                  .matches(
                    /^[1-6]?\d{1,5}?$/,
                    'Please enter a valid easting value.'
                  )
                  .required('Please provide a value')
              : Yup.string(),
            northing: required
              ? Yup.string()
                  .matches(
                    /^[1-6]?\d{1,5}?$/,
                    'Please enter a valid northing value.'
                  )
                  .required('Please provide a value')
              : Yup.string(),
            what3Words: Yup.string(),
          })
        },
        validation: 'mixed',
        defaultValue: {
          city: '',
          county: '',
          postcode: '',
          easting: '',
          northing: '',
          what3Words: '',
        },
      },
      pastDatePicker: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      multiEmail: {
        shouldValidate: true,
        isIncluded: true,
        primitiveType: Yup.string(),
        validation: 'string',
      },
      assetFormRepeater: {
        shouldValidate: true,
        validation: 'mixed',
        isIncluded: true,
        customValidation: (msg, required, fieldId, subForm) => {
          const subFormList = subForm as SubForm[]
          return repeatedFieldsValidation(subFormList[0], required)
        },
        defaultValue: [],
      },
      radioButtonsWithImages: {
        shouldValidate: true,
        validation: 'string',
        isIncluded: true,
        primitiveType: Yup.string(),
        defaultValue: '',
      },
      radioButtonsWithMainImage: {
        shouldValidate: true,
        validation: 'string',
        isIncluded: true,
        primitiveType: Yup.string(),
        defaultValue: '',
      },
      streetAssetFormRepeater: {
        shouldValidate: true,
        validation: 'mixed',
        isIncluded: true,
        customValidation: (msg, required, fieldId, subForm) => {
          const subFormList = subForm as SubForm[]
          return repeatedFieldsValidation(subFormList[0], required)
        },
        defaultValue: [],
      },
      unmeteredAssetFormRepeater: {
        shouldValidate: true,
        validation: 'mixed',
        isIncluded: true,
        customValidation: (msg, required, fieldId, subForm) => {
          const subFormList = subForm as SubForm[]
          return repeatedFieldsValidation(subFormList[0], required)
        },
        defaultValue: [],
      },
      representativeFormRepeater: {
        shouldValidate: true,
        validation: 'mixed',
        isIncluded: true,
        customValidation: (msg, required, fieldId, subForm) => {
          const subFormList = subForm as SubForm[]
          return repeatedFieldsValidation(subFormList[1], required)
        },
        defaultValue: [],
      },
    },
  },
}
