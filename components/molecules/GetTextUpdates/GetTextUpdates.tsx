import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import { handleTextUpdates } from '_utils/handle-text-updates'
import { useDictionaryItems } from '_context/dictionary-items'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './GetTextUpdates.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import Checkbox from '_atoms/Checkbox/Checkbox'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import Loader from '_atoms/Loader/Loader'
import { IconNames } from '_types/local'
import { transformString } from '_utils'
import Input from '_atoms/Input/Input'
import Icon from '_atoms/Icon/Icon'
import { useState } from 'react'
import * as Yup from 'yup'

import {
  ErrorMessage as ErrorMessageWrapper,
  FormikValues,
  Formik,
  Field,
  Form,
} from 'formik'
export interface GetTextUpdatesProps {
  isPromoted?: boolean
  incidentId?: string
  title?: string
  intro?: string
}
export interface SubscribeState {
  subscribed: boolean
  isLoading: boolean
  initial: boolean
  icon: IconNames
  title: string
  body: string
}

const GetTextUpdates = ({ isPromoted, incidentId }: GetTextUpdatesProps) => {
  const initialAddress = localStorage.getItem('searchedAddress')
  const dictionary = useDictionaryItems()
  const validationMessagePhone = transformString(
    dictionary.panelTextUpdatesPhone
  )

  const [{ initial, isLoading, title, icon, body }, setSubscribeState] =
    useState<SubscribeState>({
      title: dictionary.successGetTextUpdatesTitle,
      body: dictionary.successGetTextUpdatesBody,
      icon: IconNames.ICON_TICK_CIRCLE,
      subscribed: false,
      isLoading: false,
      initial: true,
    })

  const validationSchema = Yup.object({
    signUpForFutureUpdates: Yup.boolean(),
    telephoneNumber: Yup.string()
      .matches(
        /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/,
        validationMessagePhone
      )
      .required(validationMessagePhone),
  })

  const handleSubmission = async (values: FormikValues) => {
    setSubscribeState((prevState) => ({
      ...prevState,
      initial: false,
      isLoading: true,
    }))

    await handleTextUpdates(values, true, incidentId)
      .then((response) => {
        setSubscribeState((prevState) => ({
          ...prevState,
          subscribed: response.data.success,
          isLoading: false,
        }))
      })
      .catch(() => {
        setSubscribeState((prevState) => ({
          ...prevState,
          title: dictionary.failureGetTextUpdatesTitle,
          body: dictionary.failureGetTextUpdatesBody,
          icon: IconNames.WARNING_ICON,
          subscribed: false,
          isLoading: false,
        }))
      })
  }

  return (
    <div data-is-promoted={isPromoted} className={styles.getTextUpdates}>
      {!!initial && !isLoading && (
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmission}
          initialValues={{
            signUpForFutureUpdates: false,
            address: initialAddress || '',
            telephoneNumber: '',
          }}
        >
          {({ isValid, dirty, errors }) => {
            return (
              <>
                {!!isPromoted && (
                  <Icon
                    name={IconNames.TEXT_UPDATES}
                    className={styles.icon}
                    baseColour
                  />
                )}
                {!!dictionary.textUpdatesPanelTitle && (
                  <Heading level={6} className={styles.title}>
                    {transformString(dictionary.textUpdatesPanelTitle)}
                  </Heading>
                )}
                {!!dictionary.textUpdatesPanelIntro && (
                  <RichText
                    text={dictionary.textUpdatesPanelIntro}
                    className={styles.intro}
                  />
                )}
                <Form className={styles.form}>
                  {!!initialAddress && (
                    <div className={styles.checkbox}>
                      <Field
                        text="I would also like text messages about future power cuts that may affect my address"
                        name="signUpForFutureUpdates"
                        id="signUpForFutureUpdates"
                        as={Checkbox}
                      />
                    </div>
                  )}
                  <div
                    data-has-error={!!errors.telephoneNumber}
                    className={styles.input}
                  >
                    <Field
                      placeholder="Mobile number"
                      name="telephoneNumber"
                      id="telephoneNumber"
                      aria-required={true}
                      maxLength={11}
                      as={Input}
                    />
                    <Button
                      appearance={ButtonAppearance.PRIMARY}
                      color={ButtonColors.DARK}
                      disabled={!isValid || !dirty}
                      type="submit"
                    >
                      Get text updates
                    </Button>
                  </div>
                  <Link
                    appearance={LinkAppearance.TERTIARY}
                    className={styles.privacy}
                    color={ButtonColors.DARK}
                    url={''}
                  >
                    Data & privacy policy
                  </Link>
                  <ErrorMessageWrapper name="telephoneNumber">
                    {(msg) => (
                      <p
                        className={styles.errorMessage}
                        aria-label="Form field error"
                      >
                        {msg}
                      </p>
                    )}
                  </ErrorMessageWrapper>
                </Form>
              </>
            )
          }}
        </Formik>
      )}
      {!initial && !!isLoading && (
        <div className={styles.loader}>
          <Loader role="progressbar" />
        </div>
      )}
      {!initial && !isLoading && (
        <div className={styles.results}>
          <Icon name={icon} className={styles.resultIcon} baseColour />
          <Heading level={6} className={styles.resultTitle}>
            {transformString(title)}
          </Heading>
          {!!body && <RichText className={styles.resultBody} text={body} />}
        </div>
      )}
    </div>
  )
}

export default GetTextUpdates
