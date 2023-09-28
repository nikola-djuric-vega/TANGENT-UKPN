import { ButtonAppearance, ComponentsTypeName, LinkType } from '_types/CMS'
import ScrollToFormError from '_hoc/ScrollToFormError/ScrollToFormError'
import HelpAndAdvice from '_organism/HelpAndAdvice/HelpAndAdvice'
import AddressLookUpPowerCut from '_atoms/AddressLookUpPowerCut/AddressLookUpPowerCut'
import { useDictionaryItems } from '_context/dictionary-items'
import { handleTextUpdates } from '_utils/handle-text-updates'
import SocialLinks from '_molecules/SocialLinks/SocialLinks'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import styles from './PowerCutPanelThankYou.module.scss'
import { transformString } from '_utils/tranform-string'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { PowerCutPanelItem } from '_types/CMS/pages'
import { FormikValues, Formik, Form } from 'formik'
import { Address, IconNames } from '_types/local'
import RichText from '_atoms/RichText/RichText'
import Loader from '_atoms/Loader/Loader'
import Icon from '_atoms/Icon/Icon'
import { useRef, useState } from 'react'
import router from 'next/router'
import * as Yup from 'yup'

export interface PowerCutPanelThankYouProps {
  panelData?: PowerCutPanelItem
  isCurrent: boolean
  activeBy: boolean
}

const PowerCutPanelThankYou = ({
  isCurrent,
  panelData,
  activeBy,
}: PowerCutPanelThankYouProps) => {
  const initialAddress = localStorage.getItem('searchedAddress')
  const { mapState, setMapState } = usePowerCutMap()
  const [isLoading, setIsLoading] = useState(false)
  const dictionary = useDictionaryItems()
  const scrollRef = useRef<HTMLButtonElement>(null)

  const incident = mapState.overlayIncident || mapState.activeIncident
  let dictionaryReferences = {
    thankYouTitle: isCurrent
      ? dictionary.textUpdatesThankYouTitle
      : dictionary.futureTextUpdatesThankYouTitle,
    thankYouSubTitle: isCurrent
      ? dictionary.textUpdatesThankYouSubTitle
      : dictionary.futureTextUpdatesThankYouSubtitle,
  }

  const handleClose = () => {
    setMapState((prevState) => ({
      ...prevState,
      ...(isCurrent
        ? {
            isCurrentThankYouPanelOpen: false,
          }
        : {
            isFutureThankYouPanelOpen: false,
          }),
    }))
  }

  const validationMessageAddress = transformString(
    dictionary.panelTextUpdatesAddress
  )

  const validationSchema = Yup.object({
    address: Yup.string().required(validationMessageAddress),
  })

  const handleSubmission = (values: FormikValues) => {
    if (isLoading) return

    setIsLoading(true)
    values.telephoneNumber = mapState.telephone

    handleTextUpdates(values, true, incident?.incidentReference)
      .then((response) => {
        setIsLoading(false)

        if (!response.data.success) {
          router.push('/power-cut/text-updates/submission-failure')
        } else {
          setMapState((prevState) => ({
            ...prevState,
            isCurrentThankYouPanelOpen: false,
            isFutureThankYouPanelOpen: true,
            isTextUpdatesPanelOpen: false,
            telephone: '',
          }))
        }
      })
      .catch(() => {
        router.push('/power-cut/text-updates/submission-failure')
      })
  }

  return (
    <div className={styles.panel} data-active={activeBy}>
      <Button
        data-top
        appearance={ButtonAppearance.BLANK}
        className={styles.closeButton}
        onClick={handleClose}
        ref={scrollRef}
      >
        <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
      </Button>
      <div className={styles.thanksWrapper}>
        <div className={styles.iconWrapper}>
          <Icon name={IconNames.FORTY_PX_SUCCESS} baseColour size="md" />
        </div>
        <div>
          <RichText
            text={dictionaryReferences.thankYouTitle}
            className={styles.thanksTitle}
          />
          <RichText
            text={dictionaryReferences.thankYouSubTitle}
            className={styles.thanksSubTitle}
            data-is-current={isCurrent}
          />
          {isCurrent && (
            <Formik
              validationSchema={validationSchema}
              onSubmit={handleSubmission}
              initialValues={{
                address: initialAddress || '',
              }}
            >
              {({ errors, setFieldValue }) => {
                return (
                  <Form>
                    <AddressLookUpPowerCut
                      clearHandler={() => setFieldValue('address', '')}
                      clickHandler={(adrs: Address) =>
                        setFieldValue('address', JSON.stringify(adrs))
                      }
                      addressNotFound={dictionary.addressNotFound}
                      placeholder="Please provide a postcode"
                      {...(!initialAddress && {
                        loadOnMount: mapState.postcode,
                      })}
                      defaultValue={
                        initialAddress && JSON.parse(initialAddress)
                      }
                      isPanelTextUpdates={true}
                      aria-required={true}
                      name="address"
                      id="address"
                      scrollRef={scrollRef}
                    />
                    {!!errors.address && (
                      <ErrorMessage errorMessage={validationMessageAddress} />
                    )}
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
                        transformString(dictionary.futureUpdatesButton)
                      )}
                    </Button>
                    <RichText
                      text={dictionary.futureUpdatesGdpr}
                      className={styles.futureUpdatesGdpr}
                    />
                    <ScrollToFormError />
                  </Form>
                )
              }}
            </Formik>
          )}
        </div>
      </div>
      <div className={styles.componentsWrapper}>
        <SocialLinks
          __typename={ComponentsTypeName.SOCIAL_LINKS}
          title={transformString(dictionary.unplannedThankYouSocialTitle)}
        />

        {!!panelData && 'articles' in panelData && (
          <div className={styles.componentsWrapper}>
            <HelpAndAdvice
              isPanel
              __typename={ComponentsTypeName.HELP_AND_ADVICE}
              helpAndAdviceItems={panelData.articles}
              helpAndAdviceTitle={panelData.thankYouTitle}
              viewMore={{
                url: '/power-cut/help-and-advice',
                name: 'View more',
                type: LinkType.CONTENT,
              }}
              removeBottomMargin
            />
          </div>
        )}
      </div>
      <Button
        data-bottom
        appearance={ButtonAppearance.BLANK}
        className={styles.closeButton}
        onClick={handleClose}
      >
        <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
      </Button>
    </div>
  )
}

export default PowerCutPanelThankYou
