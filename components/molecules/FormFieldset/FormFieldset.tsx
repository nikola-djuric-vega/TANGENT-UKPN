import { handleConditionals } from '_utils/handle-conditionals'
import { FormFieldset as FormFieldsetType } from '_types/CMS'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import styles from './FormFieldset.module.scss'
import FormField from '../FormField/FormField'
import Heading from '_atoms/Heading/Heading'
import camelCase from 'lodash/camelCase'
import { useEffect } from 'react'

import {
  ErrorMessage as ErrorMessageWrapper,
  useFormikContext,
  FormikValues,
} from 'formik'
export interface FormFieldsetProps {
  fieldset: FormFieldsetType
  mandatorySection?: string
}
interface valuesType {
  [key: string]: string | string[]
}

const FormFieldset = ({ fieldset, mandatorySection }: FormFieldsetProps) => {
  const { values, setFieldValue } = useFormikContext()
  const formattedManSection = camelCase(mandatorySection)

  useEffect(() => {
    if (mandatorySection && fieldset.caption === mandatorySection) {
      const sectionHasValue = fieldset.columns[0].fields.some((field) => {
        const fieldValue = (values as valuesType)[field.alias]
        return (
          !!(fieldValue as string) &&
          (fieldValue as string[])?.length >= 1 &&
          handleConditionals(values, true, field.condition)
        )
      })

      if (sectionHasValue) {
        setFieldValue(formattedManSection, true)
      } else {
        setFieldValue(formattedManSection, false)
      }
    }
  }, [values, fieldset, mandatorySection])
  return (
    <>
      {fieldset.caption && fieldset.caption === mandatorySection && (
        <ErrorMessageWrapper name={formattedManSection}>
          {(msg) => <ErrorMessage errorMessage={msg} />}
        </ErrorMessageWrapper>
      )}
      {!!fieldset.caption && (
        <Heading
          className={styles.formFieldTitle}
          tabIndex={0}
          level={3}
          role="group"
        >
          {fieldset.caption}
        </Heading>
      )}
      <div className={styles.formFieldSets}>
        {fieldset.columns[0].fields?.map?.((field) => (
          <FormField
            key={field.alias}
            field={field}
            values={values as FormikValues}
          />
        ))}
      </div>
    </>
  )
}

export default FormFieldset
