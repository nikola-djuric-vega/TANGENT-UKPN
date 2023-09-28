import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import RichText from '_atoms/RichText/RichText'
import Button from '_atoms/Button&Link/Button/Button'
import Link from '_atoms/Button&Link/Link/Link'
import Icon from '_atoms/Icon/Icon'
import Label from '_atoms/Label/Label'
import Heading from '_atoms/Heading/Heading'
import Loader from '_atoms/Loader/Loader'
import LandingHeroBanner from '_organism/LandingHeroBanner/LandingHeroBanner'
import PopUp from '_hoc/PopUp/PopUp'
import { useDictionaryItems } from '_context/dictionary-items'
import { Address, IconNames } from '_types/local'
import { PowerCutRegisterTextUpdates as PowerCutRegisterTextUpdatesType } from '_types/CMS/pages'
import { PostcodeService } from '_utils/postcode-services'
import { transformString } from '_utils/tranform-string'
import { motion } from 'framer-motion'
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
import styles from './PowerCutRegisterTextUpdates.module.scss'

import {
  ComponentsTypeName,
  ButtonAppearance,
  PageTypeNames,
  ButtonColors,
  TextSizes,
  LinkAppearance,
} from '_types/CMS'

import {
  ErrorMessage as ErrorMessageWrapper,
  FormikValues,
  Formik,
  Field,
  Form,
} from 'formik'

