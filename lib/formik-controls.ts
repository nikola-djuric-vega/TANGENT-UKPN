import { shouldExcludeFromFormData } from '_utils/should-exclude-from-form-data'
import { findFormikReference, checkAppointmentPicker } from '_utils'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { dataLayerSend } from '_utils/data-layer-send'
import capitalize from 'lodash/capitalize'
import startCase from 'lodash/startCase'
import camelCase from 'lodash/camelCase'
import isBoolean from 'lodash/isBoolean'
import { FormikValues } from 'formik'
import isArray from 'lodash/isArray'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'
import axios from 'axios'

import {
  FormFieldDetails,
  YupStringSchema,
  YupArraySchema,
} from '_utils/form-field'

import {
  SetValidationSchemaType,
  GetProceedingLabel,
  SubmitFormResponse,
  GetInitialValues,
  HandleSubmitType,
  AddressSubmit,
} from '_types/local'

import {
  checkAddressPicker,
  handleConditionals,
  isDictionaryField,
} from '_utils'

import {
  Form as UmbracoForm,
  FormSectionFields,
  CustomFieldsPage,
  FormCustomFields,
  PostcodeLookups,
  FormDataSection,
  FormCondition,
  PageTypeNames,
  FormFieldset,
  FormButton,
  FormField,
  FieldType,
  FormState,
  FormData,
  FormType,
} from '_types/CMS'
import SmartMeterPing from './smart-meter-ping'

export type PostcodeLookupsTypes = keyof typeof PostcodeLookups
const { handleSmartMeterPing } = new SmartMeterPing()
export default class FormikControls {
  static getConditionalRefs = (fieldCondition: FormCondition) =>
    fieldCondition.rules.map((rule) => rule.field)

  static handleWhenMethod = (options: any[], condition: FormCondition) => {
    const context = options.find((elm) => elm?.parent)
    const schema = options.find((elm) => elm?.type)
    const conditionIsValid = handleConditionals(context.parent, true, condition)
    return { schema, conditionIsValid }
  }

  static getInitialValues: GetInitialValues = (
    pages,
    mandatorySection,
    customElements
  ) => {
    let allValues = {}

    pages.map((page) => {
      if (mandatorySection) {
        Object.assign(allValues, {
          [camelCase(mandatorySection)]: false,
        })
      }
      page.fieldsets.map((set) => {
        set.columns[0].fields.map((field: FormField) => {
          let defaultValue
          const defaultVal =
            field.settings.defaultValue || field.settings.DefaultValue

          const formikVariable = findFormikReference(field, customElements)

          const subFieldDefaultValue =
            FormFieldDetails[field.type].subFields?.[defaultVal]
              ?.defaultValue ||
            FormFieldDetails[field.type].subFields?.[field.alias]?.defaultValue

          const toBeIncluded =
            FormFieldDetails[field.type].isIncluded ||
            FormFieldDetails[field.type].subFields?.[defaultVal]?.isIncluded ||
            FormFieldDetails[field.type].subFields?.[field.alias]?.isIncluded

          const isArray =
            FormFieldDetails[field.type].validation === 'array' && defaultVal

          if (subFieldDefaultValue !== undefined) {
            defaultValue = subFieldDefaultValue
          } else {
            if (field.type === FieldType.HIDDEN) {
              defaultValue = ''
            } else {
              defaultValue = isArray ? [defaultVal] : defaultVal
            }
          }

          if (toBeIncluded) {
            Object.assign(allValues, {
              [formikVariable as string]: defaultValue,
            })
          }
        })
      })
    })

    return allValues
  }

