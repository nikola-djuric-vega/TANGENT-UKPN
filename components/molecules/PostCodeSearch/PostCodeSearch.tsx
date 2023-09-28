import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import AddressField from '_atoms/AddressField/AddressField'
import { Address, AddressLookUpForm } from '_types/local'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './PostCodeSearch.module.scss'
import { ButtonAppearance } from '_types/CMS'
import { PostcodeService } from '_utils'
import Label from '_atoms/Label/Label'
import { isValid } from 'postcode'
import { useField } from 'formik'
import React, { useState } from 'react'

export interface PostCodeSearchProps {
  layout: AddressLookUpForm
  isError?: boolean
  isRequired?: boolean
  addressNotFound: string
  name: string
  label: string
}

const PostCodeSearch = ({
  isError,
  layout,
  name,
  label,
  isRequired,
  addressNotFound,
}: PostCodeSearchProps) => {
  const [addressField, addressMeta, addressHelpers] = useField(name)
  const [isManualField, isManualMeta, isManualHelpers] = useField(
    `${name}.manuallyEnteredAddress`
  )
  const showError = addressMeta.error && addressMeta.touched

  const handleLayoutChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    isManualHelpers.setValue(!isManualMeta.value)
  }
  const [inputPostcodeSearchValue, setInputPostcodeSearchValue] =
    useState<string>('')

  return (
    <div className={styles.postCodeSearch}>
      {(layout === AddressLookUpForm.MANUAL ||
        layout === AddressLookUpForm.MANUAL_DNO) && (
        <div className={styles.layoutToggle}>
          <Button
            appearance={ButtonAppearance.BLANK}
            onClick={handleLayoutChange}
            type="button"
          >
            {!isManualMeta.value
              ? 'Enter address manually'
              : 'Search for an address'}
          </Button>
        </div>
      )}
      {!isManualMeta.value ? (
        <>
          <Label text={label} isRequired={isRequired} htmlFor={name} />
          <AddressLookUp
            id={name}
            clickHandler={(address) =>
              addressHelpers.setValue(
                PostcodeService.setFormAddress(address, isManualMeta.value)
              )
            }
            placeholder="Enter a postcode"
            addressNotFound={addressNotFound}
            shouldShowDno={
              layout === AddressLookUpForm.ALLOW ||
              layout === AddressLookUpForm.MANUAL
                ? false
                : true
            }
            isPostcodeSearch
            setInputPostcodeSearchValue={setInputPostcodeSearchValue}
          />
        </>
      ) : (
        <AddressField required={isRequired} name={name} />
      )}
      {addressMeta.value.postcode &&
        isValid(addressMeta.value.postcode) &&
        inputPostcodeSearchValue && (
          <div className={styles.postCodeSearchFoundAddress}>
            <p>Address</p>
            <p>{PostcodeService.formatAddressToDisplay(addressMeta.value)}</p>
          </div>
        )}
      {showError && (
        <ErrorMessage errorMessage={'Please provide a valid address'} />
      )}
    </div>
  )
}

export default PostCodeSearch
