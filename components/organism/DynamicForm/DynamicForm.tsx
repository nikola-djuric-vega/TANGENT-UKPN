import { useRepresentativeFormItems } from '_context/representative-form-item'
import SmartMeterOverlay from '_molecules/SmartMeterOverlay/SmartMeterOverlay'
import { useAssetRepeaterItems } from '_context/asset-repeater-items'
import { useCustomFieldsItems } from '_context/custom-fields-items'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { useDictionaryItems } from '_context/dictionary-items'
import { useState, useRef, useEffect, useMemo } from 'react'
import { transformString } from '_utils/tranform-string'
import { FormItemsProvider } from '_context/form-items'
import Button from '_atoms/Button&Link/Button/Button'
import FormError from '_atoms/ErrorMessage/FormError'
import { Form, Formik, FormikErrors } from 'formik'
import FormikControls from '_lib/formik-controls'
import styles from './DynamicForms.module.scss'
import FormPage from '../FormPage/FormPage'
import Loader from '_atoms/Loader/Loader'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

import {
  SmartMeterOverlayType,
  TimeSlots,
  FormState,
  FormType,
  RpcState,
} from '_types/CMS/form'

import {
  ButtonAppearance,
  NotAvailableData,
  Form as TypeForm,
  PageTypeNames,
  ButtonColors,
} from '_types/CMS'

export interface DynamicFormProps extends TypeForm {
  smartMeterData?: SmartMeterOverlayType
  notAvailableData?: NotAvailableData
  appointmentTimes?: TimeSlots
  smartPingEnabled?: boolean
  includeReference: boolean
  mandatorySection?: string
  thankYouPageUrl: string
  address?: string | null
  isSmartMeter?: boolean
  isDS1?: boolean
  type: string
}

const DynamicForm = ({
  _id,
  name,
  type,
  pages,
  address,
  nextLabel,
  submitLabel,
  previousLabel,
  smartMeterData,
  thankYouPageUrl,
  includeReference,
  mandatorySection,
  notAvailableData,
  appointmentTimes,
  smartPingEnabled = false,
  isSmartMeter = false,
  isDS1 = false,
}: DynamicFormProps) => {
  const smartMeterCorID = uuidv4()
  const [formState, setFormState] = useState<FormState>({
    completedPages: [],
    activePage: 0,
    pages: pages,
  })

  const [rpcState, setRpcState] = useState<RpcState>({
    correlationID: smartMeterCorID,
    blockSubmission: false,
    pingedOccured: false,
    shouldRetry: false,
    pingAttempts: 0,
    isDS1: isDS1,
    smartMeter: {
      CorrelationID: smartMeterCorID,
      IsSmart: isSmartMeter,
      OnSupply: false,
      SmartPingEnabled: smartPingEnabled,
      PingAllowed: false,
      Status: '',
    },
  })
  const { blockSubmission, smartMeter } = rpcState
  const { activePage, completedPages } = formState
  const { fieldsets, caption } = pages[activePage]
  const isLastStep = activePage === pages.length - 1
  const form = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const dictionary = useDictionaryItems()
  const assetRepeaterItems = useAssetRepeaterItems()
  const representativeFormItems = useRepresentativeFormItems()
  const customFields = useCustomFieldsItems()
  const initialValues = useMemo(
    () =>
      FormikControls.getInitialValues(pages, mandatorySection, customFields),
    []
  )

  const formItemsContext = {
    ...(type === PageTypeNames.POWER_CUT_FORM_PAGE && {
      timeSlots: appointmentTimes,
    }),
    notAvailableData,
    isSmart: isSmartMeter,
    completedPages: completedPages,
    activePage: activePage,
    pages: pages,
  }

  useEffect(() => {
    window.document.getElementById('form-title')?.focus()
  }, [activePage])

  const handlePreviousButton = (
    setErrors: (errors: FormikErrors<{}>) => void
  ) => {
    setErrors({})
    setFormState((prevState) => {
      return { ...prevState, activePage: prevState.activePage - 1 }
    })
    if (null !== form.current) {
      form.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const afterSubmit = () => {
    router.push(thankYouPageUrl)
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY as string}
    >
      <FormItemsProvider items={formItemsContext}>
        {!!blockSubmission && smartMeterData ? (
          <SmartMeterOverlay {...smartMeterData} />
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) =>
              FormikControls.handleSubmit({
                repeaterForms: {
                  assetRepeaterItems: assetRepeaterItems,
                  representativeFormItems: representativeFormItems,
                },
                customElements: customFields,
                callBack: afterSubmit,
                includeReference,
                formName: name,
                setFormState,
                setRpcState,
                smartMeter,
                formState,
                rpcState,
                actions,
                address,
                values,
                form,
                type,
                _id,
              })
            }
            validationSchema={FormikControls.setValidationSchema(
              pages[activePage],
              mandatorySection,
              [assetRepeaterItems, representativeFormItems],
              customFields
            )}
          >
            {({ setErrors, isSubmitting, submitCount, isValid }) => {
              return (
                <Form id={_id} ref={form} className={styles.wrapper}>
                  {isSubmitting && (
                    <div className={styles.formLoader}>
                      <Loader />
                    </div>
                  )}
                  <FormPage
                    fieldsets={fieldsets}
                    caption={caption}
                    mandatorySection={mandatorySection}
                  />
                  <div className={styles.formControls}>
                    {submitCount > 0 && !isValid && (
                      <FormError
                        errorMessage={transformString(
                          dictionary.formHasErrorsContent
                        )}
                      />
                    )}
                    <div className={styles.formButtons}>
                      {activePage > 0 && (
                        <Button
                          onClick={() => handlePreviousButton(setErrors)}
                          appearance={ButtonAppearance.FORM_BACK}
                          color={ButtonColors.LIGHT}
                          type="button"
                        >
                          {FormikControls.getBackLabel(
                            fieldsets,
                            previousLabel
                          ) || previousLabel}
                        </Button>
                      )}
                      <Button
                        appearance={ButtonAppearance.PRIMARY}
                        color={ButtonColors.LIGHT}
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {FormikControls.getProceedingLabel(
                          fieldsets,
                          isLastStep,
                          nextLabel,
                          submitLabel
                        ) || nextLabel}
                      </Button>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
        )}
      </FormItemsProvider>
    </GoogleReCaptchaProvider>
  )
}

export default DynamicForm