  static setValidationSchema: SetValidationSchemaType = (
    page,
    mandatorySection,
    subForm,
    customElements
  ) => {
    let schema = {}
    const mandatorySectionObject = page.fieldsets.find(
      (sec) => sec.caption === mandatorySection
    )
    page.fieldsets.map((set: FormFieldset) => {
      set.columns[0].fields.map((field: FormField) => {
        const formikVariable = findFormikReference(field, customElements)
        const defaultVal =
          field.settings.defaultValue || field.settings.DefaultValue

        const toBeValidated =
          FormFieldDetails[field.type].shouldValidate ||
          FormFieldDetails[field.type].subFields?.[defaultVal]
            ?.shouldValidate ||
          FormFieldDetails[field.type].subFields?.[field.alias]?.shouldValidate

        if (toBeValidated) {
          let validator =
            FormFieldDetails[field.type]?.primitiveType ||
            FormFieldDetails[field.type].subFields?.[defaultVal]
              ?.primitiveType ||
            FormFieldDetails[field.type].subFields?.[field.alias]?.primitiveType

          let customValidation =
            FormFieldDetails[field.type].subFields?.[defaultVal]
              ?.customValidation

          const isString =
            field.settings.pattern &&
            (FormFieldDetails[field.type].validation === 'string' ||
              FormFieldDetails[field.type].subFields?.[defaultVal]
                ?.validation === 'string' ||
              FormFieldDetails[field.type].subFields?.[field.alias]
                ?.validation === 'string')

          const isArray =
            field.required &&
            (FormFieldDetails[field.type].validation === 'array' ||
              FormFieldDetails[field.type].subFields?.[defaultVal]
                ?.validation === 'array' ||
              FormFieldDetails[field.type].subFields?.[field.alias]
                ?.validation === 'array')

          const isMixed =
            FormFieldDetails[field.type].validation === 'mixed' ||
            FormFieldDetails[field.type].subFields?.[defaultVal]?.validation ===
              'mixed' ||
            FormFieldDetails[field.type].subFields?.[field.alias]
              ?.validation === 'mixed'

          switch (true) {
            case isString:
              validator = (validator as YupStringSchema).matches(
                new RegExp(field.settings.pattern as string),
                field.settings.patternInvalidErrorMessage
              )
              break
            case isArray:
              validator = (validator as YupArraySchema).min(
                1,
                field.requiredErrorMessage
              )
              break
            case isMixed:
              validator = Yup.mixed()
              break
          }

          const computedFieldValidation = () => {
            if (field.condition) {
              if (customValidation) {
                return (validator as any).when(
                  FormikControls.getConditionalRefs(field.condition),
                  (...options: any[]) => {
                    const { conditionIsValid } =
                      FormikControls.handleWhenMethod(
                        options,
                        field.condition as FormCondition
                      )
                    const isFieldRequired = conditionIsValid && field.required
                    return customValidation?.(
                      field.requiredErrorMessage as string,
                      isFieldRequired,
                      field.alias
                    ) as Yup.AnySchema
                  }
                )
              } else {
                return (validator as any).when(
                  FormikControls.getConditionalRefs(field.condition),
                  (...options: any[]) => {
                    const { conditionIsValid, schema } =
                      FormikControls.handleWhenMethod(
                        options,
                        field.condition as FormCondition
                      )
                    return conditionIsValid && field.required
                      ? schema.required(field.requiredErrorMessage)
                      : schema
                  }
                )
              }
            } else {
              if (field.required) {
                validator = validator?.['required'](field.requiredErrorMessage)
              }

              return customValidation
                ? customValidation(
                    field.requiredErrorMessage as string,
                    field.required,
                    field.alias,
                    subForm
                  )
                : validator
            }
          }

          Object.assign(schema, {
            [formikVariable]: computedFieldValidation(),
          })
        }
      })
    })

    const computedSectionValidation = () => {
      if (mandatorySectionObject?.condition) {
        return Yup.boolean().when(
          FormikControls.getConditionalRefs(mandatorySectionObject.condition),
          (...options: any[]) => {
            const { conditionIsValid, schema } =
              FormikControls.handleWhenMethod(
                options,
                mandatorySectionObject?.condition as FormCondition
              )
            return conditionIsValid
              ? schema.oneOf(
                  [true],
                  'This section must have at least one question answered'
                )
              : schema
          }
        )
      } else {
        return Yup.boolean().oneOf(
          [true],
          'This section must have at least one question answered'
        )
      }
    }

    if (mandatorySectionObject) {
      Object.assign(schema, {
        [camelCase(mandatorySection)]: computedSectionValidation(),
      })
    }

    return Yup.object().shape(schema)
  }

  static getProceedingLabel: GetProceedingLabel = (
    fieldsets,
    isLastStep,
    nextLabel = 'Next',
    submitLabel = 'Submit'
  ) => {
    const label = fieldsets.map((fieldset: FormFieldset) =>
      fieldset.columns[0].fields.find((field: FormField) => {
        const labelToCheck = isLastStep ? FormButton.SUBMIT : FormButton.NEXT
        return field.type === FieldType.HIDDEN && field.alias === labelToCheck
      })
    )[0]
    const defaultVal =
      label?.settings.defaultValue || label?.settings.DefaultValue

    return label ? (defaultVal as string) : isLastStep ? submitLabel : nextLabel
  }

  static getBackLabel = (
    fieldsets: FormFieldset[],
    previousLabel: string = 'Back'
  ) => {
    const label = fieldsets.map((fieldset: FormFieldset) =>
      fieldset.columns[0].fields.find(
        (field: FormField) =>
          field.type === FieldType.HIDDEN && field.alias === FormButton.PREVIOUS
      )
    )[0]
    const defaultVal =
      label?.settings.defaultValue || label?.settings.DefaultValue

    return label ? defaultVal : previousLabel
  }

