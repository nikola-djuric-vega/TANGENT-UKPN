import RadioButtonsWithMainImage from '_molecules/RadioButtonsWithMainImage/RadioButtonsWithMainImage'
import RadioButtonsWithImages from '_molecules/RadioButtonsWithImages/RadioButtonsWithImages'
import AppointmentPicker from '_molecules/AppointmentPicker/AppointmentPicker'
import { useRepresentativeFormItems } from '_context/representative-form-item'
import MultiEmailPicker from '_molecules/MultiEmailPicker/MultiEmailPicker'
import PowerCutChecks from '_molecules/PowerCutChecks/PowerCutChecks'
import PostCodeSearch from '_molecules/PostCodeSearch/PostCodeSearch'
import { useAssetRepeaterItems } from '_context/asset-repeater-items'
import LocationFields from '_molecules/LocationFields/LocationFields'
import { useCustomFieldsItems } from '_context/custom-fields-items'
import FormRepeater from '_molecules/FormRepeater/FormRepeater'
import NotAvailable from '_molecules/NotAvailable/NotAvailable'
import { useDictionaryItems } from '_context/dictionary-items'
import AddressCard from '_atoms/AddressCard/AddressCard'
import styles from '../FormField/FormField.module.scss'
import FileUpload from '_atoms/FileUpload/FileUpload'
import { AddressLookUpForm } from '_types/local'
import RichText from '_atoms/RichText/RichText'
import Calendar from '_atoms/Calendar/Calendar'
import { checkDefaultValue } from '_utils'
import camelCase from 'lodash/camelCase'
import Label from '_atoms/Label/Label'
import { addMonths } from 'date-fns'
import { FieldArray } from 'formik'
import dynamic from 'next/dynamic'
import React from 'react'

import {
  FormField as FormFieldType,
  FormCustomFields,
  TextSizes,
} from '_types/CMS'

import {
  RadioButtonsWithMainImage as RadioButtonsWithMainImageType,
  RadioButtonsWithImages as RadioButtonsWithImagesType,
  PowerCutChecks as PowerCutChecksType,
} from '_types/CMS/pages'

export interface CustomFieldProps {
  field: FormFieldType
}

const DynamicLocationFields = dynamic(
  () => import('_molecules/LocationFields/LocationFields')
) as typeof LocationFields

const DynamicCalendar = dynamic(
  () => import('_atoms/Calendar/Calendar')
) as typeof Calendar

