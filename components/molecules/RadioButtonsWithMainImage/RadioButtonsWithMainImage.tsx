import { RadioButtonsWithMainImage as RadioButtonsWithMainImageType } from '_types/CMS/pages'
import styles from './RadioButtonsWithMainImage.module.scss'
import RadioButton from '_atoms/RadioButton/RadioButton'
import camelCase from 'lodash/camelCase'
import Label from '_atoms/Label/Label'
import { useField } from 'formik'
import Image from 'next/image'

export interface RadioButtonsWithMainImageProps
  extends RadioButtonsWithMainImageType {
  mandatory: boolean
}

const RadioButtonsWithMainImage = ({
  radioButtonWithImageMainImage,
  radioButtonWithImageOptions,
  radioButtonWithImageText,
  mandatory,
}: RadioButtonsWithMainImageProps) => {
  const id = camelCase(radioButtonWithImageText)
  const [field, meta, { setValue }] = useField(id)
  const hasError = !!meta.error && meta.touched

  return (
    <div className={styles.radioButtonsWithImages}>
      <Label
        className={styles.radioButtonsLabel}
        text={radioButtonWithImageText}
        isRequired={mandatory}
        htmlFor={id}
      />
      {!!radioButtonWithImageMainImage && (
        <div className={styles.imageWrapper}>
          <Image
            height={radioButtonWithImageMainImage.umbracoHeight}
            width={radioButtonWithImageMainImage.umbracoWidth}
            title={radioButtonWithImageMainImage.name}
            alt={radioButtonWithImageMainImage.name}
            src={radioButtonWithImageMainImage.url}
            layout="responsive"
          />
        </div>
      )}
      {!!radioButtonWithImageOptions.length && (
        <div className={styles.buttonsGrid}>
          {radioButtonWithImageOptions.map((opt, i) => {
            const questioId = camelCase(opt)
            const checked = field.value === opt

            return (
              <RadioButton
                setOption={() => setValue(opt)}
                hasError={hasError}
                checked={checked}
                id={questioId}
                value={opt}
                name={id}
                key={i}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default RadioButtonsWithMainImage