  static getGuidRef = () =>
    'WEB-' + uuidv4().replace(/-/g, '').substring(0, 10).toUpperCase()

  static checkArray = (value: string[] | File[]) => {
    const isObject = [...value].some(
      (item: string | File) => (item as File).lastModified
    )

    if (isObject) {
      return (value as File[]).map((file: File) => file.name).join(',')
    } else {
      return (value as string[]).join(';')
    }
  }

  static formatAddressObject = (address?: AddressSubmit) => {
    let formattedAddress: { [key: string]: string | boolean } = {}
    if (address !== undefined) {
      if (
        address.addressLine1 === address.addressLine2 &&
        !address.manuallyEnteredAddress
      ) {
        address.addressLine1 = ''
      }
      Object.keys(address).map((key: string | keyof AddressSubmit) => {
        const objectKey: string = startCase(key as string).replaceAll(' ', '')
        return (formattedAddress[objectKey] =
          address[key as keyof AddressSubmit])
      })
    }

    return formattedAddress
  }

  static generateDataStructure = (
    values: FormikValues,
    sections: FormFieldset[],
    customElements?: CustomFieldsPage
  ) => {
    return sections.map((sec, i) => {
      const sectionName = sec.caption ? sec.caption : 'Section-' + i
      const sectionFieldsRefs = sec.columns[0].fields
        .filter((field) => !isDictionaryField(field))
        .filter(
          (field) =>
            !shouldExcludeFromFormData(
              (field.settings.defaultValue ||
                field.settings.DefaultValue) as FormCustomFields
            )
        )

      let sectionFields: FormSectionFields[] = []

      for (let i = 0; i < sectionFieldsRefs.length; i++) {
        const field = sectionFieldsRefs[i]
        const defaultVal =
          field.settings.defaultValue || field.settings.DefaultValue
        const formikVariable = findFormikReference(field, customElements)
        const dataKey = findFormikReference(
          field,
          customElements,
          field.caption,
          false
        )

        let value
        if (handleConditionals(values, true, field.condition)) {
          if (isArray(values[formikVariable])) {
            value = FormikControls.checkArray(values[formikVariable])
          } else if (isBoolean(values[formikVariable])) {
            value = values[formikVariable] ? 'true' : 'false'
          } else {
            value = values[formikVariable]
          }
        }

        if (defaultVal === FormCustomFields.LOCATION_FIELDS) {
          Object.keys(values[formikVariable]).map((key) => {
            sectionFields.push({
              name: capitalize(key),
              value: values[formikVariable][key],
            })
          })
        } else {
          sectionFields.push({
            name: dataKey,
            value: value,
          })
        }
      }

      return {
        sectionName: sectionName,
        sectionFields: sectionFields,
      } as FormDataSection
    })
  }

