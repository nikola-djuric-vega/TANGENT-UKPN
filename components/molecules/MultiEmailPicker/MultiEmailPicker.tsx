import { useDictionaryItems } from '_context/dictionary-items'
import { transformString } from '_utils/tranform-string'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './MultiEmailPicker.module.scss'
import { ButtonAppearance } from '_types/CMS'
import React, { useState } from 'react'
import Input from '_atoms/Input/Input'
import Label from '_atoms/Label/Label'
import { useField } from 'formik'

export interface MultiEmailPickerProps {
  initialRequire: boolean
  name: string
}

const MultiEmailPicker = ({ name, initialRequire }: MultiEmailPickerProps) => {
  const [addressInput, setAddressInput] = useState('')
  const [field, meta, helpers] = useField(name)
  const dictionary = useDictionaryItems()

  const addAddress = () => {
    const newList =
      field.value && field.value !== '' ? field.value.split(',') : []
    const inputList = addressInput.split(',')
    let valid = true
    inputList.map((element) => {
      const value = element.trim().replace(' ', '')
      if (!newList.includes(value)) {
        if (
          value.match(
            /(?=^.{6,})(^[a-zA-Z0-9\D]+@[a-zA-Z0-9\D]+\.[a-zA-Z0-9-.]+$)/
          )
        ) {
          newList.push(value)
        } else {
          valid = false
          helpers.setError(
            transformString(dictionary.multiEmailPickerValidEmail)
          )
          return
        }
      } else {
        helpers.setError(
          transformString(dictionary.multiEmailPickerExistingEmail)
        )
        valid = false
        return
      }
    })
    if (newList.length > 5 && valid) {
      helpers.setError(transformString(dictionary.multiEmailPickerMaxMailLimit))
      return
    }
    if (valid) {
      setAddressInput('')
      helpers.setValue(newList.join(','))
    }
  }

  const deleteAddress = (key: number) => {
    const newList = field.value.split(',')
    newList.splice(key, 1)

    helpers.setValue(newList.join(','))
    helpers.setTouched(true, true)
  }

  return (
    <div className={styles.container}>
      <Label
        text={'Email address'}
        isRequired={initialRequire}
        className={styles.label}
      />
      <Input
        value={addressInput}
        disabled={field.value && field.value.split(',').length >= 5}
        placeholder="Type here"
        onChange={(event) => {
          setAddressInput(event.target.value)
          helpers.setTouched(true, false)
          helpers.setError(undefined)
        }}
      />
      <Button
        appearance={ButtonAppearance.BLANK}
        className={
          field.value
            ? field.value.split(',').length < 5
              ? styles.saveLink
              : styles.disableLink
            : styles.saveLink
        }
        disabled={field.value ? field.value.split(',').length >= 5 : false}
        onClick={addAddress}
        type="button"
      >
        Save
      </Button>
      {field.value && (
        <>
          <p>We will keep the following updated with the current works</p>
          {field.value.split(',').map((address: string, index: number) => (
            <div className={styles.addressElement} key={index}>
              <div className={styles.addressItem}>{address}</div>
              <Button
                appearance={ButtonAppearance.BLANK}
                className={styles.deleteLink}
                onClick={() => deleteAddress(index)}
                type="button"
              >
                X Delete
              </Button>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default MultiEmailPicker
