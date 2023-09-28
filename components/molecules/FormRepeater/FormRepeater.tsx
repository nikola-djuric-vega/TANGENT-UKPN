import { Form, FormCustomFields, FormField as FormFieldType } from '_types/CMS'
import { repeatedFieldsDefaultValue } from '_utils/repeated-fields-validation'
import { ButtonAppearance, ButtonColors } from '_types/CMS/button'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import FormField from '_molecules/FormField/FormField'
import Button from '_atoms/Button&Link/Button/Button'
import { defaultValue } from '_utils/form-field'
import styles from './FormRepeater.module.scss'
import { scrollTo } from '_utils/scroll-to'
import React, { useState } from 'react'
import { useEffect } from 'react'

import {
  ErrorMessage as ErrorMessageWrapper,
  FieldArrayRenderProps,
  useFormikContext,
  FormikValues,
  FormikErrors,
} from 'formik'

export interface FormRepeaterProps {
  isRequired: boolean
  name: string
  caption: string
  repeatedAsset: Form
  arrayHelper: FieldArrayRenderProps
  isAssetRepeater?: boolean
  maxAssets?: number
}

export type FormRepeaterComponentProps = FormRepeaterProps &
  FieldArrayRenderProps
const FormRepeater = ({
  name,
  isRequired,
  caption,
  repeatedAsset,
  arrayHelper,
  isAssetRepeater = false,
  maxAssets = 4,
}: FormRepeaterProps) => {
  const { setFieldValue, values, errors } = useFormikContext()
  const arrayValues = values as FormikValues
  const repeaterError = (
    errors as FormikErrors<{ [field: string]: defaultValue }>
  )?.[name]
  const [displayList, setDisplayList] = useState<boolean[]>(
    Array.from({ length: arrayValues[name].length }, (i) => (i = false))
  )

  useEffect(() => {
    if (isAssetRepeater && displayList.length === 0) {
      arrayHelper.push(repeatedFieldsDefaultValue(repeatedAsset.pages))
      const list = []
      list.push(true)
      setDisplayList(list)
    }
  }, [])

  const handleAddRepeatedAsset = () => {
    const list = []
    displayList.forEach((element: boolean) => {
      list.push(false)
    })

    list.push(true)
    setDisplayList(list)
    const index = displayList.length - 1
    scrollTo(`viewButton${index}`)
  }

  const handleDisplay = (key: number) => {
    const list: boolean[] = []
    displayList.forEach((element: boolean, index: number) => {
      if (index === key) {
        list.push(!element)
      } else {
        list.push(element)
      }
    })
    setDisplayList(list)
  }

  const handleDeleteRepeatedAsset = () => {
    const list: boolean[] = []
    displayList.forEach((element: boolean, index: number) => {
      list.push(false)
    })
    list.pop()
    setDisplayList(list)
  }
  const setField = (field: FormFieldType, key: number) => {
    const trueField: FormFieldType = {
      ...field,
      alias: `${name}.${key}.${field.alias}`,
    }
    return trueField
  }

  const handleAddCopyAsset = () => {
    const index = displayList.length - 1
    arrayHelper.push((values as FormikValues)[name][index])
  }

  return (
    <div className={styles.container}>
      {!!repeatedAsset &&
        arrayValues[name].map((element: any, index: number) => (
          <div key={index} className={styles.elementContainer}>
            <Button
              appearance={ButtonAppearance.EXPANDABLE}
              id={`viewButton${index}`}
              type="button"
              color={ButtonColors.LIGHT}
              onClick={() => handleDisplay(index)}
              data-is-open={!displayList[index]}
              className={styles.viewButton}
            >
              {repeatedAsset.name} {index + 1}
            </Button>
            <div className={displayList[index] ? styles.repeatedContent : ''}>
              {displayList[index] && (
                <>
                  {repeatedAsset.pages[0].fieldsets[0].columns[0].fields?.map?.(
                    (field, key) => (
                      <FormField
                        key={key}
                        field={setField(field, index)}
                        values={(values as FormikValues)[name][index]}
                      />
                    )
                  )}
                </>
              )}
            </div>
            {displayList[index] &&
              !(isAssetRepeater && displayList.length === 1) && (
                <div className={styles.removeButtonContainer}>
                  <Button
                    appearance={ButtonAppearance.SECONDARY}
                    type="button"
                    color={ButtonColors.DARK}
                    className={styles.deleteContentButton}
                    onClick={() => {
                      arrayHelper.remove(index)
                      handleDeleteRepeatedAsset()
                    }}
                  >
                    <div className={styles.addingButtonText}>
                      {isAssetRepeater
                        ? 'Remove asset'
                        : 'Remove representative'}
                    </div>
                  </Button>
                </div>
              )}
          </div>
        ))}
      {repeaterError && typeof repeaterError === 'string' && (
        <ErrorMessageWrapper name={`${name}`}>
          {(msg) => <ErrorMessage errorMessage={msg} />}
        </ErrorMessageWrapper>
      )}
      <Button
        appearance={ButtonAppearance.SECONDARY}
        type="button"
        color={ButtonColors.DARK}
        disabled={displayList.length >= maxAssets}
        onClick={() => {
          arrayHelper.push(repeatedFieldsDefaultValue(repeatedAsset.pages))
          handleAddRepeatedAsset()
        }}
        className={styles.addContentButton}
      >
        <div className={styles.addingButtonText}>
          {name === FormCustomFields.FORM_REPEATER
            ? 'Add another asset'
            : displayList.length === 0
            ? 'Add an authorised representative'
            : 'Add another representative'}
        </div>
      </Button>
      {isAssetRepeater && displayList.length >= 1 && (
        <Button
          appearance={ButtonAppearance.SECONDARY}
          type="button"
          color={ButtonColors.DARK}
          disabled={displayList.length >= maxAssets}
          onClick={() => {
            handleAddCopyAsset()
            handleAddRepeatedAsset()
          }}
          className={styles.addCopiedContentButton}
        >
          <div className={styles.addingButtonText}>
            Add another asset by copying the above details
          </div>
        </Button>
      )}
    </div>
  )
}

export default FormRepeater