const PowerCutRegisterTextUpdates = ({
  futureTitle,
  futureSubtitle,
  futureGdpr,
  futureTerms,
  children,
}: PowerCutRegisterTextUpdatesType) => {
  const [mobileNumberInput, setMobileNumberInput] = useState<
    string | undefined
  >('')
  const [addressError, setAddressError] = useState<boolean>(false)
  const [currentAddress, setCurrentAddress] = useState<Address>()
  const [submissionData, setSubmissionData] = useState<any>(null)
  const [isInvalid, setIsInvalid] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false)
  const popUpRef = useRef(null)

  const dictionary = useDictionaryItems()
  const validationMessage = transformString(dictionary.registerTextUpdates)
  const { query, ...router } = useRouter()

  const successPageData = children?.items?.find(
    (page) => page.__typename === PageTypeNames.CONFIRMATION_SUCCESS
  )
  const failurePageData = children?.items?.find(
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

  const handlePageChange = (address: Address) => {
    if (address) {
      setCurrentAddress(address)
      router.push({ pathname: router.asPath.split('?')[0], query: {} })
    } else return false
  }

  const handleSubmission = (values: FormikValues) => {
    const request = {
      telephoneNumber: values.mobile,
      mpan: currentAddress?.mpan,
      futureIncidentsOptIn: true,
      liveIncidentOptIn: false,
      postcode: currentAddress?.postCode,
      addressLine1: PostcodeService.formatAddressTextUpdates(
        currentAddress as Address
      ),
      incidentId: '',
    }

    axios
      .put('/api/text-updates', request)
      .then((response) => {
        if (response.status === 200 && !!successPageData) {
          setSubmissionData(successPageData)
          handlePopUp(true)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        if (!!failurePageData) {
          setSubmissionData(failurePageData)
          handlePopUp(true)
          setIsLoading(false)
        }
      })
  }

  // POP UP MODAL

  const handlePopUp = (state: boolean) => {
    document.body.style.overflow = state ? 'hidden' : 'auto'
    setPopUpOpen(state)
  }

  const modalAnim = {
    out: {
      y: '20%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    in: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
        delay: 0.25,
      },
    },
  }

  const moveSideAnim = {
    start: {
      x: '50%',
      opacity: 0,
      transition: {
        txpe: 'tween',
        duration: 0.25,
      },
    },
    middle: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
    end: {
      opacity: 0,
      x: '-50%',
      transition: {
        type: 'tween',
        duration: 0.25,
      },
    },
  }

  useEffect(() => {
    setAddressError(!!currentAddress?.postCode && false)
    setIsInvalid((!currentAddress?.postCode || !mobileNumberInput) && true)
  }, [currentAddress?.postCode, isInvalid, mobileNumberInput])

  return (
    <>
      <section className={styles.PowerCutRegisterUpdatesLanding}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.textContainer}>
              <LandingHeroBanner
                __typename={ComponentsTypeName.LANDING_HERO_BANNER}
                headering={futureTitle}
              />
            </div>
            <div className={styles.postcodeBullets}>
              {futureSubtitle && (
                <p className={styles.subHeadline}>{futureSubtitle}</p>
              )}
            </div>
          </div>
        </div>
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmission}
          initialValues={{
            mobile: '',
          }}
        >
          {({ values, errors }) => {
            setMobileNumberInput(values?.mobile)
            return (
              <Form className={styles.inner}>
                <div className={styles.fieldWrapper}>
                  <div
                    className={styles.addressLookUp}
                    data-is-error={addressError}
                  >
                    <AddressLookUpPowerCut
                      addressNotFound={
                        dictionary['addressNotFoundSpecialNumber']
                      }
                      clickHandler={(address) => handlePageChange(address)}
                      placeholder="Enter postcode"
                      isTextUpdates={true}
                      aria-required={true}
                      id="addressLookUp"
                    />
                  </div>
                  <div
                    className={styles.phoneNumber}
                    data-error={!errors.mobile}
                  >
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
                    />
                  </div>
                  <ErrorMessageWrapper name="mobile">
                    {(msg) => <ErrorMessage errorMessage={msg} />}
                  </ErrorMessageWrapper>
                  <div className={styles.submitButtonWrapper}>
                    <Button
                      appearance={ButtonAppearance.PRIMARY}
                      className={styles.submitButton}
                      color={ButtonColors.LIGHT}
                      data-is-loading={isLoading}
                      type="submit"
                      onClick={() => {
                        !!currentAddress?.postCode &&
                          !!values?.mobile &&
                          setIsLoading(true)
                        setAddressError(!currentAddress?.postCode && true)
                      }}
                      disabled={isInvalid || !isEmpty(errors)}
                    >
                      {isLoading ? (
                        <span className={styles.loaderWrapper}>
                          <Loader />
                        </span>
                      ) : (
                        transformString(dictionary.getUpdates) || 'Get updates'
                      )}
                    </Button>
                  </div>
                </div>
                <div className={styles.postcodeBullets}>
                  <ul className={styles.bulletPoints}>
                    {futureTerms?.length &&
                      futureTerms.map((point, i) => (
                        <li key={i}>
                          <Icon name={IconNames.TICK} />
                          {point}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className={styles.richTextContainer}>
                  {futureGdpr && (
                    <RichText
                      text={futureGdpr}
                      size={TextSizes.TEXT_BODY_3}
                      className={styles.richText}
                    />
                  )}
                </div>
              </Form>
            )
          }}
        </Formik>
        {!!submissionData && (
          <PopUp
            aria-label="Rota Load Disconnections PopUp"
            classModal={styles.addressPopUpModal}
            shouldShow={popUpOpen}
            animation={modalAnim}
            initial="out"
            animate="in"
            exit="out"
            focusTrap
            handleEscape={handlePopUp}
          >
            <div ref={popUpRef}>
              <div className={styles.modalControls}>
                <Button
                  appearance={ButtonAppearance.BLANK}
                  onClick={(e) => handlePopUp(false)}
                  className={styles.closeModal}
                  aria-label="close"
                  type="button"
                  tabIndex={0}
                >
                  <Icon name={IconNames.CTA_CLOSE_ONE} />
                </Button>
              </div>
              <motion.div
                className={styles.mainPopUpContainer}
                variants={moveSideAnim}
                key="main-content"
              >
                <Icon name={submissionData?.icon} baseColour />
                <Heading
                  level={4}
                  className={styles.mainPopUpHeading}
                  tabIndex={0}
                >
                  {submissionData?.title}
                </Heading>
                <RichText
                  text={submissionData?.copy as string}
                  className={styles.mainPopUpBody}
                  tabIndex={0}
                />
                {submissionData.cTA && (
                  <Link
                    appearance={LinkAppearance.SECONDARY}
                    color={ButtonColors.DARK}
                    target={submissionData.cTA?.target}
                    url={submissionData.cTA?.url}
                  >
                    {submissionData.cTA?.name}
                  </Link>
                )}
              </motion.div>
            </div>
          </PopUp>
        )}
      </section>
    </>
  )
}

export default PowerCutRegisterTextUpdates
