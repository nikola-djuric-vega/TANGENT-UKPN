import { transformString } from '_utils/tranform-string'
import { useFormItems } from '_context/form-items'
import styles from './NotAvailable.module.scss'
import Checkbox from '_atoms/Checkbox/Checkbox'
import RichText from '_atoms/RichText/RichText'
import { Field, useField } from 'formik'
import { TextSizes } from '_types/CMS'
import React from 'react'

export interface NotAvailableDataProps {
  name: string
}

const NotAvailable = ({ name }: NotAvailableDataProps) => {
  const [field, meta, help] = useField(name)
  const { notAvailableData } = useFormItems()

  return (
    <>
      <div className={styles.accessCheckboxWrapper}>
        <Field
          as={Checkbox}
          name={name}
          value={false}
          checked={meta.value}
          id="access"
          text={<RichText text={notAvailableData?.intro as string} />}
        />
      </div>
      {meta.value && (
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
              <span className={styles.phoneNumber}>
                {transformString(notAvailableData?.telephoneNumber1)}
              </span>
              {notAvailableData?.telephoneNumber1 &&
                notAvailableData?.telephoneNumber2 && (
                  <span className={styles.separator}>or</span>
                )}
              <span className={styles.phoneNumber}>
                {transformString(notAvailableData?.telephoneNumber2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NotAvailable
