import { RadioButtonsWithImages as RadioButtonsWithImagesType } from '_types/CMS/pages'
import styles from './RadioButtonsWithImages.module.scss'
import camelCase from 'lodash/camelCase'
import Label from '_atoms/Label/Label'
import Icon from '_atoms/Icon/Icon'
import { useField } from 'formik'
import Image from 'next/image'
export interface RadioButtonsWithImagesProps
  extends RadioButtonsWithImagesType {
  mandatory: boolean
}

const RadioButtonsWithImages = ({
  radioButtonQuestion,
  mandatory,
  buttons,
}: RadioButtonsWithImagesProps) => {
  const id = camelCase(radioButtonQuestion)
  const [field, meta, { setValue }] = useField(id)
  const hasError = !!meta.error && meta.touched
  return (
    <div className={styles.radioButtonsWithImages}>
      <Label
        className={styles.radioButtonsLabel}
        text={radioButtonQuestion}
        isRequired={mandatory}
        htmlFor={id}
      />
      <div className={styles.buttonsGrid}>
        {buttons?.map((btn, i) => {
          const isChecked = field.value === btn.radioButtonText
          const radioId = camelCase(btn.radioButtonText)
          return (
            <label
              className={styles.radioButtons}
              data-check={isChecked}
              data-error={hasError}
              htmlFor={radioId}
              key={i}
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                className={styles.hiddenInput}
                value={btn.radioButtonText}
                defaultChecked={isChecked}
                id={radioId}
                type="radio"
                name={id}
              />

              {!!btn.radioButtonImage && !btn.radioButtonIcon && (
                <div className={styles.radioImage}>
                  <Image
                    title={btn.radioButtonImage.name}
                    alt={btn.radioButtonImage.name}
                    src={btn.radioButtonImage.url}
                    layout="fill"
                  />
                </div>
              )}

              {!!btn.radioButtonIcon && !btn.radioButtonImage && (
                <Icon name={btn.radioButtonIcon} />
              )}
              <p className={styles.radioText}>{btn.radioButtonText}</p>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default RadioButtonsWithImages
