import { WhatsMyMpanType } from '_types/CMS/nodes/components/UKPN/whats-my-mpan'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { useDictionaryItems } from '_context/dictionary-items'
import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import Button from '_atoms/Button&Link/Button/Button'
import ReCaptcha from '_atoms/ReCaptcha/ReCaptcha'
import Checkbox from '_atoms/Checkbox/Checkbox'
import React, { useRef, useEffect } from 'react'
import RichText from '_atoms/RichText/RichText'
import styles from './WhatsMyMpan.module.scss'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import { scroller } from 'react-scroll'
import Label from '_atoms/Label/Label'
import { Address } from '_types/local'
import Input from '_atoms/Input/Input'
import debounce from 'lodash/debounce'
import Icon from '_atoms/Icon/Icon'
import { toString } from 'lodash'
import Image from 'next/image'
import * as Yup from 'yup'
import axios from 'axios'

import {
  ErrorMessage as ErrorMessageWrapper,
  Formik,
  Form,
  FormikValues,
  Field,
} from 'formik'
import { transformString } from '_utils/tranform-string'

export interface MpanCheck {
  isSuccessful: boolean
  hasFailed: boolean
}

const WhatsMyMpan = ({
  leftTitle,
  leftBlurb,
  successfulTitle,
  successfulBlurb,
  rightDesktopImage,
  rightMobileImage,
  checkboxText,
  errorTitle,
  errorBlurb,
  removeBottomMargin,
}: WhatsMyMpanType) => {
  const dictionary = useDictionaryItems()
  const ref = useRef<HTMLDivElement>(null)
  const [addressError, setAddressError] = React.useState<boolean>(false)
  const [mpanCheck, setMpanCheck] = React.useState<MpanCheck>({
    isSuccessful: false,
    hasFailed: false,
  })
  const mpanValues = {
    isBillPayer: false,
    recapthca: '',
    email: '',
    address: {
      supplierNumber: '',
      supplierName: '',
      mpanNumber: '',
    },
  }

  const validationMessage = transformString(dictionary.whatsMyMpan)
  const mpanSchema = Yup.object({
    email: Yup.string().email(validationMessage).required(validationMessage),
    isBillPayer: Yup.boolean().oneOf([true]).required(),
    recapthca: Yup.string(),
    address: Yup.object({
      supplierNumber: Yup.string().required(),
      supplierName: Yup.string().required(),
      mpanNumber: Yup.string().required(),
    }),
  })

  const handleAddress = (address: Address, setFieldValue: any) => {
    setFieldValue('address', {
      supplierNumber: address.supplierNumber,
      supplierName: address.supplierName,
      mpanNumber: address.mpan,
    })
  }

  const handleSubmit = (values: FormikValues) => {
    const data = {
      emailAddress: values.email,
      checkbox: toString(values.isBillPayer),
      mpan: values.address.mpanNumber,
      supplierName: values.address.supplierName,
      supplierNumber: values.address.supplierNumber,
    }

    axios
      .post('/api/mpan-checker', data)
      .then((res) =>
        setMpanCheck((prevState) => {
          return {
            ...prevState,
            isSuccessful: true,
          }
        })
      )
      .catch((err) =>
        setMpanCheck((prevState) => {
          return {
            ...prevState,
            hasFailed: true,
          }
        })
      )
  }

  // Check if the device is mobile
  const [isMobile, setIsMobile] = React.useState(false)
  useEffect(() => {
    const updateMobile = debounce(
      () => setIsMobile(window.innerWidth < 768 ? true : false),
      150
    )
    updateMobile()
    window.addEventListener('resize', updateMobile, { passive: true })
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  // Scroll to the response message
  const scrollToSection = () => {
    scroller.scrollTo(styles.response, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -350,
    })
  }

  useEffect(() => {
    if (mpanCheck?.isSuccessful && isMobile) {
      scrollToSection()
    }
  }, [mpanCheck?.isSuccessful])

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY as string}
    >
      <ComponentLayout
        containerClass={styles.WhatsMyMpan}
        innerClass={styles.inner}
        removeBottomMargin={removeBottomMargin}
      >
        <Formik
          validationSchema={mpanSchema}
          initialValues={mpanValues}
          onSubmit={handleSubmit}
        >
          {({
            setFieldValue,
            errors,
            touched,
            isValid,
            dirty,
            isSubmitting,
          }) => {
            const error = Object.keys(errors).filter((err) => err === 'email')
            const touch = Object.keys(touched).filter((tch) => tch === 'email')
            addressError ? error.push('address') : false
            return (
              <Form
                data-has-errors={error.length + touch.length}
                className={styles.form}
              >
                <Heading className={styles.whatsMyMpanTitle} level={3}>
                  {leftTitle}
                </Heading>
                <RichText
                  className={styles.whatsMyMpanSubtitle}
                  text={leftBlurb}
                />
                <AddressLookUp
                  addressNotFound={dictionary['mpanCannotFindAddress']}
                  onInvalid={(err) => setAddressError(err)}
                  placeholder="Enter a postcode here"
                  clickHandler={(address) =>
                    handleAddress(address, setFieldValue)
                  }
                  shouldShowDno={true}
                  id="WhatsMyMpan"
                  isMpan={true}
                />
                <div className={styles.emailWrapper}>
                  <div className={styles.emailAddress}>
                    <Field
                      placeholder="Email address"
                      name="email"
                      as={Input}
                      id="email"
                    />
                    <Label text="Email address" htmlFor="email" />
                  </div>
                  <ErrorMessageWrapper name="email">
                    {(msg) => <ErrorMessage errorMessage={msg} />}
                  </ErrorMessageWrapper>
                </div>
                <Field
                  defaultChecked={mpanValues.isBillPayer}
                  className={styles.mpanCheckbox}
                  text={checkboxText}
                  name="isBillPayer"
                  id="isBillPayer"
                  hasError={false}
                  as={Checkbox}
                  tabIndex={0}
                />
                <ReCaptcha
                  onResult={(result: any) =>
                    setFieldValue('recapthca', result.score, true)
                  }
                />
                <Button
                  appearance={ButtonAppearance.PRIMARY}
                  className={styles.whatsMyMpanSubmit}
                  disabled={!(isValid && dirty) || isSubmitting}
                  color={ButtonColors.DARK}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )
          }}
        </Formik>
        <div
          className={styles.background}
          data-is-successful={mpanCheck.isSuccessful}
        ></div>
        {!mpanCheck.isSuccessful && !mpanCheck.hasFailed && (
          <>
            <div className={styles.imageWrapper} data-is-desktop>
              <Image
                className={styles.imageWrapper}
                title={rightDesktopImage.name}
                objectPosition="center bottom"
                alt={rightDesktopImage.name}
                src={rightDesktopImage.url}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className={styles.imageWrapper} data-is-mobile>
              <Image
                height={rightMobileImage.umbracoHeight}
                width={rightMobileImage.umbracoWidth}
                title={rightMobileImage.name}
                className={styles.imageWrapper}
                alt={rightMobileImage.name}
                src={rightMobileImage.url}
                layout="responsive"
              />
            </div>
          </>
        )}
        {mpanCheck.isSuccessful && (
          <div
            className={styles.response}
            data-is-successful={mpanCheck.isSuccessful}
            ref={ref}
          >
            <div className={styles.bgIcon}>
              <Icon name={IconNames.ICON_EMAIL_BIG} size="full" />
            </div>
            <div className={styles.text}>
              <Icon name={IconNames.ICON_EMAIL_BIG} />
              <p className={styles.title}>{successfulTitle}</p>
              <RichText className={styles.sub} text={successfulBlurb} />
            </div>
          </div>
        )}
        {mpanCheck.hasFailed && (
          <div
            className={styles.response}
            data-is-successful={mpanCheck.isSuccessful}
            ref={ref}
          >
            <div className={styles.bgIcon}>
              <Icon name={IconNames.ICON_NOT_FOUND} size="full" />
            </div>
            <div className={styles.text}>
              <Icon name={IconNames.ICON_NOT_FOUND} />
              <p className={styles.title}>{errorTitle}</p>
              <RichText className={styles.sub} text={errorBlurb} />
            </div>
          </div>
        )}
      </ComponentLayout>
    </GoogleReCaptchaProvider>
  )
}

export default WhatsMyMpan