  static handleSubmit: HandleSubmitType = async ({
    _id,
    values,
    actions,
    setFormState,
    setRpcState,
    formState,
    rpcState,
    form,
    callBack,
    type,
    includeReference,
    repeaterForms,
    customElements,
    formName,
    smartMeter,
    address,
  }) => {
    const { activePage, pages } = formState
    const { correlationID, pingedOccured, isDS1 } = rpcState
    const isLastStep = activePage === pages.length - 1

    if (isLastStep) {
      const guidRef = FormikControls.getGuidRef()
      const sections = pages.map((page) => page.fieldsets).flat()
      const allFields = sections.map((sec) => sec.columns[0].fields).flat()

      if (type === FormType.REPORT_POWER_CUT && smartMeter?.OnSupply) {
        setFormState((prevState) => {
          return {
            ...prevState,
            blockSubmission: false,
          }
        })
      }

      if (values.recaptcha) {
        values.recaptcha = values.recaptcha.toString()
      }
      const hasAddressPicker = checkAddressPicker(
        values,
        allFields,
        type === PageTypeNames.EMAIL_FORM_PAGE
      )

      const hasAppointmentPicker = checkAppointmentPicker(values, allFields)

      const hasRepeater = (
        subform: UmbracoForm,
        typeOfRepeater: FormCustomFields
      ) => {
        const repeaterRef = allFields.find((fld) => {
          const defaultVal =
            fld.settings.defaultValue || fld.settings.DefaultValue

          return typeOfRepeater === defaultVal
        })
        const repeaterValue = values[
          repeaterRef?.alias as string
        ] as FormikValues[]
        if (
          repeaterRef &&
          subform.pages.length > 0 &&
          repeaterValue.length > 0 &&
          handleConditionals(values, true, repeaterRef.condition)
        ) {
          const subFormFields = subform?.pages[0].fieldsets[0].columns[0].fields

          return repeaterValue.map((itm) => {
            const hasAddressPicker = checkAddressPicker(itm, subFormFields)
            return {
              ...(hasAddressPicker && {
                Address: hasAddressPicker,
              }),
              formData: FormikControls.generateDataStructure(
                itm,
                subform?.pages[0].fieldsets,
                customElements
              ),
            }
          })
        } else {
          return false
        }
      }
      const hasFormAssetRepeater = hasRepeater(
        repeaterForms.assetRepeaterItems,
        FormCustomFields.FORM_REPEATER
      )
      const hasStreetAssetRepeater = hasRepeater(
        repeaterForms.assetRepeaterItems,
        FormCustomFields.STREET_FORM_REPEATER
      )
      const hasUnmeteredAssetRepeater = hasRepeater(
        repeaterForms.assetRepeaterItems,
        FormCustomFields.UNMETERED_FORM_REPEATER
      )
      let hasAssetRepeater =
        hasFormAssetRepeater ||
        hasStreetAssetRepeater ||
        hasUnmeteredAssetRepeater

      let hasAuthorisedRepresentatives = hasRepeater(
        repeaterForms.representativeFormItems,
        FormCustomFields.REPRESENTATIVE_FORM_REPEATER
      )

      const data: FormData = {
        id: _id,
        pageType: type,
        guIReference: guidRef,
        formData: FormikControls.generateDataStructure(
          values,
          sections,
          customElements
        ),
        ...(type === FormType.REPORT_POWER_CUT && {
          SmartMeter: smartMeter,
        }),
        ...(hasAppointmentPicker && {
          Appointment: hasAppointmentPicker,
        }),
        ...(hasAddressPicker && {
          Address: hasAddressPicker,
        }),
        ...(hasAssetRepeater && {
          assets: hasAssetRepeater,
        }),
        ...(hasAuthorisedRepresentatives && {
          authorisedRepresentatives: hasAuthorisedRepresentatives,
        }),
        ...(type === FormType.PSR && {
          FormSubmissionDateTime: new Date(),
        }),
        formType: formName as string,
      }

      actions.setSubmitting(true)

      await axios
        .post<SubmitFormResponse>('/api/submit-form', data)
        .then((res) => {
          dataLayerSend({
            event: 'form_submission',
            form_name: formName,
          })

          // Remove the address from local storage as the journey is complete
          if (type === FormType.REPORT_POWER_CUT) {
            localStorage.removeItem('searchedAddress')
          }

          const cookies = parseCookies()
          const reference =
            type === FormType.REPORT_POWER_CUT
              ? res.data.callReference
              : guidRef

          if (cookies) {
            destroyCookie(null, 'referenceNumber')
          }

          if (includeReference) {
            setCookie(null, 'referenceNumber', reference, {
              maxAge: 500,
              secure: true,
            })
          }
          callBack?.()
        })
        .catch((error) => {
          return error
        })
    } else {
      actions.resetForm({ values: values, errors: {}, touched: {} })

      if (
        type === FormType.REPORT_POWER_CUT &&
        !!address &&
        !pingedOccured &&
        !!smartMeter?.IsSmart &&
        !!smartMeter?.SmartPingEnabled &&
        !!isDS1 &&
        correlationID
      ) {
        const shouldInitiate = activePage === 0

        handleSmartMeterPing(address, correlationID, shouldInitiate)
          .then(
            ({
              data: {
                energisationStatus,
                onSupply,
                pingAllowed,
                isDb,
                newCorrelationId,
                pingAttempts,
                stopPinging,
              },
              status,
            }) => {
              setRpcState((prevState) => {
                const rightCorrelationID = newCorrelationId
                  ? newCorrelationId
                  : correlationID
                return {
                  ...prevState,
                  pingAttempts,
                  smartMeter: {
                    CorrelationID: rightCorrelationID,
                    OnSupply: onSupply,
                    PingAllowed: pingAllowed,
                    Status: energisationStatus,
                    SmartPingEnabled: smartMeter?.SmartPingEnabled,
                    IsSmart: smartMeter?.IsSmart,
                  },
                  correlationID: rightCorrelationID,
                  ...(pingAttempts && {
                    pingAttempts,
                  }),
                  ...(stopPinging && {
                    pingedOccured: stopPinging,
                  }),
                  ...(status === 202 && {
                    pingedOccured: true,
                    ...(!isDb && { blockSubmission: true }),
                  }),
                  ...(energisationStatus === 'Energised' &&
                    onSupply && {
                      blockSubmission: true,
                    }),
                }
              })
            }
          )
          .catch((err) => {
            setRpcState((prevState) => ({
              ...prevState,
              pingedOccured: true,
            }))
          })
      }

      setFormState((prevState) => ({
        ...prevState,
        activePage: prevState.activePage + 1,
        completedPages: [...prevState.completedPages, prevState.activePage + 1],
      }))

      if (null !== form.current) {
        form.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
