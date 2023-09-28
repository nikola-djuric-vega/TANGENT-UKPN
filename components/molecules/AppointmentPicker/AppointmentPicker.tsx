import { Field, useField, ErrorMessage as ErrorMessageWrapper } from 'formik'
import { useDictionaryItems } from '_context/dictionary-items'
import RadioButton from '_atoms/RadioButton/RadioButton'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import styles from './AppointmentPicker.module.scss'
import { useFormItems } from '_context/form-items'
import Checkbox from '_atoms/Checkbox/Checkbox'
import RichText from '_atoms/RichText/RichText'
import Link from '_atoms/Button&Link/Link/Link'
import { LinkAppearance } from '_types/CMS'
import Select from '_atoms/Select/Select'
import Label from '_atoms/Label/Label'
import { TextSizes } from '_types/CMS'
import { Option } from '_types/local'
import React, { useMemo } from 'react'

export interface AppointmentPickerProps {
  errorMessage: string
  isRequired: boolean
  caption: string
  name: string
}

export interface timePickerState {
  from: Option[]
  until: Option[]
}

const AppointmentPicker = ({
  errorMessage,
  isRequired,
  caption,
  name,
}: AppointmentPickerProps) => {
  const { timeSlots } = useFormItems()
  const dictionary = useDictionaryItems()
  const [field, meta, helper] = useField(name)
  const [fieldDay, metaDay, helperDay] = useField(`${name}.day`)
  const [fieldTimeFrom, metaTimeFrom, helperTimeFrom] = useField(
    `${name}.timeFrom`
  )
  const [fieldTimeUntil, metaTimeUntil, helperTimeUntil] = useField(
    `${name}.timeUntil`
  )

  const { notAvailableData } = useFormItems()
  const { day, noAccess } = meta.value
  let time
  if (timeSlots) {
    time = day === 'Tomorrow' ? timeSlots?.Tomorrow : timeSlots?.Today
  }

  const isTimeDifferenceInvalid = metaTimeFrom.error && metaTimeUntil.error

  return (
    <>
      <div className={styles.timePeriodMessage}>
        <RichText
          text={dictionary.timePeriodText}
          size={TextSizes.TEXT_BODY_2}
          tabIndex={0}
        />
      </div>
      <div className={styles.dayLabelWrapper}>
        <Label
          isRequired={isRequired}
          htmlFor={`${name}.day`}
          text={caption}
          tabIndex={0}
        />
      </div>
      <div className={styles.radioButtonsContainer}>
        <Field
          as={RadioButton}
          value="Today"
          name={`${name}.day`}
          id={`${name}_day_today`}
          checked={day === 'Today'}
          setOption={(value: any) => helperDay.setValue(value)}
        />
        <Field
          as={RadioButton}
          value="Tomorrow"
          name={`${name}.day`}
          id={`${name}_day_tomorrow`}
          checked={day === 'Tomorrow'}
          setOption={(value: any) => helperDay.setValue(value)}
        />
      </div>
      <ErrorMessageWrapper name={`${name}.day`}>
        {(msg) => <ErrorMessage errorMessage={errorMessage} />}
      </ErrorMessageWrapper>
      <div className={styles.noteMessage}>
        <RichText
          text={dictionary.noteMessage}
          size={TextSizes.TEXT_BODY_2}
          tabIndex={0}
        />
      </div>
      <div className={styles.accessCheckboxWrapper}>
        <Field
          as={Checkbox}
          name={`${name}.noAccess`}
          value={false}
          checked={noAccess}
          id="access"
          text="I cannot provide any time for engineers to access my property"
        />
      </div>
      {noAccess && (
        <div className={styles.notAvailable}>
          <div className={styles.notAvailableTitle}>
            {notAvailableData?.title}
          </div>
          <div className={styles.notAvailableMessage}>
            <RichText
              text={notAvailableData?.text as string}
              size={TextSizes.TEXT_BODY_3}
              tabIndex={0}
            />
            <div className={styles.notAvailableContactDetails}>
              {notAvailableData?.telephoneNumber1 &&
                notAvailableData?.telephoneNumber2 && (
                  <>
                    <Link
                      url={'tel:' + notAvailableData?.telephoneNumber1}
                      appearance={LinkAppearance.BLANK}
                      className={styles.phoneNumber}
                    >
                      {notAvailableData?.telephoneNumber1}
                    </Link>
                    <p className={styles.separator}>or</p>
                    <Link
                      url={'tel:' + notAvailableData?.telephoneNumber2}
                      appearance={LinkAppearance.BLANK}
                      className={styles.phoneNumber}
                    >
                      {notAvailableData?.telephoneNumber2}
                    </Link>
                  </>
                )}
            </div>
          </div>
        </div>
      )}
      {!noAccess && day && time && (
        <>
          <div className={styles.separator}></div>
          <div className={styles.timeSelectMessage}>
            <RichText
              text={dictionary.timeSelectMessage}
              size={TextSizes.TEXT_BODY_2}
              tabIndex={0}
            />
          </div>
          <div className={styles.timeSelectContainer}>
            <div className={styles.timeSelectorItem}>
              <Label text="Time from" isRequired />
              <Select options={time.from} name={`${name}.timeFrom`} />
            </div>
            <div className={styles.timeSelectorItem}>
              <Label text="Time until" isRequired />
              <Select options={time.until} name={`${name}.timeUntil`} />
            </div>
          </div>
          {isTimeDifferenceInvalid && (
            <ErrorMessage
              errorMessage={
                'Please select a valid time frame. We need a minimum of four hours that you will be available in case we need to access your property.'
              }
            />
          )}
        </>
      )}
    </>
  )
}

export default AppointmentPicker
