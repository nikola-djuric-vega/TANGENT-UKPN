import FormConditionalWrapper from '_hoc/FormConditionalWrapper/FormConditionalWrapper'
import FormFieldset from '_molecules/FormFieldset/FormFieldset'
import FormStepper from '_molecules/FormStepper/FormStepper'
import { FormikValues, useFormikContext } from 'formik'
import { FormPage as FormPageType } from '_types/CMS'
import { useFormItems } from '_context/form-items'
import styles from './FormPage.module.scss'
import { useEffect } from 'react'

export interface FormPageProps extends FormPageType {
  mandatorySection?: string
}

const FormPage = ({ caption, fieldsets, mandatorySection }: FormPageProps) => {
  const { values, submitCount, isValid } = useFormikContext()
  const { pages, activePage, completedPages } = useFormItems()

  useEffect(() => {
    const allErrorMessages = document.querySelectorAll(
      "[aria-label^='Form field error']"
    )

    if (allErrorMessages.length) {
      allErrorMessages[0]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }
  }, [submitCount, isValid])

  return (
    <>
      {pages.length > 1 && (
        <FormStepper
          pages={pages}
          activePage={activePage}
          completedPages={completedPages}
        />
      )}
      <div className={styles.formPage}>
        <h2 className={styles.title} tabIndex={0} id="form-title">
          {caption}
        </h2>
        <div>
          {fieldsets?.map?.((fieldset, index) => (
            <FormConditionalWrapper
              condition={fieldset.condition}
              key={index}
              values={values as FormikValues}
            >
              <div className={styles.fieldsetItem}>
                <section className={styles.fieldsetItemInner}>
                  <FormFieldset
                    fieldset={fieldset}
                    mandatorySection={mandatorySection}
                  />
                </section>
              </div>
            </FormConditionalWrapper>
          ))}
        </div>
      </div>
    </>
  )
}

export default FormPage
