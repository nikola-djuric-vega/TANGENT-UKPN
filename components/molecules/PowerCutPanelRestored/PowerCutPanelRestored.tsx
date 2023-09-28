import PowerCutPanelStats from '_molecules/PowerCutPanelStats/PowerCutPanelStats'
import { useDictionaryItems } from '_context/dictionary-items'
import { useUkpnGlobalData } from '_context/ukpn-global-data'
import { ButtonAppearance, TextSizes } from '_types/CMS'
import styles from './PowerCutPanelRestored.module.scss'
import { usePowerCutMap } from '_context/power-cut-map'
import Button from '_atoms/Button&Link/Button/Button'
import { transformUrl } from '_utils/transform-url'
import { Incident } from '_types/local/incidents'
import { usePowerCut } from '_context/power-cut'
import RichText from '_atoms/RichText/RichText'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DateTime } from 'luxon'
import { transformString } from '_utils/tranform-string'

const PowerCutPanelRestored = ({ incident }: { incident: Incident | null }) => {
  const dictionary = useDictionaryItems()
  const globalData = useUkpnGlobalData()
  const router = useRouter()

  const powerCutLinkUrl =
    globalData?.allSiteSettings?.reportPowerCutLink?.url || '/'
  const UKPNIncident = incident?.ukpnIncident
  const customersAffectedCount = UKPNIncident?.noCustomerAffected
  const postcodeAffectedCount = UKPNIncident?.postCodesAffected.length || 0
  const restoredDateISO = UKPNIncident?.restoredDateTime
  const restoredDate =
    !!restoredDateISO &&
    DateTime.fromISO(restoredDateISO, {
      setZone: true,
    })
  const receievedDate =
    !!UKPNIncident?.receivedDate &&
    DateTime.fromISO(UKPNIncident?.receivedDate, {
      setZone: true,
    })
  const { mapState, setMapState } = usePowerCutMap()
  const { powerCutState, fetchRpcToggle } = usePowerCut()

  useEffect(() => {
    fetchRpcToggle()
  }, [mapState.activeIncident])

  const handleReportClick = () => {
    const address = localStorage.getItem('searchedAddress')

    if (address) {
      router.push(transformUrl(powerCutLinkUrl))
    } else {
      setMapState((prevState) => ({
        ...prevState,
        isAddressModalVisible: true,
      }))
    }
  }

  return (
    <div>
      <section className={styles.restoredInAreaWrapper}>
        <RichText
          text={dictionary.powerBackOnAllCustomers}
          className={styles.restoredInAreaText}
        />
        <div className={styles.restoredInAreaValue}>
          {restoredDate && restoredDate.isValid ? (
            restoredDate.toFormat('HH:mm')
          ) : (
            <RichText text={dictionary.restoredTimeUnspecified} />
          )}
        </div>
        {!powerCutState.disableRPCButton && (
          <div className={styles.reportPowerCutWrapper}>
            <RichText
              text={dictionary.restoredPowerStillOff}
              className={styles.withoutPowerText}
            />
            {/* TODO: We need a link from the CMS so a content editor can specifiy the incident URL */}
            <Button
              className={styles.reportCTA}
              appearance={ButtonAppearance.PRIMARY}
              type="button"
              onClick={handleReportClick}
            >
              {transformString(dictionary.restoredReportIt)}
            </Button>
          </div>
        )}
      </section>

      <RichText
        text={dictionary.restoredInformationAboutPowerCut}
        className={styles.infoAboutText}
      />

      <PowerCutPanelStats
        customerText={dictionary.restoredWorkCustomersAffected}
        customerValue={
          customersAffectedCount && customersAffectedCount > 5000
            ? dictionary.restoredWorkThousandsAffected
            : customersAffectedCount === 0
            ? dictionary.restoredWorkZeroAffected
            : customersAffectedCount
        }
        postcodeText={
          postcodeAffectedCount === 1
            ? dictionary.restoredWorkPostcodeAffected
            : dictionary.restoredWorkPostcodesAffected
        }
        postcodeValue={postcodeAffectedCount}
        callsText={dictionary.restoredCustomerCalls}
        callsValue={UKPNIncident?.noCallsReported}
      />

      <section className={styles.reasonWrapper}>
        <RichText
          text={dictionary.restoredReasonForThePowerCut}
          className={styles.reasonForPowerCutText}
        />
        <div className={styles.reasonForPowerCutDescription}>
          <p>{incident?.incidentCategoryCustomerFriendlyDescription}</p>
        </div>
        {receievedDate && (
          <div>
            <RichText
              text={dictionary.restoredPowerCutRestoredAt}
              className={styles.reportedAtText}
            />
            <div className={styles.reportedAtValue}>
              <strong>{receievedDate.toFormat('HH:mm')}</strong>{' '}
              <RichText
                text={dictionary.restoredOn}
                className={styles.inlineRichText}
              />{' '}
              <strong>{receievedDate.toFormat('dd MMM yyyy')}</strong>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default PowerCutPanelRestored
