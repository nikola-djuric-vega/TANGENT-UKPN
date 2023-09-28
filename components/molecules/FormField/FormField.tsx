import FormConditionalWrapper from '_hoc/FormConditionalWrapper/FormConditionalWrapper'
import TitleAndDescription from '_atoms/TitleAndDescription/TitleAndDescription'
import { useCustomFieldsItems } from '_context/custom-fields-items'
import InputPassword from '_atoms/InputPassword/InputPassword'
import CustomField from '_molecules/CustomField/CustomField'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import FormTooltip from '_atoms/FormTooltip/FormTooltip'
import RadioButton from '_atoms/RadioButton/RadioButton'
import ReCaptcha from '_atoms/ReCaptcha/ReCaptcha'
import isPlainObject from 'lodash/isPlainObject'
import TextArea from '_atoms/TextArea/TextArea'
import Checkbox from '_atoms/Checkbox/Checkbox'
import Calendar from '_atoms/Calendar/Calendar'
import styles from './FormField.module.scss'
import Select from '_atoms/Select/Select'
import Label from '_atoms/Label/Label'
import Input from '_atoms/Input/Input'
import isArray from 'lodash/isArray'
import dynamic from 'next/dynamic'
import React from 'react'

import {
  Field,
  ErrorMessage as ErrorMessageWrapper,
  useFormikContext,
  FormikValues,
  useField,
} from 'formik'

import {
  FormField as FormFieldType,
  FieldType,
  FormButton,
  FormCustomFields,
  PostcodeLookups,
} from '_types/CMS'

import {
  shouldExcludeFieldLabel,
  isDictionaryField,
  shouldNotBeRendered,
  shouldExcludeGenericErrors,
  findFormikReference,
} from '_utils'

export interface FormFieldComponentProps {
  field: FormFieldType
  values: FormikValues
}

export type FormFieldProps = FormFieldComponentProps &
  React.LabelHTMLAttributes<HTMLLabelElement>

const DynamicCustomField = dynamic(
  () => import('_molecules/CustomField/CustomField')
) as typeof CustomField

const DynamicCalendar = dynamic(
  () => import('_atoms/Calendar/Calendar')
) as typeof Calendar

