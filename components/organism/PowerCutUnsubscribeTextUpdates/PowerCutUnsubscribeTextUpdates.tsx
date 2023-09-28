import { PowerCutUnsubscribeTextUpdates as PowerCutUnsubscribeTextUpdatesType } from '_types/CMS/pages'
import PowerCutCurvedBanner from '_molecules/PowerCutCurvedBanner/PowerCutCurvedBanner'
import styles from './PowerCutUnsubscribeTextUpdates.module.scss'
import { useDictionaryItems } from '_context/dictionary-items'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import { transformString } from '_utils/tranform-string'
import Button from '_atoms/Button&Link/Button/Button'
import RichText from '_atoms/RichText/RichText'
import { useRouter } from 'next/router'
import Label from '_atoms/Label/Label'
import * as Yup from 'yup'
import axios from 'axios'

import {
  ComponentsTypeName,
  ButtonAppearance,
  ButtonColors,
  TextSizes,
  PageTypeNames,
} from '_types/CMS'

import {
  Formik,
  Form,
  ErrorMessage as ErrorMessageWrapper,
  Field,
  FormikValues,
} from 'formik'
import { transformUrl } from '_utils/transform-url'

const PowerCutUnsubscribeTextUpdates = ({
  unsubscribeForTextUpdatesTitle,
  unsubscribeForTextUpdatesIcon,
  unsubscribeForTextUpdatesGdpr,
  unsubscribeForTextUpdatesBackButton,
  children,
}: PowerCutUnsubscribeTextUpdatesType) => {
  const dictionary = useDictionaryItems()
  const validationMessage = transformString(dictionary.unsubscribeTextUpdates)
  const { query, ...router } = useRouter()
  const SuccessPage = children?.items?.find(
    (page) => page.__typename === PageTypeNames.CONFIRMATION_SUCCESS
  )
  const FailurePage = children?.items?.find(
    (page) => page.__typename === PageTypeNames.CONFIRMATION_FAILURE
  )

  const validationSchema = Yup.object({
    mobile: Yup.string()
      .matches(
        /^((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}$/,
        validationMessage
      )
      .required(validationMessage),
  })

  const handleSubmission = (values: FormikValues) => {
    const request = {
      telephoneNumber: values.mobile,
    }

    axios
      .post('/api/text-updates', request)
      .then((response) => {
        if (
          response.status === 200 &&
          response.data.result === 0 &&
          !!SuccessPage
        ) {
          router.push(transformUrl(SuccessPage.url))
        } else {
          if (!!FailurePage) {
            router.push(transformUrl(FailurePage.url))
          }
        }
      })
      .catch((err) => {
        if (!!FailurePage) {
          router.push(transformUrl(FailurePage.url))
        }
      })
  }

  return (
    <section className={styles.PowerCutTextUpdatesForm}>
      <PowerCutCurvedBanner
        __typename={ComponentsTypeName.POWER_CUT_CURVED_BANNER}
        icon={unsubscribeForTextUpdatesIcon}
        title={unsubscribeForTextUpdatesTitle}
        backButton={unsubscribeForTextUpdatesBackButton}
      />
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmission}
        initialValues={{
          mobile: '',
        }}
      >
        {({ values, errors, isSubmitting }) => {
          return (
            <Form className={styles.inner}>
              <div className={styles.fieldWrapper}>
                {unsubscribeForTextUpdatesGdpr && (
                  <div className={styles.richTextContainer}>
                    <RichText
                      text={unsubscribeForTextUpdatesGdpr}
                      size={TextSizes.TEXT_BODY_3}
                      className={styles.richText}
                    />
                  </div>
                )}
                <div className={styles.phoneNumber} data-error={!errors.mobile}>
                  <Label
                    className={styles.phoneNumberLabel}
                    data-is-empty={!values.mobile}
                    text={
                      transformString(dictionary.mobilePhoneNumber) ||
                      'Mobile phone number'
                    }
                    isRequired={true}
                    htmlFor="Mobile"
                  />
                  <Field
                    className={styles.phoneNumberInput}
                    aria-required={true}
                    name="mobile"
                    type="phone"
                    id="mobile"
                    maxLength="11"
                  />
                </div>
                <ErrorMessageWrapper name="mobile">
                  {(msg) => <ErrorMessage errorMessage={msg} />}
                </ErrorMessageWrapper>
              </div>
              <div className={styles.richTextContainer}>
                <p className={styles.requiredFields}>
                  <span>*</span> Indicates required fields
                </p>
                <Button
                  appearance={ButtonAppearance.PRIMARY}
                  className={styles.submitButton}
                  color={ButtonColors.LIGHT}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {transformString(dictionary.unsubscribeButton) ||
                    'Unsubscribe'}
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}

export default PowerCutUnsubscribeTextUpdates
