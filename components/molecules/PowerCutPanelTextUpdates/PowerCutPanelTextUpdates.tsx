import ScrollToFormError from '_hoc/ScrollToFormError/ScrollToFormError'
import { useDictionaryItems } from '_context/dictionary-items'
import { handleTextUpdates } from '_utils/handle-text-updates'
import styles from './PowerCutPanelTextUpdates.module.scss'
import { transformString } from '_utils/tranform-string'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import isPlainObject from 'lodash/isPlainObject'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import Loader from '_atoms/Loader/Loader'
import { useRouter } from 'next/router'
import Label from '_atoms/Label/Label'
import Input from '_atoms/Input/Input'
import Icon from '_atoms/Icon/Icon'
import { isValid } from 'postcode'
import { useState } from 'react'
import * as Yup from 'yup'

import {
  ErrorMessage as ErrorMessageWrapper,
  FormikValues,
  Formik,
  Field,
  Form,
} from 'formik'
import { IconNames } from '_types/local'

const PowerCutPanelTextUpdates = () => {
  const { mapState, setMapState } = usePowerCutMap()
  const [isLoading, setIsLoading] = useState(false)
  const dictionary = useDictionaryItems()
  const router = useRouter()

  const validationMessagePhone = transformString(
    dictionary.panelTextUpdatesPhone
  )
  const validationMessagePostcode = transformString(
    dictionary.panelTextUpdatesPostcode
  )

  const validationSchema = Yup.object({
    telephoneNumber: Yup.string()
      .matches(
        /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/,
        validationMessagePhone
      )
      .required(validationMessagePhone),
    postcode: Yup.string()
      .test('isValid', validationMessagePostcode, (val) => isValid(val || ''))
      .required(validationMessagePostcode),
  })

  const incident = mapState.overlayIncident || mapState.activeIncident

  const initialAddressString = localStorage.getItem('searchedAddress')
  const initialAddress =
    initialAddressString && JSON.parse(initialAddressString)

  const handleSubmission = (values: FormikValues) => {
    if (isLoading) return

    setIsLoading(true)

    handleTextUpdates(values, false, incident?.incidentReference)
      .then((response) => {
        setIsLoading(false)

        if (!response.data.success) {
          router.push('/power-cut/text-updates/submission-failure')
        } else {
          setMapState((prevState) => ({
            ...prevState,
            isCurrentThankYouPanelOpen: true,
            telephone: values.telephoneNumber,
            postcode: values.postcode,
            isTextUpdatesPanelOpen: false,
          }))
        }
      })
      .catch(() => {
        router.push('/power-cut/text-updates/submission-failure')
      })
  }

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmission}
      initialValues={{
        postcode:
          (initialAddress &&
            isPlainObject(initialAddress) &&
            initialAddress.postCode) ||
          '',
        telephoneNumber: '',
      }}
    >
      {({ values }) => {
        return (
          <div
            data-active={mapState.isTextUpdatesPanelOpen}
            className={styles.textUpdatePanel}
          >
            <Button
              data-top
              appearance={ButtonAppearance.BLANK}
              className={styles.closeButton}
              onClick={() =>
                setMapState((prevState) => ({
                  ...prevState,
                  isTextUpdatesPanelOpen: false,
                }))
              }
            >
              <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
            </Button>

            <div className={styles.introWrapper}>
              <div className={styles.iconWrapper}>
                <Icon name={IconNames.TEXT_UPDATES} baseColour size="md" />
              </div>
              <RichText
                text={dictionary.textUpdatesPanelTitle}
                className={styles.title}
              />
              <RichText
                text={dictionary.textUpdatesPanelIntro}
                className={styles.introText}
              />
            </div>

            <Form>
              <div className={styles.formWrapper}>
                <div>
                  <div className={styles.fieldWrapperAnimate}>
                    <Field
                      as={Input}
                      maxLength={11}
                      aria-required={true}
                      name="telephoneNumber"
                      id="telephoneNumber"
                    />
                    <Label
                      className={styles.phoneNumberLabel}
                      data-is-empty={!values.telephoneNumber}
                      text={
                        transformString(dictionary.mobilePhoneNumber) ||
                        'Mobile phone number'
                      }
                      isRequired={true}
                      htmlFor="telephoneNumber"
                    />
                  </div>
                  <ErrorMessageWrapper name="telephoneNumber">
                    {(msg) => <ErrorMessage errorMessage={msg} />}
                  </ErrorMessageWrapper>
                  <div className={styles.fieldWrapperAnimate}>
                    <Field
                      as={Input}
                      maxLength={11}
                      aria-required={true}
                      name="postcode"
                      id="postcode"
                      value={values.postcode}
                    />
                    <Label
                      className={styles.postcodeLabel}
                      data-is-empty={!values.postcode}
                      text={
                        transformString(dictionary.postcodeFieldLabel) ||
                        'Postcode'
                      }
                      isRequired={true}
                      htmlFor="postcode"
                    />
                  </div>
                  <ErrorMessageWrapper name="postcode">
                    {(msg) => <ErrorMessage errorMessage={msg} />}
                  </ErrorMessageWrapper>
                </div>

                <div className={styles.termsList}>
                  <RichText text={dictionary.textUpdatesPanelTerms} />
                </div>
              </div>

              <div className={styles.gdprWrapper}>
                <RichText
                  text={dictionary.textUpdatesPanelGdpr}
                  className={styles.gdprText}
                />

                <div>
                  <Button
                    appearance={ButtonAppearance.PRIMARY}
                    className={styles.getUpdatesBtn}
                    data-is-loading={isLoading}
                    type="submit"
                  >
                    {isLoading ? (
                      <span className={styles.loaderWrapper}>
                        <Loader />
                      </span>
                    ) : (
                      transformString(dictionary.getUpdates)
                    )}
                  </Button>
                </div>
              </div>
              <ScrollToFormError />
            </Form>

            <Button
              data-bottom
              appearance={ButtonAppearance.BLANK}
              className={styles.closeButton}
              onClick={() =>
                setMapState((prevState) => ({
                  ...prevState,
                  isTextUpdatesPanelOpen: false,
                }))
              }
            >
              <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
            </Button>
          </div>
        )
      }}
    </Formik>
  )
}

export default PowerCutPanelTextUpdates