const FormField = ({ field, values }: FormFieldProps) => {
  const { setFieldValue, touched, errors } = useFormikContext()
  const customFields = useCustomFieldsItems()
  const isPowerCutChecks = field.alias === FormCustomFields.POWER_CUT_CHECKS
  const formikVariable = findFormikReference(field, customFields)
  const [meta] = useField(formikVariable)
  const defaultVal = field.settings.defaultValue || field.settings.DefaultValue
  const showLabel = field.settings.showLabel || field.settings.ShowLabel

  const getError = (formikVariable: string) => {
    const isTouched = Object.keys(touched).find(
      (field) => field === formikVariable
    )
    const isError = Object.keys(errors).find(
      (field) => field === formikVariable
    )

    return isTouched && isError ? true : false
  }

  const getPreValues = (obj: {} | []): string[] => {
    return isPlainObject(obj) ? Object.values(obj) : (obj as string[])
  }

  const isChecked = (value?: string) => {
    const fieldValue = meta.value
    if (isArray(fieldValue)) {
      return fieldValue?.includes(value)
    } else {
      return fieldValue === value
    }
  }

  const Comp = () => {
    switch (field.type) {
      case FieldType.CHECKBOX:
        return (
          <Field
            as={Checkbox}
            name={formikVariable}
            text={field.caption}
            value={field.caption}
            id={formikVariable}
            hasError={getError(formikVariable)}
            checked={isChecked(field.caption)}
            isRequired={field.required}
            aria-labelledby={formikVariable}
          />
        )

      case FieldType.CHECKBOX_LIST:
        return (
          <>
            <Label
              text={field.caption}
              className={styles.label}
              isRequired={field.required}
              tabIndex={0}
            />
            {getPreValues(field.preValues)?.map((value) => (
              <div key={value} className={styles.checkboxListItem}>
                <Field
                  as={Checkbox}
                  name={formikVariable}
                  value={value}
                  text={value}
                  id={`${formikVariable}-${value}`}
                  hasError={getError(formikVariable)}
                  checked={isChecked(value)}
                  aria-labelledby={formikVariable}
                />
              </div>
            ))}
          </>
        )

      case FieldType.DATA_CONSENT: {
        const acceptCopy =
          field.settings.acceptCopy || field.settings.AcceptCopy

        return (
          <Field
            name={formikVariable}
            as={Checkbox}
            value={acceptCopy}
            text={acceptCopy}
            id={formikVariable}
            hasError={getError(formikVariable)}
            checked={isChecked(acceptCopy)}
            isRequired={field.required}
          />
        )
      }

      case FieldType.DATE:
        return (
          <div
            role="button"
            aria-label={`${field.caption} ${field.required ? 'asterisk' : ''}`}
          >
            <DynamicCalendar name={formikVariable} placeholder="Pick a day" />
          </div>
        )

      case FieldType.PASSWORD:
        return (
          <Field
            as={InputPassword}
            id={formikVariable}
            name={formikVariable}
            hasError={getError(formikVariable)}
          />
        )

      case FieldType.RADIO:
        if (!!field.preValues?.length && field.preValues.length < 6) {
          return (
            <div
              className={styles.listItem}
              role="radiogroup"
              aria-label={`${field.caption} ${
                field.required ? 'asterisk' : ''
              }`}
            >
              {getPreValues(field.preValues).map((value) => (
                <Field
                  as={RadioButton}
                  name={formikVariable}
                  value={value}
                  id={`${formikVariable}-${value}`}
                  setOption={(value: any) =>
                    setFieldValue(formikVariable, value)
                  }
                  checked={isChecked(value)}
                  hasError={getError(formikVariable)}
                  key={value}
                />
              ))}
            </div>
          )
        } else {
          return (
            <>
              <Select
                name={formikVariable}
                options={getPreValues(field.preValues)?.map((value) => ({
                  value: value,
                  label: value,
                }))}
                hasError={getError(formikVariable)}
              />
            </>
          )
        }
      case FieldType.SELECT:
        if (!!field.preValues?.length && field.preValues?.length < 6) {
          return (
            <div className={styles.listItem} role="radiogroup">
              {getPreValues(field.preValues).map((value) => (
                <Field
                  as={RadioButton}
                  name={formikVariable}
                  value={value}
                  id={`${formikVariable}-${value}`}
                  setOption={(value: any) =>
                    setFieldValue(formikVariable, value)
                  }
                  checked={isChecked(value)}
                  hasError={getError(formikVariable)}
                  key={value}
                />
              ))}
            </div>
          )
        } else if (!!field.preValues?.length) {
          return (
            <>
              <Select
                name={formikVariable}
                options={getPreValues(field.preValues)?.map((value) => ({
                  value: value,
                  label: value,
                }))}
                hasError={getError(formikVariable)}
              />
            </>
          )
        } else return

      case FieldType.TEXT:
        return (
          <Field
            as={Input}
            id={formikVariable}
            name={formikVariable}
            hasError={getError(formikVariable)}
          />
        )
      case FieldType.TEXTAREA:
        return (
          <Field
            as={TextArea}
            id={formikVariable}
            name={formikVariable}
            hasError={getError(formikVariable)}
          />
        )
      case FieldType.TITLE_AND_DESCRIPTION: {
        const caption = field.settings.caption || field.settings.Caption
        const bodyText = field.settings.bodyText || field.settings.BodyText

        return <TitleAndDescription title={caption} description={bodyText} />
      }
      case FieldType.HIDDEN:
        return <DynamicCustomField field={field} />
      case FieldType.RECAPTCHA:
        return (
          <Field
            as={ReCaptcha}
            onResult={(result: any) => {
              setFieldValue(formikVariable, result.score, false)
            }}
          />
        )
    }
  }

  return !shouldNotBeRendered(field.alias as FormButton) ? (
    <FormConditionalWrapper condition={field.condition} values={values}>
      <div
        className={styles.formField}
        data-is-power-cut-checks={isPowerCutChecks}
      >
        {!shouldExcludeFieldLabel(field.type) && showLabel !== 'False' && (
          <Label
            text={field.caption}
            className={styles.label}
            htmlFor={formikVariable}
            isRequired={field.required}
          />
        )}
        {Comp()}
        {!shouldExcludeGenericErrors(defaultVal as FormCustomFields) && (
          <ErrorMessageWrapper name={formikVariable}>
            {(msg) => <ErrorMessage errorMessage={msg} />}
          </ErrorMessageWrapper>
        )}
        {!!field.helpText &&
          !isDictionaryField(field) &&
          !(Object.values(PostcodeLookups) as string[]).includes(defaultVal) &&
          field.type !== FieldType.TITLE_AND_DESCRIPTION && (
            <div className={styles.tooltip}>
              <FormTooltip
                defaultTitle="Help"
                tooltipTitle="Close"
                tooltipMessage={field.helpText}
                showTooltip={false}
              />
            </div>
          )}
      </div>
    </FormConditionalWrapper>
  ) : null
}

export default FormField
