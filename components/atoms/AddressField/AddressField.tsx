import { Field, ErrorMessage as ErrorWrapper } from 'formik'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import styles from './AddressField.module.scss'
import Input from '_atoms/Input/Input'
import Label from '_atoms/Label/Label'
import React from 'react'

export interface AddressFieldProps {
  required?: boolean
  name: string
}

const AddressField = ({ name, required }: AddressFieldProps) => {
  const addressFields = [
    { text: 'Address line 1', id: 'addressLine1', req: required },
    { text: 'Address line 2', id: 'addressLine2', req: false },
    { text: 'Town/City', id: 'addressLine3', req: required },
    { text: 'County', id: 'addressLine4', req: false },
    { text: 'Postcode', id: 'postcode', req: required },
  ]

  return (
    <div className={styles.addressField}>
      {addressFields.map((field, i) => (
        <React.Fragment key={i}>
          <Label text={field.text} htmlFor={field.id} isRequired={field.req} />
          <Field as={Input} name={`${name}.${field.id}`} id={field.id} />
          <ErrorWrapper name={`${name}.${field.id}`}>
            {(msg) => <ErrorMessage errorMessage={msg} />}
          </ErrorWrapper>
        </React.Fragment>
      ))}
    </div>
  )
}

export default AddressField
