import AddressField from '_atoms/AddressField/AddressField'
import { FormFieldBase, LinkAppearance } from '_types/CMS'
import { PostcodeService, transformString } from '_utils'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './AddressCard.module.scss'
import Label from '_atoms/Label/Label'
import { useField } from 'formik'
import { useEffect } from 'react'

export interface AddressCardType extends FormFieldBase {
  address: string | null
  linkText: string
}

const AddressCard = ({
  required,
  linkText,
  address,
  caption,
  alias,
}: AddressCardType) => {
  const [value, meta, helper] = useField(alias)
  const [isManualValue, isManualMeta, isManualHelper] = useField(
    `${alias}.manuallyEnteredAddress`
  )

  useEffect(() => {
    if (!!address) {
      const addressObject = JSON.parse(address)
      helper.setValue(
        PostcodeService.setFormAddress(addressObject, isManualMeta.value)
      )
    } else {
      isManualHelper.setValue(true)
    }
  }, [])

  return !!address ? (
    <div className={styles.addressCard}>
      <Label
        className={styles.addressCardLabel}
        htmlFor={alias}
        text={caption}
      />
      <p id={alias} className={styles.address}>
        {PostcodeService.formatAddress(JSON.parse(address))}
      </p>
      <Link appearance={LinkAppearance.BLANK} url="/power-cut">
        {transformString(linkText)}
      </Link>
    </div>
  ) : (
    <AddressField name={alias} required={required} />
  )
}

export default AddressCard