const CustomField = ({ field }: CustomFieldProps) => {
  const dictionary = useDictionaryItems()
  const assetRepeaterItems = useAssetRepeaterItems()
  const representativeFormItems = useRepresentativeFormItems()
  const customFields = useCustomFieldsItems()
  const defaultVal = field.settings.defaultValue || field.settings.DefaultValue
  const isPageCustomField = checkDefaultValue(defaultVal)
  let data: string

  if (isPageCustomField && customFields) {
    switch (field.alias) {
      case FormCustomFields.POWER_CUT_CHECKS:
        return (
          <PowerCutChecks
            {...(customFields[
              FormCustomFields.POWER_CUT_CHECKS
            ] as PowerCutChecksType)}
          />
        )
      case FormCustomFields.RADIO_BUTTONS_WITH_IMAGES:
        return (
          <RadioButtonsWithImages
            {...(customFields[
              FormCustomFields.RADIO_BUTTONS_WITH_IMAGES
            ] as RadioButtonsWithImagesType)}
            mandatory={field.required}
          />
        )
      case FormCustomFields.RADIO_BUTTONS_WITH_MAIN_IMAGE:
        return (
          <RadioButtonsWithMainImage
            {...(customFields[
              FormCustomFields.RADIO_BUTTONS_WITH_MAIN_IMAGE
            ] as RadioButtonsWithMainImageType)}
            mandatory={field.required}
          />
        )
      default:
        return null
    }
  } else {
    switch (defaultVal) {
      case FormCustomFields.POSTCODE_LOOKUP:
        return (
          <PostCodeSearch
            isRequired={field.required}
            layout={AddressLookUpForm.DEFAULT}
            addressNotFound={dictionary[camelCase(field.helpText)]}
            name={field.alias}
            label={field.caption}
          />
        )
      case FormCustomFields.POSTCODE_LOOKUP_ALLOW:
        return (
          <PostCodeSearch
            isRequired={field.required}
            layout={AddressLookUpForm.ALLOW}
            addressNotFound={dictionary[camelCase(field.helpText)]}
            name={field.alias}
            label={field.caption}
          />
        )
      case FormCustomFields.POSTCODE_LOOKUP_MANUAL:
        return (
          <PostCodeSearch
            isRequired={field.required}
            layout={AddressLookUpForm.MANUAL}
            addressNotFound={dictionary[camelCase(field.helpText)]}
            name={field.alias}
            label={field.caption}
          />
        )
      case FormCustomFields.POSTCODE_LOOKUP_MANUAL_DNO:
        return (
          <PostCodeSearch
            isRequired={field.required}
            layout={AddressLookUpForm.MANUAL_DNO}
            addressNotFound={dictionary[camelCase(field.helpText)]}
            name={field.alias}
            label={field.caption}
          />
        )
      case FormCustomFields.FILE_UPLOAD:
        return (
          <FileUpload
            name={field.alias}
            label={field.caption}
            helperText={dictionary[FormCustomFields.FILE_UPLOAD]}
            isRequired={field.required}
            multiple={false}
          />
        )
      case FormCustomFields.FILE_UPLOAD_MULTIPLE:
        return (
          <FileUpload
            name={field.alias}
            label={field.caption}
            helperText={dictionary[FormCustomFields.FILE_UPLOAD_MULTIPLE]}
            isRequired={field.required}
            multiple={true}
          />
        )
      case FormCustomFields.APPOINTMENT_PICKER:
        return (
          <AppointmentPicker
            errorMessage={field.requiredErrorMessage || ''}
            isRequired={field.required}
            caption={field.caption}
            name={field.alias}
          />
        )
      case FormCustomFields.ADDRESS_CARD:
        return (
          <AddressCard
            address={localStorage.getItem('searchedAddress')}
            linkText={dictionary.addressCardLinkText}
            {...field}
          />
        )
      case FormCustomFields.DATE_PICKER:
        return (
          <>
            <Label
              text={field.caption}
              isRequired={field.required}
              className={styles.label}
            />
            <div
              role="button"
              aria-label={`${field.caption} ${
                field.required ? 'asterisk' : ''
              }`}
            >
              <DynamicCalendar
                name={field.alias}
                hideWeekend={false}
                placeholder="Pick a day"
              />
            </div>
          </>
        )
      case FormCustomFields.DATE_PICKER_ALLOW_WEEKENDS:
        return (
          <>
            <Label
              text={field.caption}
              isRequired={field.required}
              className={styles.label}
            />
            <div
              role="button"
              aria-label={`${field.caption} ${
                field.required ? 'asterisk' : ''
              }`}
            >
              <DynamicCalendar
                name={field.alias}
                placeholder="Pick a day"
                hideWeekend={false}
              />
            </div>
          </>
        )

      case FormCustomFields.MULTI_EMAIL:
        return (
          <>
            <p>
              If you want us to keep anyone else updated, please add their email
              addresses here (you can add up to five emails). You can add more
              than one email address at a time, separated by a comma.
            </p>
            <MultiEmailPicker
              name={field.alias}
              initialRequire={field.required}
            />
          </>
        )

      case FormCustomFields.PAST_DATE_PICKER:
        return (
          <>
            <Label
              text={field.caption}
              isRequired={field.required}
              className={styles.label}
            />
            <div
              role="button"
              aria-label={`${field.caption} ${
                field.required ? 'asterisk' : ''
              }`}
            >
              <DynamicCalendar
                beginningDate={addMonths(new Date(), -1)}
                endDate={new Date()}
                name={field.alias}
                placeholder="Pick a day"
                hideWeekend={false}
              />
            </div>
          </>
        )
      case FormCustomFields.HISTORIC_DATE_PICKER:
        return (
          <>
            <Label
              text={field.caption}
              isRequired={field.required}
              className={styles.label}
            />
            <div
              role="button"
              aria-label={`${field.caption} ${
                field.required ? 'asterisk' : ''
              }`}
            >
              <DynamicCalendar
                beginningDate={null}
                name={field.alias}
                placeholder="Pick a day"
                hideWeekend={false}
              />
            </div>
          </>
        )

      case FormCustomFields.LOCATION_FIELDS:
        return (
          <DynamicLocationFields
            name={field.alias}
            isRequired={field.required}
          />
        )

      case FormCustomFields.FORM_REPEATER:
        return (
          <>
            <FieldArray
              render={(arrayHelper) => (
                <FormRepeater
                  caption={field.caption}
                  isRequired={field.required}
                  name={field.alias}
                  arrayHelper={arrayHelper}
                  repeatedAsset={assetRepeaterItems}
                  isAssetRepeater={true}
                  maxAssets={5}
                />
              )}
              name={field.alias}
            />
          </>
        )
      case FormCustomFields.STREET_FORM_REPEATER:
        return (
          <>
            <FieldArray
              render={(arrayHelper) => (
                <FormRepeater
                  caption={field.caption}
                  isRequired={field.required}
                  name={field.alias}
                  arrayHelper={arrayHelper}
                  repeatedAsset={assetRepeaterItems}
                  isAssetRepeater={true}
                  maxAssets={30}
                />
              )}
              name={field.alias}
            />
          </>
        )
      case FormCustomFields.UNMETERED_FORM_REPEATER:
        return (
          <>
            <FieldArray
              render={(arrayHelper) => (
                <FormRepeater
                  caption={field.caption}
                  isRequired={field.required}
                  name={field.alias}
                  arrayHelper={arrayHelper}
                  repeatedAsset={assetRepeaterItems}
                  isAssetRepeater={true}
                  maxAssets={30}
                />
              )}
              name={field.alias}
            />
          </>
        )

      case FormCustomFields.REPRESENTATIVE_FORM_REPEATER:
        return (
          <>
            <FieldArray
              render={(arrayHelper) => (
                <FormRepeater
                  caption={field.caption}
                  isRequired={field.required}
                  name={field.alias}
                  arrayHelper={arrayHelper}
                  repeatedAsset={representativeFormItems}
                />
              )}
              name={field.alias}
            />
          </>
        )

      case FormCustomFields.NOT_AVAILABLE:
        return (
          <>
            <NotAvailable name={field.alias} />
          </>
        )

      default: {
        if (dictionary[camelCase(defaultVal)]) {
          return (
            <div className={styles.richText}>
              <RichText
                text={dictionary[camelCase(defaultVal)]}
                size={TextSizes.TEXT_BODY_2}
                tabIndex={0}
              />
            </div>
          )
        } else {
          return null
        }
      }
    }
  }
}

export default CustomField
